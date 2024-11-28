import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div id="About" className={styles.aboutContainer}>
      <div className={styles.sectionContent}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.profileImage}
            alt="profile"
            src={require("../../../public/assests/pictures/profile3.jpeg.jpg")}
            width={250}
            height={250}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
          I am a passionate web developer. I am proficient in HTML, CSS,
            JavaScript, and TypeScript, which help me create new projects in the
            world of web development. Currently, I am learning React alongside
            Next.js and Tailwind CSS to enhance my skills further.
            <br />
            I enjoy facing new challenges and utilizing new techniques and
            design patterns in my projects. My goal is to create modern and
            user-friendly web applications that not only look good but also
            function effectively.
            <br />I am always eager to learn new skills and work hard to improve
            my portfolio. My aim is to make a name for myself in the field of
            web development and to inspire others...
          </p>
          <div className={styles.buttonWrapper}>
            <Link href="/assests/CV/cv.pdf" className={styles.button}>
              View CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
