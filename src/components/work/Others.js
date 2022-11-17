import { useState } from "react";
import styles from "./Others.module.css";
import WorkCssList from "./WorkCssList";
import WorkJsList from "./WorkJsList";

function Others() {
  const [genre, setGenre] = useState("css");
  const setGenreHandler = function (genre, e) {
    setGenre(genre);
    const switchEl = e.target
      .closest(`.${styles.genre}`)
      .querySelector(".switch");
    switchEl.classList.add(`${styles.switch_animation}`);
  };
  return (
    <div>
      <div className="flex container-xl-center">
        <h2 className="heading-secondary">Others...</h2>
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
