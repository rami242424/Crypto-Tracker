
# 🚀 Crypto-Tracker

![GitHub Pages](https://img.shields.io/badge/deployed-yes-brightgreen)  
![React](https://img.shields.io/badge/react-17.0.2-blue) ![TypeScript](https://img.shields.io/badge/typescript-4.9.5-blue) ![License: MIT](https://img.shields.io/badge/license-MIT-green)

**Crypto-Tracker**는 React + TypeScript 기반의 싱글 페이지 애플리케이션으로, 주요 암호화폐의 실시간 시세와 차트를 제공하며 다크/라이트 모드를 지원합니다.

---

## 🔗 데모

Live demo:  
https://rami242424.github.io/Crypto-Tracker/

<p align="center">
  <img src="docs/screenshot-home.png" alt="홈 화면 스크린샷" width="600" />
</p>
<p align="center">
  <img src="docs/screenshot-chart.png" alt="차트 화면 스크린샷" width="600" />
</p>

---

## ✨ 주요 기능

- **코인 리스트 조회**  
  CoinGecko API를 활용해 상위 100개 코인 목록을 가져옵니다.
- **코인 상세 페이지**  
  • 시세 정보(현재가, 24h 거래량, 시가총액)  
  • 캔들스틱 차트 & 라인 차트(기간별 OHLCV)  
- **다크/라이트 모드 토글**  
  Recoil 전역 상태로 언제든 모드를 전환할 수 있습니다.  
- **SEO & 헤드 관리**  
  `react-helmet`으로 페이지 제목 및 메타 태그 설정  
- **리스폰시브 디자인**  
  CSS Grid & Flexbox로 모바일부터 데스크톱까지 최적화  

---

## 🛠️ 기술 스택

| Layer       | Library / Tool                   |
| ----------- | -------------------------------- |
| UI Framework| React 17                         |
| Language    | TypeScript 4.9                   |
| State       | Recoil                           |
| Data Fetch  | React Query                      |
| Routing     | React Router v5                  |
| Styling     | styled-components                |
| Charts      | ApexCharts, react-apexcharts     |
| SEO         | react-helmet                     |
| Testing     | Jest, React Testing Library      |
| Deployment  | GitHub Pages (gh-pages)          |

---

## 📂 폴더 구조


src/
├─ api/
│  └─ api.ts            # Coin API 호출 함수
├─ atoms.ts             # Recoil 전역 상태 정의
├─ components/          # 재사용 가능한 UI 컴포넌트
├─ routes/
│  ├─ CoinList.tsx      # 홈(코인 리스트) 화면
│  ├─ Coin.tsx          # 코인 상세 페이지
│  ├─ Chart.tsx         # 차트 컴포넌트
│  └─ Price.tsx         # 가격 정보 컴포넌트
├─ Layout.tsx           # 공통 레이아웃 (헤더, 토글)
├─ Router.tsx           # Route 정의
├─ theme.ts             # styled-components 테마 정의
├─ App.tsx              # ThemeProvider, GlobalStyle 적용
└─ index.tsx            # Root 렌더링 & BrowserRouter 감싸기


---

## ⚙️ 설치 & 로컬 실행

1. **Repository 클론**  
   ```bash
   git clone https://github.com/rami242424/Crypto-Tracker.git
   cd Crypto-Tracker
   ```
2. **패키지 설치**  
   ```bash
   npm install
   ```
3. **개발 서버 시작**  
   ```bash
   npm start
   ```
4. **테스트 실행**  
   ```bash
   npm test
   ```

---

## 🚢 배포 (GitHub Pages)

```bash
# gh-pages 패키지 설치 (한 번만)
npm install --save-dev gh-pages

# 배포
npm run deploy
```

`package.json`에 다음 스크립트와 homepage를 설정해야 합니다:

```jsonc
{
  "homepage": "https://rami242424.github.io/Crypto-Tracker",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

---

## 🤝 기여하기

1. Repository를 Fork  
2. 새로운 브랜치 생성  
   ```bash
   git checkout -b feature/<my-feature>
   ```
3. 변경 사항 커밋  
   ```bash
   git commit -m "feat: add my feature"
   ```
4. 원격 브랜치로 푸시 & Pull Request 생성

```
