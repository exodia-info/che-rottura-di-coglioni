"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import useDimension from "../useDimension";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
];

const Parallax = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <main className={styles.main}>
      <div className={styles.spacer1}>☆ Ti Aspettiamo!! ☆ </div>

      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y1} />
        <Column images={[images[6], images[7], images[8]]} y={y2} />
        <Column images={[images[9], images[10], images[11]]} y={y3} />
      </div>
      <div className={styles.spacer2} />
    </main>
  );
};

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image src={`/images/${src}`} fill alt="parallax image" />
        </div>
      ))}
    </motion.div>
  );
};

export default Parallax;
