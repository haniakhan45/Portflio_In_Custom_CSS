import Link from "next/link";
import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import styles from "../styles/Navbar.module.css"; 

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <header className="text-gray-100 body-font">
          <div className={styles.container}>
            <a className={styles.title}>
              <span>Portfolio</span>
            </a>

            <nav className={styles.navLinks}>
              <div>
                <Link href={"/"}>Home</Link>
                <Link href={"#About"}>About</Link>
                <Link href={"#Skills"}>Skills</Link>
                <Link href={"#project"}>Projects</Link>
                <Link href={"#Contact"}>Contact</Link>
              </div>
            </nav>

            <a href="/assests/CV/cv.pdf" className="group">
              <button className={styles.downloadBtn}>
                Download CV
                <BsCloudDownload className={styles.icon} />
              </button>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
