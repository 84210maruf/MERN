import React, { useState } from 'react'
import './../App.css'




function UseStateHook() {



  const [num, setNum] = useState(10);
  const [arr, setArr] = useState(["hallow","mallow"]);
  const [obj, setObj] = useState([
      {
        m:99,
        me:2
      },
      {
        m:1,
        me:2
      },
      {
        m:1,
        me:2
      }
    ]);
 
  console.log()

  // const names = obj.map((o) => o)
  
  
























  
  return (
    <div className='useState'>
      useState.....
      <br />
      {typeof(num)} {num}
      <br />
      {typeof(arr)} {arr}
      <br />
      {typeof(obj)} {obj.map((item) => item.m)}
    </div>
  )
}

export default UseStateHook
