'use client';

// Componente de contador animado para estadísticas
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function AnimatedCounter({
  end = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const safeEnd = end ?? 0;
    const safeDuration = duration ?? 2000;
    const startTime = Date.now();
    const startValue = countRef?.current ?? 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / safeDuration, 1);
      
      // Easing function para animación suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (safeEnd - startValue) * easeOutQuart);
      
      setCount(currentValue);
      countRef.current = currentValue;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  // Formatear número con separadores de miles
  const formattedCount = (count ?? 0).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix ?? ''}{formattedCount}{suffix ?? ''}
    </span>
  );
}
