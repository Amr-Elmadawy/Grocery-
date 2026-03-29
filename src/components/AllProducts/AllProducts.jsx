import React from 'react'
import CategoryPage from '../categoryPage/CategoryPage'
import BgAll from "../../assets/all-banner.jpg"

const AllProducts = () => {
  return (
    <div>
        <CategoryPage title={"All Products"} BgImg={BgAll} Categories={["All"]}/>
    </div>
  )
}

export default AllProducts