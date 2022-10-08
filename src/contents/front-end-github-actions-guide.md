---
author: KayShih
datetime: 2021-10-25T12:13:24Z
title: 給前端工程師的Github Actions教學，幫你的前端專案建立CI/CD流程
slug: front-end-github-actions-guide
featured: false
draft: false
tags:
  - tech
  - ci/cd
ogImage: ""
description:
  Github Actions 是 Github 提供用來做 CI/CD 的服務，透過 Actions 我們能很輕鬆的為我們專案在 github 上將測試、版本發佈、軟體部署等流程做成自動化，
  而在 Actions 還沒出來之前，我們都是使用第三方的服務來處理這些自動化，像是 circleci、jenkins、travisci 等等。
---

關於 Github Actions 的分享，我會分為兩篇文章 <br/>
第一篇主要是在講 Actions 基本介紹以及如何搭配實際的開發流程，像是送 PR 如何去觸發 actions，來幫助團隊建立更自動化的流程。
<br/> 第二篇我會用前端專案做範例，如何透過 Actions 跑單元測試、型別檢查並且打包後部署到環境上。

---

## Actions

Github Actions 是 Github 提供用來做 CI/CD 的服務，透過 Actions 我們能很輕鬆的為我們專案在 github 上將測試、版本發佈、軟體部署等流程做成自動化，
而在 Actions 還沒出來之前，我們都是使用第三方的服務來處理這些自動化，像是 circleci、jenkins、travisci 等等。

### [MarketPlace](https://github.com/marketplace)

Github 建立了與 npm 套件相同的方式，開發者能將自己建立好的流程發佈到 Marketplace 上面給其他開發者使用，所以在使用 Actions 時都可以先到 marketplace 上找找相關的套件，節省掉自造輪子的時間，當然也不是所有套件都是免費的，每個都套件都會在上面寫他們自己的收費方式，要使用前記得先看一下，如果你自己也寫了一套不錯的流程也能發佈到 Marketplace 上，讓別人來使用。

## Actions 語法

![actions YAML](/img/front-end-github-actions-guide/yml-image.png)

目前現在主流的 CI/CD 服務都是透過 YAML 檔案來進行設定，當然 Actions 也不例外，在我們開始之前先來了解幾個比較常用到的語法

### Workflow

actions 會幫我們執行各種自動化流程，而這些每一條流程就被稱作為 Workflow 而 Workflow 的設定是由 YAML 檔案來撰寫，每份 YAML 檔案就代表一條 Workflow，你可以將你的 Workflow 設定不同的觸發條件去執行。

在了解 Workflow 是什麼後，我們就可以往下看每條 Workflow 會被哪些語法所組成

- on
  <br/>
  用來設定 workflow 的觸發條件，可以根據 github 的各種操作觸發，像是 push、merge、tag 等等，幾乎任何 github 的操作都能當作觸發條件，同時還可以寫 patterm 對 branch 名稱做篩選。

- Job
  <br/>
  每個 workflow 都可以設定多個 job 每個 job 都會開新的 instance 來執行，所以 job 之間不會有任何關聯，每個 job 之間的檔案也沒法直接取來用，需要透過其他方式將 job 中檔案上傳，另外一個 job 才能下載來使用。
  Job 可以設定條件依據其他 Job 的狀態來執行，譬如 Job-1 完成後才執行 Job-2，如果沒設定條件的話，那所有 Job 會同時執行。

- Step
  <br/>
  Job 是由 Step 所組成的，Step會在相同的 instance 中執行，所以 Step 所建立的檔案或是資料是可以傳遞到下一個 Step。

---

其實透過 Actions 建立自動化流程並沒有想像中的那麼難，可以想成只是把你平常在 local 端做的指令操作依序放到 Actions 讓它幫你跑而已，下一篇文章就讓我們用前端 Next + TypeScript 來做練習，透過 Actions 建立一個帥氣的 CI/CD 流程。