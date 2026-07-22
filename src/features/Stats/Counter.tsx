"use client";

import CountUp from "react-countup";

interface CounterProps {
  value: number;
  suffix?: string;
}

export default function Counter({
  value,
  suffix = "",
}: CounterProps) {
  return (
    <CountUp
      end={value}
      duration={2.5}
      separator=","
      suffix={suffix}
    />
  );
}