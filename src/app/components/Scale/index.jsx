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
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(headerRef.current, {
        opacity: 1, // Animate to fully visible
        duration: 2,
        ease: "power3.inOut", // Adjust easing as needed
        scrollTrigger: {
          trigger: container.current, // Element triggering the animation
          start: "top top", // Animation   starts when element hits top center
          end: "top+=140 top", // Animation ends when element is 140px below top center
          scrub: true, // Link animation progress to scroll position
          markers: true, // Display visual markers for debugging
        },
      });

      gsap.to(headerRef.current, {
        opacity: 0, // Animate to fully visible

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
        ref={headerRef}
      />
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
