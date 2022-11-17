import './styles.scss'
import React from 'react'
import Paginator from '../../Components/Paginator'
import SearchBar from '../../Components/SearchBar'
export default function CryptoList () {
  return (
    <div className="Main">
      <div className="Main_Container">
        <h1 className="Main_Title">All Cryptocurrencies</h1>
        <SearchBar />
        <ul className="Main_List">
          <li className="Main_List_Element">
            <h2 className="Main_List_Element_Title">
              <span className="Main_List_Element_Title_Symbol">BTC-symbol-</span>
              Bitcoin-name-
            </h2>
            <button type="button" className="Main_List_Element_Button">
              See details
            </button>
          </li>
          <li className="Main_List_Element">
            <h2 className="Main_List_Element_Title">
              <span className="Main_List_Element_Title_Symbol">BTC-symbol-</span>
              Bitcoin-name-
            </h2>
            <button type="button" className="Main_List_Element_Button">
              See details
            </button>
          </li>
        </ul>
        <Paginator />
      </div>
    </div>
  )
}
