import React from 'react'
import Trending from './Component/Main/Trending/Trending'
import Header from './Component/Header/Header'
import Lorem from './Component/Main/Lorem Ipsum/Lorem'
import LoremI from './Component/Main/Lorem Ipsum/LoremI'
import footer from "./Component/Footer/Footer"
import Footer from './Component/Footer/Footer'
import Project from './Component/Projects/Project'
import News from './Pages/News/News'
import NewsMain from './Pages/News/NewsMain'
import NewsFooter from './Pages/News/NewsFooter'

const App = () => {
  return (
    <div>
      <News/>
      <NewsMain/>
      <NewsFooter/>

    </div>
  )
}

export default App