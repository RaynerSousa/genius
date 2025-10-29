import React, { useEffect, useRef, useState } from 'react';

export interface NumberTickerProps {
  value: number;
  decimalPlaces?: number;
  duration?: number; // animation duration in ms
  className?: string;
}

// Named export so you can import with: import { NumberTicker } from '@/components/ui/counter';
export const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  decimalPlaces = 0,
  duration = 1000,
  className,
}) => {
  const [display, setDisplay] = useState<number>(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef<number>(0);

  useEffect(() => {
    // cancel any existing animation
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = null;
    fromRef.current = display; // start from current displayed value

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const current = fromRef.current + (value - fromRef.current) * progress;
      setDisplay(Number(current.toFixed(decimalPlaces)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, decimalPlaces, duration]);

  // Format the number with thousands separators
  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });

  return (
    <span className={className} aria-live="polite">
      {formatted}
    </span>
  );
};

export default NumberTicker;
