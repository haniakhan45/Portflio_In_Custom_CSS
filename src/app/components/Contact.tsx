import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div id="Contact" className={styles.contactContainer}>
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>Feel Free To Contact...</p>
          </div>

          <form>
            <div className={styles.formContainer}>
              <div className={styles.inputWrapper}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  required
                />
              </div>

              <div className={styles.submitWrapper}>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </div>
            </div>
          </form>

          <div className={styles.emailWrapper}>
            <h2 className={styles.emailLabel}>Email</h2>
            <a
              href="mailto:hanikhan0202@gmail.com"
              className={styles.emailLink}
            >
              hanikhan0202@gmail.com
            </a>
            <div className={styles.socialIcons}>
              <Link
                href="https://github.com/haniakhan45"
                target="_blank"
                className={styles.iconLink}
              >
                <FaGithub className={styles.icon} />
              </Link>
              <Link
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                className={styles.iconLink}
              >
                <FaLinkedin className={styles.icon} />
              </Link>
            </div>
          </div>

          <div className={styles.footerContent}>
            <p className={styles.footerText}>© 2024 Portfolio</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
