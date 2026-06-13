import type { LampColor } from '../domain/types.ts';
import { Lamp, type LampPosition, type LampVariant } from './Lamp';

interface LampRowProps {
  lamps: LampColor[];
  label: string;
  variant: LampVariant;
}

function getPosition(index: number, total: number): LampPosition {
  if (total === 1) return 'single';
  if (index === 0) return 'first';
  if (index === total - 1) return 'last';
  return 'middle';
}

export function LampRow({ lamps, label, variant }: LampRowProps) {
  return (
    <div className={`lamp-row lamp-row--${variant}`} aria-label={label}>
      {lamps.map((color, index) => (
        <Lamp
          key={index}
          color={color}
          variant={variant}
          position={getPosition(index, lamps.length)}
        />
      ))}
    </div>
  );
}
