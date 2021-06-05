import React from 'react';
import './popup.scss';
import Popup from 'reactjs-popup';

function MenuPopup({ open, close, user }) {
  return (
    <div>
      <div className={`overlay ${open ? '' : 'hidden'}`}>&nbsp;</div>
      <Popup className="popup" open={open} closeOnDocumentClick={false}>
        <div className="modal">
          <h2 className="modal__title">Dear {user}</h2>

          <p className="modal__text">
            Ooops.... something went wrong! You are currently not allowed to use
            our product. For more information please contact with our SalesTeam!
          </p>

          <button onClick={close}>Close and Contact with the Salesteam</button>
        </div>
      </Popup>
    </div>
  );
}

export default MenuPopup;
