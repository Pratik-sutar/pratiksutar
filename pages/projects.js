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
                Worked on the client-side aspect of this project and built with
                modern technologies like React Js and React-Bootstrap. This
                application manages all the warehouse activities and makes
                warehouse management an easier task.It keeps track of all
                purchases and sales and its main feature is to keep track of all
                orders with all details at every step of the order journey.
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
              <img
                className={styles.projectImage}
                src="https://res.cloudinary.com/rjtechnologiesstores/image/upload/v1657619086/dontDelete/clinic_zlgcgi.jpg"
                alt="Clinic Management Web Application"
              />
              <h3>Clinic Management Web Application</h3>
              <p className={styles.projectDetailsText}>
                This software helps in automation of Health care by providing
                features, which helps in smooth running of clinics and
                hospitals.This software provides features Like,facility to go
                paperless with digital documentation,eﬀective management of staﬀ
                records and attendance management and case history management
                and doctor to doctor communication and also pharmacy
                integration.This software is built using latest technologies
                like React.js and Node.js Express.js and mariadb as a database
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
                This application is built with modern frameworks/libraries like
                React.js and tailwind css and backend is built with Nodes.js
                with Express,js as a framework and Mariadb as a database.This
                software helps in smooth running of Homeopathy organization.
                This software provides features Like,facility to go paperless
                with digital documentation and also helps in maintaining details
                of enquired patients and also registered patients and also helps
                in following up with patients. This application helps
                organization in smooth running of its branches by effectively
                managing the data with respect to each branch and thus helping
                admin in efficient management of branches as well.
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
                This is the company website of Samarth Meditech. Built using
                HTML, CSS, bootstrap, and JavaScript
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
                Developed Pre-University College website by using React Js with
                React-bootstrap. Deployed the application in the Bigrocker cloud
                platform. The website shows an overview and all using
                information about the college.
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
