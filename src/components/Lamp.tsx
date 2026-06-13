import type { LampColor } from '../domain/types.ts';

export type LampVariant = 'seconds' | 'wide' | 'narrow';
export type LampPosition = 'first' | 'middle' | 'last' | 'single';

const LAMP_COLOR_CLASS: Record<LampColor, string> = {
  Y: 'y',
  R: 'r',
  O: 'o',
};

interface LampProps {
  color: LampColor;
  variant: LampVariant;
  position: LampPosition;
}

export function Lamp({ color, variant, position }: LampProps) {
  return (
    <span
      className={`lamp lamp--${LAMP_COLOR_CLASS[color]} lamp-${variant} lamp--${position}`}
      aria-hidden='true'
    />
  );
}
