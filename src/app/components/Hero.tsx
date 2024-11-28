"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import styles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroBackground}>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.profileImage}
              alt="hero"
              src={require("../../../public/assests/pictures/profile2.jpeg")}
              width={250}
              height={250}
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              Hello, <br className={styles.break} />
              <span className={styles.typewriter}>
                <Typewriter
                  options={{
                    strings: ["I'm Hania", "Welcome to", "My Portfolio"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <div className={styles.divider}></div>
            <p className={styles.description}>
              I am a web developer proficient in HTML, CSS, JavaScript, and
              TypeScript. Currently, I'm learning React, Next.js, and Tailwind
              CSS. I focus on implementing modern techniques and design patterns
              to create user-friendly applications and constantly aim to expand
              my skill set.
            </p>
            <div className={styles.buttonWrapper}>
              <Link href={"#Contact"}>
                <button className={styles.contactButton}>Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
