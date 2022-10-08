---
title: 前端開發寫測試到底要測什麼？
author: KayShih
datetime: 2022-04-03T04:06:31Z
slug: frontend-unit-tests
featured: false
draft: false
tags:
  - tech 
  - testing 
description:
  最近訪談蠻多前端工程師，主要目的是想了解他們工作上到底會不會寫測試，詢問下來的結果幾乎都是沒有寫，但大部分前端工程師不是不願意寫測試而是不知道測試要測哪些部分。
---


最近訪談蠻多前端工程師，主要目的是想了解他們工作上到底會不會寫測試，詢問下來的結果幾乎都是沒有寫，但大部分前端工程師不是不願意寫測試而是不知道測試要測哪些部分。

## 首先我們要先了解寫測試的目的是什麼

1. 確保系統穩定，不會出現改A壞B的情況
2. 在未來需要重構時能放心重構，因為有測試做保護
3. 透過測試時定義的specs能快速了解當初這段code的業務邏輯為何

## 前端能做哪些測試？

- Unit Testing
- Component Unit Testing
- Integration Testing
- E2E Testing
- Cross Browser Testing跨瀏覽器測試

這篇文章主要以Unit Tests為主，寫Unit Test的成本很低而且效益很高，像是E2E這種所要付出的成本就相對高很多。

## Unit tests
單元測試簡單來說就是去測試每一個最小組成的function，那在什麼時候我們會需要測試這些function?

舉個常見的情況就是『轉換API資料成前端所需的資料格式』
很多時候打API回來的資料不一定跟我們UI要呈現的資料格式是一樣的，前端很常需要將這些API資料轉換成我們自己UI上所需要的資料格式，那這些轉換的function就很需要來寫測試做保護(特別是很複雜的轉換function)。

幾種需要寫測試的狀況
- 當API返回欄位有問題，function該返回什麼預設值
- 做不同案例的Mocking Data來測試function的正確性
- 某些欄位API突然沒吐會不會造成function壞掉(或是你function有handle住這些狀況嗎)

Component unit tests
其實元件的測試跟function的測試大致上都相同
- 不同props進來時該預期什麼樣的結果
- props如果出現null / undefined 會不會造成元件crash

『寫測試不用追求涵蓋率，但一些重要的部分一定要加上測試做保護』，如果你認為某個元件或是function掛了會造成系統掛掉，那就是寫好你的測試案例去保護它。


## 範例

在這邊用一個我實際工作上遇到的例子來簡單說明測試該怎麼寫，首先我會做一些mockdata來測試以及預期的資料格式來進行測試

```

// 模擬api返回的資料
const mockData = { 
  gradeA: [
    { timepoint: '2021-02-01', rent: 9.4 },
    { timepoint: '2021-03-01', rent: 9.2 },
    { timepoint: '2021-04-01', rent: 9.3 },
    { timepoint: '2021-05-01', rent: 8.9 },
    { timepoint: '2021-06-01', rent: 9 },
    { timepoint: '2021-07-01', rent: 9.2 },
    { timepoint: '2021-08-01', rent: 8.9 },
    { timepoint: '2021-09-01', rent: 9.3 },
    { timepoint: '2021-10-01', rent: 9.3 },
    { timepoint: '2021-11-01', rent: 9.3 },
    { timepoint: '2021-12-01', rent: 9.3 },
    { timepoint: '2022-01-01', rent: 9.3 },
    { timepoint: '2022-02-01', rent: 9.4 },
  ],
  'gradeA-': [
    { timepoint: '2021-02-01', rent: 7.7 },
    { timepoint: '2021-03-01', rent: 7.6 },
    { timepoint: '2021-04-01', rent: 7.5 },
    { timepoint: '2021-05-01', rent: 7.6 },
    { timepoint: '2021-06-01', rent: 7.5 },
    { timepoint: '2021-07-01', rent: 7.7 },
    { timepoint: '2021-08-01', rent: 7.8 },
    { timepoint: '2021-09-01', rent: 7.7 },
    { timepoint: '2021-10-01', rent: 7.9 },
    { timepoint: '2021-11-01', rent: 8 },
    { timepoint: '2021-12-01', rent: 8.3 },
    { timepoint: '2022-01-01', rent: 8.4 },
    { timepoint: '2022-02-01', rent: 8.4 },
  ],
  'gradeB+': [
    { timepoint: '2021-02-01', rent: 5.9 },
    { timepoint: '2021-03-01', rent: 5.9 },
    { timepoint: '2021-04-01', rent: 5.9 },
    { timepoint: '2021-05-01', rent: 5.9 },
    { timepoint: '2021-06-01', rent: 5.9 },
    { timepoint: '2021-07-01', rent: 5.9 },
    { timepoint: '2021-08-01', rent: 5.9 },
    { timepoint: '2021-09-01', rent: 5.9 },
    { timepoint: '2021-10-01', rent: 6 },
    { timepoint: '2021-11-01', rent: 6 },
    { timepoint: '2021-12-01', rent: 6.3 },
    { timepoint: '2022-01-01', rent: 6.4 },
    { timepoint: '2022-02-01', rent: 6.4 },
  ],
  gradeB: [
    { timepoint: '2021-02-01', rent: 4.8 },
    { timepoint: '2021-03-01', rent: 4.9 },
    { timepoint: '2021-04-01', rent: 5 },
    { timepoint: '2021-05-01', rent: 4.9 },
    { timepoint: '2021-06-01', rent: 4.9 },
    { timepoint: '2021-07-01', rent: 4.9 },
    { timepoint: '2021-08-01', rent: 4.9 },
    { timepoint: '2021-09-01', rent: 5 },
    { timepoint: '2021-10-01', rent: 5 },
    { timepoint: '2021-11-01', rent: 5 },
    { timepoint: '2021-12-01', rent: 5.2 },
    { timepoint: '2022-01-01', rent: 5.1 },
    { timepoint: '2022-02-01', rent: 5.2 },
  ],
};

//我們預期的資料格式
const expectData = [ 
  { name: '2021.02', gradeA: '10.9', 'gradeA-': '6.7', 'gradeB+': '5.0', gradeB: '4.2' },
  { name: '2021.03', gradeA: '10.7', 'gradeA-': '6.8', 'gradeB+': '5.0', gradeB: '4.3' },
  { name: '2021.04', gradeA: '10.9', 'gradeA-': '6.8', 'gradeB+': '5.0', gradeB: '4.3' },
  { name: '2021.05', gradeA: '10.7', 'gradeA-': '6.8', 'gradeB+': '5.0', gradeB: '4.3' },
  { name: '2021.06', gradeA: '10.9', 'gradeA-': '6.8', 'gradeB+': '5.0', gradeB: '4.4' },
  { name: '2021.07', gradeA: '10.9', 'gradeA-': '6.9', 'gradeB+': '5.0', gradeB: '4.7' },
  { name: '2021.08', gradeA: '10.8', 'gradeA-': '7.2', 'gradeB+': '5.1', gradeB: '4.3' },
  { name: '2021.09', gradeA: '10.8', 'gradeA-': '7.3', 'gradeB+': '5.1', gradeB: '4.6' },
  { name: '2021.10', gradeA: '11.0', 'gradeA-': '7.3', 'gradeB+': '5.1', gradeB: '4.6' },
  { name: '2021.11', gradeA: '10.9', 'gradeA-': '7.2', 'gradeB+': '5.2', gradeB: '4.7' },
  { name: '2021.12', gradeA: '11.5', 'gradeA-': '7.5', 'gradeB+': '5.3', gradeB: '4.7' },
  { name: '2022.01', gradeA: '11.5', 'gradeA-': '7.5', 'gradeB+': '5.4', gradeB: '4.7' },
  { name: '2022.02', gradeA: '11.4', 'gradeA-': '7.5', 'gradeB+': '5.4', gradeB: '4.7' },
];


// 要測試的fn
const getGradeByDate = (data) => {
  ...實作部分省略
  return newData
}

```
getGradeByDate的function目的是 <br/>
『把上面的data轉成一個array並照timepoint這欄位由日期小到大做排序並且放入每個grade的值，如果有缺少的月份就要自動補齊怎樣都要補滿一年的月份』
那這種資料處理function寫起來算是有點小複雜也可能會出錯，所以很值得去寫單元測試保護它，並且透過寫單元測試的過程想清楚整個測試案例與各種可能會出現的狀況。

### 測試案例

```

describe('getGradeByDate testing', () => {
  // 如果api有問題傳了null or undefined 那就要回傳空陣列
  it('getGradeByDate should be empty array when data is null or undefined ', () => {
    expect(getGradeByDate(null)).toBe([]);
  });

  // 不管原始資料月份給幾個月，最後輸出的都是要12個月份
  it('array length should be 12', () => {
    expect(getGradeByDate(mockData).length).toBe(12);
  });

  // 測試fn是否回傳正確的值
  it('getGradeByDate should return correct value ', () => {
    expect(getGradeByDate(mockData)).toBe(expectData);
  });
});
```

以上這樣就是一個簡單的單元測試，其實測試驅動導向開發(TDD)就可以想成是，我們先把測試案例都寫完接著再來實作這個function，那只要寫到測試跑過基本上就開發完成但前提是你要確保你的測試案例想得夠完整。


---

有任何技術問題想要交流或是前端學習上遇到困難都歡迎直接透過 instagram 訊息我 [@kayshih.dev](https://www.instagram.com/kayshih.dev)

---