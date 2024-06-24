"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGift } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className={styles.secondRow}>
        <div>
          <Link href="/" className={styles.logocontainer}>
            <Image
              src="/prudential-logo-small.jpg"
              alt="Prudential Logo"
              width={220} // Set a default width
              height={35}
              className={styles.logo}
            />
          </Link>
          <Link href="/search" className={styles.searchButton}>
            <Image src="/search.png" width={25} height={25} />
          </Link>
          <Link href="/chat" className={styles.chatboxButton}>
            <Image src="/chatbox.png" width={25} height={25} />
          </Link>
          <FaRegCreditCard className={styles.giftIcon}/>
          <Link href="/onlinePayment" className={`${styles.paymentButton} ${styles.topnavbarfont}`}>
            Online Payment
          </Link>
          <FaGift className={styles.giftIcon} />
          <Link href="/rewards" className={`${styles.rewardsButton} ${styles.topnavbarfont}`}>
            Rewards
          </Link>
          <Link href="/personalMode" className={`${styles.personalButton} ${styles.topnavbarfont}`}>
            Personal
          </Link>
          <Link href="/enterpriseMode" className={`${styles.enterpriseButton} ${styles.topnavbarfont}`}>
            Enterprise
          </Link>
          <Link href="/login" className={`${styles.loginButton} ${styles.topnavbarfont}`}>
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
