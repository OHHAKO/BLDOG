# BLDOG
### 블록체인을 이용한 동물 기록관리 웹 서비스
BLDOG은 동물보호소 업무 시 관리자가 이용하는 '동물 기록관리 웹 서비스'입니다.<BR>
#### 개요


**기획 의도는 동물 보호소의 운영에 적합한 동물보호를 기반에 둔 기록 관리 서비스를 제공하는 것입니다.**
  
반려동물을 키우는 가정이 늘어나는 한편, 버려지는 유기동물의 개체수 또한 증가하고 있습니다. <BR>
보호소의 역할이 더욱 막중해지고 있지만 관리에 필요한 **기술적 인프라가 부족**합니다.
많은 동물 보호소가 열악한 환경에서 동물을 관리하고 있고, 모자란 운영비로 인해 정부의 지원과 기부를 받으며 운영하고 있는 상황입니다. <BR>
어려운 사정으로 인해 불법적으로 안락사를 시행하는 보호소가 상당수입니다. <BR>
우리 팀은 동물 보호소가 갖고있는 고민을 기술 인프라로 해결하고자 했습니다. <BR>
블록체인 기술을 적용하여 **기부금, 동물 관리 업무시 남기는 기록물을 투명하게 공고히 저장하도록** 했습니다.
  

 <BR>


<ul>
  <li> 체계적 동물관리로 불법 도축 및 안락사 방지 </li>
  <li> 투명한 기부금 관리로 오남용 방지 </li>
  <li> 기부 인식 개선을 통한 운영비 확충 </li>
</ul>

### 프로젝트 시스템 구조
![bldog system img](/bldog-system.jpg)

프로젝트명 : BLDOG(블록체인을 이용한 동물 보호소 기록관리 웹 서비스)
개발 환경 :  Ubuntu 16.04 LTS, Docker, AWS(EC2)
개발 언어 : TypeScript, JavaScript
개발 도구 : Visual Code, Composer, Yeoman
적용 기술 : Angular6, Hyperledger Fabric(Composer), Rest API, NodeJs, Mongodb, Bootstrap 
담당 분야 :  Web front, back-end


### 팀 기술 포지션

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

