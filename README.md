# BLDOG
### 블록체인을 이용한 동물 기록관리 웹 서비스
BLDOG은 동물보호소 업무 시 관리자가 이용하는 '동물 기록관리 웹 서비스'입니다.<BR>
#### 개요

반려동물을 키우는 가정이 늘어나는 추세에 버려지는 유기동물의 개체수도 함께 증가하고, 
보호소에서 관리하는 개체수도 증가하고 있습니다. 
개체 수에 비해 열악한 환경, 모자란 운영비로 인해 기부를 받으면서 운영하고 있는 상황입니다. <BR>
동물 보호소가 갖고있는 고민을 기술 인프라로 해결하고자 했습니다.

<ul>
  <li> 체계적 동물관리로 불법 도축 및 안락사 방지 </li>
  <li> 투명한 기부금 관리로 오남용 방지 </li>
  <li> 기부 인식 개선을 통한 운영비 확충 </li>
</ul>

### 프로젝트 시스템 구조
![bldog system img](/bldog-system.jpg)


### 팀명 블독주인

| Name | Description | Social |
| --- | --- | --- |
| 김하경 | 웹서버 REST API 및 프론트단 퍼블리싱 | [github](https://github.com/OHHAKO)  |
| 김정문 | 웹페이지 구성 및 DB 연동 |   |
| 이준영 | Block-Chain 및 AWS 환경 |   |
| 정동헌 | Block-Chain 및 AWS 환경 |   |

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

