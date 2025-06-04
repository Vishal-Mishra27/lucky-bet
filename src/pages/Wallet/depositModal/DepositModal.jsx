// /* eslint-disable react/prop-types */
// // App.jsx
// import { useState } from 'react';
// import Sidebar from './Sidebar';
// import Content from './Content';
// import useProfile from '../../../services/gameApi';
// // import './App.css';

// const DepositModal = ({
//   setIsDepositModal,
//   toggleEye,
//   setToggleEye,
//   initialSection,
// }) => {
//   const [activeSection, setActiveSection] = useState(initialSection);
//   const userId = localStorage.getItem("userId");
//   const { myDetails, loading, error, fetchProfileDetails } = useProfile(userId);
  

  
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
//     <div className="flex justify-center w-[90%] xl:w-[70%] h-[80%] overflow-hidden rounded-[0.25rem]">
//       <Sidebar
//         setIsDepositModal={setIsDepositModal}
//         toggleEye={toggleEye}
//         setToggleEye={setToggleEye}
//         setActiveSection={setActiveSection}
//         activeSection={activeSection}
//         fetchProfileDetails={fetchProfileDetails}
//         myDetails={myDetails}
//       />
//       <Content section={activeSection} setIsDepositModal={setIsDepositModal} />
//     </div>
//   </div>
//   );
// };

// export default DepositModal;

import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import useProfile from "../../../services/gameApi";

const DepositModal = ({
  setIsDepositModal,
  toggleEye,
  setToggleEye,
  initialSection,
}) => {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const userId = localStorage.getItem("userId");
  const { myDetails, fetchProfileDetails } = useProfile(userId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative flex justify-center w-[90%] xl:w-[70%] h-[80%] overflow-hidden rounded-[0.25rem] bg-bg1">
        {/* ☰ Toggle button: ONLY visible at ≤1024px */}
        <button
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className="absolute top-0 left-1 z-50 p-2 text-white bg-gray-700 rounded max-[1024px]:block hidden "
          style={{ "z-index": "101" }}
        >
          ☰
        </button>

        {/* Sidebar: Overlay at ≤1024px, full column above that */}
        <div
          className={`transition-all duration-300 z-40 bg-bg2 h-full overflow-auto border-r border-gray hide-scrollbar
    ${sidebarVisible ? "max-[1024px]:w-[100%]" : "max-[1024px]:w-0"}
    max-[1024px]:absolute max-[1024px]:top-18 max-[1024px]:left-0 max-[1024px]:block hidden
    min-[1025px]:block min-[1025px]:static min-[1025px]:w-80`}
        >
          <Sidebar
            setIsDepositModal={setIsDepositModal}
            toggleEye={toggleEye}
            setToggleEye={setToggleEye}
            setActiveSection={(section) => {
              setActiveSection(section);
              if (window.innerWidth <= 1024) setSidebarVisible(false);
            }}
            activeSection={activeSection}
            fetchProfileDetails={fetchProfileDetails}
            myDetails={myDetails}
            sidebarVisible={sidebarVisible}
            setSidebarVisible={setSidebarVisible}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full h-full overflow-auto hide-scrollbar">
          <Content
            section={activeSection}
            setIsDepositModal={setIsDepositModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
