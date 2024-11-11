import { useState, useEffect } from 'react'
import Carousel_div from './main/Carousel_div'
import Catagorys from './main/Catagorys'
import Question_accordion from './main/Question_accordion'
import Products from '../pages/Products'

import axios from "axios";
import New_arrival from './main/New_arrival'
import Best_Selling from './main/Best_Selling'


function Body() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousel_div />
      <New_arrival />
      <Best_Selling />
      <Catagorys />
      <Products />
      <Question_accordion />

    </>
  )
}

export default Body