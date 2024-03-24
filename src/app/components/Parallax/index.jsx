"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import useDimension from "../useDimension";
import { useTranslation } from "react-i18next";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img12.jpg",
  "dentro4.jpg",
  "img11.jpg",
  "img12.jpg",
];

const Parallax = () => {
  const { t, i18n } = useTranslation();
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
  const height2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main className={styles.main}>
      <div className={styles.spacer1}>☆ {t("aspetto")}! ☆ </div>

      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y1} />
        <Column images={[images[6], images[7], images[8]]} y={y2} />
        <Column images={[images[9], images[10], images[11]]} y={y3} />
      </div>
      {/* <motion.div
        style={{ height: height2 }}
        className={styles.circleContainer}
      >
        <div className={styles.circle}></div>
      </motion.div> */}
    </main>
  );
};

const Column = ({ images, y = 0 }) => {
  return (
    <>
      <motion.div style={{ y }} className={styles.column}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/images/${src}`} fill alt="parallax image" />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Parallax;
