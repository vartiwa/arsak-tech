import React, { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const opacityRef = useRef(0);
  const targetOpacity = useRef(0);
  const isTouch = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      isTouch.current = true;
      return;
    }

    const onPointerMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      targetOpacity.current = 1;
    };

    const onPointerLeave = () => {
      targetOpacity.current = 0;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    let animId;
    const render = () => {
      animId = requestAnimationFrame(render);

      if (!glowRef.current) return;

      // Smooth, responsive lerp movement
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.16;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.16;
      opacityRef.current += (targetOpacity.current - opacityRef.current) * 0.12;

      const x = currentPos.current.x.toFixed(1);
      const y = currentPos.current.y.toFixed(1);
      const opacity = opacityRef.current.toFixed(2);

      glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      glowRef.current.style.opacity = opacity;
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden select-none transition-opacity duration-300"
    >
      {/* Compact Normal Cursor Spotlight (260px) */}
      <div
        ref={glowRef}
        className="absolute -top-[130px] -left-[130px] w-[260px] h-[260px] rounded-full will-change-transform opacity-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.09) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 75%)",
        }}
      />
    </div>
  );
};
