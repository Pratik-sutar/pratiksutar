import React, { useEffect } from "react";
import styles from "../styles/index.module.css";
import AOS from "aos";
import Link from "next/link";

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className={styles.menu} >
        <div className={styles.navButton}>
          <div className={styles.navlink}>
            <Link href="/">HOME</Link>
          </div>
          <div className={styles.navlink}>
            <Link href="/about">ABOUT</Link>
          </div>
          <div className={styles.navlink}>
            <Link href="/projects">PROJECTS</Link>
          </div>
          <div className={styles.navlink}>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div>
// <Link className="navlink" href="/project">
//   PROJECT
// </Link>
// </div>
// <div>
// <Link className="navlink" href="/contact">
//   CONTACT
// </Link>
// </div>
