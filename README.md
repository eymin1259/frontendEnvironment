# frontendEnvironment

- 프론트엔드 개발환경 제로부터 구축
- 웹팩, 바벨, 린트
- 자료
  - [프론트엔드 개발환경의 이해와 실습](https://www.inflearn.com/course/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD)
  - [프론트엔드 개발환경의 이해와 실습 블로그](https://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
  - [FE가이드 번들러](https://ui.toast.com/fe-guide/ko_BUNDLER)

## npm

- 자바스크립트 패키지 매니저이다.
- Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할
- 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공한다
- package.json 파일을 통해서 "프로젝트 정보" 및 "패키지 의존성" 관리

## webpack

- 웹팩은 여러개 자바스크립트 파일을 하나의 파일로 합쳐주는 번들러(bundler)다.
- 하나의 시작점(entry point)으로부터 의존적인 모듈을 전부 찾아내서 하나의 결과물을 만들어 낸다.
- --mode는 웹팩 실행 모드는 의미하는데 개발 버전인 development를 지정한다
- --entry는 시작점 경로를 지정하는 옵션이다
- --output은 번들링 결과물을 위치할 경로다

## loader

- 로더는 리소스들을 웹팩이 접근가능한 모듈로 변환시킨다.
- 타입스크립트 같은 다른 언어를 자바스크립트 문법으로 변환, 이미지를 data URL 형식의 문자열로 변환, CSS 파일을 자바스크립트에서 직접 로딩할수 있도록 모듈로 변환
- 리소스들이 자바스크립트가 접근 가능한 모듈로 변환되면 import 구문으로 리소스들을 자바스크립트 코드 안으로 가져올수 있다.

## plugin

- 번들된 자바스크립트를 난독화 한다거나 특정 텍스트를 추출하는 용도
- 로더가 파일 단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다.

## babel

-
