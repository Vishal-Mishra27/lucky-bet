import React, { useState } from 'react';
import './Header2.css'; 

export default function Header2() {
  const menuItems = [
    {
      id: "1",
      name: "Event View",
      //   link: '/live',
    },
    {
      id: "2",
      name: "Live Calendar",
      link: "/liveCalender",
    },
    {
      id: "3",
      name: "Result",
      //   link: '/result',
    },
  ];

  const [activeItem, setActiveItem] = useState(menuItems[0].id); 

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);

    console.log(`Navigating to ${menuItems.find(item => item.id === itemId)?.link}`);
  };
  return (
    <nav className="navbar-container">
      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`navbar-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            {/* You can use React Router's <Link> component here if you're using it */}
            {/* <a href={item.link}>{item.name}</a> */}
            <a>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
