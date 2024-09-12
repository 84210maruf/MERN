import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import Header from './Components/header/Header'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (

    <Layout>

      <Header />

      <Body />

      <Footer />

    </Layout>

  )
}

export default App
