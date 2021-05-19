import React from 'react'
import Header from './Components/Header'


import {ImageData} from './Components/Carousel/ImageData'
import Carousel from './Components/Carousel/Carousel'
import CarouselwHooks from './Components/Carousel/CarouselwHook'

export const App = () => {
  return (
    <div> 
      <Carousel slides = {ImageData}/>
      
      {<CarouselwHooks slides = {ImageData}/>}
      <Header/>


    </div>
  )
}

export default App