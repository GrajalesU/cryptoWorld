import './styles.scss';
import React from 'react';

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchBar_Container">
        <select className="SearchBar_Filter">
          <option className="SearchBar_Filter_Option" value="all">
            All
          </option>
          <option className="SearchBar_Filter_Option" value="price">
            Price
          </option>
          <option className="SearchBar_Filter_Option" value="7d">
            7 days
          </option>
          <option className="SearchBar_Filter_Option" value="24h">
            24 h
          </option>
          <option className="SearchBar_Filter_Option" value="1h">
            1 h
          </option>
        </select>
        <input className="SearchBar_Input" type="text" />
        <button className="SearchBar_Button material-icons">search</button>
      </div>
    </div>
  );
}
