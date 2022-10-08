---
author: KayShih
datetime: 2021-07-05T04:58:53Z
title: 五個前端初學者上常看到的錯誤
slug: five-common-mistake
featured: false
draft: false
tags:
  - tech
ogImage: ""
description: 最近幫了一些剛轉職的朋友做 Code Review，發現都有些共同問題，雖然乍看下可能不會馬上對程式造成什麼錯誤，但這些寫法可能在未來造成其他程式出現不可預期的錯誤，所以我想寫篇文章列出一些常見的操作錯誤來幫助寫出更正確的程式碼。
---
最近幫了一些剛轉職的朋友做 Code Review，發現都有些共同問題，雖然乍看下可能不會馬上對程式造成什麼錯誤，但這些寫法可能在未來造成其他程式出現不可預期的錯誤，所以我想寫篇文章列出一些常見的操作錯誤來幫助寫出更正確的程式碼。

---

## 常見錯誤 1. 誤把會回傳的新陣列的方法當作 for 迴圈使用而造成 side effect

```
錯誤

const arr = [5, 7, 11, 13];
const a1 = arr[0] // 5
arr.map((a, i) => arr[i] = a + 2);
console.log(a1) // 5
console.log(arr[0]) // 7

你可以這麼寫
const newArr = arr.map((a) => a + 2);
```

## 常見錯誤 2. 不考慮物件的資料變動性(mutable)問題

在 JS 的 Array ＆ Object 操作上，我們都應該盡量使用 immutable 來處理以避免 side effect 的狀況。

```
錯誤1

let arr = [5, 7, 11, 13];
const arr2 = [4, 2,8]
arr2.forEach(a => arr.push(a));

你可以這麼寫
1. const newArr = arr.concat(arr2)
2. const newArr = [...arr, ...arr2];

錯誤2

let obj = {
   name: "Tony"
}

let obj2 = obj

obj.name = "Adam";

console.log(obj2.name). // Adam

你可以這麼寫

- 使用object assign

1. let obj2 = Object.assion(obj)

- 使用Spread syntax
2. let obj2 = {...obj}

```

## 常見錯誤 3. 淺拷貝 & 深拷貝處理

這個問題算是接續上一個錯誤的，我們修改一下上面的範例

```
錯誤

let obj = {
   name: "Tony",
   detail: {
     age: 5,
     sex: "male",
   }
}

let obj2 = obj

obj.detail.age = 17;

console.log(obj2.detail.age) // 17

你可以這麼寫

- 使用JSON.parse & JSON.stringify
1. let obj2 = JSON.parse(JSON.stringify(obj));

- 使用Library eg: Lodash
2. let obj2 = _.cloneDeep(obj)
```

## 常見錯誤 4. 不使用嚴格相等 ===

我們都知道在 JS 使用非嚴格相等會造成變數自動轉型，請記住型別是非常重要的一件事，任何轉換型別的操作應該都要另外做，而不要透過非嚴格相等來轉型，這樣才能避免資料處理上出現非預期性的錯誤，這也是為什麼大部分團隊的規範都會限定只能用嚴格相等。

## 常見錯誤 5. 不針對 null & undefined 做任何處理

undefined & null 這是前端工程師最常出現的 bug，這也是為什麼我再之前的文章(為什麼你需要 TypeScript 來救贖你？ 讓型別來幫助提高你前端開發時的可靠性)中有推薦大家可以使用 TypeScript 來做型別保護。

```
錯誤
const arr = [
  {
    value: 2,
  },
  {
    value: 5,
  },
  null
];
const arr2 = arr.map(v => v.value + 2)  // err Cannot read property 'value' of null

你可以這麼寫
1. const arr2 = arr.map(v => v && v.value - 2)

使用optional chaining
2. const arr = arr.map(v => v?.value - 2)

```

---

有任何技術問題想要交流或是前端學習上遇到困難都歡迎直接透過 instagram 訊息我

我的官方 IG [@kayshih.dev](https://www.instagram.com/kayshih.dev)