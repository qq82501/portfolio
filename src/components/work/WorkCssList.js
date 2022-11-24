import WorkCssItem from "./WorkCssItem";
import styles from "./WorkCssList.module.css";

function WorkCssList() {
  const cssWorks = [
    {
      name: "Omnifood",
      description: "Landing Page實作，RWD設計。",
      demo: "https://css-practice-omnifood.netlify.app/",
      github: "https://github.com/qq82501/css-practice-omnifood",
      image: "css-omnifood(900x450).jpg",
      imageAlt: "A Website, Omnifood, practising CSS",
    },
    {
      name: "Chair公司介紹",
      description: "專售椅子公司介紹網站實作練習",
      demo: "https://css-practice-chair.netlify.app/",
      github: "https://github.com/qq82501/css-practice-chair",
      image: "css-chair(900x450).jpg",
      imageAlt: "A Website, Chair Company, practising CSS",
    },
    {
      name: "CSS Components",
      description: "CSS常用Components實作練習",
      demo: "https://css-practice-components.netlify.app/",
      github: "https://github.com/qq82501/css-practice-components",
      image: "css-components(900x450).jpg",
      imageAlt: "A Website, CSS Components, practising CSS",
    },
  ];

  const listContent = cssWorks.map((work) => (
    <li key={work.name}>
      <WorkCssItem work={work} />
    </li>
  ));
  return <ul className={styles.work_css_list__container}>{listContent}</ul>;
}

export default WorkCssList;
