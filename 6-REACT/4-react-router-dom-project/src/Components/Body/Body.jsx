import { useState,useEffect } from 'react'
import Carousel_div from './main/Carousel_div'
import Catagorys from './main/Catagorys'
import Question_accordion from './main/Question_accordion'
// import Products from '../products/Products'
import New_arrival from './main/New_arrival'
import Best_Selling from './main/Best_Selling'
import Collections from '../products/Collections'
import { useLocation } from 'react-router-dom'


function Body() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('reload') === 'true') {
      window.location.replace('/'); // Replace to remove the reload query parameter
    }
  }, [location]);

  return (
    <>
      <Carousel_div />
      <New_arrival />
      <Best_Selling />
      <Catagorys />
      <Collections />
      {/* <Products /> */}
      <Question_accordion />

    </>
  )
}

export default Body