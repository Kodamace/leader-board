import React from "react";

import "styles.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <li className="rnk">#</li>

        <li className="nme">Name</li>

        <li className="pnts">points</li>
      </div>
    );
  }
}

export default Header;
