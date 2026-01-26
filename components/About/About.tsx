"use client";

import React from "react";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <Link href='/' className={styles.backButton}>
          ← Back to Home
        </Link>
        <div className={styles.header}>
          <h1 className={styles.title}>About Us</h1>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.content}>
          <div className={styles.storySection}>
            <h2 className={styles.subtitle}>Our Story</h2>
            <p className={styles.paragraph}>
              {/* Your story of building this company goes here */}
              Welcome to our story. This is where you'll share your journey of
              building this company, the challenges you've overcome, and the
              vision that drives you forward.
            </p>
            <p className={styles.paragraph}>
              Share your passion, your mission, and what makes your company
              unique. Let your customers connect with the human side of your
              brand.
            </p>
          </div>

          <div className={styles.missionSection}>
            <h2 className={styles.subtitle}>Our Mission</h2>
            <p className={styles.paragraph}>
              Describe your company's mission and values here.
            </p>
          </div>

          <div className={styles.visionSection}>
            <h2 className={styles.subtitle}>Our Vision</h2>
            <p className={styles.paragraph}>
              Share your vision for the future and what you hope to achieve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
