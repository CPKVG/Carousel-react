import React from 'react';
import {ImageData} from './../../ImageData/ImageData';
import './styles.css';    
import nextIMG from './../../assets/outline_arrow_forward_black_24dp.png';
import prevIMG from './../../assets/outline_arrow_back_black_24dp.png';
import useCarousel from '../customHooks/useCarousel';

const Carousel= ({slides}) => {
    const [{current},prevSlide,nextSlide,pause,resume] = useCarousel(slides,1000)
        //if no image data is present, return null
        if(!Array.isArray(slides) || slides.length <=0){
            return null
        }

    
        return (
            <section className='sliderDirection' onMouseOver = {pause} onMouseOut = {resume}>

                <div className = 'leftSelect' onClick = {prevSlide}>
                    <img src={prevIMG} />
                </div>

                <div className = 'rightSelect' onClick = {nextSlide}>
                    <img src={nextIMG} />
                </div>

                <div className = "directionNavi">

                    <div className = "leftArrow">

                    </div>
                
                    <div className = "rightArrow">
                        
                    </div>

                </div>
    
                {ImageData.map((slide,index)=>{
                    return (
                        <div className ={index === current ? 'slide active' : 'slide'} key = {index}>
                            {index === current && (<img src = {slide.image} alt = 'scuffed images'className = "image"/>)}
                        </div>
                    )
                })}
            </section>
        )
    }

export default Carousel


