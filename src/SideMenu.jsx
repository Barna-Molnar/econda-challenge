import React from 'react';
import './sideMenu.scss';

function SideMenu() {
  return (
    <div className="menu__container">
      <h3 className="menu__title">Analytics</h3>
      <ul className="menu__main--Analitics">
        <li className="menu__sub">Dashboard</li>
        <li className="menu__sub">Reports</li>
        <li className="menu__sub">EigeneReports</li>
        <li className="menu__sub">Centricity</li>
        <li className="menu__sub">Plug- Ins</li>
      </ul>
      <h3 className="menu__title">Cross Sell</h3>
      <ul className="menu__main--CrossSell">
        <li className="menu__sub">Dashboard</li>
        <li className="menu__sub">Katalog</li>
        <li className="menu__sub">Widgets</li>
        <li className="menu__sub">Kampagnen</li>
        <li className="menu__sub">Reports</li>
      </ul>
    </div>
  );
}

export default SideMenu;
