import React from "react";
import styles from "../styles/projects.module.css";
import Navbar from "../components/Navbar";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainDiv}>
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
          <div>
            <div className={styles.flex}>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                P
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                r
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                o
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                j
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                e
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                c
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                t
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}  data-aos="flip-left" data-aos-duration="2000"
              >
                s
              </h1>
            </div>
          </div>

          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/h1{`>`}
          </p>

          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}img{`>`}
          </p>
          <div className={styles.imageBox}>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657343108/dontDelete/warehouse_iihpo1.jpg" />
              <p className={styles.projectDetailsText}>
                Worked on the client-side aspect of this project and built with
                modern technologies like React Js and React-Bootstrap. This
                application manages all the warehouse activities and makes
                warehouse management an easier task.it keeps track of all
                purchases and sales and its main feature is to keep track of all
                orders with all details at every step of the order journey.
              </p>
            </div>

            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657302055/dontDelete/ecom_qrngfv.jpg" />
              <p className={styles.projectDetailsText}>
                Built an e-commerce website using React Js and Redux for state
                management.Deployed application on Digital Ocean. This wibsite
                is used to sell electronic products.
              </p>
            </div>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657341352/dontDelete/samarth_n4oh9z.png" />
              <p className={styles.projectDetailsText}>
                This is the company website of Samarth Meditech. Built using
                HTML, CSS, bootstrap, and JavaScript
              </p>
            </div>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657302061/dontDelete/college_alo8zn.png" />
              <p className={styles.projectDetailsText}>
                Developed Pre-University College website by using React Js with
                React-bootstrap. Deployed the application in the Bigrocker cloud
                platform. The website shows an overview and all using
                information about the college.
              </p>
            </div>
          </div>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/img{`>`}
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

export default Projects;
