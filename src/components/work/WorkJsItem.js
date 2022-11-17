import styles from "./WorkJsItem.module.css";

function WorkJsItem(props) {
  return (
    <div className={`prevent-hidden ${styles.work_item_box}`}>
      <div className={`${styles.work_item} ${styles.work_item_js}`}>
        <img
          className={styles.work_item_img}
          src={require(`../../images/work/${props.work.image}`)}
          alt={props.work.imageAlt}
        />
        <div className={styles.work_item_filter}>
          <div className={styles.work_text_box}>
            <span className={`heading-subtitle`}>{props.work.name}</span>
            <p className={styles.work_text}>{props.work.description}</p>
          </div>
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
    </div>
  );
}

export default WorkJsItem;
