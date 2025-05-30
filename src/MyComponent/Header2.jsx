// import React, { useState } from 'react';
// import './Header2.css'; 
// import { useNavigate } from 'react-router-dom';

// export default function Header2() {
//   const navigate = useNavigate();
//   const menuItems = [
//     { id: "1", name: "Event View", route: "livepage" },
//     { id: "2", name: "Live Calendar", route: "liveCalender" },
//     { id: "3", name: "Result", route: "result" },
//   ];

//   const [activeItem, setActiveItem] = useState(menuItems[0].id); 

// const handleItemClick = (route, itemId) => {
//   setActiveItem(itemId);
//   // navigate(`/live/${route}`);
//   // Get current base path (e.g. '/sports' from '/sports/livecalendar')
//   const basePath = location.pathname.split("/")[1]; // grabs 'sports' or 'live' or anything

//   // Navigate to /basePath/route (e.g., /sports/result or /live/result)
//   navigate(`/${basePath}/${route}`);
// };
//   return (
//     <nav className="navbar-container mt-[3.22rem]">
//       <ul className="navbar-menu">
//         {menuItems.map((item) => (
//           <li
//             key={item.id}
//             className={`navbar-item ${activeItem === item.id ? "active" : ""}`}
//             // onClick={() => handleItemClick(item.route, item.itemId)}
//             onClick={() => handleItemClick(item.route, item.id)}
//           >
//             {/* You can use React Router's <Link> component here if you're using it */}
//             {/* <a href={item.link}>{item.name}</a> */}
//             <a>{item.name}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

import React from "react";
import "./Header2.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header2() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "1", name: "Event View", route: "livepage" },
    { id: "2", name: "Live Calendar", route: "liveCalender" },
    { id: "3", name: "Result", route: "result" },
  ];

  // Get the current sub-route (e.g. 'livepage' from '/live/livepage')
  const currentRoute = location.pathname.split("/")[2] || "livepage";

  const handleItemClick = (route) => {
    const basePath = location.pathname.split("/")[1]; // e.g. 'live' or 'sports'
    navigate(`/${basePath}/${route}`);
  };

  return (
    <nav className="navbar-container mt-[3.22rem]">
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`navbar-item ${
              currentRoute === item.route ? "active" : ""
            }`}
            onClick={() => handleItemClick(item.route)}
          >
            <a>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
