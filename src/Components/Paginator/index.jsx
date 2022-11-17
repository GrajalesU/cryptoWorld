import './styles.scss'

import React, { useEffect, useState } from 'react'

export default function Paginator ({ setList }) {
  const [numberSelected, setNumberSelected] = useState(1)

  /**
   * Get 30 currencies per page, if user change the paginator to another number, this will give other currencies
   */
  useEffect(() => {
    fetch(`https://api.coinlore.net/api/tickers/?start=${(numberSelected - 1) * 30}&limit=30`)
      .then(res => res.json())
      .then(({ data }) => setList(data))
  }, [numberSelected])

  const handleNumberClick = (e) => {
    setNumberSelected(currentValue => {
      if (currentValue === e.target.id) return currentValue
      return parseInt(e.target.id, 10)
    })
  }

  const handleArrowClickBack = (e) => {
    if (numberSelected !== 1) return setNumberSelected(numberSelected - 1)
  }
  return (
    <div className="Paginator">
      <button className="Paginator_Button material-icons" onClick={handleArrowClickBack}>arrow_back_ios</button>
      <ul className="Paginator_List">
        <li className="Paginator_List_Element"><button className='Selected' type='button' onClick={handleNumberClick} id={numberSelected}>{numberSelected}</button></li>
        <li className="Paginator_List_Element"><button className='Unselected' type='button' onClick={handleNumberClick} id={numberSelected + 1}>{numberSelected + 1}</button></li>
        <li className="Paginator_List_Element"><button className='Unselected' type='button' onClick={handleNumberClick} id={numberSelected + 2}>{numberSelected + 2}</button></li>
      </ul>
      <button className="Paginator_Button material-icons" onClick={() => setNumberSelected(current => current + 1)}>arrow_forward_ios</button>
    </div>
  )
}
