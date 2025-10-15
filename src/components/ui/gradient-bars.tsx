'use client';

import { motion } from 'motion/react';
import { useMemo } from 'react';

interface GradientBarsProps {
  bars?: number;
  colors?: string[];
}

export const GradientBars = ({
  bars = 20,
  colors = ['#0000ff', 'transparent'],
}: GradientBarsProps) => {
  // Memoriza o estilo do gradiente para evitar recomputações
  const gradientStyle = useMemo(() => `linear-gradient(to top, ${colors.join(', ')})`, [colors]);

  // Cria o array de barras uma única vez
  const barsArray = useMemo(() => Array.from({ length: bars }), [bars]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="flex h-full w-full">
        {barsArray.map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <motion.div
              key={`bg-bar-${index}`}
              className="flex-1 origin-bottom"
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};