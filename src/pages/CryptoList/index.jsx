import './styles.scss'
import React, { useState } from 'react'
import Paginator from '../../Components/Paginator'
import SearchBar from '../../Components/SearchBar'
import { useNavigate } from 'react-router-dom'

export default function CryptoList () {
  const [cryptoList, setCryptoList] = useState([])
  const navigate = useNavigate()

  return (
    <div className="Main">
      <div className="Main_Container">
        <h1 className="Main_Title">All Cryptocurrencies</h1>
        <SearchBar list={cryptoList} setList={setCryptoList} />
        <ul className="Main_List">
          {cryptoList?.map((currency) => <li key={currency.id} className="Main_List_Element">
            <h2 className="Main_List_Element_Title">
              <span className="Main_List_Element_Title_Symbol">{currency.symbol}</span>
              {currency.name}
            </h2>
            <button type="button" className="Main_List_Element_Button" onClick={() => {
              navigate(`/${currency.id}`)
            }}>
              See details
            </button>
          </li>)}
        </ul>
        <Paginator setList={setCryptoList}/>
      </div>
    </div>
  )
}
