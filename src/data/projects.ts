import Alebaba from "/Alebaba.png";
import PaletteMe from "/PaletteMe.png";
import BiteByte from "/BiteByte.png";
import { Project } from "../types/project";

const projectsData: Project[] = [
  {
    projectId: "Alebaba",
    image: Alebaba,
    title: "알고리즘 리뷰 바로바로",
    date: "2025.01.06 - 2025.02.21",
    people: "프론트엔드 개발 3명, 백엔드 개발 3명",
    figma:
      "https://www.figma.com/design/CrAIylZXbccNAxUqLKmCKP/A702?node-id=1-492&t=3yqIOmX2JqOCE2HM-1",
    description:
      "개발자 취업 준비생들을 위한, 알고리즘 풀이를 기록하고 공유하는 리뷰 플랫폼",
    technologies: ["JavaScript", "React"],
    features: [
      "공통 컴포넌트 구현",
      "문제 설정 기능 구현: 문제 이름, URL, 제한 시간(시, 분, 초)을 설정할 수 있는 UI 제공",
      "테스트 진행 화면 개발: 문제 목록, 문제 설명, 통합 코드 에디터(Java, Python, JavaScript, C++ 지원) 및 실시간 타이머 제공",
      "코드 에디터 기능 구현: 다크 모드/화이트 모드 전환 지원, 작성 중인 코드 자동 임시 저장 기능",
      "코드 실행 및 제출 기능 구현: 코드 실행 결과를 실시간으로 확인할 수 있는 UI 제공, 제출 버튼 클릭 시 코드 제출",
      "실시간 콘솔 출력 제공: 코드 실행 결과를 UI 내 콘솔 창에서 실시간으로 확인 가능",
    ],
  },
  {
    projectId: "PaletteMe",
    image: PaletteMe,
    title: "PaletteMe",
    date: "2025.02.24 - 2025.04.11",
    people: "프론트엔드 개발 3명, 백엔드 개발 3명, 디자인 1명",
    github: "https://github.com/ImJiyun/PaletteMe",
    figma:
      "https://www.figma.com/design/Z0E6sCCdrxu2zMjefDqymH/-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85--PaletteMe?node-id=455-2565&m=dev",
    description:
      "예술을 어렵게 느끼는 이들을 위해 다양한 미술 작품을 소개하고, 개인의 미술 취향을 발견할 수 있도록 돕는 서비스",
    technologies: [
      "TypeScript",
      "React",
      "Redux-Toolkit",
      "Tanstack Query",
      "Tailwind CSS",
    ],
    features: [
      "공통 UI 컴포넌트(버튼, 모달, 토스트 등) 구현으로 플랫폼 전반에 일관된 사용자 인터랙션 제공",
      "Redux Toolkit을 사용한 다중 회원가입 페이지 구현으로 사용자 등록 과정 개선",
      "react-hook-form을 사용하여 동적 폼을 구현하고, 사용자 입력 검증 및 에러 메시지 처리",
      "JWT 인증 방식을 통한 로그인 및 회원가입 기능 구현",
      "인증된 사용자와 비회원 사용자의 라우팅 접근 제어 구현 (회원 전용 vs 비회원 전용 페이지)",
      "Tanstack Query를 사용해 효율적인 서버 데이터 가져오기, 캐싱 및 동기화 처리",
      "tailwind css로 반응형 웹 구현",
    ],
    achievements: [
      "prefetching을 이용해 로딩 속도 향상 및 사용자 경험 개선",
      "Form 처리, 인증 로직 등을 커스텀 훅으로 분리해 컴포넌트의 책임 분산",
      "디자인 시스템을 구축해 일관된 UI/UX 제공",
      "반 내 최우수상 수상",
    ],
  },
  {
    projectId: "BiteByte",
    image: BiteByte,
    title: "BiteByte",
    date: "2025.04.14 - 진행중",
    people: "프론트엔드 개발 3명, 백엔드 개발 3명",
    figma:
      "https://www.figma.com/design/NvF1FDXghDUi4KW6mLwvh6/%F0%9F%8D%AA-Bite-Byte?node-id=305-1113&t=8kQ8VLRH9mbgl4Vr-1",
    description:
      "컴퓨터 공학 지식을 퀴즈로 배우고 점검할 수 있는 CS 학습 웹사이트",
    technologies: [
      "TypeScript",
      "React",
      "Redux-Toolkit",
      "Redux-Toolkit Query",
      "Tailwind CSS",
    ],
  },
];

export default projectsData;
