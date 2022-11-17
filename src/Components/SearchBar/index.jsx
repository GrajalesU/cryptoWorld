import './styles.scss'
import React from 'react'

export default function SearchBar ({ list, setList }) {
  const originalList = [...list]
  const handleOption = (e) => {
    const selected = e.target.value
    if (selected === 'no') return setList(originalList)
    if (selected === 'price') {
      return setList(current => {
        const sortedList = current.sort((a, b) => {
          return b.price_usd - a.price_usd
        })
        return [...sortedList]
      })
    }
    if (selected === '7d') {
      return setList(current => {
        const sortedList = current.sort((a, b) => {
          return b.percent_change_7d - a.percent_change_7d
        })
        return [...sortedList]
      })
    }
    if (selected === '24h') {
      return setList(current => {
        const sortedList = current.sort((a, b) => {
          return b.percent_change_24h - a.percent_change_24h
        })
        return [...sortedList]
      })
    }
    if (selected === '1h') {
      return setList(current => {
        const sortedList = current.sort((a, b) => {
          return b.percent_change_1h - a.percent_change_1h
        })
        return [...sortedList]
      })
    }
  }
  return (
    <div className="SearchBar">
      <div className="SearchBar_Container">
        Sort current page by
        <select className="SearchBar_Filter" onChange={handleOption}>
          <option className="SearchBar_Filter_Option" value="no">
            ---
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
      </div>
    </div>
  )
}
