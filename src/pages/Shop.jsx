import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollection from '../components/NewCollection/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offer></Offer>
      <NewCollection></NewCollection>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop