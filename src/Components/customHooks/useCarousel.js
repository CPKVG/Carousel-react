import {useState,useEffect} from 'react' 


const useCarousel = (slides,scrollSpeed = 4000) => {
    const [current, setCurrent] = useState(0) //returns a tuple(first sequence of list)
    const [auto, setAuto] = useState(true); //set carouel default as true
    const length = slides.length
    useEffect(() => {
        if (!auto) return;
        const interval = setTimeout(() => {
          nextSlide();
        }, scrollSpeed);
        return () => clearTimeout(interval);
      },[auto, current]
    );
    const resume = () => setAuto(true);
    const pause = () => setAuto(false);

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0: current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1: current - 1)
    }


    return [{current},prevSlide,nextSlide,pause,resume]

}

export default useCarousel


