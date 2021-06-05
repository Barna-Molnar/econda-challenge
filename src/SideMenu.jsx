import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import './sideMenu.scss';
import { menus, createMenuItems } from './data';

function SideMenu({ user }) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  /// functionality to creating the menu Items
  console.log(user);
  if (!user) return null;
  const items = createMenuItems(user, menus);

  /// Popup functionality
  const popupOpen = (e) => {
    if (e.target.className !== 'container__title') return;
    setPopupIsOpen(!popupIsOpen);
  };
  const popupClose = (e) => {
    setPopupIsOpen(!popupIsOpen);
  };

  return (
    <div
      onClick={user.customer.isPaid ? () => '' : popupOpen}
      className={`menu__container `}
    >
      {items.map((menuItem) => {
        const titleLowerCase = menuItem.title.toLowerCase().replace(' ', '-');
        return (
          <div className={`container container__${titleLowerCase}`}>
            <h3 className="container__title">{menuItem.title}</h3>
            <ul className="container__menuItems">
              {menuItem.subMenu.map((subMenuItem, i) => {
                return (
                  <li className="menu__item" key={i + 1}>
                    <Link
                      to={`/${titleLowerCase}/${subMenuItem.toLowerCase()}`}
                    >
                      {subMenuItem}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <Popup open={popupIsOpen} close={popupClose} user={user.userName} />
    </div>
  );
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
