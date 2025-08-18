"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Cloud, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [isHovered, setIsHovered] = useState(false)

  // Initialize theme on component mount
  useEffect(() => {
    // Check for system preference or stored preference
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkMode = document.documentElement.classList.contains("dark")

    // Priority: 1. Current DOM state, 2. localStorage, 3. System preference
    const initialTheme = isDarkMode ? "dark" : storedTheme || (systemPrefersDark ? "dark" : "light")
    setTheme(initialTheme)

    if (initialTheme === "dark" && !isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Listen for DOM changes (MutationObserver)
  useEffect(() => {
    // Create a MutationObserver to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDarkMode = document.documentElement.classList.contains("dark")
          setTheme(isDarkMode ? "dark" : "light")
        }
      })
    })

    // Start observing
    observer.observe(document.documentElement, { attributes: true })

    // Clean up observer on component unmount
    return () => observer.disconnect()
  }, [])

  // Listen for custom theme change events
  useEffect(() => {
    const handleThemeChangeEvent = (e: CustomEvent<{ isDark: boolean }>) => {
      setTheme(e.detail.isDark ? "dark" : "light")
    }

    document.addEventListener("themeChange", handleThemeChangeEvent as EventListener)

    return () => {
      document.removeEventListener("themeChange", handleThemeChangeEvent as EventListener)
    }
  }, [])

  // Listen for localStorage changes (for cross-tab synchronization)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme") {
        const newTheme = e.newValue as "light" | "dark" | null
        if (newTheme) {
          setTheme(newTheme)

          if (newTheme === "dark") {
            document.documentElement.classList.add("dark")
          } else {
            document.documentElement.classList.remove("dark")
          }
        }
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = () => {
      // Only apply system preference if no theme is saved in localStorage
      if (!localStorage.getItem("theme")) {
        const newTheme = mediaQuery.matches ? "dark" : "light"
        setTheme(newTheme)

        if (newTheme === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Dispatch custom event for other components to listen to
    const themeChangeEvent = new CustomEvent("themeChange", {
      detail: { isDark: newTheme === "dark" },
    })
    document.dispatchEvent(themeChangeEvent)
  }

  // useEffect(() => {
  //   console.log(theme, localStorage.getItem('theme'))
  // }, [localStorage.getItem('theme')])

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative rounded-full w-10 h-10 flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.9 }}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, hsl(217.2, 91.2%, 59.8%) 0%, hsl(222.2, 84%, 4.9%) 70%)"
              : "radial-gradient(circle, hsl(47, 100%, 70%) 0%, hsl(210, 40%, 98%) 70%)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Clouds for light mode */}
      <AnimatePresence>
        {theme === "light" && (
          <>
            {[...Array(3)].map((_, i) => {
              const scale = 0.6 + i * 0.2
              const xPos = [-15, 0, 15][i]
              const yPos = [-8, 0, -5][i]

              return (
                <motion.div
                  key={`cloud-${i}`}
                  className="absolute"
                  style={{
                    x: xPos,
                    y: yPos,
                    scale,
                    opacity: 0.8 - i * 0.2,
                  }}
                  initial={{ opacity: 0, x: xPos - 20 }}
                  animate={{
                    opacity: isHovered ? 0.8 - i * 0.2 : 0.5 - i * 0.1,
                    x: isHovered ? xPos : xPos - 5,
                  }}
                  exit={{ opacity: 0, x: xPos - 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Cloud className="text-white/80 h-5 w-5" />
                </motion.div>
              )
            })}
          </>
        )}
      </AnimatePresence>

      {/* Stars for dark mode */}
      <AnimatePresence>
        {theme === "dark" && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.5, 1],
                  scale: [0, 1, 0.8, 1],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Moon icon (shown in light mode) */}
      <motion.div
        className="relative z-10"
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : 180,
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.19, 1.0, 0.22, 1.0],
        }}
      >
        <Moon className="h-6 w-6 text-slate-700" />
      </motion.div>

      {/* Sun icon (shown in dark mode) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : -180,
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.19, 1.0, 0.22, 1.0],
        }}
      >
        <Sun className="h-6 w-6 text-yellow-400" />
      </motion.div>
    </motion.button>
  )
}

