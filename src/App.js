import React from 'react'
// import Header from './Components/Header'


import {ImageData} from './ImageData/ImageData'
import Carousel from './Components/Carousel'
import MainLayout from './layouts/MainLayout'

export const App = () => {
  return (
    <div> 
        <MainLayout>
        <Carousel slides = {ImageData}/> {/*option to add carousel nested in mainlayout*/}
        </MainLayout>
    </div>
  )
}

export default App