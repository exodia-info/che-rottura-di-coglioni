"use client";

import styles from "./page.module.scss";
import { useEffect, useRef } from "react";
import React, { useState } from "react"; // Add the missing import statement
import { animate } from "framer-motion";

const numbers = [
  "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
  "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
  "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
  "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
  "M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7",
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const paths = useRef([]);
  const circles = useRef([]);
  const nCircles = 30;
  const radius = 17.5;

  useEffect(() => {
    const length = paths.current[index].getTotalLength();
    const step = length / nCircles;

    circles.current.forEach((circle, i) => {
      const { x, y } = paths.current[index].getPointAtLength(step * i);
      animate(
        circle,
        {
          cx: x,
          cy: y,
        },
        {
          delay: i * 0.0025,
          ease: "easeOut",
        }
      );
    });
  }, [index]);

  return (
    <main className={styles.main}>
      <div className="flex justify-around w-[80vw]">
        {numbers.map((_, i) => (
          <p
            key={i}
            style={{
              color: i === index ? "red" : "black",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
            onClick={() => {
              setIndex(i);
            }}
          >
            {i + 1}
          </p>
        ))}
      </div>
      <svg viewBox="0 0 256 256">
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15"
              result="filter"
            />
          </filter>
        </defs>
        {numbers.map((d, i) => (
          <path ref={(ref) => (paths.current[i] = ref)} d={d} key={i} />
        ))}
        <g key={"bo"}>
          {Array(nCircles)
            .fill()
            .map((_, i) => (
              <circle
                ref={(ref) => (circles.current[i] = ref)}
                r={radius}
                key={i}
                cx={128}
                cy={128}
              />
            ))}
        </g>
      </svg>
    </main>
  );
}
