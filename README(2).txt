프로젝트 : BL-DOG
- 블록체인을 이용한 동물 기록관리 웹 서비스

팀 : 블독주인
- 1591003 김정문 / 웹페이지 구성 및 DB 연동
- 1591042 김하경 / 웹서버 REST API 및 프론트단 퍼블리싱
- 1492033 이준영 / Block-Chain 및 AWS 환경
- 1492035 정동헌 / Block-Chain 및 AWS 환경

Directory 설명
- SRC\lib\logic.js , SRC\models\org.example.mynetwork.cto , SRC\permissions.acl , SRC\queries.qry
js, cto, acl, qry 파일을 기반으로 배포가능한 아카이브 파일 tutorial-network@[version].bna 생성.
- SRC\package.json
Version, Script, Dependency 관리
- SRC\networkadmin.card
블록체인 네트워크에 연결하는데 필요한 모든 정보를 제공.
- SRC\bldog-app
웹 애플리케이션 프로젝트 폴더 
- SRC\bldog-app\dbService
Atlas mongodb와 웹 애플리케이션 연동을 위한 Rest Server(nodejs) 데이터
- SRC\bldog-app\src\app\org.example.mynetwork.ts
블록체인 model 코드
- SRC\bldog-app\src\app\org.hyperledger.composer.system.ts
블록체인과 웹 애플리케이션 연동 정보




