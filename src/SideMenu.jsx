import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import './sideMenu.scss';
import { menus, createMenuItems } from './data';

function SideMenu({ user, language }) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  if (!user) return null;

  //  creating the menu Items
  const items = createMenuItems(user, menus, language);

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
      onClick={user.customer.isPaid ? () => null : popupOpen}
      className={`menu__container `}
    >
      {items.map((menuItem, i) => {
        const titleLowerCase = menuItem.title.toLowerCase().replace(' ', '-');
        return (
          <div className={`container container__${titleLowerCase}`} key={i}>
            <h3 className="container__title">{menuItem.title}</h3>
            <ul className="container__menuItems">
              {menuItem.subMenu.map((subMenuItem, i) => (
                <li className="menu__item" key={i}>
                  <Link to={`/${titleLowerCase}/${subMenuItem.toLowerCase()}`}>
                    {subMenuItem}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <Popup open={popupIsOpen} close={popupClose} user={user.userName} />
    </div>
  );
}

export default SideMenu;
