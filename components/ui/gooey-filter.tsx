"use client";

import React from "react";

interface GooeyFilterProps {
  id?: string;
  strength?: number;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function GooeyFilter({
  id = "gooey-filter",
  strength = 10,
  children,
  className,
  style,
}: GooeyFilterProps) {
  return (
    <>
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <defs>
          <filter id={id}>
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation={strength}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={className}
        style={{ filter: `url(#${id})`, ...style }}
      >
        {children}
      </div>
    </>
  );
}
