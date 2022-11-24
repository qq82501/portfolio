import { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import Menu from "./Menu";
import styles from "./MobileMainNavigator.module.css";

function MobileMainNavigator() {
  useEffect(() => {
    
  }, []);

  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const openMenuHandler = function (e) {
    setIsMenuClicked(true);
  };
  const closeMenuHandler = function (e) {
    setIsMenuClicked(false);
  };

  const menuButton = isMenuClicked ? (
    <button onClick={closeMenuHandler} className={`btn ${styles.btn_menu}`}>
      <ion-icon className={styles.menu_icon} name="close-outline"></ion-icon>
    </button>
  ) : (
    <button onClick={openMenuHandler} className={`btn ${styles.btn_menu}`}>
      <ion-icon className={styles.menu_icon} name="menu-outline"></ion-icon>
    </button>
  );

  return (
    <header className={styles.header} id="header">
      <div className={`container-xl-center ${styles.container_header}`}>
        <a href="#section-hero">
          <img
            className={styles.header_logo}
            src={require("../../images/logo.png")}
            alt="website logo"
          />
        </a>
        {menuButton}
      </div>
      {isMenuClicked ? (
        <Modal overlap={<Menu onCloseMenu={closeMenuHandler} />} />
      ) : (
        ""
      )}
    </header>
  );
}

export default MobileMainNavigator;
