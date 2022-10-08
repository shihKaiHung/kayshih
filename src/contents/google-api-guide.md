---
title: 如何使用Nodejs串接Google SpreadSheet成為新創公司的強力幫手，讓我手把手帶你實作
author: KayShih
datetime: 2021-05-24T02:05:51Z
featured: false
draft: true
slug: google-api-guide
tags:
  - tech 
description: 新創公司成立初期可能沒有太多資源來建立自家的內部系統來儲存各種資料，這時候 Google spread sheet 就是一個最好的幫手
---

新創公司成立初期可能沒有太多資源來建立自家的內部系統來儲存各種資料，這時候 Google spread sheet 就是一個最好的幫手，甚至能把 spread sheet 就當成自家公司的資料庫，我們可以透過 Google REST API([https://developers.google.com/sheets/api/quickstart/nodejs](https://developers.google.com/sheets/api/quickstart/nodejs))來把資料透過後端寫進去。

---

## 取得 Google Api 憑證

1. 先開啟一個[GCP Project](https://console.cloud.google.com/)
   點選新增專案

2. 建立好專案後接著建立 Google Sheet Api 服務
   點選 Enable Apis and services，接著搜尋 google sheets api 並且點選 Enable

3. 建立 Service Account
   可以想成我們建立一個有權限的機器人帳號來幫我們寫入資料到 sheet, 選擇 create credentials 並選擇 Service account，接著進入建立好的 Service account 來建立 key，接下來我們就能透過拿到的 Key.json 來串接 google sheet api 了

## 開啟 Node 專案

---

以下的範例都會使用 ES6 的寫法，聰明的你一定都看得懂

---

首先我們先在 Node 專案安裝 google-spreadsheet 這個 npm 套件

```
  yarn add google-spreadsheet
```

接下來就是拿表單以及做 Auth 驗證拉，讓我們來寫一個 function 來取得表單吧

```
import { GoogleSpreadsheet } from 'google-spreadsheet'

const getSpreadSheetDoc = async (sheetId) => {
    const client_email = process.env.CLIENT_EMAIL;
    const private_key = process.env.PRIVATE_KEY;
    const doc = new GoogleSpreadsheet(sheetId)
    await doc.useServiceAccountAuth({
        client_email,
        private_key: private_key.replace(/\\n/gm, '\n'),
    });
    return doc;
}

export default getSpreadSheetDoc

```

你可能會對幾個地方有疑惑

###### client_email 是做什麼用的?

其實就是你要寫資料進 sheet 的身份，你可以使用自己的帳號，或是在公司可以特別開一個機器人帳號專門做寫入 sheet 用。

###### private_key 是做什麼用的?

###### private_key.replace(/\\n/gm, '\n') 為什麼這邊要這樣子寫？

接下來就是要把資料寫進 sheet 跟取得 sheet 資料了
