import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import styles from "../styles/contact.module.css";
import AOS from "aos";

const contact = () => {
  const [result, showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eoy78rn",
        "template_i5ugozj",
        e.target,
        "GObk9_1EuMoQIk8H3"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));

    e.target.reset();
    showResult(true);
  }
  setTimeout(() => {
    showResult(false);
  }, 5000);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.qureeyForm}>
        <p
          className={`${styles.tags}`}
        >
          {`<`}html{`>`}
        </p>
        <p
          className={`${styles.tags} ${styles.marg1}`}
        >
          {`<`}body{`>`}
        </p>
        <p
          className={`${styles.tags} ${styles.marg2}`}
        >
          {`<`}div{`>`}
        </p>
        <p className={`${styles.tags} ${styles.marg3}`}>
          {`<`}h1{`>`}
        </p>
        <div>
          <div className={styles.flex}>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              C
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              o
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              n
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              t
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              a
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              c
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer} ${styles.space}`} data-aos="flip-left" data-aos-duration="2000"
            >
              t
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              M
            </h1>
            <h1
              className={`${styles.introText} ${styles.medium} ${styles.pointer}`} data-aos="flip-left" data-aos-duration="2000"
            >
              e
            </h1>
            
          </div>
        </div>
        <p className={`${styles.tags} ${styles.marg3}`}>
          {`<`}/h1{`>`}
        </p>
        <p
          className={`${styles.tags} ${styles.marg3}`}
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          {`<`}form{`>`}
        </p>

        <div className={styles.contactBox}>
          <form
            action=""
            onSubmit={sendEmail}
            className={styles.contactForm}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className={styles.inputFeilds}>
              <label>Your Name</label>
              <input
                type="text"
                required
                className={styles.input}
                name="name"
              />
            </div>
            <div className={styles.inputFeilds}>
              <label>Your Email</label>
              <input
                type="email"
                required
                className={styles.input}
                name="email"
              />
            </div>
            <div className={styles.inputFeilds}>
              <label>Your Message</label>
              <textarea
                type="text"
                required
                className={styles.message}
                name="message"
              />
            </div>
            <div className={styles.inputFeilds}>
              <input type="submit" className={styles.inputbutton} />
            </div>
          </form>
        </div>

        <p
          className={`${styles.tags} ${styles.marg3}`}
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          {`<`}/form{`>`}
        </p>
        <p
          className={`${styles.tags} ${styles.marg2}`}
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          {`<`}/div{`>`}
        </p>
        <p
          className={`${styles.tags} ${styles.marg1}`}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {`<`}/body{`>`}
        </p>
        <p
          className={`${styles.tags}`}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {`<`}/html{`>`}
        </p>
      </div>
    </div>
  );
};

export default contact;
