# 이 력 서

[TOC]

## 개인정보

#### 기본정보  

Photo      | ![](http://eunchurn.com/resume/eunchurn.png "eunchurn" "width:200px")
-----------|--------------
Name       | 박은천
 - Chinese | 朴恩泉
 - English | Eunchurn Park
Age        | 36 
Birth Day  | 1980.07.05
Email      | eunchurn.park@gmail.com
Mobile     | +82-10-4499-6420


#### 신상정보

Profile    | Content
-----------|--------------------------------------
Address    | 서울시 구로구 경인로 619-3 신도림3차푸르지오 아파트 1103호
Mobile     | 010-4499-6420
Married    | 미혼
Family     | 부모형
Blood type | RH+ B
Religion   | 기독교
  
#### 학력정보

Level       | School Name    | Major            | Start   | End     | Status    | 최종학력
------------|----------------|------------------|---------|---------|-----------|--------
Ph.D Candidate		|단국대학교 대학원 죽전캠퍼스	|건축공학과 건축구조	| 2007.03.01 | 2013.02.14 | completion | 최종
Master of Science	|단국대학교 대학원 서울캠퍼스	|건축공학과 건축구조	| 2005.03.01 | 2007.02.14 | graduated |
Bachelor of Science	|단국대학교 서울캠퍼스	|건축공학과	| 1999.03.02 | 2005.02.18 | graduated |

## 직장이력
Period            | Company      | Part > Team                    
------------------|--------------|-----------------------------
2004.10 - 2009.4  | [단국대학교 부설 리모델링연구소](http://www.srrc.re.kr/)  | R&D > 구조해석 및 동역학
2009.04 - 2015.5  | [한국유지관리(주)](http://www.kmbest.co.kr/) | 부설기업연구소 R&D > U사업팀 토목/건축 계측/해석
2015.08 - 현재  | [승화기술정책연구소(주)](http://www.shtpi.co.kr/) | 기업연구소 R&D > M2M/자산관리

## 프로젝트 수행이력
* 초고층 건물의 [GNSS](http://gnss.ngii.go.kr/info/summary) 망조정기법과 외란보정 기법을 이용한 거푸집 연직도 관리
 - 소개
  > 초고층건물 시공에서 [GNSS](http://gnss.ngii.go.kr/info/summary)를 이용하여 연직도를 관리하고자 하는 신기술 인증 프로젝트, 거푸집 연직도 시공 누적오차 10mm이내 / 시공 층별오차 4mm 이내의 관리기준을 만족해야 함.

 - 실제 수행한 주요 이력
  > * [RTK](https://en.wikipedia.org/wiki/Real_Time_Kinematic)-[VRS](https://en.wikipedia.org/wiki/Virtual_Reference_Station)[^vrs] 시공
  > * 기준점 네트워크 망조정 : 기준국을 타설하여 3점, 4점 [Procrustes](https://en.wikipedia.org/wiki/Procrustes_analysis)기법을 사용하여 망조정 : OPA[^opa] 방식으로 1초단위의 scale, rotation값을 생성하여 값보정
  > * 센서퓨전(Sensor fusion) : 가속도계를 설치하여 [Multirate-Kalman Filter (MR-KF)](http://scholar.lib.vt.edu/theses/available/etd-062899-064821/unrestricted/etd.PDF)[^mrkf] 사용으로 거푸집의 고속변위예측
  > * 네트워크 망조정 필터 : 망조정기법에서 scale값과 roation값을 Kalman Filter[^kalman]로 수정
  > * 초기 개발단계에서의 개발내용을 전면수정하여 상위의 모든 기술을 적용함

 - 적용된 기술
  > * [GNSS](http://gnss.ngii.go.kr/info/summary)[^gnss] (GPS, Glonass) System : [Septentrio](http://www.septentrio.com/) GNSS 적용
  > * RF 통신 : 각 기준점의 GNSS와 통신
  > * [Real-time Kinematic Method (DGPS)](https://en.wikipedia.org/wiki/Differential_GPS)
  > * [Ordinary Procrustes Analysis (OPA)](https://en.wikipedia.org/wiki/Procrustes_analysis)
  > * [Multirate-Kalman Filter (MR-KF)](http://scholar.lib.vt.edu/theses/available/etd-062899-064821/unrestricted/etd.PDF)
  > * [Fourier Linear Combiner (FLC)](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=258116&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D258116)[^flc]

 - 개발 S/W 플랫폼
  > * [National Instruments](https://en.wikipedia.org/wiki/National_Instruments) [LabVIEW](https://en.wikipedia.org/wiki/LabVIEW)
  > * [Mathworks](https://en.wikipedia.org/wiki/MathWorks) [MATLAB](https://en.wikipedia.org/wiki/MATLAB)
    
 - 참여한 현장
  > * 마포 주상복합 : 후처리 [DGPS](https://en.wikipedia.org/wiki/Differential_GPS) 시스템 적용
  > * 롯데슈퍼타워 브레이스 위치 측정 : GNSS-RTK만 적용
  > * 현대제철 당진 코크스 연돌 [ACS거푸집](https://en.wikipedia.org/wiki/Climbing_formwork)[^acsform] 계측 : 3점망조정 RTK적용
  > * 부산 연산구 거제동 롯데캐슬피렌체 주상복합 건물 거푸집계측 : 3점망조정, 4점망조정 데이터 (실제 거푸집 시공에 반영)
  > * 인천 청라지구 롯데케슬 주상복합 건물 거푸집 계측 : 4점망조정 데이터 (신기술 현장실사)
  > * 인천 청라지구 롯데케슬 주상복합 건물 거푸집 계측 : [MR-KF](http://scholar.lib.vt.edu/theses/available/etd-062899-064821/unrestricted/etd.PDF) 시범적용
  
 - 개발결과 : 건설신기술인증 [국토해양부고시 제2011 -313호](http://www.kaia.re.kr/portal/newtec/view.do?searchCnd=1&searchWrd=&menuNo=200075&frApntYear=&toApntYear=&pageUnit=10&frApntNo=&toApntNo=&cate1=&cate2=&cate3=&tecCat1=&tecCat2=&tecCat3=&newtecCat1=&newtecCat2=&newtecCat3=&dvlprNm=%ED%95%9C%EA%B5%AD%EC%9C%A0%EC%A7%80%EA%B4%80%EB%A6%AC&ordDvs=&pageIndex=1&apntNo=625&frMenu=list)

* 코레일 공항철도 및 KTX 진동가속도 분석 시스템
 - 소개
  > 차축-대차-차체의 좌우 2방향 가속도계 설치, 차축의 타코미터 설치, 계측시스템을 구성하여 공항철도의 궤도이상개소검출, 열차의 주행안정성평가, [slip/slide](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=264942&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D264942) 및 승차감평가 시스템 개발 및 준공

 - 실제 수행한 주요 이력
  > * 공항철도 이상개소 분석시스템 : 10m KP간격 CWA-FRF[^cwa-frf] 함수로 전달함수 예측, 측정된 차축-대차-차체의 [주파수응답함수(Frequency response function, FRF)](https://en.wikipedia.org/wiki/Frequency_response)를 통해 중심주파수-대역폭-가중치함수를 규정, [경계비선형](http://www.scholarpedia.org/article/Boundary_value_problem) 최적화 알고리즘 적용으로 이상개소 분석시스템 구축
  > * 공항철도 차량 주행 안정성 분석 시스템 : 병진, 롤링진동 분석 후 속도/도상 별 기준값 적용하여 이상진동의 위치 검출
  > * 공항철도/도시철도 승차감 분석 시스템 : [ISO 2631-1:1997](http://www.iso.org/iso/catalogue_detail.htm?csnumber=7612)과 [UIC513](http://www.uic.org/etf/codex/codex-detail.php?codeFiche=513&langue_fiche=E)에서 제시한 방법으로 각각 필터제작 4채널 DAQ보드와 3축 가속도계 센서 적용
  > * 공항철도 slip/slide : 타코미터의 펄스의 계측노이즈 정규화 제거하고 속도 수치미분으로 임계값으로 정성적으로 판단. 실제 주행거리와 slip/slide 개소와 그 거리는 대부분 일치함으로 확인.
  > * KTX 주행거동평가 알고리즘 : 국내에서 개발한 KTX산천, 각 분기기등 분석, [UIC-518OR](http://www.uic.org/etf/codex/codex-detail.php?langue_fiche=E&codeFiche=518) 기준에 따라 주행거동평가, 누적분포 활용해서 99.85% 0.15%의 피크 검출

 - 적용된 기술
  > * Coherence-weighted Averaging Frequency Response Function Estimation
  > * Fast Algorithm for Nonlinearly Constrained Optimization Calculations
  > * [FIR Filter](https://en.wikipedia.org/wiki/Finite_impulse_response) design

 - 개발 S/W 플랫폼
  > * Mathworks MATLAB / GUI

 - 참여한 현장
  > * 코레일 공항철도 (인천-김포)
  > * 도시철도공사 5호선 (승차감분석, Comfort analysis)
  > * 코레일 KTX (서울-부산구간)

* LCD Display 글래스 이송로봇진동 사전감지시스템 ([Early Warning System](https://en.wikipedia.org/wiki/Early_warning_system))
 - 소개
  > Glass를 옮기는 이송로봇에 3축가속도계 1기 설치하여 로봇관절운동의 패턴을 분류하고 초기치에 비해 변화량을 모니터링 해서 각 파트의 이상을 미리 감지. 제조사측은 사전진단([Eearly Warning System, EWS](https://en.wikipedia.org/wiki/Early_warning_system))과 부품별 파트진단([Prediction Management Program, PMP](https://en.wikipedia.org/wiki/Predictive_maintenance))을 수행하기 원함.

 - 실제 수행한 주요 이력
  > * 신호분리기법 적용 : [Hankel Matrix](https://en.wikipedia.org/wiki/Hankel_matrix)와 [Singular value decomposition, SVD](https://en.wikipedia.org/wiki/Singular_value_decomposition)기법을 활용해서 signal decomposition 적용 그리고 [wavelet](https://en.wikipedia.org/wiki/Wavelet) 기법을 적용해서 신호분리도 적용
  > * 패턴분류 : rms-triggering기법으로 구간을 나눈후 [ICA(independent component analysis)](https://en.wikipedia.org/wiki/Independent_component_analysis)적용
  > * Spectrogram과 Cepstrum 분석으로 사전진단 가능성 판단
  > * 각관절의 기어박스, rotor의 엔코더 데이터를 받아서 order-analysis 를 수행하여야 정확한 파트이상진단까지 할 수 있었으나 비용등의 문제로 더이상 진행하지 못함.
  > * 중소기업 과제로 변경 수행완료

 - 적용된 기술
  > * Hankel matrix based signal decomposition[^hmb-sd]
  > * Wavelet analysis
  > * [Independent component analysis](https://en.wikipedia.org/wiki/Independent_component_analysis)
  > * [Cepstrum analysis](https://en.wikipedia.org/wiki/Cepstrum)[^cepstrum]
  > * [Spectrogram](https://en.wikipedia.org/wiki/Spectrogram)[^spectrogram] / Order-analysis[^order-analysis]

 - 개발 S/W 플랫폼
  > * Mathworks MATLAB / GUI
 
 - 참여한 현장
  > * LG Display 파주공장

* 초고층건물 구조건전도 모니터링 [Structural Health Monitoring](https://en.wikipedia.org/wiki/Structural_health_monitoring)[^shm]
 - 소개
  > 초고층건물의 시공중/사용중 계측 모니터링 : 주로 FBG, 지진가속도계, 가속도계, GPS, 풍향풍속계 사용.

 - 실제 수행한 주요 이력
  > * [SNR](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) 125dB~130dB 이상의 센서에 적합한 [DAQ](https://en.wikipedia.org/wiki/Data_acquisition) 보드 개발 : 저주파와 신호대잡음비 성능이 우수한 가속도계 센서에 적합한 [DAQ](https://en.wikipedia.org/wiki/Data_acquisition)는 사실상 고가임. 따라서 설치가 용이한 유선 네트워크방식의 [DAQ](https://en.wikipedia.org/wiki/Data_acquisition)보드 개발이 필요하여 개발참여. [Session-based interface](http://kr.mathworks.com/help/daq/examples/getting-started-with-session-based-interface-using-ni-devices.html) 프로그래밍으로 데이터수집을 다른 thread로 작동시킴과 동시에 분석과 해석이 동시에 이루어짐 (실시간 모드벡터 추출/FFT또는 파워스펙트럼 그래프도시)
  > * 시각동기화 프로토콜 적용 [IEEE-1588 Precision Time Protocol](https://ko.wikipedia.org/wiki/IEEE_1588)[^ieee1588] : GPS 클럭을 모든 장비에 연결하려면 많은 인력과 비용이 소모됨. 따라서 유선네트워크 방식에서의 동기화 프로토콜을 적용 (펌웨어단계에서 클럭동기화에 성공)
  > * 지진경보 시스템 : 여러동의 건물의 경우 각동 지하에 지진가속도계를 설치하여 지진경보를 발령. 이때 각동의 EPGA[^epga]값으로 rms-triggering 적용 각 3개의 동에서 동시에 임계값 이상이 발생하였을 때 지진으로 판정.
  > * 모드정보 추출 : SSI(Stochastic subspace identification)[^ssi] 기법과 [FDD(Frequency domain decomposition)](https://en.wikipedia.org/wiki/Frequency_domain_decomposition)[^fdd] 기법을 적용
 
 - 적용된 기술
  > * [Data acquisition toolbox (MATLAB)](http://kr.mathworks.com/products/daq/)
  > * [IEEE-1588 Precision Time Protocol](https://ko.wikipedia.org/wiki/IEEE_1588)
  > * High-Resolution Analog-To-Digital Conversion
  > * Stochastic subspace identification
  > * Frequency domain decomposition
  > * [Eigensystem Realization Algorithm](https://en.wikipedia.org/wiki/Eigensystem_realization_algorithm)
  > * [FE Model update](https://en.wikipedia.org/wiki/Finite_element_updating)[^feupdate] / [System Identification](https://en.wikipedia.org/wiki/System_identification)[^systemidentification]
 
 - 개발 S/W 플랫폼
  > * Mathworks MATLAB / GUI
 
 - 참여한 현장
  > * 부산 해운대 두산위브더제니스 (사용중계측 SHM)
  > * 인천 송도 NEATT 동북아무역센터 (시공중계측)
  > * 롯데 잠실 슈퍼타워 (자문)
  > * 송도 M1 주상복합 (자문)

* 능동형 제진장치 ([Active & Hybrid Mass Damper, A-HMD](http://www.sciencedirect.com/science/article/pii/S0141029697000722)) 프로젝트
 - 소개
  > 건물의 사용중 진동 저감을 위한 능동형 제진장치 설치 프로젝트
 
 - 실제 수행한 주요 이력
  > * [Quansar 소형 AMD 제어](http://www.quanser.com/products/active_mass_damper), [LQR](https://en.wikipedia.org/wiki/Linear-quadratic_regulator)[^lqr]/[LQG](https://en.wikipedia.org/wiki/Linear-quadratic-Gaussian_control)[^lqg] 알고리즘 탑재. 
  > * 실제 현장에서 계측데이터 품질 확보를 위한 signal conditioning
  > * High-resolution DAQ 적용
 
 - 적용된 기술
  > * [LQR](https://en.wikipedia.org/wiki/Linear-quadratic_regulator)/[LQG](https://en.wikipedia.org/wiki/Linear-quadratic-Gaussian_control) control algorithm
  > * [sliding mode control](https://en.wikipedia.org/wiki/Sliding_mode_control)[^slidingmode] algorithm
  > * [velocity feedback control](https://en.wikipedia.org/wiki/Minor_loop_feedback) algorithm
  > * [ADS1282-HT (High-Resolution Analog-To-Digital Conversion)](http://www.ti.com/lit/ds/symlink/ads1282-ht.pdf)
  > * Signal conditioning
  > * [PLC(Programmable Logic Controller)](https://en.wikipedia.org/wiki/Programmable_logic_controller)

 - 개발 S/W 플랫폼
  > * Mathworks MATLAB / GUI / Simulink
  > * National Instruments LabVIEW
 
 - 참여한 현장
  > * 강변 테크노마트 AMD 시공 프로젝트

* 도로 안개 소산 시스템 프로젝트
 - 소개
  > 온풍, 음이온 생성기, 응결핵등을 방사하여 도로상에 안개를 신속히 제거하는 시스템
 
 - 실제 수행한 주요 이력
  > * CCTV 영상이미지를 이용한 안개시정거리 계산 : [Feature detection](https://en.wikipedia.org/wiki/Feature_detection_(computer_vision))[^featuredetection] 방식의 알고리즘을 적용
  > * 오브젝트 트래킹 문제 : [Partial least square analysis](https://en.wikipedia.org/wiki/Partial_least_squares_regression)를 통해 타깃의 위치 판탄 (2stage filtering)
  > * [Real-time compressive tracking](http://www4.comp.polyu.edu.hk/~cslzhang/CT/CT.htm) : [multiscale filterbank](https://en.wikipedia.org/wiki/Filter_bank)를 통해 [feature detection](https://en.wikipedia.org/wiki/Feature_detection_(computer_vision)) 후 매트릭스방식의 feature를 벡터화
  > * 오브젝트 트래킹 에러로 success rate, average center location error를 판단하여 시정거리와 매핑.
  > * [Sum of squared difference](https://siddhantahuja.wordpress.com/tag/sum-of-squared-differences/) / [Normalized cross-correlation](https://en.wikipedia.org/wiki/Cross-correlation#Normalized_cross-correlation) 으로 최종 매핑 스코어 판정
  > * CCTV 이미지를 통해 안개소산장치를 ON/OFF 제어 : 평균화 방식의 [PID 제어기](https://en.wikipedia.org/wiki/PID_controller)로 설계

* 지하철 역사 초기 재난 대응 M2M 대피경로 안내 시스템 (*승화기술정책연구소(주) : **수행중***)
 - 소개
  > 가스센서 노드로부터 데이터를 받아 화재 및 재난을 초기 인식하여 승객들에게 대피경로를 안내하는 시스템
 
 - 실제 수행한 주요 이력
  > * 가스센서 Calibration :  MATLAB을 이용하여 기준값 측정 후 곡선적합
  > * [node.js](https://nodejs.org)[^node] : serial parsing, DB(mysql), 웹서버 및 UI가동
  > * 센서노드 API 제작 : sleep time 스케쥴링
  > * 주요요소분석(principal component analysis) : 각 센서데이터의 확률밀도함수와 이벤트간 주요요소분석
  > * 확률변수시물레이션 : Monte-Carlo 시물레이션
  > * Markov-chain 룰을 통해 상태예측 알고리즘

 - 적용된 기술
  > * [M2M](https://en.wikipedia.org/wiki/Machine_to_machine)
  > * [Principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis)
  > * [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method)
  > * [Markov chain](https://en.wikipedia.org/wiki/Markov_chain)

 - 개발 S/W 플랫폼
  > * Mathworks MATLAB
  > * Node.js

 - 참여한 현장
  > 대공원역 / 개포동역

* 증강현실기반 재난 대응 훈련 시물레이터 개발(ICS/MCS) (*승화기술정책연구소(주) : **수행중***)
 - 소개
  > 홀로렌즈 증강현실 시스템을 이용한 ICS/MCS 시물레이터 개발


## 연구 및 개발실적
### 건설신기술
#### 망조정과 외란보정기법의 RTK GNSS을 적용한 고층 구조물의 거푸집 연직도 관리기술
 - 고시 : 국토해양부고시 제2011 -313호
 - 지정번호 : 제625호
 - 명칭 : 망조정과 외란보정기법의 RTK GNSS을 적용한 고층 구조물의 거푸집 연직도 관리기술
 - 기술분야 : 건축시공
 - 개발법인 : 한국유지관리(주), 롯데건설(주)
 - 개발참여자 : 박순전, 석원균, 정원백, 최준성, 김민수, 이중엽, **박은천**

### 특허
#### 철도차량의 승차감 분석 시스템(System for ride comfort analysis of Railway vehicle)
 - 출원번호 : 1020100137577
 - 등록번호 : 1012501040000
 - 출원인 : 한국유지관리 주식회사, 코레일공항철도 주식회사
 - 출원일자 : 2010.12.29
 - 등록일 자: 2013.03.27
 - 공개일자 : 2012.07.09
 - 발명자 : 최준성, 박수열, **박은천**, 김성용, 조한권

#### 철도차량의 주행 안정성 분석 시스템(System for driving stability analysis of Railway vehicle)
 - 출원번호 : 1020110068195
 - 등록번호 : 1012590880000
 - 출원인 : 한국유지관리 주식회사
 - 출원일자 : 2011.07.11
 - 등록일자 : 2013.04.23
 - 공개일자 : 2013.01.21
 - 발명자 : 최준성, 강형구, **박은천**, 김만철, 유원희

#### 이상진단 사전감시 방법(Method for preliminary surveillance of failure diagnosis)
 - 출원번호 : 1020120138404
 - 출원인 : 한국유지관리 주식회사
 - 출원일자 : 2012.11.30
 - 공개일자 : 2014.06.13
 - 발명자 : 최준성, 임공철, 이은찬, **박은천**

### Publication
#### 학위논문
- 건축구조물의 동적하중 구현 및 실시간 하이브리드 실험을 위한 가진시스템 설계 [Design of Excitation Systems for Simulating Dynamic Loads and Real-Time Hybrid Test Method of Building Structures](http://m.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=6edb0a539213abf9ffe0bdc3ef48d419)


#### 국제저널

- **Eunchurn Park**, Kyung-Won Min, Sung-Kyung Lee, Sang-Hyun Lee, Heon-Jae Lee, Seok-Jun Moon, Hyung-Jo Jung, "Real-time Hybrid Test on a Semi-actively Controlled Building Structure Equipped with Full-scale MR Dampers", *Journal of Intelligent Material Systems and Structures* 12/2010; 21(18):1831-1850. DOI:10.1177/1045389X10390253 · **2.17 Impact Factor**
- Heon-Jae Lee, Hyung-Jo Jung, Seok-Jun Moon, Sung-Kyung Lee, **Eun-Churn Park**, Kyung-Won Min, "Experimental Investigation of MR Damper-based Semiactive Control Algorithms for Full-scale Five-story Steel Frame Building", *Journal of Intelligent Material Systems and Structures* 06/2010; 21(10):1025-1037. DOI:10.1177/1045389X10374162 · **2.17 Impact Factor**
- Jae-Sung Heo, Sung-Kyung Lee, **Eunchurn Park**, Sang-Hyun Lee, Kyung-Won Min, Hongjin Kim, Jiseong Jo, Bong-Ho Cho, "Performance test of a tuned liquid mass damper for reducing bidirectional responses of building structures", *The Structural Design of Tall and Special Buildings* 11/2009; 18(7):789 - 805. DOI:10.1002/tal.486 · **0.83 Impact Factor**
- **Eun-Churn Park**, Sang-Hyun Lee, Kyung-Won Min, Lan Chung, Sung-Kyung Lee, Seung-Ho Cho, Eunjong Yu, Kyung-Soo Kang, "Design of an actuator for simulating wind-induced response of a building structure", *SMART STRUCTURES AND SYSTEMS* 01/2008; 4(1). DOI:10.12989/sss.2008.4.1.085 · **1.16 Impact Factor**
- Sung-Kyung Lee, **Eun Churn Park**, Kyung-Won Min, Ji-Hun Park, "Real-time substructuring technique for the shaking table test of upper substructures", *Engineering Structures* 09/2007; 29(9):2219-2232. DOI:10.1016/j.engstruct.2006.11.013 · **1.77 Impact Factor**
- Sung-Kyung Lee, **Eun Churn Park**, Kyung-Won Min, Sang-Hyun Lee, Ji-Hun Park, "Experimental implementation of a building structure with a tuned liquid column damper based on the real-time hybrid testing method", *Journal of Mechanical Science and Technology* 06/2007; 21(6):885-890. DOI:10.1007/BF03027063 · **0.70 Impact Factor**
- Sung-Kyung Lee, **Eun Churn Park**, Kyung-Won Min, Sang-Hyun Lee, Lan Chung, Ji-Hun Park, " Real-time hybrid shaking table testing method for the performance evaluation of a tuned liquid damper controlling seismic response of building structures", *Journal of Sound and Vibration* 05/2007; DOI:10.1016/j.jsv.2006.12.006 · **1.86 Impact Factor**


#### 국내논문

 - 민경원, 이성경, **박은천**, "진동대실험에 의한 동조액체기둥감쇠기의 동적특성", *한국소음진동공학회논문집 (Transactions of the Korean society for noise and vibration engineering)* v.19 no.6 = no.147, pp.620 - 627, 2009, 1598-2785
 - **박은천**, 이성경, 이헌재, 문석준, 정형조, 민경원, "대형 MR감쇠기가 설치된 건축구조물의 실시간 하이브리드 실험 및 준능동 알고리즘 적용", *한국전산구조공학회논문집 (Journal of the computational structural engineering institute of Korea)* v.21 no.5, pp.465 - 474, 2008, 1229-3059
 - 이성경, 민경원, **박은천**, "TMD와 TLCD를 이용한 2방향 감쇠기의 동적특성", *한국전산구조공학회논문집 (Journal of the computational structural engineering institute of Korea)* v.21 no.6, pp.589 - 596, 2008, 1229-3059
 - 허재성, 이성경, **박은천**, 이상현, 김홍진, 조지성, 조봉호, "실시간 하이브리드 진동대 실험법에 의한 양방향 TLMD의 진동제어 성능평가", *한국소음진동공학회논문집 (Transactions of the Korean society for noise and vibration engineering)* v.18 no.5 = no.134, pp.485 - 495, 2008, 1598-2785
 - 허재성, **박은천**, 이상현, 이성경, 김홍진, 조봉호, 조지성, 김동영, 민경원, "건축구조물의 2방향 진동제어를 위한 동조액체질량감쇠기", *한국소음진동공학회논문집 (Transactions of the Korean society for noise and vibration engineering)* v.18 no.3 = no.132, pp.345 - 355, 2008, 1598-2785
 - 허재성, **박은천**, 이성경, 이상현, 김홍진, 조지성, 조봉호, 주석준, 민경원, "실물크기 구조물에 설치된 동조액체질량감쇠기의 성능실험", *한국전산구조공학회논문집 (Journal of the computational structural engineering institute of Korea)* v.21 no.2, pp.161 - 168, 2008, 1229-3059
 - 윤경조, **박은천**, 이헌재, 문석준, 민경원, 정형조, 이상현, "준능동 MR감쇠기가 설치된 실물크기 구조물의 분산제어 알고리즘 성능평가", *한국소음진동공학회논문집 (Transactions of the Korean society for noise and vibration engineering)* v.18 no.2 = no.131, pp.255 - 262, 2008, 1598-2785
 - **박은천**, 이성경, 윤경조, 정희산, 이헌재, 최강민, 문석준, 정형조, 민경원, "실시간 하이브리드 실험법을 이용한 대형 MR감쇠기의 제진 성능평가", *한국소음진동공학회논문집 (Transactions of the Korean society for noise and vibration engineering)* v.18 no.1 = no.130, pp.131 - 138, 2008, 1598-2785
 - **박은천**, 민경원, 정란, 강경수, 이상현, "건축구조물의 풍하중 구현 및 풍특성 평가를 위한 가진시스템 설계", *한국전산구조공학회논문집 (Journal of the computational structural engineering institute of Korea)* v.20 no.6, pp.769 - 778, 2007, 1229-3059
 - 이성경, 민경원, **박은천**, "진동대를 이용한 구조물의 하이브리드 실험", *대한건축학회논문집大韓建築學會論文集 (Journal of the architectural institute of Korea : Structure & construction) / 構造系* v.22 no.5 = no.211, pp.57 - 63, 2006, 1226-9107
 - 이상현, **박은천**, 윤경조, 이성경, 유은종, 민경원, 정란, 민정기, 김영찬, "실물 크기 구조물의 강제진동실험 및 지진응답 모사를 위한 HMD제어기 설계", *한국지진공학회논문집 (Journal of the earthquake engineering society of Korea)* v.10 no.6 = no.52, pp.103 - 114, 2006, 1226-525x
 - 이성경, **박은천**, 이상현, 정란, 우성식, 민경원, "실시간 하이브리드 진동대 실험법을 이용한 TLD 제어성능의 실험적 검증", *한국전산구조공학회논문집 (Journal of the computational structural engineering institute of Korea)* v.19 no.4 = no.74, pp.419 - 427, 2006, 1229-3059

#### 국제학술
- **Eunchurn Park**, Yu-Seung Kim, Joong-Yub Lee, Jun-Sung Choi, Yeon-Back Jung, Won-Kyun Seok, Kwang-Soo Jung, Soon-Jeon Park, Joo-Ho Lee, "Study on Vertical Alignment Maintenance Technique using GNSS in Skyscraper", *2009 International Symposium on GPS/GNSS*; 11/2009
- **Eunchurn Park**, Sung-Kyung Lee, Heon-Jae Lee, Seok-Joon Moon, Hyung-Jo Jung, Byoung-Wook Moon, Kyung-Won Min, "Real-Time Hybrid Testing of a Steel-Structure Equipped With Large-Scale Magneto-Rheological Dampers Applying Semi-Active Control Algorithms", *ASME 2008 Conference on Smart Materials, Adaptive Structures and Intelligent Systems*; 01/2008
- **Eunchurn Park**, Sang-Hyun Lee, Sung-Kyung Lee, Hee-San Chung, Kyung-Won Min, "System Identification and Pseudo-Earthquake Excitation of a Real-Scaled 5 Story Steel Frame Structure", *ASME 2008 Conference on Smart Materials, Adaptive Structures and Intelligent Systems*; 01/2008
- S. H. Lee, **E. C. Park**, K. J. Youn, K. W. Min, L. Chung, S. B. Choi, K. G. Sung, H. G. Lee, "RESPONSE CONTROL OF A REAL-SCALED FIVE-STORY STRUCTURE USING MAGNETO-RHEOLOGICAL DAMPER", *Electrorheological Fluids and Magnetorheological Suspensions - 10th International Conference on ERMR 2006*; 01/2007

#### 국내학술

 - **박은천**, 강형구, 최준성, 김은성, 김만철, "고속열차의 주행 동적성능 평가시스템 개발", *한국철도학회 2011년도 정기총회 및 추계학술대회 논문집* Oct. 20, pp.3226-3236 (2011)
 - **박은천**, 최준성, "전단파 속도계측에 의한 구조물 강도추정 실용화 연구", *한국방재학회 2011년도 정기 학술발표대회* Feb. 24, pp.162-162. (2011)
 - 김성용, **박은천**, "차량의 가속도 진동계측 및 차량안정성 프로그램 개발에 대한 연구", *한국철도학회 2010년도 춘계학술대회 논문집* June 10, pp.527-532. (2010)
 - 김성용, **박은천**, "차량의 동적 특성 분석을 통한 궤도틀림 식별", *한국철도학회 2010년도 춘계학술대회 논문집* 2010 June 10, pp.2095-2106. (2010)
 - 민경원, 이성경, **박은천**, "1 개의 TLD 를 이용한 건물의 양방향 진동제어", *한국전산구조공학회 2009년도 정기 학술대회* 2009 Apr. 16, pp.119 - 124, 2009
 - 허재성, 이성경, **박은천**, 이상현, 김홍진, 조지성, 조봉호, 민경원, "건축구조물의 2방향 진동제어를 위한 TLMD 제어성능평가", *한국소음진동공학회 2008년도 춘계학술대회논문집* 2008 Apr. 17, pp.432 - 441, 2008
 - 허재성, **박은천**, 이상현, 이성경, 민경원, 김홍진, 조지성, 조봉호, 주석준, "실물크기 구조물에 설치된 동조액체질량감쇠기의 성능실험", *한국소음진동공학회 2008년도 춘계학술대회논문집* 2008 Apr. 17, pp.449 - 457, 2008
 - 윤경조, 이상현, **박은천**, 유은종, 민경원, "실물크기 구조물의 강제진동 실험을 통한 시스템 식별", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.195 - 200, 2007
 - 허재성, 이성경, 이상현, **박은천**, 김홍진, 조봉호, 조지성, 김동영, 민경원, "실시간 하이브리드 진동대 실험법에 의한 양방향 TLMD의 풍응답 제어성능평가", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.189 - 194, 2007
 - 허재성, 김홍진, 조봉호, 조지성, **박은천**, 이상현, 이성경, 김동영, 민경원, "TLCD와 고무패드형 TMD를 이용한 2방향 TLMD의 성능평가실험", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.465 - 470, 2007
 - **박은천**, 이상현, 민경원, 강경수, "ATMD를 이용한 건축 구조물의 풍응답 구현을 위한 가진시스템", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.210 - 215, 2007
 - **박은천**, 이상현, 민경원, 강경수, "풍하중 구현 및 내풍특성 평가를 위한 선형질량 가진시스템 설계", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.661 - 668, 2007
 - 정희산, 이성경, **박은천**, 민경원, "실시간 하이브리드 실험법을 이용한 동조액체기둥감쇠기가 설치된 구조물의 지진응답 제어성능 평가", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.669 - 673, 2007
 - **박은천**, 이성경, 이헌재, 최강민, 문석준, 정형조, 정희산, 민경원, "실시간 하이브리드 실험법을 이용한 대형 MR감쇠기의 준능동 제어알고리즘 성능 비교", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.648 - 654, 2007
 - 정희산, 이성경, **박은천**, 민경원, 이헌재, 최강민, 문석준, 정형조, "실시간 하이브리드 실험법을 이용한 대형 MR감쇠기의 제진 성능평가", *한국소음진동공학회 2007년도 추계학술대회논문집* 2007 Nov. 15, pp.655 - 660, 2007
 - 이성경, 이상현, 민경원, **박은천**, 우성식, 정란, 윤경조, "하이브리드 실험법을 이용한 TLD가 설치된 건물의 지진응답 제어", *한국지진공학회 2006년도 학술발표회 논문집 제10권* 2006 Mar. 17, pp.527 - 534, 2006
 - 박지훈, 민경원, 문병욱, **박은천**, "MR감쇠기가 설치된 구조물의 등가선형 시스템에 대한 가진 특성의 영향", *한국지진공학회 2006년도 학술발표회 논문집 제10권* 2006 Mar. 17, pp.503 - 510, 2006
 - 이성경, 이상현, 민경원, **박은천**, 우성식, 정란, "실시간 하이브리드 실험법을 이용한 동조액체댐퍼가 설치된 건물의 진동제어", *한국전산구조공학회 2006년도 정기 학술대회 논문집* 2006 Apr. 01, pp.256 - 263, 2006
 - 이상현, 민경원, 이명규, **박은천**, "복합모드형 소형 MR감쇠장치 성능에 관한 실험적 연구", *한국지진공학회 2005년도 학술발표회 논문집* 2005 Mar. 18, pp.461 - 468, 2005

### 국가RND연구프로젝트
 - 감지형앵커를 이용한 사면 보강 및 모니터링 기술 개발, 주관:한국유지관리(주) 2010-2011
 - 교량 및 지반보강을 위한 스마트 텐던 기술의 사업화를 위한 추가기술개발 및 검증, 주관:한국유지관리(주) 2010
 - 철골조 시설물의 붕괴를 방지하는 설치 용이한 경제적인 보강기구 개발, 주관:단국대학교 산학협력단 2006
 - 다자유도 진동대 및 가력기를 이용한 2방향 동조식 액체형 댐퍼의 풍응답 저감 연구, 주관:단국대학교 20080901 ~ 20110831 
 - 대형 비탄성구조물 분산 제어시스템 설계기술 개발, 주관:단국대학교 20070301 ~ 20100228 


### 컨퍼런스/강연/강의 경력
 행사 / 모임  | 주제 | 규모 | 장소
 ------------|------|----|----------------------
 서울시		|신기술 강연 | 서울시 공무원 참석 약 300명 | 서울시청
 단국대학교		|공학수치해석|학부강의|단국대학교
 
## Reference
[^flc]: [Fourier Linear Combiner, FLC](http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=258116&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D258116) : A tuning of the algorithm parameters and a sensitivity analysis to its initial conditions was performed using treadmill walking data from 3 healthy subjects. The accuracy of the method was then assessed using data collected from 15 young healthy subjects during treadmill walking at variable speeds and comparing the pitch, roll, and yaw angles estimated from the gyroscopes data to those obtained with a stereophotogrammetric system. Root mean square (RMS) difference and correlation coefficients (r) were used for this purpose.

[^opa]: [Ordinary Procrustes Analysis (OPA)](https://en.wikipedia.org/wiki/Procrustes_analysis)

[^mrkf]: [Multirate-Kalman Filter (MR-KF)](http://scholar.lib.vt.edu/theses/available/etd-062899-064821/unrestricted/etd.PDF)

[^kalman]: [칼만 필터(Kalman filter)](https://ko.wikipedia.org/wiki/%EC%B9%BC%EB%A7%8C_%ED%95%84%ED%84%B0)는 잡음이 포함되어 있는 선형 역학계의 상태를 추적하는 재귀 필터로, 루돌프 칼만이 개발하였다. 칼만 필터는 컴퓨터 비전, 로봇 공학, 레이더 등의 여러 분야에 사용되며, 많은 경우에 매우 효율적인 성능을 보여준다.

[^gnss]: [GNSS(Global Navigation Satellite System)](http://gnss.ngii.go.kr/info/summary)는 위성을 이용한 전파항법 시스템으로, 수십 개의 위성을 이용하여 전 세계의 모든 지역에서 언제든지 위치와 시각 서비스 제공이 가능할 뿐만 아니라 수신기 가격이 저렴하며 오차가 작기 때문에 응용범위가 매우 다양하다.

[^vrs]: Virtual Reference Station (VRS) networks use real-time kinematic (RTK) solutions to provide high-accuracy, RTK Global Navigation Satellite Systems.

[^cwa-frf]: Coherence Weighted Averaged Frequency Response Function (CWA-FRF) refer to "[Estimation Of Statistical Distributions For Modal Parameters Identified From Averaged Frequency Response Function Data](http://institute.lanl.gov/ei/shm/pubs/modal_stat_jvc_jul00.pdf)",  Journal of Vibration and Control, July 2000

[^hmb-sd]: The linear sum of a series of component signals by Hankel matrix-based SVD, and essentially what the component signals reflect are projections of original signal on the orthonormal bases of m-dimensional and n-dimensional vector spaces. Refer to Xuezhi Zhao, , Bangyan Ye(2009), "[Similarity of signal processing effect between Hankel matrix-based SVD and wavelet transform and its mechanism analysis](http://www.sciencedirect.com/science/article/pii/S0888327008002604)", *Mechanical Systems and Signal Processing* Volume 23, Issue 4, May 2009, Pages 1062–1075

[^cepstrum]: A cepstrum is the result of taking the Inverse Fourier transform (IFT) of the logarithm of the estimated spectrum of a signal.

[^spectrogram]: A spectrogram is a visual representation of the spectrum of frequencies in a sound or other signal as they vary with time or some other variable.

[^order-analysis]: [Order analysis](http://zone.ni.com/reference/en-XX/help/372416A-01/svtconcepts/intro_ord_ana/) is a technique for analyzing sound and vibration signals from rotating or reciprocating machinery, such as engines, compressors, turbines, and pumps. These machines have a variety of parts, and each part contributes unique sound and vibration patterns to the sound and vibration pattern of the whole machine. With order analysis, you can identify and isolate these sound and vibration patterns to analyze the performance and quality of each machine part individually.

[^shm]: The process of implementing a damage detection and characterization strategy for engineering structures is referred to as [Structural Health Monitoring (SHM)](https://en.wikipedia.org/wiki/Structural_health_monitoring).

[^ieee1588]: Precision Time Protocol(PTP)은 네트워크 간 정확한 동기화를 가능케하는 [IEEE 1588](https://ko.wikipedia.org/wiki/IEEE_1588) 표준 시간 전송 프로토콜이다.하드웨어에서 생성하는 타임스탬프를 사용할 때 나노초 단위의 정확도까지 보장해 준다.

[^epga]: In seismic engineering, the effective peak acceleration (EPA, the maximum ground acceleration to which a building responds) is often used, which tends to be ⅔ – ¾ the PGA, The term '[Effective peak ground acceleration](http://www.teachmefinance.com/Scientific_Terms/Effective%20peak%20ground%20acceleration.html#ixzz3iNuQcQLs)' as it applies to the area of reclamation can be defined as 'That acceleration which is most closely related to structural response and to damage potential of an earthquake'.

[^ssi]: The data driven [**Stochastic Subspace Identification**](http://www.svibs.com/solutions/literature/2006_2.pdf) techniques is considered to be the most powerful class of the known identification techniques for natural input modal analysis in the time domain.  Refer to B. Peeters and G. D. Rodeck (1999), "[Reference-based Stochastic Subspace Identification for Output-only Modal Analysis](ftp://193.136.28.78/pub/Personal/Dec/filipema/public/FCT_WindOMA/ref_8.pdf)", *Mechanical Systems and Signal Processing* (1999) 13(6), 855}878

[^fdd]: The [frequency domain decomposition (FDD)](https://en.wikipedia.org/wiki/Frequency_domain_decomposition) is an output-only system identification technique popular in civil engineering, in particular in structural health monitoring. As an output-only algorithm, it is useful when the input data is unknown. FDD is a modal analysis technique which generates a system realization using the frequency response given (multi-)output data

[^feupdate]: [Finite element model updating](https://en.wikipedia.org/wiki/Finite_element_updating) is the process of ensuring that finite element analysis results in models that better reflect the measured data than the initial models. It is part of verification and validation of numerical models.

[^systemidentification]: The field of [system identification](https://en.wikipedia.org/wiki/System_identification) uses statistical methods to build mathematical models of dynamical systems from measured data. System identification also includes the optimal design of experiments for efficiently generating informative data for fitting such models as well as model reduction.

[^lqr]: The theory of optimal control is concerned with operating a dynamic system at minimum cost. The case where the system dynamics are described by a set of linear differential equations and the cost is described by a quadratic function is called the LQ problem. One of the main results in the theory is that the solution is provided by the [linear-quadratic regulator (LQR)](https://en.wikipedia.org/wiki/Linear-quadratic_regulator), a feedback controller whose equations are given below. The [LQR](https://en.wikipedia.org/wiki/Linear-quadratic_regulator) is an important part of the solution to the [LQG (Linear-Quadratic-Gaussian)](https://en.wikipedia.org/wiki/Linear-quadratic-Gaussian_control) problem. Like the [LQR](https://en.wikipedia.org/wiki/Linear-quadratic_regulator) problem itself, the [LQG](https://en.wikipedia.org/wiki/Linear-quadratic-Gaussian_control) problem is one of the most fundamental problems in control theory.

[^lqg]: In control theory, the [linear-quadratic-Gaussian (LQG)](https://en.wikipedia.org/wiki/Linear-quadratic-Gaussian_control) control problem is one of the most fundamental optimal control problems. It concerns uncertain linear systems disturbed by additive white Gaussian noise, having incomplete state information (i.e. not all the state variables are measured and available for feedback) and undergoing control subject to quadratic costs. Moreover the solution is unique and constitutes a linear dynamic feedback control law that is easily computed and implemented. Finally the [LQG](https://en.wikipedia.org/wiki/Linear-quadratic-Gaussian_control) controller is also fundamental to the optimal control of perturbed non-linear systems.

[^slidingmode]: In control system, [sliding mode control, or SMC](https://en.wikipedia.org/wiki/Sliding_mode_control), is a nonlinear control method that alters the dynamics of a nonlinear system by application of a discontinuous control signal that forces the system to "slide" along a cross-section of the system's normal behavior.

[^featuredetection]: In computer vision and image processing the concept of [feature detection](https://en.wikipedia.org/wiki/Feature_detection_(computer_vision)) refers to methods that aim at computing abstractions of image information and making local decisions at every image point whether there is an image feature of a given type at that point or not. The resulting features will be subsets of the image domain, often in the form of isolated points, continuous curves or connected regions.

[^acsform]: The Automatic Climbing System (ACS) is a hydraulically operated self-climbing formwork system used for the construction of tall concrete structures such as building core walls and bridge pylons. Tall concrete structures have historically been formed with crane lifted formwork often referred to as “jump” forms. These systems require a worker to ride the formwork as it is raised to its next position in order to insert reties through the previously cast lift to secure the form. This procedure requires extensive crane time and is too slow, unsafe and unproductive for tall structures where the concrete walls are typically on the critical path. 

[^node]: Node.js is an open-source, cross-platform runtime environment for developing server-side web applications