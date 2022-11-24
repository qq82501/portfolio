import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.section_about} id="section-about">
      <div className={styles.section_about_background}>
        <h2 className={`heading-secondary header-section`}>About</h2>
        <div className={styles.container_about}>
          <p className={styles.biography}>
            生於1993年5月1日，於2019年畢業於澳洲國立大學 (Australian National
            University )金融管理系。
          </p>
          <p className={styles.biography}>
            我最喜歡且正在努力實踐的一句話：
            <strong>Stay hungry, stay foolish.</strong>
          </p>

          <br />
          <br />
          <p className={styles.biography}>
            在台北商業大學五專、二技部資訊管理系7年的就讀時期，充分培養撰寫程式所需的邏輯思考能力，並於畢業專題於校內競賽中獲得第2名。
            步入社會時，以外語能力為基礎，選擇國外業務作為職涯的第一步。業務的工作性質及日本客戶特有對高品質的要求，錘鍊出精確處事的同時具備效率以及多向的溝通力。在自我追尋的過程中，發現撰寫程式時的成就感更能感到成長及熱忱，下定決心歸零自己，擦亮鍵盤重新學習前端開發所需的技術。
          </p>
          <br />
          <br />
          <p className={styles.biography}>
            作為Front-End
            Developer，著重網站能夠穩定流暢的運作，同時能夠有風格化的視覺呈現。藉由語言優勢能更廣地蒐集到更多的資源，並運用他們解決問題。隨著時間程式語言也不停進化，使用Notion紀錄開發歷程，無論是遇到的困難或是新的語法，確保能徹底理解及回顧知識點，優化未來開發效率。
          </p>
        </div>
        <div className={styles.decoration_img_box}>
          <img
            className={`${styles.decoration_img} ${styles.img1}`}
            src={require("../../images/about/Plants_1(h480).png")}
            alt="background decoration"
          />
          <img
            className={`${styles.decoration_img} ${styles.img2}`}
            src={require(`../../images/about/Plants_2(h416).png`)}
            alt="background decoration"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
