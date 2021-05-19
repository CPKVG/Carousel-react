import React,{useState, useEffect} from 'react'
import {ImageData} from './ImageData'
import './Carousel.css';    

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
        <section className='slider-arrow'>
            <h1>Carousel.js</h1>
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
                    </div>
                )
            })}
        </section>
    )
}

export default Carousel
