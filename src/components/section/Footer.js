import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.footer_logo_link} href="#hero-section">
        <img
          className={styles.footer_logo_img}
          src={require("../../images/logo.png")}
          alt="website logo"
        />
      </a>

      <div className={styles.copyright}>
        &copy; Designed & Built by Cindy Lu, 2022
      </div>
      <ul className={styles.footer_links}>
        <li>
          <a href="mailto:qq82501@gmail.com" className={styles.footer_link}>
            <ion-icon className={styles.footer_icon} name="mail"></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/qq82501"
            className={styles.footer_link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <ion-icon
              className={styles.footer_icon}
              name="logo-github"
            ></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
