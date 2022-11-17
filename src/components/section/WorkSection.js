import Others from "../work/Others";
import styles from "./WorkSection.module.css";

function WorkSection() {
  return (
    <section className={styles.section_work} id="section-work">
      <header className="header-section">
        <Others />
      </header>
    </section>
  );
}

export default WorkSection;
