export type LampColor = 'Y' | 'R' | 'O';

export type LitLampColor = Extract<LampColor, 'R' | 'Y'>;

export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface BerlinClockState {
  seconds: LampColor;
  fiveHours: LampColor[];
  oneHours: LampColor[];
  fiveMinutes: LampColor[];
  oneMinutes: LampColor[];
}

export const LAMP_COUNTS = {
  fiveHours: 4,
  oneHours: 4,
  fiveMinutes: 11,
  oneMinutes: 4,
} as const;
