import React from 'react'
import Trending from './Component/Main/Trending/Trending'
import Header from './Component/Header/Header'
import Lorem from './Component/Main/Lorem Ipsum/Lorem'
import LoremI from './Component/Main/Lorem Ipsum/LoremI'
import footer from "./Component/Footer/Footer"
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Trending />
      <Lorem/>
      <LoremI/>
      <Footer />
    </div>
  )
}

export default App