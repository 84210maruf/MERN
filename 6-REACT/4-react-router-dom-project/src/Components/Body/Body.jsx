import { useState } from 'react'
import Carousel_div from './main/Carousel_div'
import Catagorys from './main/Catagorys'
import Question_accordion from './main/Question_accordion'
import Products from '../products/Products'


function Body() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Carousel_div />
    <Catagorys />
    <Products />
    <Question_accordion />
    
    </>
  )
}

export default Body