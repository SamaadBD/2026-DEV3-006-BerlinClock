import { toBerlinClockState } from '../domain/BerlinClock.ts';
import { formatHoursMinutes, formatTime } from '../domain/Time.ts';
import type { Time } from '../domain/types.ts';
import { Lamp } from './Lamp.tsx';
import { LampRow } from './LampRow.tsx';

interface BerlinClockViewProps {
  time: Time;
}

export function BerlinClockView({ time }: BerlinClockViewProps) {
  const state = toBerlinClockState(time);

  return (
    <section
      className='berlin-clock'
      aria-label={`Berlin clock showing ${formatTime(time)}`}
    >
      <div className='lamp-row lamp-row--seconds' aria-label='Seconds'>
        <Lamp color={state.seconds} variant='seconds' position='single' />
      </div>

      <LampRow lamps={state.fiveHours} label='Five hours' variant='wide' />
      <LampRow lamps={state.oneHours} label='One hour' variant='wide' />
      <LampRow
        lamps={state.fiveMinutes}
        label='Five minutes'
        variant='narrow'
      />
      <LampRow lamps={state.oneMinutes} label='One minute' variant='wide' />

      <p className='digital-time' aria-live='polite'>
        {formatHoursMinutes(time)}
      </p>
    </section>
  );
}
