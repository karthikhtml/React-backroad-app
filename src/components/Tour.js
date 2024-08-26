import React from 'react'

const Tour = ({ img, date, title, text, country, days, cost }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {country}
          </p>
          <p>{days}</p>
          <p>{cost}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
