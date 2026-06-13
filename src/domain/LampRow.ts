import { LAMP_COUNTS, type LampColor, type LitLampColor } from './types.ts'

export function buildLampRow(
  litCount: number,
  totalLamps: number,
  onColor: LitLampColor,
): LampColor[] {
  return Array.from({ length: totalLamps }, (_, index) =>
    index < litCount ? onColor : 'O',
  )
}

export function buildFiveMinuteRow(litCount: number): LampColor[] {
  return Array.from({ length: LAMP_COUNTS.fiveMinutes }, (_, index) => {
    if (index >= litCount) {
      return 'O'
    }

    const lampNumber = index + 1
    return lampNumber % 3 === 0 ? 'R' : 'Y'
  })
}

export function lampRowToString(lamps: LampColor[]): string {
  return lamps.join('')
}
