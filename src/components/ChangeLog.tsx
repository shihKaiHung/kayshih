import { Chrono } from "react-chrono";

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
      items={[
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
          cardTitle: "Buy my first car Audi Q3S",
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
            name: "dunkirk beach",
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
            name: "dunkirk beach",
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
      ]}
      mode="VERTICAL"
    ></Chrono>
  );
};

export default ChangeLog;
