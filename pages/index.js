import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
import AOS from "aos";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.homeContainer}>
        <div id="sect" className={styles.sectionIntro}>
          <p className={`${styles.tags}`}>
            {`<`}html{`>`}
          </p>
          <p className={`${styles.tags} ${styles.marg1}`}>
            {`<`}body{`>`}
          </p>
          <p className={`${styles.tags} ${styles.marg2}`}>
            {`<`}div{`>`}
          </p>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}h1{`>`}
          </p>
          <div className={styles.intro}>
            <div
              className={styles.flex}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
               data-aos-duration="1500"
            >
              <h1 className={styles.introText}>H</h1>
              <h1 className={styles.introText}>i</h1>
              <img
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657203368/dontDelete/hi_etv56a.gif"
                alt=""
                width="8%"
                height="8%"
              />
            </div>
            <div
              className={styles.flex}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
               data-aos-duration="1500"
            >
              <h1 className={styles.introText}>I</h1>
              <h1 className={styles.introText}>’</h1>
              <h1 className={`${styles.introText} ${styles.space}`}>m</h1>

              <h1 className={styles.introText}>P</h1>
              <h1 className={styles.introText}>r</h1>
              <h1 className={styles.introText}>a</h1>
              <h1 className={styles.introText}>t</h1>
              <h1 className={styles.introText}>i</h1>
              <h1 className={styles.introText}>k</h1>
            </div>
            <div
              className={styles.flex}
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
               data-aos-duration="1500"
            >
              <h1 className={styles.introText}>I</h1>
              <h1 className={styles.introText}>’</h1>
              <h1 className={`${styles.introText} ${styles.space}`}>m</h1>
              <h1 className={`${styles.introText} ${styles.space}`}>a</h1>
              <h1 className={styles.introText}>W</h1>
              <h1 className={styles.introText}>e</h1>
              <h1 className={`${styles.introText} ${styles.space}`}>b</h1>
              <h1 className={styles.introText}>D</h1>
              <h1 className={styles.introText}>e</h1>
              <h1 className={styles.introText}>v</h1>
              <h1 className={styles.introText}>e</h1>
              <h1 className={styles.introText}>l</h1>
              <h1 className={styles.introText}>o</h1>
              <h1 className={styles.introText}>p</h1>
              <h1 className={styles.introText}>e</h1>
              <h1 className={styles.introText}>r</h1>
            </div>
          </div>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/h1{`>`}
          </p>

          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}h3{`>`}
          </p>

          <div data-aos="fade-up"  data-aos-duration="2000"
          >
          <h1
            className={`${styles.intro} ${styles.textWhite} ${styles.small}`}
            >
            Front End Developer
          </h1>
          </div>
          
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/h3{`>`}
          </p>
          <p className={`${styles.tags} ${styles.marg2}`}>
            {`<`}/div{`>`}
          </p>
          <p className={`${styles.tags} ${styles.marg1}`}>
            {`<`}/body{`>`}
          </p>
          <p className={`${styles.tags}`}>
            {`<`}/html{`>`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
