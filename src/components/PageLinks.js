import React from 'react'
import { pageLinks } from '../data'

const PageLinks = (props) => {
  return (
    <ul className={props.parentClass} id="nav-links">
      {pageLinks.map((links) => {
        const { id, href, text } = links
        return (
          <li key={id}>
            <a href={href} className={props.itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
