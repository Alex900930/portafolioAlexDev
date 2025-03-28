"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export default function AnimatedCounter({ value, duration = 1000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    const endValue = value

    const updateCounter = () => {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const nextCount = Math.floor(endValue * progress)

        if (nextCount !== countRef.current) {
          countRef.current = nextCount
          setCount(nextCount)
        }

        timerRef.current = setTimeout(updateCounter, 16)
      } else {
        setCount(endValue)
      }
    }

    updateCounter()

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [value, duration])

  return <>{count}</>
}

