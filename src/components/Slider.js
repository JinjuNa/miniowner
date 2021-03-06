import React, { useState, useEffect, useRef } from "react";
import './Slider.css';
import banner1 from '../banner1.jpg';
import banner2 from '../banner2.jpg';
import banner3 from '../banner3.jpg';
import styled from "styled-components";

const Slide = styled.div`
  background-image: url("${props => props.img}");
  background-size:cover;
`

const PagerContainer = styled.div`
  position: absolute;
  bottom:20px;
  left: 0;
  text-align : center;
  width:100%;

  & span{
    display:inline-block;
    width:15px;
    height:15px;
    background-color : #999;
    opacity:0.5;
    border-radius:50%;
    font-size:0;
    text-indent:-9999px;
    margin: 10px;
  }

  & span.active {
    background-color : #fff;
    opacity : 1;
  }
`

const CarouselComponent = ({slideItem}) =>{
  return (
    <Slide className="slide" img={slideItem.img} >
        <h3>{slideItem.label}</h3>
        <p>{slideItem.detail}</p>
    </Slide>
  )
}


const TOTAL_SLIDES = 2;

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const [activePage, setActivePage] = useState(1);
    
    const pagerMenu = [
      {id: 1, text : "1"},
      {id: 2, text : "2"},
      {id: 3, text : "3"}
    ];
    
    const Pager = (() => {
      return(
        <PagerContainer>
          {
            pagerMenu.map((item, index) =>{
                return <span key={index} className={activePage === item.id ? 'active' : ''} onClick={() => {setActivePage(item.id); setCurrentSlide(index)}}>{item.text}</span>
            })
          }
        </PagerContainer>
      )
    }) 

    const slideItem = [
      {num : 1, label : 'First slide label', detail : '첫번째 슬라이더에 관련된 내용입니다.', color: 'blue', img : banner1 },
      {num : 2, label : 'Second slide label', detail : '두번째 슬라이더에 관련된 내용입니다.', color : 'red', img : banner2},
      {num : 3, label : 'Third slide label', detail : '세번째 슬라이더에 관련된 내용입니다.', color : 'yellow', img : banner3}
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
        <div className="slider-container" ref={slideRef}>
            {slideContent}
        </div>
        <Pager />
      </div>
    )
}

export default Slider;
