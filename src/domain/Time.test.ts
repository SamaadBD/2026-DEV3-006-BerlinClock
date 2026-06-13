import { describe, expect, it } from 'vitest';
import { formatHoursMinutes, formatTime, fromDate, parseTime } from './Time.ts';

describe('Time', () => {
  it('parses a valid time string', () => {
    expect(parseTime('13:17:01')).toEqual({
      hours: 13,
      minutes: 17,
      seconds: 1,
    });
  });

  it('rejects invalid format', () => {
    expect(() => parseTime('13:17')).toThrow(/Invalid time format/);
  });

  it('rejects invalid minutes', () => {
    expect(() => parseTime('10:60:00')).toThrow(/Invalid minutes/);
  });

  it('rejects invalid seconds', () => {
    expect(() => parseTime('10:00:60')).toThrow(/Invalid seconds/);
  });

  it('accepts midnight as 24:00:00', () => {
    expect(parseTime('24:00:00')).toEqual({
      hours: 24,
      minutes: 0,
      seconds: 0,
    });
  });

  it('rejects 24:00:01', () => {
    expect(() => parseTime('24:00:01')).toThrow(/only valid time with hour 24/);
  });

  it('formats time with leading zeros', () => {
    expect(formatTime({ hours: 5, minutes: 7, seconds: 9 })).toBe('05:07:09');
  });

  it('formats hours and minutes for display', () => {
    expect(formatHoursMinutes({ hours: 18, minutes: 35, seconds: 0 })).toBe(
      '18:35',
    );
    expect(formatHoursMinutes({ hours: 24, minutes: 0, seconds: 0 })).toBe(
      '00:00',
    );
  });

  it('creates time from a date', () => {
    const date = new Date(2026, 0, 1, 9, 30, 45);
    expect(fromDate(date)).toEqual({
      hours: 9,
      minutes: 30,
      seconds: 45,
    });
  });
});
