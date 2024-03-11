/* eslint-disable react/display-name */
"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import home from "../../../../public/images/home.png";
import phone2 from "../../../../public/images/phone2.png";
import Image from "next/image";

const Header = React.forwardRef((props, ref) => {
  const { color, border, text } = props;
  return (
    <div
      onMouseOver={() => console.log(color)}
      ref={ref}
      className={styles.header}
    >
      <div
        style={{ background: color, border: border }}
        className={styles.container}
      >
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <div className={styles.copyright}>©</div>
            <div className={styles.name}>
              <p className={styles.sitoSugo}>{text}</p>
              <p className={styles.Mauro}>by Mauro Bianchin</p>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.el}>
            <Link className={styles.link} href="/">
              <div className={styles.home}>
                <Image src={home} alt="home" />
              </div>
              <p>Home</p>
            </Link>
            <div className={styles.indicator}></div>
          </div>

          <div className={styles.el}>
            <Link className={styles.link} href="/description">
              <Image src={phone2} alt="phone" />
              <p>Contattaci</p>
            </Link>
            <div className={styles.indicator}></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
