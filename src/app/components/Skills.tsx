import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../styles/Skills.module.css";

const skillsData = [
  { name: "HTML", percentage: "90%" },
  { name: "CSS", percentage: "70%" },
  { name: "Javascript/Typescript", percentage: "95%" },
  { name: "Next.js", percentage: "40%" },
  { name: "Tailwind CSS", percentage: "50%" },
];

const Skills = () => {
  return (
    <div id="Skills" className={styles.section}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className="text-center w-full mb-12">
            <h2 className={styles.title}>My Skills</h2>
            <h1 className={styles.description}>
              Mastery in frontend development, including a strong grasp of HTML,
              CSS, JavaScript, and frameworks like React and Next.js. <br />
              My focus is on creating responsive, interactive, and modern web
              applications using the latest technologies.
            </h1>
          </div>
          <div className={styles.skillGrid}>
            {skillsData.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.icon}>
                      <FaCheckCircle className={styles.icon} />
                    </div>
                    <h2 className={styles.skillName}>{skill.name}</h2>
                  </div>
                  <div className="flex-grow">
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: skill.percentage }}
                      ></div>
                    </div>
                    <p className={styles.percentage}>{skill.percentage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
