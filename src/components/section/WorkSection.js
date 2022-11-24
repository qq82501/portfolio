import Others from "../work/Others";
import WorkReact from "../work/WorkReact";
import styles from "./WorkSection.module.css";

function WorkSection() {
  return (
    <section className={styles.section_work} id="section-work">
      <h2 className="heading-secondary">Work</h2>
      <div className={styles.work_box}>
        <WorkReact />
        <Others />
      </div>
    </section>
  );
}

export default WorkSection;
