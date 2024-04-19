import lair from "./lair";
import archive from "./archive";
import bountyHuntersCamp from "./bountyHuntersCamp";
import landmark from "./landmark";
import vault from "./vault";
import ruin from "./ruin";
import oasis from "./oasis";
import holyPlace from "./holyPlace";
import wreck from "./wreck";
import arcology from "./arcology";
import grave from "./grave";
import scienceMysticsAbode from "./scienceMysticsAbode";
import hegemonyCamp from "./hegemonyCamp";
import cacklemawDen from "./cacklemawDen";
import anomaly from "./anomaly";
import settlement from "./settlement";
import faaNomadCamp from "./faaNomadCamp";
import banditCamp from "./banditCamp";
import tradePost from "./tradePost";
const regions = {
  landscape: [
    "특색없는 사막",
    "소금 평원",
    "험난한 자갈밭",
    "메마른 호수",
    "메마른 강",
    "우뚝 솟은 비석",
    "탁상 대지",
    "낮은 언덕들",
    "산 하나",
    "독성 호수",
    "독성 강",
    "진균숲",
    "수정 성장체",
    "바람이 몰아치는 고원",
    "산악지대",
    "버려진 도시",
    "선인장 지대",
    "동굴로 가득함",
    "쓰레기 매립지",
    "바람이 통하는 협곡",
  ],
  namesake: [
    "유명한 거주민",
    "현지 야생동물",
    "자연적인 경치",
    "자연적인 위험요소",
    "유명한 괴물",
    "오래 전에 망한 정착지",
    "잊혀진 종교",
    "현지 기후",
    "천연자원",
    "더 이상 이해할 수 없는 이름",
  ],
  locationType: [
    "폐허",
    "정착지",
    "오아시스",
    "성지",
    "잔해",
    "볼트",
    "랜드마크",
    "도적_야영지",
    "현상금_사냥꾼_야영지",
    "보금자리",
    "기록_보관소",
    "아콜로지",
    "무덤가",
    "과학_신비주의자들의_거주지",
    "교역소",
    "신정부_야영지",
    "파아_유목민_야영지",
    "캐클모-둥지",
    "이상현상",
  ],
  hazards: [
    "길목을 점거한 도적들",
    "색깔 포식자의 사냥터",
    "어슬렁거리는 은빛 양치기",
    "모래벌레 산란장",
    "바람이 매우 거셈. 모래폭풍이 확실함.",
    "귀의자를 찾아다니는 사교도",
    "통행료를 요구하는 고장난 신스",
    "캐클모 씨족에게 감시당하는 도로",
    "적대하는 파아 유목민들",
    "불발된 지뢰 여러 개",
  ],
  genericStorySeeds: {
    npcA: [
      "마을의 장로가",
      "파아 전사가",
      "눈 먼 신탁이",
      "교활한 도적이",
      "초조해 하는 신스가",
      "캐커젠 예술가가",
      "신정부 세금 징수인이",
      "물 탐사자가",
      "타이탄 숭배자가",
      "향신료 상인이",
      "현학적인 이단이",
      "탈주노예가",
      "죄를 먹는 자가",
      "은퇴한 검투사가",
      "매우 작은 캐커젠이",
      "호색적인 뉴비스트가",
      "퇴마사가",
      "원숭이 사육사가",
      "방랑 음악가가",
      "복제인간 추노가",
    ],
    wants: [
      "에게 깊은 인상을 남기기를",
      "(과)와 결혼하기를",
      "(을)를 배신하기를",
      "에게서 빚을 징수하기를",
      "(을)를 처벌하기를",
      "의 위치를 알아내기를",
      "(을)를 유괴하기를",
      "(과)와 이혼하기를",
      "의 병을 치료하기",
      "의 신뢰를 떨어뜨리기를",
    ],
    npcB: [
      "마을의 광대",
      "도적의 우두머리",
      "무덤 탐사자",
      "부유한 상인",
      "유명한 현상금 사냥꾼",
      "천문학자",
      "유물 도둑",
      "호언장담하는 병사",
      "낙타 기수",
      "질투심 많은 미망인",
      "쾌락주의적인 시인",
      "잔인한 조사관",
      "순진한 철학자",
      "아름다운 저격수",
      "거대한 캐커젠",
      "연금술사",
      "신스 수술의",
      "빙의당한 이발사",
      "카드 사기꾼",
      "부유한 게으름뱅이",
    ],
    complication: [
      "모래폭풍",
      "배고픈 알자보",
      "짐승무리의 집결",
      "술 취한 도적들",
      "의미없는 현지 전쟁",
      "파아 유목민의 결혼식",
      "가문의 저주",
      "사칭꾼",
      "짝사랑",
      "치명적인 결투",
      "정신 능력자 어린이",
      "살인적인 복제인간",
      "식인나무",
      "고장난 AI",
      "독이 든 수확물",
      "비밀 사교도",
      "조작된 채리엇 경주",
      "잘못된 정체성",
      "공갈",
      "환각 시야",
    ],
  },
  "이상현상": anomaly,
  "기록_보관소": archive,
  "아콜로지": arcology,
  "도적_야영지": banditCamp,
  "현상금_사냥꾼_야영지": bountyHuntersCamp,
  "캐클모_둥지": cacklemawDen,
  "파아_유목민_야영지": faaNomadCamp,
  "무덤가": grave,
  "신정부_야영지": hegemonyCamp,
  "성지": holyPlace,
  "보금자리": lair,
  "랜드마크": landmark,
  "오아시스": oasis,
  "폐허": ruin,
  "과학_신비주의자들의_거주지": scienceMysticsAbode,
  "정착지": settlement,
  "교역소": tradePost,
  "볼트": vault,
  "잔해": wreck,
};
export default regions;
