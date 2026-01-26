"use client";

import React from "react";
import Link from "next/link";
import styles from "./AboutButton.module.css";

export default function AboutButton() {
  return (
    <Link href='/about' className={styles.aboutButton}>
      <span className={styles.buttonText}>About Us</span>
      <div className={styles.glow}></div>
    </Link>
  );
}
