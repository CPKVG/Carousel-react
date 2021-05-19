import React,{useState, useEffect} from 'react'
import {ImageData} from './ImageData'
import './Carousel.css';    

import useCarousel from '../Hooks/useCarousel';

const CarouselwHooks= ({slides}) => {
    const [{current},prevSlide,nextSlide,pause,resume] = useCarousel(slides,1000)
        //if no image data is present, return null
        if(!Array.isArray(slides) || slides.length <=0){
            return null
        }
    
        return (
            <section className='slider-arrow'>
                <h1>CarouselwHooks.js</h1>
                <div className = 'left-arrow' onClick = {prevSlide}>
                    Prev
                </div>

                <div className = 'right-arrow' onClick = {nextSlide}>
                    Next
                </div>
    
                
                <div className = 'pause-arrow' onClick = {pause}>
                    pause
                </div>
    
                <div className = 'resume-arrow' onClick = {resume}>
                    resume
                </div>
                
    
                {ImageData.map((slide,index)=>{
                    return (
                        <div className ={index === current ? 'slide active' : 'slide'} key = {index}>
                            {index === current && (<img src = {slide.image} alt = 'scuffed images'className = "image"/>)}
                            {/* {console.log(slides)} */}
                            {console.log()}
                        </div>
                    )
                })}
            </section>
        )
    }

export default CarouselwHooks


