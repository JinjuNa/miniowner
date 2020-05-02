import React, { useState, useEffect, useRef } from "react";
import './Slider.css';

const CarouselComponent = ({slideItem}) =>{
  return (
    <div className="slide" style={{backgroundColor : slideItem.color}}>
        <h3>{slideItem.label}</h3>
        <p>{slideItem.detail}</p>
    </div>
  )
}

const TOTAL_SLIDES = 2;

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    

    const slideItem = [
      {num : 1, label : 'First slide label', detail : '첫번째 슬라이더에 관련된 내용입니다.', color: 'blue'},
      {num : 2, label : 'Second slide label', detail : '두번째 슬라이더에 관련된 내용입니다.', color : 'red'},
      {num : 3, label : 'Third slide label', detail : '세번째 슬라이더에 관련된 내용입니다.', color : 'yellow'}
    ]
    const slideContent = slideItem.map((slideItem, index)=> <CarouselComponent slideItem={slideItem} key={index} />);
    
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
      }, [currentSlide]);
    
    setInterval(() => {
      
    }, 4000);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
          setCurrentSlide(0);
      } else {
          setCurrentSlide(currentSlide + 1);
      }
      }, 4000);
      return () => clearInterval(interval);
    }, );

    return(
      <div className="slider-container-wrap">
        {currentSlide}
        <div className="slider-container" ref={slideRef}>
            {slideContent}
        </div>
        <button className="slider-button" onClick={prevSlide}>Previous Slide</button>
        <button className="slider-button" onClick={nextSlide}>Next Slide</button>
        
      </div>
    )
}

export default Slider;
