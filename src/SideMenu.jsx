import React from 'react';
import './sideMenu.scss';

function SideMenu() {
  return (
    <div className="menu__container">
      <ul className="menu__main menu__main--Analitics">
        <h3 className="menu__title">
          {' '}
          <a href="/analytics">Analytics</a>
        </h3>
        <li className="menu__sub">
          <a href="/analytics/dashboard">Dashboard</a>
        </li>
        <li className="menu__sub">
          <a href="#">Reports</a>
        </li>
        <li className="menu__sub">
          <a href="#">EigeneReports</a>
        </li>
        <li className="menu__sub">
          <a href="#">Centricity</a>
        </li>
        <li className="menu__sub">
          <a href="#">Plug- Ins</a>
        </li>
      </ul>
      <ul className="menu__main menu__main--CrossSell">
        <h3 className="menu__title">
          <a href="/cross-sell">Cross Sell</a>{' '}
        </h3>
        <li className="menu__sub">
          <a href="#">Dashboard</a>
        </li>
        <li className="menu__sub">
          <a href="#">Katalog</a>
        </li>
        <li className="menu__sub">
          <a href="#">Widgets</a>
        </li>
        <li className="menu__sub">
          <a href="#">Kampagnen</a>
        </li>
        <li className="menu__sub">
          <a href="#">Reports</a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
