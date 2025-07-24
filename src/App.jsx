import React from 'react'
import Trending from './Component/Main/Trending/Trending'
import Header from './Component/Header/Header'
import Lorem from './Component/Main/Lorem Ipsum/Lorem'
import LoremI from './Component/Main/Lorem Ipsum/LoremI'

const App = () => {
  return (
    <div>
      <Header />
      <Trending />
      <Lorem/>
      <LoremI/>
    </div>
  )
}

export default App