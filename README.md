
## 🧨 프로젝트 소개

- 주제 : 땅콩스쿨 메인화면 클론


## ✈ 배포 링크

## https://animation-scroll-page.netlify.app/

### [velog 과제 후기](https://velog.io/@yena1025/PreOnboarding4-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B3%BC%EC%A0%9C-%ED%9B%84%EA%B8%B0)


## ✨ 구현한 기능

1. 프로젝트 **초반 세팅** (Typescript, Prettier, eslint, Cypress)
2. **react-slick 라이브러리**로 **슬라이드 기능** 구현 (ReviewSlide 컴포넌트) 
3. **AOS 라이브러리**를 사용하여 **시간차 있는 애니메이션** 구현 (Checks 컴포넌트)
4. **사이트 UI 구현** 및 **반응형 CSS** 적용 (Header, Main, Intro, Video, Checks, ReviewSlide 컴포넌트)
5. **globalStyles 설정** 및 **사이트 실제 폰트** 적용 (Noto Sans KR)
6. **스크롤 시 변화하는 CSS** 적용 (Header)

## 🧶 기술 스택
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![styled-components](https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 


## 🪔 디렉토리 구조

```bash
.
├── components              # 프로젝트 구성 컴포넌트
│   ├── Books
│       ├── BookList.tsx
│       ├── Books.tsx
│       └── BooksCarousel.tsx
│   ├──  ReviewSlide
│       ├── ReviewCarousel.tsx
│       ├── ReviewList.tsx
│       ├── ReviewThumbnail.tsx
│       ├── ReviewThumbCarousel.tsx
│       └── ReviewSlide.tsx
│   ├── Bookmarks.tsx
│   ├── Checks.tsx
│   ├── DiaryBook.tsx
│   ├── Download.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Intro.tsx
│   ├── Main.tsx
│   ├── ReadingBook.tsx
│   └── Video.tsx
├── cypress               # e2e Test
├── pages
│   ├──  _app.tsx         # css, 레이아웃 구성
│   ├──  _document.tsx
│   └──  index.tsx        # 프로젝트 구성 페이지
├── public                # images, gif, mp4
│       ├── images
│       ├── movies
├── styles                # 글로벌 css 적용
│   ├── global-styles.ts
│   ├── global.css
│   └── theme.ts
└── utils
```


## 🌸 설치 및 실행 방법
클론 후 yarn install

    ```bash
      yarn dev
    ```


## 🧚‍♀️ 커밋 컨벤션

깃모지를 사용하여 이모티콘만 보고 커밋의 목적이나 의도를 쉽게 식별할 수 있도록 하였습니다.

| 깃모지 | 사용 예시 |
| --- | --- |
| :sparkles: | 기능 구현 |
| :lipstick: | CSS 스타일링 |
| :wrench: | utils 함수나 types 추가 |
| :fire: | 파일 삭제 |
| :wastebasket: | 코드 삭제 |
| 🚚 | 디렉토리 또는 파일 이동 |
| :package: | 패키지 설치 |
| ♻️ | 리팩토링 |
| 📝 | Readme 수정 |
| 🐛 | 버그 수정 |
