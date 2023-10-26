import React from "react";
import Header from "../../components/Header/Header";
import styles from "../../pages/ContactPage/ContactPage.module.css";

export default function ContactPage() {
  return (
    <body className={styles.ContactPage}>
      <div>
        <Header />
        <h1 className={styles.ContactTitle}>Skontaktuj się z nami!</h1>
      </div>
      <div className={styles.DetailsContainer}>
        <div className={styles.box1}>
          <h4>Chrystian Kraska</h4>
          <p>Email: kraska.chrystian@gmail.com</p>
          <p>Telefon: +48 604 240 291</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/chrystian-kraska-13a317278/"
              target="_blank"
            >
              {" "}
              Click Here
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/chkraska" target="_blank">
              Click Here
            </a>
          </p>
        </div>
        <div className={styles.box2}>
          <h4>Oskar Garbień</h4>
          <p>Email:To be added</p>
          <p>Telefon: +48 531 979 850</p>
          <p>
            LinkedIn: <a href="">To be added</a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/oskgar2000" target="_blank">
              Click Here
            </a>
          </p>
        </div>
        <div className={styles.box3}>
          <h4>Dawid Tomczyk</h4>
          <p>Email: To be added</p>
          <p>Telefon: To be added</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dawid-tomczyk-2900001a0/"
              target="_blank"
            >
              {" "}
              Click Here
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/dawtomWp" target="_blank">
              {" "}
              Click Here
            </a>
          </p>
        </div>
      </div>
    </body>
  );
}
