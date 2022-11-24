import styles from "./MainNavigator.module.css";

function MainNavigator() {
  return (
    <header className={styles.header} id="header">
      <div className={`container-xl-center ${styles.container_header}`}>
        <a href="#section-hero">
          <img
            className={styles.header_logo}
            src={require("../../images/logo.png")}
            alt="website logo"
          />
        </a>

        <nav className={styles.main_nav}>
          <ul className={styles.main_nav_list}>
            <li className={styles.main_nav_item}>
              <a className={styles.main_nav_link} href="#section-hero">
                Home
                {/* <!-- <div className={styles.underline}></div> --> */}
              </a>
            </li>
            <li className={styles.main_nav_item}>
              <a className={styles.main_nav_link} href="#section-about">
                About
              </a>
            </li>
            <li className={styles.main_nav_item}>
              <a className={styles.main_nav_link} href="#section-work">
                Work
              </a>
            </li>
            {/* <!-- <li className={styles.menu-icon}></li> --> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigator;
