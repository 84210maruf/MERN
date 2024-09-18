import React, { useState } from 'react'
import './../App.css'




function UseStateHook() {




  // number 
  const [num, setNum] = useState(10);
  // array 
  const [arr, setArr] = useState(["hallow ", "mallow"]);
  // array more dimention 
  const [arrObj, setArrObj] = useState([
    {
      id: 1,
      name: "aaaaa"
    },
    {
      id: 2,
      name:"bbbbb"
    },
    {
      id: 3,
      name: "ccccc"
    }
  ]);
  // pure object 
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  console.log()



  // smae hare 
  function adding() {
    setNum(num + 100)
  }
  // also 
  const count = () => setNum(num + 1)

  const arrCngToNum = () => setArr(100)
  const arrSetValue = () => setArr(["Maruf"])
  // const arrObjSetValue = () => arrObj.map((obj)=>setArrObj(obj.id))
  const objSetValue = () => setCar({brand:"Maruf"})










  return (
    <div className='useState'>
      useState.....
      <hr />
      {/* number  */}
      {typeof (num)} <br /> {num}
      <button onClick={count}>Counting</button>
      <button onClick={adding}>adding</button>



      <hr />
      {/* array  */}
      {typeof (arr)} <br /> {arr}
      <button onClick={arrCngToNum}>arrCngToNum</button>
      <button onClick={arrSetValue}>arrSetValue</button>



      <hr />
      {/* array Object  */}
      {typeof (arrObj)} 
      {arrObj.map((item) => <div>{item.name}</div>)}
      {arrObj[0].id}
      {/* <button onChange={arrObjSetValue}>change arr chld value</button> */}


      <hr />
      {/* pure Object  */}
      {car.brand}
      <button onClick={objSetValue}>change value</button>
    </div>
  )
}

export default UseStateHook
