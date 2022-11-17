import styles from "./WorkCssItem.module.css";

function WorkCssItem(props) {
  const toggleDescriptionHandler = (e) => {
    const targetEl = e.target.closest(`.${styles.work_item_css}`);
    if (!targetEl) return;
    targetEl.classList.toggle("work_item_css__active");
  };
  return (
    <div className={`prevent-hidden ${styles.work_item_box_css}`}>
      <div
        className={`${styles.work_item} ${styles.work_item_css}`}
        onMouseEnter={toggleDescriptionHandler}
        onMouseLeave={toggleDescriptionHandler}
      >
        <img
          className={styles.work_item_img}
          src={require(`../../images/work/${props.work.image}`)}
          alt={props.work.imageAlt}
        />
        <div className={styles.work_item_filter}>
          <div className={styles.link_box}>
            <a
              className={styles.work_link}
              target="_blank"
              rel="noreferrer noopener"
              href={props.work.demo}
            >
              <ion-icon
                className={styles.work_icon}
                name="log-out-outline"
              ></ion-icon>
            </a>
            <a
              className={styles.work_link}
              target="_blank"
              rel="noreferrer noopener"
              href={props.work.github}
            >
              <ion-icon
                className={styles.work_icon}
                name="logo-github"
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.work_text_box}>
        <span className={styles.heading_subtitle}>{props.work.name}</span>
        <p className={styles.work_text}>{props.work.description}</p>
      </div>
    </div>
  );
}
export default WorkCssItem;
