import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.box}>
      {/* Title */}
      <div className={styles.footerContainer}>
        <div className={styles.row}>
          <div className={styles.column}>
            <p className={styles.heading}>About Us</p>
            <a href="#" className={styles.footerLink}>Aim</a>
            <a href="#" className={styles.footerLink}>Vision</a>
            <a href="#" className={styles.footerLink}>Testimonials</a>
          </div>
          <div className={styles.column}>
            <p className={styles.heading}>Services</p>
            <a href="#" className={styles.footerLink}>Writing</a>
            <a href="#" className={styles.footerLink}>Internships</a>
            <a href="#" className={styles.footerLink}>Coding</a>
            <a href="#" className={styles.footerLink}>Teaching</a>
          </div>
          <div className={styles.column}>
            <p className={styles.heading}>Contact Us</p>
            <a href="#" className={styles.footerLink}>Uttar Pradesh</a>
            <a href="#" className={styles.footerLink}>Ahemdabad</a>
            <a href="#" className={styles.footerLink}>Indore</a>
            <a href="#" className={styles.footerLink}>Mumbai</a>
          </div>
          <div className={styles.column}>
            <p className={styles.heading}>Social Media</p>
            <a href="#" className={styles.footerLink}>
              <i className="fab fa-facebook-f">
                <span className={styles.iconText}>Facebook</span>
              </i>
            </a>
            <a href="#" className={styles.footerLink}>
              <i className="fab fa-instagram">
                <span className={styles.iconText}>Instagram</span>
              </i>
            </a>
            <a href="#" className={styles.footerLink}>
              <i className="fab fa-twitter">
                <span className={styles.iconText}>Twitter</span>
              </i>
            </a>
            <a href="#" className={styles.footerLink}>
              <i className="fab fa-youtube">
                <span className={styles.iconText}>Youtube</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
