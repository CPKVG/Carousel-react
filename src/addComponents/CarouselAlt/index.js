import React,{useState, useEffect} from 'react'
import {ImageData} from './../../ImageData/ImageData';
import './styles.css';
import nextIMG from './../../assets/outline_arrow_forward_black_24dp.png';
import prevIMG from './../../assets/outline_arrow_back_black_24dp.png'; 

const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const [auto, setAuto] = useState(true); //set carouel default as true
    const length = slides.length
    useEffect(() => {
        if (!auto) return;
        const interval = setTimeout(() => {
          nextSlide();
        }, 1000);
        return () => clearTimeout(interval);

      },[auto, current]
    );

    const resume = () => setAuto(true);
    const pause = () => setAuto(false);
    
    const nextSlide = () =>{//loops around the array 
        setCurrent(current === length - 1 ? 0: current + 1)//(if 3(-1) return back to 0, else current +1)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1: current - 1)
    }

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
