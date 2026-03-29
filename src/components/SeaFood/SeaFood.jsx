import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../categoryPage/CategoryPage'
import BgSeaFood from "../../assets/seafood-banner.jpg"

const SeaFood = () => {
  return (
    <div>
        <CategoryPage title={"Meat & Seafood"} BgImg={BgSeaFood} Categories={["Meat","SeaFood"]}/>
    </div>
  )
}

export default SeaFood