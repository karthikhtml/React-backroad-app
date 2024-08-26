import React from 'react'
import Title from './Title'
import { serviceLinks } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {serviceLinks.map((links) => {
          return <Service key={links.id} {...links} />
        })}
      </div>
    </section>
  )
}

export default Services
