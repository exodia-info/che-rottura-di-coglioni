"use client";
import styles from "./page.module.scss";
import Picture1 from "../../../../public/images/c1.jpg";
import Picture2 from "../../../../public/images/c2.jpg";
import Picture3 from "../../../../public/images/c3.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import ceresio from "../../../../public/images/ceresio.jpg";
import Header from "../Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const word = "with framer motion";

export default function Index() {
  const container = useRef(null);
  const headerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [200, -400]);
  const md = useTransform(scrollYProgress, [0, 1], [200, -450]);
  const lg = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-750, -200]);

  const images = [
    {
      src: Picture1,
      parallax: lg,
    },
    {
      src: Picture2,
      parallax: md,
    },
    {
      src: Picture3,
      parallax: sm,
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1, // Animate to fully visible
        duration: 2,
        ease: "power3.inOut", // Adjust easing as needed
        scrollTrigger: {
          trigger: container.current, // Element triggering the animation
          start: "top center", // Animation   starts when element hits top center
          end: "top+=140 center", // Animation ends when element is 140px below top center
          scrub: true, // Link animation progress to scroll position
          markers: true, // Display visual markers for debugging
        },
      });
      gsap.to(headerRef.current, {
        opacity: 0, // Animate to fully visible
        duration: 2,
        ease: "power3.inOut", // Adjust easing as needed
        scrollTrigger: {
          trigger: container.current, // Element triggering the animation
          start: "bottom-=140 center", // Animation starts when element hits top center
          end: "bottom center", // Animation ends when element is 140px below top center
          scrub: true, // Link animation progress to scroll position
          markers: true, // Display visual markers for debugging
        },
      });
      return () => {
        context.revert();
      };
    }, []);
  });

  return (
    <>
      <Header
        color={
          "linear-gradient(130deg, rgba(211, 221, 228, 0.3) 0%, rgba(211, 221, 228, 0.7) 100%)"
        }
        border={"2px solid #FFB7B7"}
        text={"made with ♡"}
        ref={headerRef}
      />
      <motion.div style={{ y }} className={styles.container} ref={container}>
        <div className={styles.spacer}></div>

        <div className={styles.backgroundImage}>
          <Image
            src="/images/ceresio.jpg"
            alt="Picture of the author"
            fill="true"
          />
        </div>
        <div className={styles.body}>
          <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
          <motion.h1 style={{ y: sm }}>Scroll</motion.h1>
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
        <div className={styles.spacer}></div>
      </motion.div>
    </>
  );
}
