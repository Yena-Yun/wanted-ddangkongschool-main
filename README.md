
## 🧨 프로젝트 소개

#### Next.js로 땅콩스쿨 사이트의 메인 화면 클론 <br/>
(아래는 스크롤 시 보여지는 화면의 일부)

![image](https://user-images.githubusercontent.com/68722179/179438906-3715ea63-34d9-47e7-9ba9-312fb7de74d0.png)
![image](https://user-images.githubusercontent.com/68722179/179438938-ff3f5dd4-0938-4ac3-b01f-883c8dbaa55f.png)
![image](https://user-images.githubusercontent.com/68722179/179438981-3284173e-208f-4241-a23f-1fd428614124.png)



## 🧶 기술 스택
![Next.js](https://img.shields.io/badge/Next.js-20232A?style=for-the-badge&logo=next.js&logoColor=da2430)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![styled-components](https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 


## ✈ 배포 링크 및 후기

## [배포 링크](https://animation-scroll-page.netlify.app/)

### [velog 과제 후기](https://velog.io/@yena1025/PreOnboarding4-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A9%94%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B3%BC%EC%A0%9C-%ED%9B%84%EA%B8%B0)


## ✨ 본인이 구현한 기능

1. 프로젝트 **초반 세팅** - Typescript, Prettier, eslint, Cypress
2. **react-slick 라이브러리**로 **슬라이드 기능** 구현 (ReviewSlide 컴포넌트) 
3. **AOS 라이브러리**를 사용하여 **시간차 있는 애니메이션** 구현 (Checks 컴포넌트)
4. **사이트 UI 구현** 및 **반응형 CSS** 적용 (Header, Main, Intro, Video, Checks, ReviewSlide 컴포넌트)
5. **globalStyles 설정** 및 **사이트 실제 폰트**(Noto Sans KR) 적용 
6. Header에 **스크롤 시 변화하는 CSS** 적용


## 🪔 디렉토리 구조

```bash
.
├── components            # 프로젝트 구성 컴포넌트
├── cypress               # for E2E Test
├── pages
│   ├──  _app.tsx         
│   ├──  _document.tsx
│   └──  index.tsx        # 메인 페이지
├── public                # 이미지, 영상 파일
│       ├── images
│       └── movies
├── styles                # global css
│   ├── global-styles.ts
│   ├── global.css
│   └── theme.ts
└── utils                 # util 폴더
```


## 🌸 설치 및 실행 방법

    ```
      프로젝트 클론 -- yarn install로 프로젝트의 패키지 설치 -- yarn dev로 실행
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
