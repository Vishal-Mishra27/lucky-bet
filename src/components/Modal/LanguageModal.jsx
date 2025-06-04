/* eslint-disable react/prop-types */
import "../../i18";
import { useTranslation } from "react-i18next";
function LanguageModal({ setIsLanguageOpen, languages, handleLanguageSelect }) {
  const { t, i18n } = useTranslation();
  // const despcription1 = t("discription1");
  // const { line1, line2 } = t("discription2");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    return (
      <div className="absolute top-[40px] right-[9.5rem] bg-mainBg px-2 pb-2 pt-2 flex flex-col gap-0.5 h-40 overflow-y-auto hide-scrollbar w-[100px] shadow-2xl rounded-md z-50">
        {languages.map((item, i) => (
          <div
            key={i}
            onClick={(() =>{ handleLanguageSelect(item); changeLanguage(item.name)})}
            className="w-full gap-2 bg-gradient-to-r from-bg3 to-bg2 flex items-center rounded-[0.25rem] px-2 py-1 text-textGray2 hover:text-white cursor-pointer"
          >
            <img
              className="h-4 w-6 object-cover"
              src={item.flag}
              alt={item.name}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default LanguageModal;
  