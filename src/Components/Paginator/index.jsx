import './styles.scss'
import React from 'react'

export default function Paginator () {
  return (
    <div className="Paginator">
      <button className="Paginator_Button material-icons">arrow_back_ios</button>
      <ul className="Paginator_List">
        <li className="Paginator_List_Element">1</li>
        <li className="Paginator_List_Element">2</li>
        <li className="Paginator_List_Element">3</li>
      </ul>
      <button className="Paginator_Button material-icons">arrow_forward_ios</button>
    </div>
  )
}
