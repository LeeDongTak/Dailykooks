# 데일리국밥

## Description

전국의 국밥 맛집을 검색하고, 지역이나 평점에 따라 필터링하고 해당 국밥집에 대한 댓글을 남길 수 있는 서비스를 제공하는 웹 앱 입니다.

### Features

- State management using Redux
- Asynchronous networking with server using redux thunk
- Write letters to the members of a band
- Perform CRD operations on each letter, currently working on Updating letters
- List of letters are fetched via json-server

### Dependencies

- React
  - react
  - react-dom
- Routing
  - react-router-dom
- State Management
  - @tanstack/react-query
  - @tanstack/react-query-devtools
  - redux
  - react-redux
  - @reduxjs/toolkit
- Firebase
  - firebase
  - @firebase/firestore
- Kakao Map API
  - react-kakao-maps-sdk
- Data Scraping
  - puppeteer  
  - express
- Miscellenous
  - styled-components
  - dayjs
  - react-icons
  - uuid

### File tree

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜avatar.jpg
 ┃ ┣ 📜bannerBg.png
 ┃ ┣ 📜bannerLogo.png
 ┃ ┣ 📜bgbottom.png
 ┃ ┗ 📜bgwall.png
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜InputDiv.jsx
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┣ 📜Letter.jsx
 ┃ ┣ 📜LetterForm.jsx
 ┃ ┣ 📜LetterList.jsx
 ┃ ┣ 📜SignIn.jsx
 ┃ ┗ 📜SignUp.jsx
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┗ 📜Profile.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┣ 📜authSlice.js
 ┃ ┃ ┣ 📜lettersSlice.js
 ┃ ┃ ┗ 📜membersSlice.js
 ┣ 📂shared
 ┃ ┣ 📜Router.jsx
 ┃ ┗ 📜data.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜GlobalStyle.jsx
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

### Usage

1. `git clone` : clone repository
2. `npm install`, `yarn install` : install dependencies modules from `package.json`
3. `yarn start` : open page in development server(localHost)
