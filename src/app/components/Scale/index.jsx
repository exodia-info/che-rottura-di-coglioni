"use client";

import Picture1 from "../../../../public/images/porto.jpg";
import Picture2 from "../../../../public/images/quadrato1.jpg";
import Picture3 from "../../../../public/images/altra.jpg";
import Picture4 from "../../../../public/images/quadrato3.jpg";
import Picture5 from "../../../../public/images/quadrato4.jpg";
import Picture6 from "../../../../public/images/verticale.jpg";
import Picture7 from "../../../../public/images/quadrato2.jpg";
import Header from "../Header";

import Image from "next/image";
import styles from "./style.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const container = useRef(null);
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => (
            <motion.div
              style={{ scale: scale }}
              key={index}
              className={styles.el}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  alt={`Picture${index + 1}`}
                  fill
                  placeholder="blur"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
