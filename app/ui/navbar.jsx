"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLinks}>
        <Link className={styles.navItem} href="/">
          Home
        </Link>
        <Link className={styles.navItem} href="/about">
          About us
        </Link>
        <Link className={styles.navItem} href="/insurance">
          Insurance
        </Link>
        <Link className={styles.navItem} href="/community">
          Community
        </Link>
      </div>
    </nav>
  );
}
