import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.heading}>About Our Shop</h2>
        <p className={styles.paragraph}>
          Welcome to ShopStack! We are passionate about bringing you the best products with unbeatable service.
          Our mission is to make online shopping simple, enjoyable, and reliable for everyone.
        </p>
        <div className={styles.aboutDetails}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Story</h3>
            <p>
              Founded in 2025, ShopStack started as a small local store and has grown into a trusted online destination for customers worldwide.
            </p>  
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Values</h3>
            <ul className={styles.valueList}>
              <li>Quality Products</li>
              <li>Exceptional Customer Service</li>
              <li>Fast &amp; Secure Delivery</li>
              <li>Community Focus</li>
            </ul>
          </div>
        </div>
        <div className={styles.aboutContact}>
          <h4 className={styles.contactTitle}>Contact Us</h4>
          <p>Email: support@shopstack.com</p>
        </div>
      </div>
    </section>
  );
}