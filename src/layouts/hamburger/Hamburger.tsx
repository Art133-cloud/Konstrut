"use client";
import styles from "./Hamburger.module.css";
import { useState, useEffect } from "react";
import { navMenu } from "../../layouts/navBar/Navbar";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll when menu is closed
      document.body.style.overflowX = "hidden";
    }

    // Cleanup to reset overflow on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav role="navigation">
      <div className={styles.menuToggle}>
        <input
          type="checkbox"
          className={styles.menuToggleInput}
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <span className={styles.menuToggleSpan}></span>
        <span className={styles.menuToggleSpan}></span>
        <span className={styles.menuToggleSpan}></span>

        <ul className={styles.menu}>
          {navMenu.map((item: string, index: number) => (
            <a href="#" key={index}>
              {item}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
