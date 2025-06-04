import React, {useState} from 'react'
import Option from './Option'
import Game from './Game'
import Table from './Table'
import Sports from "../MyComponents12/Sports"
import logo from "../assets/sports/download.png";
import { FaPlus } from "react-icons/fa6";
import Login from "../../src/features/auth/Login";
import { useTranslation } from "react-i18next";
import "../i18";



export default function Livepage() {
    const { t, i18n } = useTranslation();
    const { Context2 } = t("Context");
    const [isForgetOpen, setIsForgetOpen] = useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    
  
     const disclaimerText = Context2;
  return (
    <div>
      {/* {isOpenLogin && <Login setIsOpenLogin={setIsOpenLogin} />} */}
      {isOpenLogin && <Login setIsOpenLogin={setIsOpenLogin} />}
      <div className="mt-[10px] p-[7px]">
        <h3 className="text-[#ffffff] mb-[5px] text-[15px] leading-[16px] font-[400] uppercase">
          My Teams
        </h3>
        <div className="w-full flex items-center">
          <div className="w-[36px] h-[46px]">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center
                         bg-[#000b23] overflow-hidden z-0 border border-[#3c455a]"
            >
              <img src={logo} alt="" width="30px" />
            </div>
          </div>
          <div className="w-[36px] h-[46px]">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23]
                      border border-[#3c455a] overflow-hidden z-0"
            >
              <img src={logo} alt="" width="30px" />
            </div>
          </div>
          <div className="w-[36px] h-[46px]">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23] 
                       border border-[#3c455a] overflow-hidden z-0"
            >
              <img src={logo} alt="" width="30px" />
            </div>
          </div>
          <div className="w-[36px] h-[46px]">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23] 
                      border border-[#3c455a] overflow-hidden z-0"
            >
              <img src={logo} alt="" width="30px" />
            </div>
          </div>
          <div className="w-[36px] h-[46px]">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23] 
                     border border-[#3c455a] overflow-hidden z-0"
            >
              <img src={logo} alt="" width="30px" />
            </div>
          </div>
          <div className="w-[36px] h-[46px]">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23] 
                       border border-[#3c455a] overflow-hidden z-0"
            >
              <img src={logo} alt="" width="30px" />
            </div>
          </div>
          <div className="w-[36px] h-[46px]">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23] 
                     border border-[#3c455a] overflow-hidden z-0"
            >
              <img src={logo} alt="" width="30px" />
            </div>
          </div>
          <div className="w-[36px] h-[46px] ">
            <div
              className="relative w-[46px] h-[46px] rounded-[50%] flex justify-center items-center bg-[#000b23] 
                      border border-[#3c455a] overflow-hidden z-0"
            >
              <FaPlus
                className="text-[#ffffff] text-[12px]"
                onClick={() => setIsOpenLogin(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <Option></Option>
      <Game></Game>
      <Table></Table>
      {/* I am founder code live page. */}
      <div className="flex items-center justify-center mt-5">
        <div
          className="text-[#adb1b9] p-0 rounded-lg max-w-2xl w-full align-content-center"
          // style={{ padding: "5vh 10px" }}
        >
          <p className="text-sm sm:text-base text-center">{disclaimerText}</p>
        </div>
      </div>
    </div>
  );
}
