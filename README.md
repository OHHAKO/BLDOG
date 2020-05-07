# 블록체인을 이용한 동물 기록관리 웹 서비스(BLDOG)

- 프로젝트명 : BLDOG(블록체인을 이용한 동물 보호소 기록관리 웹 서비스)
- 개발 환경 : Ubuntu 16.04 LTS, Docker, AWS(EC2)
- 개발 언어 : TypeScript, JavaScript
- 개발 도구 : Visual Code, Composer, Yeoman
- 적용 기술 : Angular6, Hyperledger Fabric(Composer), Rest API, NodeJs, Mongodb, Bootstrap
- **담당 분야 : 웹 풀스택(Angular,Rest API,MongoDB)**

### 1. 프로젝트 소개

### BLDOG은 동물보호소 업무 시 관리자가 이용하는 '동물 기록관리 웹 서비스'입니다.<BR>

유기견 불법 안락사, 보호소 견사 부족 등 동물을 체계적으로 관리하는데 어려움을 겪고 있는 보호소의 **'개체관리 인프라'**를 만드는 것이 프로젝트 기획 의도입니다.
서비스 이용 대상자는 '동물 보호소'를 운영하는 관리자 입니다. 보호소에 동물이 `들어오고` `임시보호`되고 `입양`되기 까지 동물에 관한 이력을 웹 애플리케이션에서 관리합니다. 다른 보호소로 동물을 보내면 해당 이력 데이터를 받는 보호소에서 관리 할 수 있습니다. 이 기능은 데이터 자산화, 원장 공유, 투명성을 특징으로 하는 Blockchain기술을 웹 애플리케이션에 적용하여 구현했습니다.

### Directory 설명

- SRC\lib\logic.js , SRC\models\org.example.mynetwork.cto , SRC\permissions.acl , SRC\queries.qry
  js, cto, acl, qry 파일을 기반으로 배포가능한 아카이브 파일 tutorial-network@[version].bna 생성.
- SRC\package.json
  Version, Script, Dependency 관리
- SRC\networkadmin.card
  블록체인 네트워크에 연결하는데 필요한 모든 정보를 제공
- SRC\bldog-app
  웹 애플리케이션 프로젝트 폴더
- SRC\bldog-app\dbService
  Atlas mongodb와 웹 애플리케이션 연동을 위한 Rest Server(nodejs) 데이터
- SRC\bldog-app\src\app\org.example.mynetwork.ts
  블록체인 model 코드
- SRC\bldog-app\src\app\org.hyperledger.composer.system.ts
  블록체인과 웹 애플리케이션 연동 정보

설치 방법, 사용 예제, 개발 환경 설정 방법, 기여 방법, 변경 로그, 라이센스 및 작성자 정보를 포함해야 한다.

<!-- <ul>
  <li> 유기동물 개체 증가로 보호소 견사 부족 </li>
  <li> 안락사 </li>
  <li> 운영 자금이 부족해 기부금 확립 필요 </li>
</ul>

버려지는 유기동물의 개체수 또한 증가하고 있습니다. <BR>
보호소의 역할이 더욱 막중해지고 있지만 관리에 필요한 **기술적 인프라가 부족**합니다.
많은 동물 보호소가 열악한 환경에서 동물을 관리하고 있고, 모자란 운영비로 인해 정부의 지원과 기부를 받으며 운영하고 있는 상황입니다. <BR>
어려운 사정으로 인해 불법적으로 안락사를 시행하는 보호소가 상당수입니다. <BR>
우리 팀은 동물 보호소가 갖고있는 고민을 기술 인프라로 해결하고자 했습니다. <BR>
블록체인 기술을 적용하여 **기부금, 동물 관리 업무시 남기는 기록물을 투명하게 공고히 저장하도록** 했습니다. -->

<!-- ### 프로젝트 시스템 구조

![bldog system img](/bldog-system.jpg)

### 팀 기술 포지션

| Name | Description             | Social                              |
| ---- | ----------------------- | ----------------------------------- |
| hako | 웹 서비스 구현          | [github](https://github.com/OHHAKO) |
| 김OO | 웹 페이지 UI,UX         |                                     |
| 이OO | Block-Chain 및 AWS 환경 |                                     |
| 정OO | Block-Chain 및 AWS 환경 |                                     | -->

<!--
[수행 역할 설명]
프로젝트에서 웹 서비스 부문을 풀 스택으로 담당했습니다. 프론트단은 Typescript 언어를 기반으로 동작하는 Angular 프론트 프레임워크를 사용했고 “Angular Assentials” 도서를 참고하여 프로그래밍 했습니다. Node Package Manager 사용, 네트워크 기능 접근이 용이한 CLI 그리고 Hyperledger Fabric와 관련된 모듈을 Angular에 로드하는 작업을 Docker를 통해 진행해야 했는데 서버를 통합적으로 편리하게 관리하기 위해 Ubuntu Linux 환경에서 개발을 진행했습니다.
서비스에서 웹이 출력하는 데이터는 두 가지로 나누어집니다. 프로젝트 취지에 맞게 ‘자산화’한 데이터와 일반 데이터입니다. 동물관련 정보와 기부금 정보에 해당하는 자산 데이터는 Hyperledger Fabric에 의해 Couch DB에 저장되고 그 이외의 데이터는 MongoDB에 저장했습니다. 연관된 정보를 프로그래머가 한눈에 파악하기 쉬운 Object형 데이터를 저장하기 위해 MongoDB(Nosql )를 사용했습니다. 팀원이 데이터베이스에 필요 정보를 추가하고 수정할 수 있도록 해당 데이터베이스를 Atlas (Cloud service)에 생성했습니다. 두 데이터베이스에 접근해 유저 호출에 따른 응답을 제공하는 Rest API를 구현했습니다.
Rest API는 앱에서 http 비동기식으로 Database 데이터를 호출했고 응답받은 데이터를 태그에 바인딩 합니다. 응답 데이터를 바인딩 하기 전, DB에 저장된 객체를 가장 작은 단위로 파싱 하고 변수에 저장해야 하는데, Typescript의 특성 상 모든 변수의 타입을 명시해야 했습니다. 그러다 같은 변수타입의 데이터를 여러 컴포넌트에서 반복해 호출하는 것을 알게 되었고 반복되는 변수의 집합을 namespace단위로 구성하여 의존성 모듈을 만들었고 사용하는 컴포넌트에서 모듈을 이용하도록 했습니다. Angular를 사용하면서 가장 매력을 느꼈던 부분은, 사용하는 컴포넌트가 많아질수록 리소스 구조가 점점 복잡해지는 문제를 Routing에서 컴포넌트 간 관계를 명시해 해결할 수 있다는 점 이었습니다. -->
