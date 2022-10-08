---
author: KayShih
datetime: 2021-06-06T15:22:00Z
title: 前端工程師的吃飯工具，WebStorm與VScode你怎麼選？
slug: adding-new-posts-in-astropaper-theme
draft: false
tags:
  - tech
ogImage: ""
description:
  在過去幾年前端開發的過程中換了不少吃飯的工具，從 sublime 換到 Atom，又到現在只使用 vscode 以及 WebStorm，我覺得都各有優缺點。那前兩個工具我已經棄用很久了，這篇文章主要想討論我目前還在使用的 vscode & WebStorm，以及討論我為什麼也開始慢慢棄用 WebStom，最後會教大家怎麼免費使用 WebStorm。
---

在過去幾年前端開發的過程中換了不少吃飯的工具，從 sublime 換到 Atom，又到現在只使用 vscode 以及 WebStorm，我覺得都各有優缺點。那前兩個工具我已經棄用很久了，這篇文章主要想討論我目前還在使用的 vscode & WebStorm，以及討論我為什麼也開始慢慢棄用 WebStom，最後會教大家怎麼免費使用 WebStorm。

---

## WebStorm

以定位來說 WebStrom 是屬於 IDE，功能性絕對沒話說，肯定是裡面最強大的一個。我在近兩年的時間都是使用 WebStorm 來做為我的主要編輯器，WebStorm 在 git 處理衝突、改檔名或是 import module 方面以及新增檔案上我覺得都是最優秀的。
如果你是 vim lover 但又不想自己配置 vim 的話，Web Storm 的 ideavim 非常好用。

缺點

1. 吃記憶體吃得非常大，你電腦不夠猛的話真的別想說要用 WebStorm，會卡死在那邊給你看
2. 每次打開專案都需要先花很長時間載入，效能很差啊

## Vscode

做為一款純編輯器來說，VScode 已經非常好用了，特別是加上一些 plug in 後，功能真的直逼 IDE，而且它真的非常快速非常輕量，還有一個比較酷的就是 VScode 提供了協作開發功能，能讓 Developer 在遠端的狀況下做 pair programming，真的非常實用。

缺點

1. 修改文件沒辦法一次全修改
2. 雖然有各種插件，但是功能性還是跟 WebStorm 有點差距
3. Vim 的支援度差，遇到大專案的話用 Vim 會卡卡的

## 在不同場景使用不同工具

不需要堅持一種工具打天下，應該要交替使用，運用在不同的開發場景，這樣才能發揮出最大的效用，分享我會在什麼情況下使用哪個編輯器。

### 功能開發 ＆ 重構

功能開發 & 重構無疑是需要長時間的專注，在這種需要長時間的開發下，我會選擇使用 WebStorm，在需要有效率的開發功能時，WebStorm 真的給了相當大的幫助，不管是在 auto import、tips、format code 方面表現都是最佳的。

### 修 Bug

就像前面有提到的 WebStorm 的效能問題，常常你在做 A 專案突然有個 B 專案的 bug 需要處理，這種情況下還用 WebStorm 開 B 專案就會讓人很椰小，每次都要等很久，所以基本上在處理任何 bug 的時候我都是直接開 vscode 快速解決，相信我每次開專案在那邊等真的會很火。

### 修改檔名

這一項真的不用多說了，WebStorm 大勝，改檔名就自動幫你更新所有的 import，省去超多時間。

### 玩新語言

在學習新語言的狀態下首選肯定是 Vscode，我認為 webstorm 在其他語言的支援度比較沒那麼優秀，像是我最近在學習 Rust、ReScript 比較下來的感覺 vscode 對其他語言的支援真的比較好，可能是因為開源社群關係會有比較多其他語言的 plug in 可以使用。

## 為什麼我慢慢轉向 VScode?

以我目前自己的工作狀態來說，我常常會同時處理不同的專案，WebStrom 的效能真的吃太大了，在幾個專案同時開的狀態下真的容易造成當機，特別是如果你沒調高預設的記憶體那用起來真的是災難。

對我目前來說 WebStorm 反而更像是輔佐 Vscode 的工具，可能我要解 git 衝突或是處理一些重構或檔案命名我就會改開 WebStrom。

當然如果我確定那一天我就是要專注開發新功能，不做其他事情的話，那我也會用 WebStorm，不然以目前來說，我已經慢慢轉向使用 Vscode 作為主力編輯器了。

## 如何免費使用 WebStorm?

付費問題也是很多人不想用 WebStorm 的原因，在這邊教大家一個方式能免費使用，當然不是每個人都可以。假設你學校信箱還能夠使用的話，那 JetBrain 提供學生能免費使用他們的全部產品，只要透過學校信箱申請就可以了，但是每年需要重新認證一次。

可以參考[Free Educational Licenses](https://www.jetbrains.com/community/education/#students)

參考:

[https://www.codegram.com/blog/migrating-from-webstorm-to-vscode/](https://www.codegram.com/blog/migrating-from-webstorm-to-vscode/)

[https://dev.to/gautham495/which-ide-is-better-vscode-or-jetbrains-webstorm-3npn](https://dev.to/gautham495/which-ide-is-better-vscode-or-jetbrains-webstorm-3npn)

[https://iter01.com/592492.html](https://iter01.com/592492.html)

[https://areknawo.com/vs-code-vs-webstorm-can-a-code-editor-stand-against-an-ide/](https://areknawo.com/vs-code-vs-webstorm-can-a-code-editor-stand-against-an-ide/)