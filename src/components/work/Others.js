import { useState } from "react";
import styles from "./Others.module.css";
import WorkCssList from "./WorkCssList";
import WorkJsList from "./WorkJsList";

function Others() {
  const [genre, setGenre] = useState("css");
  const setGenreHandler = function (genre, e) {
    setGenre(genre);
    const containerEl = e.target.closest(`.${styles.others__container}`);
    const switchEl = e.target
      .closest(`.${styles.genre}`)
      .querySelector(".switch");
    switchEl.classList.add(`${styles.switch_animation}`);
    if (genre === "js") {
      containerEl.classList.add("js");
      containerEl.classList.remove("css");
      document.body.classList.add("js");
      document.body.classList.remove("css");
    }
    if (genre === "css") {
      containerEl.classList.add("css");
      containerEl.classList.remove("js");
      document.body.classList.add("css");
      document.body.classList.remove("js");
    }
  };
  return (
    <div className={styles.others__container}>
      <div className="flex container-xl-center">
        <h2 className={styles.others__title}>Others...</h2>
        <div
          className={`${styles.genre} ${
            genre === "css" ? styles.genre_css : styles.genre_js
          }`}
        >
          <button
            onClick={setGenreHandler.bind(null, "css")}
            className={`btn ${styles.btn_genre_css}`}
          >
            CSS
          </button>
          <button
            onClick={setGenreHandler.bind(null, "js")}
            className={`btn ${styles.btn_genre_js}`}
          >
            Javascript
          </button>
          <div className={`${styles.switch} switch`}></div>
        </div>
      </div>
      {genre === "css" ? <WorkCssList /> : <WorkJsList />}
    </div>
  );
}

export default Others;
