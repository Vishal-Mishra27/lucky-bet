// import { data } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18";
export const getGameMenuItems = (t) => {
// const { t, i18n } = useTranslation();
const {
  Football,
  Basketball,
  Tennis,
  Volleyball,
  IceHockey,
  Baseball,
  TableTennis,
  Badminton,
  Cricket,
  Darts,
  CounterStrike2,
  Dota2,
  Leagueoflegends,
  KingofGlory,
  EFootball,
} = t("GameList");
return [
  /* same game item array as before */
  {
    id: "1",
    name: Football,
    image: "/images/football-banner.jpg",
    selectedColor: "#0f881f",
    notificationCount: 12,
  },
  {
    id: "2",
    name: Basketball,
    image: "/images/basketball-banner.jpg",
    selectedColor: "#f29f01",
    notificationCount: 5,
  },
  {
    id: "3",
    name: Tennis,
    image: "/images/tennis-banner.jpg",
    selectedColor: "#9b983c",
    notificationCount: 15,
  },
  {
    id: "4",
    name: Volleyball,
    image: "/images/volleyball-banner.jpg",
    selectedColor: "#d1b974",
    notificationCount: 23,
  },
  {
    id: "5",
    name: IceHockey,
    image: "/images/icehockey-banner.jpg",
    selectedColor: "#4d9bbd",
    notificationCount: 35,
  },
  {
    id: "6",
    name: Baseball,
    image: "/images/baseball-banner.jpg",
    selectedColor: "#59a5a2",
    notificationCount: 8,
  },
  {
    id: "7",
    name: TableTennis,
    image: "/images/tabletennis-banner.jpg",
    selectedColor: "#7d9622",
    notificationCount: 7,
  },
  {
    id: "8",
    name: Badminton,
    image: "/images/badminton-banner.jpg",
    selectedColor: "#6cbca2",
    notificationCount: 16,
  },
  {
    id: "9",
    name: Cricket,
    image: "/images/cricket-banner.jpg",
    selectedColor: "#1aa67a",
    notificationCount: 10,
  },
  {
    id: "10",
    name: Darts,
    image: "/images/darts-banner.jpg",
    selectedColor: "#cc2837",
    notificationCount: 2,
  },
  {
    id: "11",
    name: CounterStrike2,
    image: "/images/cs2-banner.jpg",
    selectedColor: "#c6561e",
    notificationCount: 23,
  },
  {
    id: "12",
    name: Dota2,
    image: "/images/dota2-banner.jpg",
    selectedColor: "#960f12",
    notificationCount: 4,
  },
  {
    id: "13",
    name: Leagueoflegends,
    image: "/images/lol-banner.jpg",
    selectedColor: "#034450",
    notificationCount: 45,
  },
  {
    id: "14",
    name: KingofGlory,
    image: "/images/kog-banner.jpg",
    selectedColor: "#70568a",
    notificationCount: 22,
  },
  {
    id: "15",
    name: EFootball,
    image: "/images/efootball-banner.jpg",
    selectedColor: "#2d792e",
    notificationCount: 30,
  },
];
}