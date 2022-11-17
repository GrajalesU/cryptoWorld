import './styles.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function CryptoDetail () {
  const { id } = useParams()
  const [currency, setCurrency] = useState({})

  useEffect(() => {
    fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
      .then(res => res.json())
      .then(data => setCurrency(data[0]))
  }, [])

  const formatNumber = (number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    return formatter.format(number)
  }

  return (
    <div className="Detail">
      <div className="Detail_Container">
        <h1 className="Detail_Title">{currency.name}</h1>
        <h2 className="Detail_Subtitle">{currency.name} Price {currency.symbol}</h2>
        <div className="Detail_Price">
          <span className="Detail_Price_USD">{formatNumber(currency.price_usd)}</span>
          <div className="Detail_Price_Percentage">
            {currency.percent_change_24h >= 0 ? (<><span className="material-icons">arrow_drop_up</span> {currency.percent_change_24h}%</>) : (<><span className="material-icons">arrow_drop_down</span> {currency.percent_change_24h}%</>)}
          </div>
        </div>
        <div className="Detail_Flex">
          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Market Cap</h3>
            <span className="Detail_Details_USD">{formatNumber(currency.market_cap_usd)}</span>
          </div>

          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Volume 24h</h3>
            <span className="Detail_Details_USD">{formatNumber(currency.volume24)}</span>
          </div>

          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Calculating supply</h3>
            <span className="Detail_Details_USD">{formatNumber(currency.csupply)}</span>
          </div>

          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Max supply</h3>
            <span className="Detail_Details_USD">{formatNumber(currency.msupply)}</span>
          </div>
          <div className="Detail_Details">
            <h3 className="Detail_Details_Name">Total supply</h3>
            <span className="Detail_Details_USD">{formatNumber(currency.tsupply)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
