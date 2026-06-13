import { useEffect, useState } from 'react'
import { fromDate } from '../domain/Time.ts'
import type { Time } from '../domain/types.ts'

export function useCurrentTime(): Time {
  const [time, setTime] = useState<Time>(() => fromDate(new Date()))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(fromDate(new Date()))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return time
}