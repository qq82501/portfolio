import { useSelector } from "react-redux";
import MainNavigator from "../hero/MainNavigator";
import MobileMainNavigator from "../hero/MobileMainNavigator";
import styles from "./LandingPage.module.css";

function LandingPage() {
  const { deviceMode } = useSelector((state) => state);

  const navigator =
    deviceMode === "pc" ? <MainNavigator /> : <MobileMainNavigator />;

  return (
    <section className={styles.landing_page__container} id="section-hero">
      <div className={styles.main_nav__box} id="nav-bar">
        {navigator}
      </div>
      <div className={styles.intro__box}>
        <div className={styles.hero_text_box}>
          <h1 className={styles.heading_primary}>Hi!&nbsp; I'm Cindy</h1>
          <p className={styles.hero_title}>Web Front-End Developer</p>
          <p className={styles.hero_objection}>
            熱愛接觸與學習新技術<span className={styles.cleaner}>，</span>
          </p>
          <p className={styles.hero_objection}>
            將你的idea化成網站向世界發送！
          </p>

          <a className={`btn btn-cta`} href="mailto:qq82501@gmail.com">
            Contact me!
          </a>
        </div>
        <div className={styles.hero_img__box}>
          <img
            className={styles.hero_img}
            src={require("../../images/hero-img(w1000).png")}
            alt="a lady using PC who stands for Cindy"
          />
          <div className={`${styles.light} ${styles.light_animation}`}></div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
