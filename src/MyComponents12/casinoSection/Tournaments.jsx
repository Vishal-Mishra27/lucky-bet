import React from 'react'
import DarkLightMode from '../../MyComponents13/casinoComponents/DarkLightMode'
import GameItems from "../../MyComponents13/casinoComponents/GameItems";
import TopGameTourant from "../../MyComponents13/casinoComponents/TopGameTourant";
// import Header2 from '../../MyComponent/Header2'
import { useTranslation } from "react-i18next";



const Tournaments = () => {
  const { t, i18n } = useTranslation();
  const { Context10 } = t("Context");
  return (
    <div>
        <div className='flex justify-end pe-[16px] ms-auto mb-[16px] w-full pt-[14px]'>
            <div className='flex justify-center items-center'>
                <p className='me-[8px] text-white/60 text-[14px] leading-[16px]'>{Context10}</p>
                <DarkLightMode/>
            </div>
        </div>
        <GameItems/>
        <TopGameTourant/>
    </div>
  )
}

export default Tournaments