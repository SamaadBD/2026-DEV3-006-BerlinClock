import { describe, expect, it } from 'vitest'
import { buildFiveMinuteRow, buildLampRow } from './LampRow.ts'

describe('LampRow', () => {
  it('builds a row of lit red lamps followed by off lamps', () => {
    expect(buildLampRow(2, 4, 'R')).toEqual(['R', 'R', 'O', 'O'])
  })

  it('marks every third five-minute lamp as red when lit', () => {
    expect(buildFiveMinuteRow(3)).toEqual(['Y', 'Y', 'R', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'])
  })
})