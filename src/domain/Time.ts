import type { Time } from './types.ts'

const TIME_PATTERN = /^(\d{2}):(\d{2}):(\d{2})$/

export function parseTime(value: string): Time {
  const match = TIME_PATTERN.exec(value)
  if (!match) {
    throw new Error(`Invalid time format: ${value}. Expected HH:MM:SS`)
  }

  const time: Time = {
    hours: toTimePart(match[1], 'hours'),
    minutes: toTimePart(match[2], 'minutes'),
    seconds: toTimePart(match[3], 'seconds'),
  }

  validateTime(time)
  return time
}

export function formatTime(time: Time): string {
  const hours = String(time.hours).padStart(2, '0')
  const minutes = String(time.minutes).padStart(2, '0')
  const seconds = String(time.seconds).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

export function formatHoursMinutes(time: Time): string {
  const hours = time.hours === 24 ? 0 : time.hours
  return `${String(hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`
}

export function fromDate(date: Date): Time {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  }
}

function toTimePart(value: string, part: 'hours' | 'minutes' | 'seconds'): number {
  const number = Number(value)
  if (Number.isNaN(number)) {
    throw new Error(`Invalid ${part}: ${value}`)
  }
  return number
}

function validateTime(time: Time): void {
  if (time.minutes < 0 || time.minutes > 59) {
    throw new Error(`Invalid minutes: ${time.minutes}`)
  }

  if (time.seconds < 0 || time.seconds > 59) {
    throw new Error(`Invalid seconds: ${time.seconds}`)
  }

  if (time.hours === 24) {
    if (time.minutes !== 0 || time.seconds !== 0) {
      throw new Error('24:00:00 is the only valid time with hour 24')
    }
    return
  }

  if (time.hours < 0 || time.hours > 23) {
    throw new Error(`Invalid hours: ${time.hours}`)
  }
}
