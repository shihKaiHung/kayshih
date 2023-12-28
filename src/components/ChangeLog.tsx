import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "2023-12-24",
    cardTitle: "第一次做代購",
    cardDetailedText: "以前就很想嘗試做代購，剛好福岡能買的東西蠻多就來試試",
  },
  {
    title: "2023-12-21",
    cardTitle: "Fukuoka 4 days again!!",
    cardDetailedText: [
      "太愛福岡，隔一週馬上又買機票再來一次",
      "中華航空",
      "機票價格: NT 15,000",
    ],
  },
  {
    title: "2023-12-07",
    cardTitle: "Fukuoka 4 days",
    cardDetailedText: [
      "第二次去日本，愛上福岡的生活步調",
      "虎航",
      "機票價格: NT 7,500",
    ],
  },
  {
    title: "2023-11-17",
    cardTitle: "創立Outside of Coding",
    url: "https://outsideofcoding.com/",
    cardDetailedText: `屬於軟體工程師的生活類訪談雜誌`,
  },
  {
    title: "2023-10-10",
    cardTitle: "Visit Prague again!!",
    cardDetailedText: `第二次來布拉格就沒那麼喜歡這邊`,
    media: {
      name: "prague",
      source: {
        url: "/assets/changeLog/prague.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2023-10-04",
    cardTitle: "Visit Budapest!!",
    cardDetailedText: `我最喜歡的城市Top 1`,
    media: {
      name: "Budapest",
      source: {
        url: "/assets/changeLog/budapest.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2023-10-04",
    cardTitle: "匈捷10日自由行",
    cardDetailedText: ["中華航空", "機票價格: NT 32,000"],
  },
  {
    title: "2023-09-12",
    cardTitle: "日本名古屋一日遊",
    cardDetailedText: [`樂桃航空快閃`, "樂桃航空", "機票價格: NT 4,500"],
    media: {
      name: "nagoya",
      source: {
        url: "/assets/changeLog/nagoya.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2023-09-04",
    cardTitle: "Blog升級至Astro 3.0",
  },
  {
    title: "2023-09-04",
    cardTitle: "Blog新增未來旅程資訊",
  },
  {
    title: "2023-06-09",
    cardTitle: "首爾4天3夜旅遊",
    cardDetailedText: ["酷航", "機票價格: NT 6,500"],
  },
  {
    title: "2023-05-22",
    cardTitle: "Hello Tesla Model Y",
    media: {
      name: "spain",
      source: {
        url: "/assets/changeLog/tesla.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2023-05-10",
    cardTitle: "Goodbye Audi Q3SB",
    cardDetailedText: `真的很愛這台車，但是想換電動車了`,
    media: {
      name: "audi",
      source: {
        url: "/assets/changeLog/audiq3.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2023-04-22",
    cardTitle: "創立咖啡品牌Volatile Coffee",
    cardDetailedText: `想法來於C++程式語言中"Volatile" 英文則意味著易變`,
  },
  {
    title: "2023-02-11",
    cardTitle: "看人生第一場NBA球賽",
    cardDetailedText: [
      "LA Lakers vs. Golden State Warriors",
      "球票價格: NT 20,000",
    ],
  },
  {
    title: "2023-02-09",
    cardTitle: "洛杉磯之旅",
    cardDetailedText: [
      "LA - Las Vegas - Antelope Canyo",
      "國泰航空",
      "機票價格: NT 22,000",
    ],
  },
  {
    title: "2023-12-04",
    cardTitle: "裝潢完成，入住林口",
  },
  {
    title: "2023-08-05",
    cardTitle: "林口買人生第一間房",
  },
  {
    title: "2022-10-25",
    cardTitle: "Islands Architecture會為前端帶來什麼樣新的改變嗎",
    url: "https://kayshih.com/posts/islands-architecture",
  },
  {
    title: "2022-10-09",
    cardTitle: "重寫個人網站",
    url: "https://kayshih.com/",
    cardDetailedText:
      "使用Astro重新開發個人網站，ㄧ樣透過vercel做部署，新增了Changelog頁面以及旅遊地圖",
  },
  {
    title: "2021-10-04",
    cardTitle: "Buy my first car Audi Q3SB",
  },
  {
    title: "2021-05-22",
    cardTitle: "建立kayshih.dev個人網站",
    url: "https://kayshih.com/",
    cardDetailedText: "使用Gatsby.js開發了個人網站，並透過vercel做部署",
  },
  {
    title: "2020-10-23",
    cardTitle: "成立一人公司The Phenom",
    cardDetailedText:
      "The Phenom是一間技術與測試導向的軟體接案公司，我希望能用跟傳統接案公司不一樣的開發流程去做接案，但最終目標還是希望能有自家的產品。",
  },
  {
    title: "2019-08-12",
    cardTitle: "開始經營Kayshih instagram帳號",
    url: "https://www.instagram.com/kayshih.dev/",
    cardDetailedText:
      "受到國外一些instagrammers啟發，所以想開始在instagram上分享自己身為軟體工程師的日常以及技術分享",
  },
  {
    title: "2019-06-14",
    cardTitle: "西葡之旅",
    cardDetailedText: `倫敦 - 葡萄牙 - 西班牙`,
    media: {
      name: "spain",
      source: {
        url: "/assets/hata.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2019-02",
    cardTitle: "進入新加坡外商公司",
    cardDetailedText: `開啟遠端工作的生活`,
  },
  {
    title: "2018-06-18",
    cardTitle: "東歐之旅",
    cardDetailedText: `布拉格 - 哈爾施塔特 - 維也納`,
    media: {
      name: "prague",
      source: {
        url: "/assets/venna.jpg",
      },
      type: "IMAGE",
    },
  },
  {
    title: "2017-11",
    cardTitle: "正式成為前端工程師",
    cardDetailedText: `自學前端一年半，投了20間左右，最後上了五間`,
  },
];

const ChangeLog = () => {
  return (
    <Chrono
      useReadMore
      activeItemIndex={-1}
      allowDynamicUpdate={true}
      hideControls={true}
      disableClickOnCircle={true}
      disableNavOnKey={true}
      focusActiveItemOnLoad={true}
      disableAutoScrollOnClick={true}
      timelineCircleDimension={10}
      cardHeight={50}
      cardPositionHorizontal="TOP"
      borderLessCards
      fontSizes={{
        title: "0.8rem",
      }}
      classNames={{
        title: "timeline-titile",
        cardMedia: "media-image",
      }}
      theme={{
        primary: "#838E83",
        cardBgColor: "none",
      }}
      items={items}
      mode="VERTICAL"
    />
  );
};

export default ChangeLog;
