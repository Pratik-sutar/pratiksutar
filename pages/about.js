import React,{useEffect} from "react";
import styles from "../styles/about.module.css";
import Navbar from "../components/Navbar";
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {DiJavascript1} from "react-icons/di"
import {FaReact} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"
import {FaBootstrap} from "react-icons/fa"
import {FaAws} from "react-icons/fa"
import AOS from "aos"; 


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
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
            {`<`}h3{`>`}
          </p>
          <div>
            <div className={styles.flex}>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}` }  data-aos="flip-left" data-aos-duration="2000"
              >
                A
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}` }  data-aos="flip-left" data-aos-duration="2000"
              >
                b
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}` }  data-aos="flip-left" data-aos-duration="2000"
              >
                o
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}` }  data-aos="flip-left" data-aos-duration="2000"
              >
                u
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer} ${styles.space}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                t
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                M
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                e
              </h1>
            </div>
          </div>

          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/h3{`>`}
          </p>

          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}p{`>`}
          </p>
          <div className={styles.myIntro} data-aos="fade-right" data-aos-duration="2500">
            <p>Hello there,</p>
            <p>
              I am Pratik, I have completed my graduation as a Mechanical
              Engineer
            </p>
            <p>
              I had interest in programming so after my graduation i started to learn
              programming
            </p>
            <p>
              Later I got an opportunity to work as a frontend developer in
              Samarth Meditech
            </p>
            <p></p>
          </div>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/p{`>`}
          </p>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}h3{`>`}
          </p>
          <div className={styles.flex}>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              M
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer} ${styles.space}`} data-aos="flip-left" data-aos-duration="2000"
            >
              y
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              S
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              k
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              i
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              l
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              l
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer} ${styles.space}`} data-aos="flip-left" data-aos-duration="2000"
            >
              s
            </h1>
          </div>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/h3{`>`}
          </p>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}svg{`>`}
          </p>
          <div className={`${styles.skillSect} ${styles.flex}`}>
            <div className={`${styles.skillBox} ${styles.orange}`}  data-aos="zoom-in" data-aos-duration="2500">
                <AiFillHtml5 className={styles.pop}/>
                <p>HTML</p>
            </div>
            <div className={`${styles.skillBox} ${styles.blue}`}  data-aos="zoom-in" data-aos-duration="2500">
                <DiCss3 className={styles.pop}/>
                <p>CSS</p>
            </div>
            <div className={`${styles.skillBox} ${styles.yellow}`}  data-aos="zoom-in" data-aos-duration="2500">
                <DiJavascript1 className={styles.pop}/>
                <p>JAVASCRIPT</p>
            </div>
            <div className={`${styles.skillBox} ${styles.blue}`}  data-aos="zoom-in" data-aos-duration="2500">
                <FaReact className={styles.rotate}/>
                <p>REACT.JS</p>
            </div>
            <div className={`${styles.skillBox} ${styles.purple}`}  data-aos="zoom-in" data-aos-duration="2500">
                <FaBootstrap className={styles.pop}/>
                <p>BOOTSTRAP</p>
            </div>
            <div className={`${styles.skillBox} ${styles.blue } `}  data-aos="zoom-in" data-aos-duration="2500">
                <SiTailwindcss className={styles.rotate}/>
                <p>TAILWIND CSS</p>
            </div>
            <div className={`${styles.skillBox} ${styles.orange}`}  data-aos="zoom-in" data-aos-duration="2500">
                <FaAws className={styles.pop}/>
                <p>AWS </p>
            </div>
          </div>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/svg{`>`}
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

export default About;
