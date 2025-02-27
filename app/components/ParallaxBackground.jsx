"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { throttle } from "lodash";

export default function ParallaxBackground() {
  const scrollRef = useRef(0); // No type annotation
  const bgRef = useRef(null); // No type annotation

  // Throttle the scroll event handler to improve performance
  const handleScroll = throttle(() => {
    if (typeof window !== "undefined" && bgRef.current) {
      scrollRef.current = window.pageYOffset;
      bgRef.current.style.transform = `scale(${1 + scrollRef.current * 0.0005})`;
    }
  }, 100);

  // Add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Box
      ref={bgRef}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        transition: "transform 0.3s ease-out",
        willChange: "transform",
      }}
    >
      <Image
        src="/paterna.jpg"
        alt="Luxury background pattern"
        fill
        priority
        quality={80}
        style={{
          objectFit: "cover",
          opacity: 0.7,
          mixBlendMode: "multiply",
          filter: "contrast(1.1) brightness(0.9)",
        }}
      />
    </Box>
  );
}
