"use client"

import { useEffect, useState } from "react"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  animationDuration: number
  animationDelay: number
}

const BackgroundDots = () => {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    // Generate dots with random properties
    const generateDots = () => {
      const newDots: Dot[] = []
      const dotCount = window.innerWidth < 768 ? 30 : 60

      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 0.5 + 0.5, // Size between 0.5 and 1
          opacity: Math.random() * 0.3 + 0.1, // Opacity between 0.1 and 0.4
          animationDuration: Math.random() * 8 + 4, // Duration between 4 and 12 seconds
          animationDelay: Math.random() * 5, // Delay between 0 and 5 seconds
        })
      }

      setDots(newDots)
    }

    generateDots()

    // Regenerate dots on window resize
    const handleResize = () => {
      generateDots()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-background dark:bg-dark-background z-0" />

      {/* Dots */}
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full crypto-dot"
          style={{
            top: `${dot.y}%`,
            left: `${dot.x}%`,
            width: `${dot.size}rem`,
            height: `${dot.size}rem`,
            opacity: dot.opacity,
            animation: `crypto-twinkle ${dot.animationDuration}s infinite ${dot.animationDelay}s`,
          }}
        />
      ))}

      {/* CSS for animations */}
      <style>{`
        .crypto-dot {
          background: radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%);
          box-shadow: 0 0 10px 2px hsla(var(--primary), 0.3);
        }
        
        @keyframes crypto-twinkle {
          0%, 100% {
            opacity: ${dots[0]?.opacity || 0.2};
            transform: scale(1);
          }
          50% {
            opacity: ${(dots[0]?.opacity || 0.2) * 1.5};
            transform: scale(1.2);
          }
        }
        
        :global(.dark) .crypto-dot {
          background: radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%);
          box-shadow: 0 0 15px 3px hsla(var(--primary), 0.4);
        }
      `}</style>

      {/* Larger floating orbs for added depth */}
      <div className="absolute w-40 h-40 rounded-full bg-primary/5 blur-3xl top-1/4 left-1/4 animate-float" />
      <div
        className="absolute w-60 h-60 rounded-full bg-secondary/5 blur-3xl bottom-1/4 right-1/4 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute w-32 h-32 rounded-full bg-accent/5 blur-3xl top-3/4 left-1/3 animate-float"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}

export default BackgroundDots

