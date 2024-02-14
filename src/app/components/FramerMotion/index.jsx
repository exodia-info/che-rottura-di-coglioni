"use client";
import styles from "./page.module.scss";
import Picture1 from "../../../../public/images/1.png";
import Picture2 from "../../../../public/images/2.JPG";
import Picture3 from "../../../../public/images/3.JPG";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const word = "with framer motion";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const images = [
    {
      src: Picture1,
      parallax: 0,
    },
    {
      src: Picture2,
      parallax: md,
    },
    {
      src: Picture3,
      parallax: lg,
    },
  ];

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              const rd = Math.floor(Math.random() * -125) - 25;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const sm = useTransform(scrollYProgress, [0, 1], [0, rd]);
              return (
                <motion.span style={{ top: sm }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map(({ src, parallax }, i) => {
          return (
            <motion.div
              style={{ y: parallax }}
              key={`i_${i}`}
              className={styles.imageContainer}
            >
              <Image src={src} alt="image" fill />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
