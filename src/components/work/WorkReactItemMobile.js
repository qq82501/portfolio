import styles from "./WorkReactItemMobile.module.css";
import GitToLinks from "../UI/GitToLinks";

function WorkReactItemMobile(props) {
  const featureContent = props.work.features.map((feature) => (
    <li key={feature}>{feature}</li>
  ));
  const toolContent = props.work.tools.map((tool) => (
    <li key={tool}>{tool}</li>
  ));

  return (
    <div className={styles.work_react__container}>
      <div>
        <p className={styles.project_title}>{props.work.name}</p>
        <p className={styles.project_description}>{props.work.description}</p>
        <div className={styles.links_box}>
          <GitToLinks demo={props.work.demo} git={props.work.github} />
        </div>
      </div>
      <div className={styles.work_react__img_box}>
        <img
          src={require(`../../images/work/react/${props.work.imgPc.img}`)}
          alt={props.work.imgPc.alt}
        />
        <img
          src={require(`../../images/work/react/${props.work.imgMobile.img}`)}
          alt={props.work.imgMobile.alt}
        />
      </div>
      <div className={styles.work_react__text_box}>
        <div className={styles.work_react__feature_box}>
          <p>功能</p>
          <ul className={styles.feature_list}>{featureContent}</ul>
        </div>
        <div className={styles.work_react__tool_box}>
          <p>Tools</p>
          <ul className={styles.tool_list}>{toolContent}</ul>
        </div>
      </div>
    </div>
  );
}

export default WorkReactItemMobile;
