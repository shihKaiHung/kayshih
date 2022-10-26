---
author: KayShih
datetime: 2022-10-25T20:20:35Z
title: Islands Architecture會為前端帶來什麼樣新的改變嗎
featured: false
draft: false
slug: islands-architecture
tags:
  - Tech
description:
    前陣子把自己的個人網站從Gatsby改移到Astro，在開發Astro的時候就看到了這個有趣設計模式，所以做了點功課研究它是為了解決什麼樣的問題而被提出來的。
---

前陣子把自己的個人網站從Gatsby改移到Astro，在開發Astro的時候就看到了這個有趣設計模式，所以做了點功課研究它是為了解決什麼樣的問題而被提出來的

Islands Architecture孤島架構是在2019年由Etsy的前端架構師所提出來的設計模式，其目的很簡單就是為了解決SSR with hydrate TTI過高的問題。

### 起源

目前大部分框架SSR with hydrate策略都是需要等全部的元件hydrate完成之後才能讓使用者做交互，如果有用過LightHouse跑過分數的話會看到裡面有一項標準叫做TTI(Time to Interactive)，而傳統的這種Hydrate策略會造成TTI的時間過高，Islands Architecture其實就是為了解決TTI過高的問題而出現的。

### 概念

Islands Architecture的原理其實就是把每個需要用到JS的元件獨立出來，變得像是獨立的插件一樣可以放到你靜態網站的任何一個地方接著搭配Partial Hydration使得每一個獨立component只需要個別載入所需的JS做hydrate就好，而不需要等待一整包的JS載入進來才開始做hydrate。

『Islands Architecture的關鍵在於一定要能做到Partial Hydration，沒這個前提下通通都不算Islands Architecture』

![island-architecture](/img/islands-architecture/image1.png)

在Islands Architecture下，會將元件拆分為兩種

1. 動態交互元件
2. 靜態元件

每個動態元件都是各自獨立的，且會同時間各做各的hydrate而不會因為效能差的元件去影響到其它元件，既然同時存在動態與靜態元件那server side生成的時候該怎麼去做分別？
實作Islands Architecture的框架會透過『占位符』(placeholders/slots）的方式預先留好插入動態元件的地方接著在clien-side各別同時做partial hydration。

Islands Architecture合適的場景還是適用於以靜態內容為主的網站，在少數需要做交互的地方插入獨立的動態元件，如果是大量交互需要的web應用反而就不合適這種作法

總結
Island Architecture其實就是結合不同的前端技術所建構出來的設計模式(SSR + SSG + Partial Hydration + slot/placeholder)

1. 性能佳且包含所有SSR & SSG的優點
     減少非常多需要發送的client side的JS僅需要加載有交互的組件部分，使得畫面載入能更快速以及獲得更好的TTI指標。
2. 不合適大量需要交互的應用，會切出過多的Island components導致交互出現問題
3. 目前實作Island Architecture的框架還不多

優化TTI來幫助使用者獲得更良好使用者體驗的架構，會非常適合用在以內容為主的網站，相信未來會有越來越多靜態內容網站都會開始嘗試這種架構來開發。

### Reference

https://jasonformat.com/islands-architecture/
https://www.patterns.dev/posts/islands-architecture/