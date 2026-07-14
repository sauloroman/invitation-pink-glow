import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export interface ParticleRainProps {
  isActive?: boolean;
  colors?: string[];
  particleCount?: number;
  intervalMs?: number;
  gravity?: number;
  drift?: number;
  scalar?: number;
  shapes?: ('square' | 'circle')[];
  angle?: number;
  spread?: number;
  startVelocity?: number;
  fullScreen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ParticleRain: React.FC<ParticleRainProps> = ({
  isActive = true,
  colors = ['#ff69b4', '#ffb6c1', '#ffffff', '#ffd700'],
  particleCount = 1,
  intervalMs = 200,
  gravity = 0.6,
  drift = 0,
  scalar = 0.8,
  shapes = ['square', 'circle'],
  angle = 90,
  spread = 30,
  startVelocity = 0,
  fullScreen = false,
  className = '',
  style = {},
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiInstanceRef = useRef<any>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const colorsKey = colors.join(',');
  const shapesKey = shapes.join(',');

  useEffect(() => {
    if (!isActive) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    const fireConfetti = () => {
      if (!confettiInstanceRef.current) {
        if (fullScreen) {
          confettiInstanceRef.current = confetti;
        } else if (canvasRef.current) {
          confettiInstanceRef.current = confetti.create(canvasRef.current, {
            resize: true,
            useWorker: false,
          });
        }
      }

      const currentConfetti = confettiInstanceRef.current;
      if (!currentConfetti) return;

      for (let i = 0; i < particleCount; i++) {
        currentConfetti({
          particleCount: 1,
          startVelocity,
          angle,
          spread,
          gravity,
          drift: (Math.random() - 0.5) * 0.1 + drift,
          scalar: (Math.random() * 0.3 + 0.7) * scalar,
          shapes,
          colors,
          origin: {
            x: Math.random(),
            y: 0,
          },
        });
      }
    };

    fireConfetti();
    intervalRef.current = setInterval(fireConfetti, intervalMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (confettiInstanceRef.current && !fullScreen) {
        confettiInstanceRef.current.reset();
        confettiInstanceRef.current = null;
      }
    };
  }, [
    isActive,
    colorsKey,
    particleCount,
    intervalMs,
    gravity,
    drift,
    scalar,
    shapesKey,
    angle,
    spread,
    startVelocity,
    fullScreen
  ]);

  if (fullScreen) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`particle-rain-canvas ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        touchAction: 'none',
        ...style,
      }}
    />
  );
};
