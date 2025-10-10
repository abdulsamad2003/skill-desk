"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  decimals?: number;
  extraClass?: string;
}

const Counter = ({ end, decimals, extraClass }: CounterProps) => {
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView && !hasStarted) {
    setHasStarted(true);
  }

  return (
    <span ref={ref} className={`${extraClass || ""}`} data-from="0" data-to={end}>
      {hasStarted ? (
        <CountUp
          start={0}
          end={end || 100}
          duration={3}
          decimals={decimals || 0}
        />
      ) : (
        0
      )}
    </span>
  );
};

export default Counter;
