"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdChatBubbleOutline } from "react-icons/md";
import { FaGift, FaRegCreditCard } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <nav className={styles.secondRow}>
        <div className={styles.logocontainer}>
          <Link href="/" className={styles.logocontainer}>
            <Image
              src="/prudential-logo-small.jpg"
              alt="Prudential Logo"
              width={220} 
              height={35}
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={styles.iconLinkContainer}>
          <FaMagnifyingGlass className={styles.searchButton} />
          <MdChatBubbleOutline className={styles.chatboxButton} />
          <FaRegCreditCard className={styles.giftIcon} />
          <Link href="/onlinePayment" className={`${styles.paymentButton} ${styles.topnavbarfont}`}>
            Online Payment
          </Link>
          <FaGift className={styles.giftIcon} />
          <Link href="/rewards" className={`${styles.rewardsButton} ${styles.topnavbarfont}`}>
            Rewards
          </Link>
          <div className={styles.personalEnterpriseContainer}>
            <Link href="/personalMode" className={`${styles.personalButton} ${styles.topnavbarfont}`}>
              Personal
            </Link>
            <Link href="/enterpriseMode" className={`${styles.enterpriseButton} ${styles.topnavbarfont}`}>
              Enterprise
            </Link>
          </div>
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

