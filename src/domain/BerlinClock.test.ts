import { describe, expect, it } from 'vitest'
import { toBerlinClockState, toBerlinClockString } from './BerlinClock'
import { parseTime } from './Time'

describe('BerlinClock', () => {
  it('returns all lamps off at midnight except seconds on even second', () => {
    expect(toBerlinClockString(parseTime('00:00:00'))).toBe(
      'Y OOOO OOOO OOOOOOOOOOO OOOO',
    )
  })

  it('turns seconds lamp off on odd seconds', () => {
    expect(toBerlinClockString(parseTime('00:00:01'))).toBe(
      'O OOOO OOOO OOOOOOOOOOO OOOO',
    )
  })

  it('converts 13:17:01', () => {
    expect(toBerlinClockString(parseTime('13:17:01'))).toBe(
      'O RROO RRRO YYROOOOOOOO YYOO',
    )
  })

  it('converts 23:59:59', () => {
    expect(toBerlinClockString(parseTime('23:59:59'))).toBe(
      'O RRRR RRRO YYRYYRYYRYY YYYY',
    )
  })

  it('treats 24:00:00 as midnight', () => {
    expect(toBerlinClockString(parseTime('24:00:00'))).toBe(
      'Y OOOO OOOO OOOOOOOOOOO OOOO',
    )
  })

  it('marks every third five-minute lamp as red when lit', () => {
    const state = toBerlinClockState(parseTime('00:15:00'))
    expect(state.fiveMinutes).toEqual([
      'Y',
      'Y',
      'R',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
      'O',
    ])
  })
})
