import { buildFiveMinuteRow, buildLampRow, lampRowToString } from './LampRow'
import { LAMP_COUNTS, type BerlinClockState, type Time } from './types'

function normalizeHours(hours: number): number {
  return hours === 24 ? 0 : hours
}

function secondsLamp(seconds: number): BerlinClockState['seconds'] {
  return seconds % 2 === 0 ? 'Y' : 'O'
}

export function toBerlinClockState(time: Time): BerlinClockState {
  const hours = normalizeHours(time.hours)
  const fiveHourLamps = Math.floor(hours / 5)
  const oneHourLamps = hours % 5
  const fiveMinuteLamps = Math.floor(time.minutes / 5)
  const oneMinuteLamps = time.minutes % 5

  return {
    seconds: secondsLamp(time.seconds),
    fiveHours: buildLampRow(fiveHourLamps, LAMP_COUNTS.fiveHours, 'R'),
    oneHours: buildLampRow(oneHourLamps, LAMP_COUNTS.oneHours, 'R'),
    fiveMinutes: buildFiveMinuteRow(fiveMinuteLamps),
    oneMinutes: buildLampRow(oneMinuteLamps, LAMP_COUNTS.oneMinutes, 'Y'),
  }
}

export function toBerlinClockString(time: Time): string {
  const state = toBerlinClockState(time)

  return [
    state.seconds,
    lampRowToString(state.fiveHours),
    lampRowToString(state.oneHours),
    lampRowToString(state.fiveMinutes),
    lampRowToString(state.oneMinutes),
  ].join(' ')
}
