import React from 'react';
import './sideMenu.scss';
import { generateMarkup, menus } from './data';

function SideMenu() {
  return <div className="menu__container">{generateMarkup(menus[0])}</div>;
}

export default SideMenu;

//  <div className="container container__analytics">
//         <h3 className="container__title">
//           {' '}
//           <a href="/analytics">Analytics</a>
//         </h3>
//         <ul className="container__menuItems container__menuItems--Analitics">
//           <li className="menu__item">
//             <a href="/analytics/dashboard">Dashboard</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Reports</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Eigene Reports</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Centricity</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Plug-Ins</a>
//           </li>
//         </ul>
//       </div>

//       <div className="container container__CrossSell">
//         <h3 className="container__title">
//           <a href="/cross-sell">Cross Sell</a>{' '}
//         </h3>
//         <ul className="container__menuItems container__menuItems--CrossSell">
//           <li className="menu__item">
//             <a href="#">Dashboard</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Katalog</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Widgets</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Kampagnen</a>
//           </li>
//           <li className="menu__item">
//             <a href="#">Reports</a>
//           </li>
//         </ul>
//       </div>
