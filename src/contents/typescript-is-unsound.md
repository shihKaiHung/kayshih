---
title: 你知道TypeScript的型別系統是不健全的嗎?
author: KayShih
datetime: 2022-10-01T04:06:31Z
slug: typescript-is-unsound
featured: true
draft: false
tags:
  - tech 
description: "對於大多數的前端開發者來說，如果過去沒接觸過其他強型別語言的話，唯一比較有機會接觸到就是TypeScript or Flow了 最近開始深入研究型別系統，了解到型別系統可被分為健全(Sound)與不健全(Unsound)兩種"

---

『型別系統宇宙....是我們幾乎不了解的概念』

『你對型別系統宇宙了解多少？』

對於大多數的前端開發者來說，如果過去沒接觸過其他強型別語言的話，唯一比較有機會接觸到就是TypeScript or Flow了
最近開始深入研究型別系統，了解到型別系統可被分為健全(Sound)與不健全(Unsound)兩種

## Sound
Sound Type System能夠保證所有在compiler驗證通過的型別，不會在runtime階段出現跟預期不符合的情況而造成錯誤。

## Unsound
部分情況下，型別系統無法保證在runtime階段出現的型別都與compiler階段所定義的一致，簡單來說就是會跑出意想不到的狀況。

『不健全的型別系統無法保證某些操作在compiler階段是安全的，且其型別推論也很容易失效。』

## 那為什麼TypeScript不打算做到100% soundness呢？

這問題其實愛好型別系統的開發者也在問，TS團隊也有給出明確的回答，他們就是不打算追求100%的soundness，因為強型別語言的設計需要考量 Soundness、 Usability還有complexity，他們必須在這三者之間做trade-off，他們希望TypeScript是好用且簡單，再來就是TypeScript是希望能完全支援JavaScript的語法，而JS語法本身就是完全不利於做到Sound，像是兩個不同型別的變數相加會產生無法確定的型別。

這也是為什麼其他compile-to-js的強型別語言都不打算基於JS語法去實作，像是PureScript語法就類似於Haskell、ReScript則是基於Ocaml的語法。


## ️Sound type system  
  有哪些語言是有完全健全的程式語言呢？
  像是Rust, Ocaml, Haskell還有上面提到的兩個PureScript, ReScript等等都是，那相比之下Sound Type System有哪些優勢呢？

  - runtime運行時保證不會出現與其型別不同的錯誤，所有型別相關的錯誤在compiler階段就會被抓出來
  - 更優質的型別推論，在寫TS的時候會發現常常complier會不知道某個變數型別是什麼而開發者必須要自己手動定義清楚。
  - 高維護性，在Sound Type System下寫程式碼會有高度安全感，因為改了某段code造成其他地方的程式碼有問題都會被complier抓出來。

相對的劣勢就是剛剛提到的那三個權衡指標，這些語言的共通性就是難到靠北而且寫起來也相對複雜很多，如果是JS開發者想試試看Sound Type System的話，我推薦可以從ReScript開始試試看，ReScript是Facebook之前React核心團隊的成員出來開發的一套語言，我自己覺得難度也不低，有興趣的可以試試看。