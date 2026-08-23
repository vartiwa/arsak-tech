import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const Counter = ({ to, suffix = "", prefix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const duration = 1200;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {Number(val.toFixed(decimals)).toLocaleString()}
      {suffix}
    </span>
  );
};
