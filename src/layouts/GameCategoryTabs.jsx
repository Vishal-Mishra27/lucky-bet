
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../i18'

import { RiRadioButtonLine } from "react-icons/ri";
import { useState } from "react";
import Login from "../features/auth/Login";
import { IoFootball, IoGameController } from "react-icons/io5";
import { MdOutlineCasino } from "react-icons/md";
import { GiTrebuchet } from "react-icons/gi";

const GameCategoryTabs = () => {
  const { t, i18n } = useTranslation();
  const {
    Live,
    Sports,
    Casino,
    LIVECASINO,
    Games,
    ESPORT,
    VIRTUALSPORTS,
    TREBUCHET,
    EventView,
    LiveCalendar,
    Result,
    Home,
    Tournaments,
    Jackpots,
  } = t("GameHeader");
  
  const navigate = useNavigate();
  const location = useLocation();
  const gameCategoryTabs = [
    {
      icon: <RiRadioButtonLine size={20} />,
      name: Live,
      isTop: false,
      route: "live/livepage",
      hoverMenu: [
        { label: EventView, path: "livepage" },
        { label: LiveCalendar, path: "liveCalender" },
        { label: Result, path: "result" },
      ],
    },
    {
      icon: <IoFootball size={20} />,
      name: Sports,
      isTop: false,
      route: "sports",
      hoverMenu: [
        { label: EventView, path: "livepage" },
        { label: LiveCalendar, path: "liveCalender" },
        { label: Result, path: "result" },
      ],
    },
    {
      icon: <IoFootball size={20} />,
      name: Casino,
      isTop: false,
      route: "casino",
      // hoverMenu: ["Home", "Tournaments", "Jackpots"],
      hoverMenu: [
        { label: Home, path: "home" },
        { label: Tournaments, path: "Tournaments" },
        { label: Jackpots, path: "jackpots" },
      ],
    },
    {
      icon: <MdOutlineCasino size={20} />,
      name: LIVECASINO,
      isTop: false,
      route: "livecasino",
    },
    {
      icon: <IoFootball size={20} />,
      name: Games,
      isTop: false,
      route: "gamepage",
    },
    {
      icon: <MdOutlineCasino size={20} />,
      name: ESPORT,
      isTop: true,
      route: "esports",
    },
    {
      icon: <IoGameController size={20} />,
      name: VIRTUALSPORTS,
      isTop: false,
      route: "virtualsports",
    },
    {
      icon: <GiTrebuchet size={20} />,
      name: TREBUCHET,
      isTop: false,
    },
  ];

  const [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <div className="w-full px-0">
      {isOpenLogin && <Login setIsOpenLogin={setIsOpenLogin} />}

      <div className="w-full overflow-x-auto rounded-md flex items-center min-h-12 relative hide-scrollbar z-10">
        <div className="flex pt-1 h-full items-center hide-scrollbar whitespace-nowrap gap-2">
          {gameCategoryTabs.map((tab) => {
            const currentPath = location.pathname.split("/")[1];
            const tabPath = tab.route?.split("/")[0];
            const isActive = tabPath && currentPath === tabPath;

            return (
              <div
                key={tab.name}
                className="relative h-full group hover:border-t-4 border-t-[#34aadc] rounded-tl-lg"
              >
                <button
                  onClick={() => {
                    if (tab.name === "TREBUCHET") {
                      setIsOpenLogin(true);
                    } else if (tab.route) {
                      navigate(`/${tab.route}`);
                    }
                  }}
                  className={`relative px-4 flex items-center h-full gap-1 border-b-2 ${
                    isActive
                      ? "border-blue-500 text-white"
                      : "border-transparent"
                  }`}
                >
                  <div>{tab.icon}</div>
                  <div className="text-xs xsm:text-[15px] text-textGray">
                    {tab.name}
                  </div>
                  {tab.isTop && (
                    <div className="absolute top-1 -right-2.5 bg-purple-900 text-white text-[10px] px-1 rounded">
                      Top
                    </div>
                  )}
                </button>

                {/* Hover Menu */}
                {tab.hoverMenu && (
                  <div className="fixed  hidden group-hover:flex z-10 flex-col bg-gray-800 text-white text-xs rounded shadow-lg  w-[235px] h-[110px] bg-[#000C24] px-[16px] gap-1">
                    {tab.hoverMenu.map((item, index) => {
                      const label =
                        typeof item === "string" ? item : item.label;
                      const path = typeof item === "string" ? null : item.path;
                      const baseRoute = tab.route?.split("/")[0];

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            if (baseRoute && path) {
                              navigate(`/${baseRoute}/${path}`);
                            }
                          }}
                          className="px-4 py-2 hover:bg-gray-700 cursor-pointer whitespace-nowrap rounded-[4px] p-[10px] bg-gradient-to-r from-white/15 to-white/5 h-[30px] flex items-center text-[16px] hover:border-l-2 hover:border-l-[#34aadc]"
                        >
                          {label}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameCategoryTabs;
