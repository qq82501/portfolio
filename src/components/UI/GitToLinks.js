import styles from "./GitToLinks.module.css";

function GitToLinks(props) {
  return (
    <div className={styles.links__container}>
      <a
        className={styles.work_link}
        target="_blank"
        rel="noreferrer noopener"
        href={props.demo}
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
        href={props.git}
      >
        <ion-icon
          // className={styles.work_icon}
          name="logo-github"
        ></ion-icon>
      </a>
    </div>
  );
}

export default GitToLinks;
