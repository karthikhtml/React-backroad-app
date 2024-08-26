import React from 'react'
import { socialLinks } from '../data'

const SocialLinks = (props) => {
  return (
    <ul className={props.parentClass}>
      {socialLinks.map((links) => {
        const { id, href, icon } = links
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={props.itemClass}
            >
              <i className={icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
