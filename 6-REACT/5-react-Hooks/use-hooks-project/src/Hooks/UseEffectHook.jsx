import React, { useEffect, useState } from 'react'

function UseEffectHook() {


  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [c, setC] = useState(0);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //   },1000)
  // })

  // same as avobe //alwys running..

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1)
  //   },1000)
  // },[count])

  // run one time..
  useEffect(() => {
    setCount(() => count + 1)
  },[]);


  useEffect(() => {
    setCalculation(() => count * 2)
  },[count]);


  
  return (
    <div className='useEffect'>
      <h3>useEffect...</h3>

      <p>{count} time Rendar the useEffect Func</p>
      <button onClick={()=>setCount(count+1)} >Calculate {calculation}</button>
      
    </div>
  )
}

export default UseEffectHook