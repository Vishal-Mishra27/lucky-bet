import React from 'react'
import Header2 from '../../MyComponent/Header2'
import { useTranslation } from "react-i18next";


const Jackpots = () => {
      const { t } = useTranslation();
      const {Context9}=t("Context")
  return (
    <div>
      <div>
        {/* className='bg-gradient-to-t from-[#0B1C28] to-[#25586E] w-full h-[100vh]' */}
        <div className="flex justify-center  mt-32 w-full">
          <p className="text-white/70 flex justify-center">{Context9}</p>
        </div>
      </div>
    </div>
  );
}

export default Jackpots

