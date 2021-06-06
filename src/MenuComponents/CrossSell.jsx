import React from 'react';
import { withRouter } from 'react-router-dom';

function CrossSell() {
  return (
    <div>
      <h1>Protected route of cross-sell/dashboard</h1>
    </div>
  );
}

export default withRouter(CrossSell);
