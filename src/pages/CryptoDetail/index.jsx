import './styles.scss'
import React from 'react'
export default function CryptoDetail () {
  return (
    <div className="Detail">
      <div className="Detail_Container">
        <h1 className="Detail_Title">Bitcoin</h1>
        <h2 className="Detail_Subtitle">Bitcoin Price (BTC)</h2>
        <div className="Detail_Price">
          <span className="Detail_Price_USD">$16,498.97</span>
          <div className="Detail_Price_Percentage">
            <span className="material-icons">arrow_drop_up</span> 2.46%
          </div>
        </div>
        <div className="Detail_Flex">
          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Market Cap</h3>
            <span className="Detail_Details_USD">$316,750,406,733</span>
          </div>

          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Volume 24h</h3>
            <span className="Detail_Details_USD">$316,750,406,733</span>
          </div>

          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Calculating supply</h3>
            <span className="Detail_Details_USD">$316,750,406,733</span>
          </div>

          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Max supply</h3>
            <span className="Detail_Details_USD">$316,750,406,733</span>
          </div>
          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Total supply</h3>
            <span className="Detail_Details_USD">$316,750,406,733</span>
          </div>
        </div>
      </div>
    </div>
  )
}
