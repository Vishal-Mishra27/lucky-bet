// components/GameCategoryTabs.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { RiRadioButtonLine } from "react-icons/ri";
import {
  IoFootball,
  IoGameController,
  IoLockClosedOutline,
  IoStarOutline,
  IoTennisball,
} from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineCasino, MdOutlineTimer } from "react-icons/md";
import { GiTrebuchet } from "react-icons/gi";



const GameCategoryTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const gameCategoryTabs = [
    {
      icon: <RiRadioButtonLine size={20} />,
      name: "LIVE",
      isTop: false,
      route: "live/livepage",
    },
    {
      icon: <IoFootball size={20} />,
      name: "Sports",
      isTop: false,
      route: "sports",
    },
    {
      icon: <IoFootball size={20} />,
      name: "Casino",
      isTop: false,
      route: "casino",
    },
    {
      icon: <MdOutlineCasino size={20} />,
      name: "LIVE CASINO",
      isTop: false,
      route: "livecasino",
    },
    {
      icon: <IoFootball size={20} />,
      name: "Games",
      isTop: false,
      route: "gamepage",
    },
    // { icon: <MdOutlineCasino size={20} />, name: "LIVE CASINO", isTop: false },
    {
      icon: <MdOutlineCasino size={20} />,
      name: "E-SPORT",
      isTop: true,
      route: "esports",
    },
    // {
    //   icon: <LiaDiceD6Solid size={20} />,
    //   name: "GAMES",
    //   isTop: false,
    //   // route: "virtualsports",
    // },
    // { icon: <IoGameController size={20} />, name: "E-SPORTS", isTop: false },
    {
      icon: <IoGameController size={20} />,
      name: "VIRTUAL SPORTS",
      isTop: false,
      route: "virtualsports",
    },
    { icon: <GiTrebuchet size={20} />, name: "TREBUCHET", isTop: false },
  ];

  return (
    <div className="w-full px-0">
      <div className="w-full overflow-x-auto  rounded-md flex items-center h-12 hide-scrollbar">
        <div className="flex pt-1 h-full items-center hide-scrollbar whitespace-nowrap  gap-2">
          {gameCategoryTabs.map((tab) => {
            const currentPath = location.pathname.split("/")[1];
            const tabPath = tab.route?.split("/")[0]; // Safe optional chaining

            const isActive = tabPath && currentPath === tabPath;

            return (
              <div key={tab.name} className="relative h-full">
                <button
                  onClick={() => tab.route && navigate(`/${tab.route}`)}
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameCategoryTabs;
