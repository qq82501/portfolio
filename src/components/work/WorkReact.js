import { useSelector } from "react-redux";
import styles from "./WorkReact.module.css";
import WorkReactItem from "./WorkReactItem";
import WorkReactItemMobile from "./WorkReactItemMobile";

function WorkReact() {
  const { deviceMode } = useSelector((state) => state);
  const reactWorks = [
    {
      name: "C.Collection",
      description: "購物網站實作",
      features: [
        "首頁Carousel",
        "商品搜尋、瀏覽",
        "Breadcrumb頁面導覽",
        "商品收藏",
        "購物車、結帳系統",
        "會員註冊、登入、管理",
        "表單驗證",
        "RWD設計",
        "CSR客戶端渲染",
        "API串接",
      ],
      tools: ["HTML", "CSS", "React.js", "Redux", "React-Router", "Firebase"],
      github: "https://github.com/qq82501/c-collection",
      demo: "https://c-collection.netlify.app/",
      imgPc: { img: "c-collection_pc.png", alt: "project c-collection on pc" },
      imgMobile: {
        img: "c-collection_mobile.png",
        alt: "project c-collection on mobile",
      },
    },
    {
      name: "ReactMeal",
      description: "點餐網站實作",
      features: ["購物車系統", "API串接接收訂單", "RWD設計"],
      tools: ["HTML", "CSS", "React.js", "Firebase"],
      github: "https://github.com/qq82501/react-practice-reactMeals",
      demo: "https://react-practice-reactmeals.netlify.app/",
      imgPc: { img: "reactMeal_pc.png", alt: "project reactMeal on pc" },
      imgMobile: {
        img: "reactMeal_mobile.png",
        alt: "project reactMeal on mobile",
      },
    },
  ];

  const workContent = reactWorks.map((work) => {
    if (deviceMode === "pc")
      return <WorkReactItem work={work} key={work.name} />;
    if (deviceMode === "mobile")
      return <WorkReactItemMobile work={work} key={work.name} />;
  });

  return <main className={styles.work_react__container}>{workContent}</main>;
}

export default WorkReact;
