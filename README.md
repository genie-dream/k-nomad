# 🗺️ 노마드 코리아 (Nomad Korea)

대한민국 디지털 노마드를 위한 도시 탐색 플랫폼

## 📋 프로젝트 개요

노마드 코리아는 대한민국에서 디지털 노마드 라이프스타일을 추구하는 사람들을 위한 도시 비교 플랫폼입니다. 사용자들은 한국의 다양한 도시에 대한 상세 데이터를 한눈에 비교하고, 자신의 조건에 맞는 최적의 도시를 빠르게 찾을 수 있습니다.

**핵심 가치**: "데이터로 찾는 나만의 작업 천국"

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 🛠 기술 스택

### Core
- **Next.js 16** - React 프레임워크 (App Router)
- **TypeScript** - 타입 안정성
- **React 19** - UI 라이브러리

### Styling
- **Tailwind CSS** - 유틸리티 기반 CSS
- **Shadcn/ui** - 재사용 가능한 UI 컴포넌트
- **Lucide React** - 아이콘 라이브러리

### 특징
- ✅ Server Components 우선 (필요한 경우만 Client Component)
- ✅ TypeScript로 완전한 타입 안정성
- ✅ 반응형 디자인 (데스크톱 우선)
- ✅ Tailwind CSS 커스텀 디자인 시스템

## 📁 프로젝트 구조

```
k-nomad/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 홈페이지
│   └── globals.css          # 글로벌 스타일
│
├── components/              # React 컴포넌트
│   ├── ui/                  # Shadcn UI 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   └── dialog.tsx
│   │
│   ├── Header.tsx           # 헤더 (로고, 검색, 로그인)
│   ├── Footer.tsx           # 푸터
│   ├── AuthModal.tsx        # 인증 모달 (로그인/회원가입 UI)
│   ├── HeroSection.tsx      # 히어로 섹션
│   ├── FilterBar.tsx        # 필터 바
│   ├── CityCard.tsx         # 도시 카드
│   ├── Sidebar.tsx          # 사이드바
│   ├── ValuePropositionSection.tsx  # 가치 제안
│   ├── TestimonialsSection.tsx      # 사용자 후기
│   ├── SortSelect.tsx       # 정렬 선택
│   └── Pagination.tsx       # 페이지네이션
│
├── data/                    # 데이터
│   └── cities.ts           # 도시 더미 데이터 (12개 도시)
│
├── lib/                     # 유틸리티
│   └── utils.ts            # 공통 유틸 함수
│
└── public/                  # 정적 파일
```

## 🎨 주요 기능

### ✅ 구현 완료 (UI만)

1. **헤더 & 네비게이션**
   - 로고 및 브랜딩
   - 검색바
   - 로그인/회원가입 버튼

2. **히어로 섹션**
   - 메인 헤드라인
   - CTA 버튼
   - 소셜 프루프

3. **필터 시스템**
   - 날씨 필터 (따뜻한, 쾌적한, 시원한, 사계절)
   - 특징 필터 (카페, 조용함, 자연, 도심, 해변, 산)

4. **도시 카드 그리드**
   - 12개 도시 정보 표시
   - 평점, 가격, 현재 노마드 수
   - 카페/인터넷/교통 지표
   - 태그 및 좋아요/댓글

5. **사이드바**
   - 이번 주 급상승 도시
   - 실시간 통계
   - 최근 리뷰
   - 인기 도시 TOP 3

6. **가치 제안 섹션**
   - 4가지 핵심 장점 표시

7. **사용자 후기**
   - 3명의 사용자 후기 카드

8. **푸터**
   - 서비스 링크
   - 뉴스레터 구독
   - 소셜 미디어 링크

9. **인증 모달**
   - 로그인/회원가입 UI
   - 소셜 로그인 버튼 (카카오, 네이버, 구글)

## 📊 더미 데이터

12개 한국 주요 도시 데이터 포함:
- 서울, 부산, 제주, 대전, 광주, 강릉
- 전주, 속초, 인천, 여수, 경주, 대구

각 도시별 데이터:
- 기본 정보 (이름, 지역, 평점)
- 비용 정보 (월 생활비)
- 작업 환경 (카페, 인터넷 속도, 교통)
- 날씨 및 현재 노마드 수
- 태그 및 설명

## 🎯 향후 구현 예정

현재는 **UI만 구현**되어 있으며, 다음 기능들은 추후 구현 예정입니다:

- [ ] 실제 인증 시스템
- [ ] 도시 상세 페이지
- [ ] 도시 비교 기능
- [ ] 리뷰 작성 및 관리
- [ ] 검색 기능
- [ ] 필터링 로직
- [ ] 정렬 로직
- [ ] 실시간 데이터 연동
- [ ] 데이터베이스 연동
- [ ] API 구현

## 🎨 디자인 시스템

### 컬러 팔레트

```css
Primary:
- Orange: #FF6B35
- Blue: #004E89

Accent:
- Mint: #00D9C0

Neutrals:
- Light Background: #F7F9FB
- White: #FFFFFF
- Dark Text: #2C3E50
- Gray Text: #6C757D
- Border Gray: #DEE2E6

Semantic:
- Success: #28A745
- Warning: #FFC107
- Danger: #DC3545
```

### 타이포그래피

- 폰트: Pretendard Variable
- 크기: 12px ~ 36px

## 📝 라이선스

MIT License

## 👨‍💻 개발자

Product Manager

---

**노마드 코리아** - 데이터로 찾는 나만의 작업 천국 🗺️
