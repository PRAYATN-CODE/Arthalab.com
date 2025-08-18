"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BitcoinBotsLogo({botCount = 4}:  any) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Match Tailwind's md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Number of bots orbiting

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 bg-arthalab-bitcoin/10 dark:bg-arthalab-bitcoin/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Animated orbit paths */}

      {!isMobile && [1, 2, 3].map((i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute rounded-full border border-arthalab-bitcoin/20 dark:border-arthalab-bitcoin/30"
          style={{
            width: `${100 + i * 40}%`,
            height: `${100 + i * 40}%`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Main coin */}
      <motion.div
        className="w-40 h-40 border-8 border-arthalab-bitcoin rounded-full flex items-center justify-center relative overflow-hidden z-10"
        animate={{
          boxShadow: [
            "0 0 15px 2px rgba(247, 147, 26, 0.4)",
            "0 0 25px 5px rgba(247, 147, 26, 0.6)",
            "0 0 15px 2px rgba(247, 147, 26, 0.4)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-arthalab-bitcoin/20 to-arthalab-bitcoin/5 dark:from-arthalab-bitcoin/30 dark:to-arthalab-bitcoin/10" />

        {/* Bitcoin symbol */}
        <motion.div
          className="text-arthalab-bitcoin text-5xl font-bold z-10"
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              "0 0 8px rgba(247, 147, 26, 0.5)",
              "0 0 16px rgba(247, 147, 26, 0.7)",
              "0 0 8px rgba(247, 147, 26, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          ₿
        </motion.div>
      </motion.div>

      {/* Orbiting Bots */}
      {!isMobile &&  Array.from({ length: botCount }).map((_, index) => {
        // Calculate orbit properties
        const orbitRadius = 120 + index * 15
        const orbitDuration = 15 + index * 3
        const startAngle = (index * (360 / botCount)) % 360
        const delay = index * 0.5
        const botSize = 24 + Math.random() * 8

        return (
          <motion.div
            key={`bot-${index}`}
            className="absolute"
            style={{
              width: botSize,
              height: botSize,
              originX: `calc(50% - ${orbitRadius}px)`,
              originY: "50%",
              left: "50%",
              top: "50%",
            }}
            initial={{ rotate: startAngle }}
            animate={{ rotate: [startAngle, startAngle + 360] }}
            transition={{
              duration: orbitDuration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay,
            }}
          >
            <motion.div
              className="absolute"
              style={{
                left: orbitRadius,
                top: 0,
                marginLeft: -botSize / 2,
                marginTop: -botSize / 2,
              }}
              animate={{
                scale: [1, 1.1, 1],
                filter: [
                  "drop-shadow(0 0 3px rgba(247, 147, 26, 0.3))",
                  "drop-shadow(0 0 6px rgba(247, 147, 26, 0.6))",
                  "drop-shadow(0 0 3px rgba(247, 147, 26, 0.3))",
                ],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              {/* Bot SVG */}
              <svg
                width={botSize}
                height={botSize}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-arthalab-bitcoin"
              >
                {/* Bot Head */}
                <motion.rect
                  x="5"
                  y="4"
                  width="14"
                  height="12"
                  rx="2"
                  fill="currentColor"
                  animate={{
                    fill: ["#F7931A", "#FFA940", "#F7931A"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />

                {/* Bot Eyes */}
                <motion.circle
                  cx="9"
                  cy="9"
                  r="1.5"
                  fill="white"
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random(),
                  }}
                />
                <motion.circle
                  cx="15"
                  cy="9"
                  r="1.5"
                  fill="white"
                  animate={{
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random(),
                  }}
                />

                {/* Bot Mouth */}
                <motion.rect
                  x="9"
                  y="12"
                  width="6"
                  height="1"
                  rx="0.5"
                  fill="white"
                  animate={{
                    width: [6, 4, 6],
                    x: [9, 10, 9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random(),
                  }}
                />

                {/* Bot Antenna */}
                <motion.line
                  x1="12"
                  y1="4"
                  x2="12"
                  y2="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  animate={{
                    y2: [2, 1, 2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx="12"
                  cy="1"
                  r="1"
                  fill="currentColor"
                  animate={{
                    r: [1, 1.3, 1],
                    fill: ["#F7931A", "#FFA940", "#F7931A"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Bot Body */}
                <motion.rect
                  x="8"
                  y="16"
                  width="8"
                  height="4"
                  rx="1"
                  fill="currentColor"
                  animate={{
                    fill: ["#F7931A", "#FFA940", "#F7931A"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />

                {/* Bot Legs */}
                <motion.rect
                  x="9"
                  y="20"
                  width="2"
                  height="3"
                  rx="1"
                  fill="currentColor"
                  animate={{
                    height: [3, 2, 3],
                    y: [20, 21, 20],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />
                <motion.rect
                  x="13"
                  y="20"
                  width="2"
                  height="3"
                  rx="1"
                  fill="currentColor"
                  animate={{
                    height: [3, 2, 3],
                    y: [20, 21, 20],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0,
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Floating particles */}
      {!isMobile && [...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-arthalab-bitcoin/60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30],
            y: [0, Math.random() * 60 - 30],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Binary code particles */}
      {!isMobile && [...Array(8)].map((_, i) => {
        const binary = Math.random() > 0.5 ? "1" : "0"
        return (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-arthalab-bitcoin/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
              opacity: [0, 0.9, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3 + 1,
            }}
          >
            {binary}
          </motion.div>
        )
      })}
    </div>
  )
}

