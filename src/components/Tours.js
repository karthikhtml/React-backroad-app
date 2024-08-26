import React from 'react'
import Title from './Title'
import { toursLinks } from '../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursLinks.map((links) => {
          return <Tour key={links.id} {...links} />
        })}
      </div>
    </section>
  )
}

export default Tours
