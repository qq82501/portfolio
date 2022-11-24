import WorkJsItem from "./WorkJsItem";
import styles from "./WorkJsList.module.css";

function WorkJsList() {
  const jsWorks = [
    {
      name: "Forkify",
      description:
        " 食譜入口網站，以MVC模式建構，串接外部API取得食譜資料，可用關鍵字搜尋、將食譜收藏，以及上傳自己的食譜。",
      demo: "https://forkify-qq82501.netlify.app/",
      github: "https://github.com/qq82501/forkify",
      image: "js-forkify(900x450).jpg",
      imageAlt: "A Website, Forkify, practising JS",
    },
    {
      name: "Mapty",
      description:
        "使用Leaflet互動式地圖，記錄運動日誌。以物件導向創建運動紀錄，透過localStorage儲存資料。",
      demo: "https://qq82501.github.io/mapty/",
      github: "https://github.com/qq82501/mapty/",
      image: "js-mapty(900x450).jpg",
      imageAlt: "A Website, Mapty, practising JS",
    },
    {
      name: "虛擬網路銀行",
      description: (
        <p className="work_text">
          可以查看交易紀錄並在不同的帳號間進行轉帳、貸款等活動。
          <br />
          <strong>
            測試帳號/密碼
            <br />
            User 1: js / 1111 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; User 2 : jd /
            2222
          </strong>
        </p>
      ),
      demo: "https://qq82501.github.io/bankist/",
      github: "https://github.com/qq82501/bankist",
      image: "js-internetBanking(900x450).jpg",
      imageAlt: "A Website, Internet Banking, practising JS",
    },
    {
      name: "Bankist",
      description:
        "虛擬銀行網站，使用avascript活化CSS的Layout及Component，完成Modal、Lazy loading、Slider、捲動效果等效果。",
      demo: "https://qq82501.github.io/BankistUI/",
      github: "https://github.com/qq82501/BankistUI",
      image: "js-bankist(900x450).jpg",
      imageAlt: "A Website, Bankist, practising JS",
    },
    {
      name: "Pig game",
      description:
        "  兩人一起同樂的小遊戲，看誰先取得40分。擲到1該回合分數歸零並失去行動權，所以在擲到1之前按下PASS保存你的分數吧。還…還要再擲一次嗎?",
      demo: "https://qq82501.github.io/pigGame/",
      github: "https://github.com/qq82501/pigGame",
      image: "js-pigGame(900x450).jpg",
      imageAlt: "A Website,Pig game, practising JS",
    },
    {
      name: "臉部辨識",
      description: (
        <p className="work_text">
          使用React.JS撰寫，運用Particles創造如宇宙般的背景，串接clarifai
          API進行人臉辨識。後端使用node.js + PostgreSQL。
          <br />
          <strong>測試帳號/密碼 : cindy@gmail.com / 1234</strong>
        </p>
      ),
      demo: "https://face-recognition-frontend-grpc.herokuapp.com/",
      github: "https://github.com/qq82501/face-recognition-Front-gRPC",
      image: "js-faceRecognition.jpg",
      imageAlt: "A Website, Face recognition, practising JS",
    },
  ];

  const listContent = jsWorks.map((work) => (
    <li key={work.name} className={styles.work_js__item}>
      <WorkJsItem work={work} />
    </li>
  ));
  return <ul className={styles.work_js_list__container}>{listContent}</ul>;
}
export default WorkJsList;
