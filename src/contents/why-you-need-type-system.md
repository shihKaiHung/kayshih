---
title: 為什麼你需要TypeScript來救贖你？ 讓型別來幫助提高你前端開發時的可靠性?
author: KayShih
datetime: 2021-06-12T04:06:31Z
slug: why-you-need-type-system
featured: false
draft: false
tags:
  - tech 
description:
  根據 catchsjs 在 2020 年所統計的結果, ReferenceError, TypeError 還有 SyntaxError 共佔了所有錯誤的百分之 85%，這也是 JS 開發者目前在開發上感到最煩躁的幾個問題，
  在這邊我舉幾個常見的錯誤範例。
---


身為一個前端工程師你有遇過這個問題嗎？ 串好 api 後開心 release，結果上線馬上炸掉，一查才發現『欸幹，我欄位名稱寫錯』或是『欸幹，後端 api 該給的欄位怎麼沒有值 』。
夠熟悉嗎？ 這就是你我的前端日常。

根據 catchsjs 在 2020 年所統計的結果, ReferenceError, TypeError 還有 SyntaxError 共佔了所有錯誤的百分之 85%，這也是 JS 開發者目前在開發上感到最煩躁的幾個問題，
在這邊我舉幾個常見的錯誤範例。

### ReferenceError

常看到的有欄位名稱寫錯或是引用錯誤的 module
ex: \_ is not defined, xxxx.field is not defined, Uncaught TypeError: Cannot read property

### TypeError

像是搞錯 Type 或是不去對不存在的欄位值做任何處理
ex: _ is not a function , cannot read property _ of null

### SyntaxError

這個就是常看到寫錯語法
ex: // SyntaxError: expected expression, got ')'

那其實比較可怕的會是前兩者，SyntaxError 目前大多數框架在編譯的時候都能幫你抓出來，但是前兩個錯誤可是會造成你線上系統崩潰啊。

為什麼你寧願要 on-call 修這些 bug，也不願意一開始就選擇一個更安全的開發方式呢？
我知道 JS 動態型別很方便寫起來夠爽夠快，但...真的夠安全嗎？
你可能會說這些都開發者的問題，開發者應該要仔細檢查這些程式碼，但我想的是既然人都會犯錯何不讓工具來限制你不犯這些錯呢？

# Why TypeScript?

上面說了一長串，TypeScript 就是為解決這些問題而生的，根據一份[研究]("https://earlbarr.com/publications/typestudy.pdf")(嫌太長可以直接拉到 Conclusion 的地方看)
指出使用 TypeScript 能解決掉 15%在 JS 裡面遇到的錯誤。 </br>
透過靜態型別，來強制你去處理好每個欄位，讓我們來透過一些簡單的例子看看 TypeScript 怎麼逼你寫出安全的程式碼

```
type Nullable<T> = T | null;

interface Item  {
  name: string,
  id: string,
  value: Nullable<number>
}

const item: Item = {
  name: "name",
  id: "id",
}

let num = item.value + 5 // 此時TS編譯器會顯示Object is possibly 'null'
let max = Math.max(item.name, 5) 此時ts編譯器會告訴你name為string type無法做為number判斷
```

其實我這篇主要想講的是型別系統，不單單只是 TypeScript，純粹只是 TypeScript 目前在前端是比較主流的型別工具，為了多一點關注所以標題才這樣下。
那在前端你除了 TypeScript 以外還有那些可以選擇呢？

- purescript
- elm
- rescript

以上幾個都是具備強型別的語言，最終都會編譯成 JavaScript，但學習難度也都比 TypeScript 高很多。
那你可能會問說這些跟 TypeScript 有什麼差別呢？ 這又是我之後需要寫一篇做研究的文章了。 </br>
但以前目前玩下來的感覺，TypeScript 絕對夠用了，比較熱門的前端套件都有支援。

我接下來也會多介紹一些 TypeScript 的奇淫用法，來幫助你前端寫的更安全更快速更爽。


參考:

https://serokell.io/blog/why-typescript

https://thevaluable.dev/type-system-explained/

https://rollbar.com/blog/top-10-javascript-errors/

https://catchjs.com/Blog/ErrorsInTheWild#common

---

有任何技術問題想要交流或是前端學習上遇到困難都歡迎直接透過 instagram 訊息我 [@kayshih.dev](https://www.instagram.com/kayshih.dev)

---
