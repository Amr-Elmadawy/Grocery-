import React from 'react'
import CategoryPage from '../categoryPage/CategoryPage'
import BgFruits from "../../assets/fruits-banner.jpg"

const Fruits = () => {
  return (
    <div>
        <CategoryPage title={"Fruits & Vegetables"} BgImg={BgFruits} Categories={["Fruits","Vegetables"]}/>
    </div>
  )
}

export default Fruits