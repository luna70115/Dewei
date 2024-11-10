# Vue 3 + Vite + TS 起手專案
腳手架為Vite，使用的語言是TS並掛載Vue

## 主要運用的套件

- quasar UI組件
- pinia 狀態儲存
- autoImport 自動引入

## 架構說明

### _app 自動化等的設定檔存放位置
專案的路由是使用自動化。
若有要新增頁面只需要在pages新增vue檔案，就會自動新增在Vue-router中。
支援多層路由 example:user/phone

### assets 樣式／媒體檔
存放圖、影、scss的資料夾

### components 樣式／媒體檔
存放可重用的 Vue 組件

### directive
自定義directive存放地點，已經搭配自動化載入。
新增檔案後會自動加入Vue

### interceptors
儲存axios攔截器的資料夾，依照功能區分檔案

### layouts layout存放位置
專案的路由可以設定不同路由搭配指定layout。
這個資料夾專門儲存layout的.vue檔

### locales
儲存語系檔的資料夾，依照語系區分檔案

### pages 頁面存放位置
放入此資料夾的檔案，會自動設定並加入Vue-router

### store 狀態儲存的資料夾
儲存pinia的資料夾，pinia會根據功能分成不同的ts檔

### utills
儲存小函式所存的資料夾，目前是一個函式一個檔案。
可以依照個人需求更改。

### models
儲存class的資料夾，可以以功能區分各個檔案

### types
儲存interface以及types等的資料夾，與models一樣可以使用功能來區分檔案

### public
存放不會打包的靜態檔


### 其他設定檔

- auto-imports.d.ts 自動引入產生的設定檔 ts用

- vite-env.d.ts 可以在專案中運用vite環境的設定檔

- .eslintrc-auto-import.json 自動引入的設定檔

- tsconfig.node.json tsconfig.json的額外設定檔

- quasar-variables.scss quasar的變數檔，可以在此檔案中設定quasar的變數

## Version

- **Node.js** v20.9.0
- **yarn** v1.22.18
- **vue** v3.4.31

## Config

- **.env.development** 開發模式
- **.env.production** 生產模式
- **.env.uat** 測試模式

## Setup

```
yarn install
```

### Compiles and minifies for production

```
yarn run dev 開發模式
yarn build 生產模式
yarn build:uat 測試模式
```

### Deploy

執行 compile 之後根目錄下產生 `/dist` 檔案夾

## 結構概覽
VUE_VITE_TS_START/                # 專案根目錄
├── env/                          # 環境變數文件，包含 .env.development、.env.production、.env.uat 等
├── mock/                         # 模擬數據資料夾，用於本地開發測試 API 數據
├── node_modules/                 # 安裝的依賴包，由 Yarn 或 npm 管理
├── public/                       # 不會被打包的靜態資源，例如 favicon 圖標
├── src/                          # 主應用程式的源代碼目錄
│   ├── _app/                     # 全局設定和自動化配置檔案
│   ├── assets/                   # 靜態資源資料夾，包含圖片、影片、樣式等
│   ├── components/               # 可重用的 Vue 組件資料夾
│   ├── directives/               # 自定義指令的資料夾，新增指令會自動註冊
│   ├── interceptors/             # axios 攔截器資料夾，根據功能區分文件
│   ├── layouts/                  # 儲存不同路由版型的 .vue 檔案
│   ├── locales/                  # 多語系支援資料夾，語言包檔案按語系區分
│   ├── pages/                    # 頁面組件資料夾，檔案會自動生成路由
│   ├── store/                    # Pinia 狀態管理資料夾，按功能分成多個 ts 文件
│   ├── utils/                    # 小工具函數資料夾，根據功能分文件
│   ├── App.vue                   # Vue 根組件
│   ├── auto-imports.d.ts         # 自動引入插件生成的類型定義檔案
│   ├── axios.ts                  # axios 配置和初始化文件
│   ├── i18n.ts                   # 國際化配置檔案
│   ├── main.ts                   # 應用的入口文件，初始化 Vue 實例
│   ├── quasar-variables.sass     # Quasar 的變數文件，用於自訂 Quasar 样式
│   ├── router.ts                 # 路由設定文件，負責管理應用的路由
│   └── vite-env.d.ts             # Vite 環境變數的 TypeScript 類型定義文件
├── .editorconfig                 # 編碼風格設定文件，為不同編輯器提供一致的代碼格式
├── .eslintrc-auto-import.json    # 自動引入插件的 ESLint 配置
├── .gitignore                    # Git 忽略文件，用於排除不需要追蹤的文件
├── .prettierrc                   # Prettier 配置文件，用於統一代碼格式
├── eslint.config.js              # ESLint 配置文件，用於代碼風格檢查
├── index.html                    # 應用的 HTML 入口文件
├── package.json                  # 專案的依賴、腳本和其他配置信息
├── README.md                     # 專案的說明文件，包含安裝、使用說明
├── tsconfig.json                 # TypeScript 配置文件
├── tsconfig.node.json            # TypeScript 的 Node.js 環境配置補充文件
├── vite.config.ts                # Vite 配置文件，包含插件和構建設定
└── yarn.lock                     # Yarn 鎖定文件，確保相同的依賴版本
