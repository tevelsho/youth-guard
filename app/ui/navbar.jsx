"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
    <nav className={styles.secondRow}>
            <div>
              <Link href="/home" className={styles.logo}>
                put the prudential Logo here ig?
              </Link>
            <Link href="#" className={styles.searchButton}>
          Search
        </Link>
            <Link href="#" className={styles.chatboxButton}>
          [put chatbox png here i cant find one]
        </Link>
            <Link href="#" className={styles.paymentButton}>
          Online Payment
        </Link>
            <Link href="#" className={styles.rewardsButton}>
          Rewards
        </Link>
            <Link href="#" className={styles.personalButton}>
          Personal
        </Link>
        <Link href="#" className={styles.enterpriseButton}>
          Enterprise
        </Link>
        <Link href="/login" className={styles.loginButton}>
            Login
        </Link>
      </div>
    </nav>
    <nav className={styles.navContainer}>
      <div className={styles.navLinks}>
        <Link className={styles.navItem} href="/">
          We Do
        </Link>
        <Link className={styles.navItem} href="/products">
          Products
        </Link>
        <Link className={styles.navItem} href="/services">
          Claims & Services
        </Link>
        <Link className={styles.navItem} href="/programmes">
          Priority Programmes
        </Link>
        <Link className={styles.navItem} href="/collaboration">
          Work With Us
        </Link>
        <Link className={styles.navItem} href="/planner">
          Life Planner
        </Link>
        <Link className={styles.navItem} href="/aboutus">
          About Us
        </Link>
      </div>
    </nav>
    </>
  );
}
