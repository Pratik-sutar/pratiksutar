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
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                P
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                r
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                o
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                j
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                e
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                c
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                t
              </h1>
              <h1
                className={`${styles.introText} ${styles.medium} ${styles.pointer}`}
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                s
              </h1>
            </div>
          </div>

          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/h1{`>`}
          </p>

          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}div{`>`}
          </p>
          <div className={styles.imageBox}>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className={styles.projectImage}
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657957054/dontDelete/warehouse_nannqu.jpg"
                alt="Warehouse Management Web Application"
              />
              <h3>Warehouse Management Web Application</h3>
              <p className={styles.projectDetailsText}>
                This is an web application used to keep a track of all the warehouse activities like keeping track of
                goods, update stock of products.
                Worked on the frontend part of the application.The UI of the application is built using React Js.
                The backend part is being done in Node Js and the database used is MSQL
              </p>
            </div>

            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className={styles.projectImage}
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657619335/dontDelete/ecom_uk7ukk.jpg"
                alt="E-Commerce Web Application"
              />
              <h3>E-Commerce Web Application</h3>
              <p className={styles.projectDetailsText}>
                This is a e-commerce platform that delivers accessories required for phone and computer at your doorstep.
                Worked on frontend part of the project using React JS for building UI. Implemented Redux for state management.
                The backend part is done in NodeJS with the   Worked on frontend part of the project using React JS for building UI. Implemented Redux for
124
database used is Mongo DB.
                Deployed on Digital Ocean hosting platform
              </p>
            </div>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className={styles.projectImage}
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657619086/dontDelete/clinic_zlgcgi.jpg"
                alt="Clinic Management Web Application"
              />
              <h3>Clinic Management Web Application</h3>
              <p className={styles.projectDetailsText}>
             This is a software designed for clinics which provides features Like,facility to go paperless with
             digital documentation,eﬀective management of staﬀ records and attendance management,
             patient case history management and doctor to doctor communication and also pharmacy integration.
             This software is built using latest technologies like React Js on frontend, Node Js on backend and
             mariaDB as a database
              </p>
            </div>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className={styles.projectImage}
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657619086/dontDelete/homeyopathi_w1wvfn.jpg"
                alt="Homeyopati Clinic management Web Application"
              />
              <h3>Homeyopati Clinic management Web Application</h3>
              <p className={styles.projectDetailsText}>
                This software helps in smooth running of Homeopathy organization.This software provides
                features Like,facility to go paperless with digital documentation,eﬀective management of staﬀ
                records and attendance management.This software helps in maintaining details of enquired
                patients and also registered patients and also helps in following up with patients.
                This application frontend is built with React Js and Tailwind CSS and backend is built with Nodes Js
                and MariaDB as a database.Deployed application on AWS
              </p>
            </div>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className={styles.projectImage}
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657619086/dontDelete/samarth_ik7etb.jpg"
                alt="Samarth Meditech"
              />
              <p className={styles.projectDetailsText}>
                This is a website built for displaying company overview, all information about products and
                services offered by the company.Used HTML,CSS,Javascript technology to build.
              </p>
            </div>
            <div
              className={styles.projectDetails}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <img
                className={styles.projectImage}
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657631734/dontDelete/college_uzeyps.jpg"
                alt="Pre-University College website"
              />
              <p className={styles.projectDetailsText}>
                Developed Pre-University College website which shows the college details, courses offered, events
                organised in college, staff , facilities provided in college. This website is built using React Js and React-bootstrap
              </p>
            </div>
          </div>
          <p className={`${styles.tags} ${styles.marg3}`}>
            {`<`}/div{`>`}
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
