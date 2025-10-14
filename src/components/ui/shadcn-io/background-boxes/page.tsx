'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Boxes = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        'absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0',
        className
      )}
      {...props}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col-${j}`}
              className="w-16 h-8 border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (i + j) * 0.1,
                  }}
                  className="absolute inset-0 bg-blue-500 rounded-full"
                />
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Boxes;