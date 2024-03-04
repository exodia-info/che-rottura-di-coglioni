/* eslint-disable react/display-name */
"use client";

import styles from "./page.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";

const Header = React.forwardRef((props, ref) => {
  const { color, border } = props;
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
              <p className={styles.sitoSugo}>made with ♡</p>
              <p className={styles.Mauro}>by Mauro Bianchin</p>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.el}>
            <Link className={styles.link} href="/">
              <p>Home</p>
            </Link>
            <div className={styles.indicator}></div>
          </div>

          <div className={styles.el}>
            <Link className={styles.link} href="/description">
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
