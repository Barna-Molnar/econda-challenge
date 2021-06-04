import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

import './sideMenu.scss';
import { menus, createMenuItems, generateMarkup } from './data';

function SideMenu({ user }) {
  console.log(user, menus);
  const items = createMenuItems(user, menus);
  const html = items.map((obj) => generateMarkup(obj)).join('');
  const jsx = ReactHtmlParser(html, [
    function transform(node) {
      if (node.type === 'tag' && node.name === 'a') {
        return <Link to={node.attribs.href}>{node.value}</Link>;
      }
    },
  ]);

  return <div className={`menu__container `}>{jsx}</div>;
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
