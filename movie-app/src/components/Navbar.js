import React from 'react';
import {data} from '../data';


class Navbar extends React.Component {
    render()
    {
  return (
    <div className="nav">
      <div className="search-conatainer">
          <input />
          <button id ="search-btn"> Search</button>
      </div>
    </div>
  );
}
}

export default Navbar;
