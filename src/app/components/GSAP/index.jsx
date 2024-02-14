"use client";
import styles from "./page.module.scss";
import Picture1 from "../../../../public/images/1.png";
import Picture2 from "../../../../public/images/2.JPG";
import Picture3 from "../../../../public/images/3.JPG";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const word = "with gsap";

export default function Index() {
  const images = [Picture1, Picture2, Picture3];
  const container = useRef(null);
  const title = useRef(null);
  const characters = useRef([]);
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          target: container.current,
          start: "top-=150 top",
          end: "bottom bottom",
          scrub: true,
          markers: false,
        },
      });

      tl.to(title.current, { y: -200 }, 1.5);
      tl.to(imagesRef.current[1], { y: -200 }, 1.5);
      tl.to(imagesRef.current[2], { y: -400 }, 1.5);

      characters.current.forEach((char) => {
        const top = Math.floor(Math.random() * -75) - 25;
        tl.to(char, { top }, 1.5);
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <h1 ref={title}>Parallax</h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              return (
                <span
                  ref={(ref) => (characters.current[i] = ref)}
                  key={`l_${i}`}
                >
                  {letter}
                </span>
              ); // ok, very clean way to reference each letter
            })}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, i) => {
          return (
            <div
              key={`i_${i}`}
              ref={(ref) => (imagesRef.current[i] = ref)}
              className={styles.imageContainer}
            >
              <Image src={image} alt="image" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
}
