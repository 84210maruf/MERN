import { useState } from 'react'
import Carousel_div from './main/Carousel_div'
import Catagorys from './main/Catagorys'


function Body() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Carousel_div />
    <Catagorys />
    
    </>
  )
}

export default Body