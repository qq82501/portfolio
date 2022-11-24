import styles from "./Menu.module.css";
import { useSelector } from "react-redux";

function Menu(props) {
  const { nav } = useSelector((state) => state);

  const menuContent = nav.map((section) => (
    <li
      key={section.name}
      className={styles.menu__list}
      onClick={props.onCloseMenu}
    >
      <a href={section.to}>{section.name}</a>
    </li>
  ));
  return <ul className={styles.menu__container}>{menuContent}</ul>;
}
export default Menu;
