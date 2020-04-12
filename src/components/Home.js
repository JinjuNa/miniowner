import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import ProjectComponent from './ProjectComponent';

const CarouselImg = styled.div`
  width:800px;
  height:400px;
  background-color:#666;
`

function CarouselComponent(props){
  return (
    <Carousel.Item>
      <CarouselImg className="d-block w-100"/>
      <Carousel.Caption>
        <h3>{props.label}</h3>
        <p>{props.detail}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
}

class CarouselBox extends Component {
  render(){
    const slideItem = [
      {num : 1, label : 'First slide label', detail : '첫번째 슬라이더에 관련된 내용입니다.', color: 'blue'},
      {num : 2, label : 'Second slide label', detail : '두번째 슬라이더에 관련된 내용입니다.', color : 'red'},
      {num : 3, label : 'Third slide label', detail : '세번째 슬라이더에 관련된 내용입니다.', color : 'yellow'}
    ]
    const slideContent = slideItem.map((slideItem, index)=> <CarouselComponent label={slideItem.label} detail={slideItem.detail} key={index} />);
    return(
      <Carousel>
        {slideContent}
      </Carousel>
    )
  }
}
function Home() {
  return (
    <div className="pageContainer">
        {/* <CarouselBox /> */}
        <Carousel>
          <Carousel.Item>
            <CarouselImg className="d-block w-100" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg className="d-block w-100"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImg className="d-block w-100"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section className="projectSection">
          <h2>미니인턴을 신청하세요</h2>
          <p>이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요.</p>
          <div style={{textAlign : 'right', paddingRight : '10px'}}>
            <a href="/project">모든 기업과제 보러가기</a>
          </div>
          <ProjectComponent limit={8} />
        </section>
    </div>
  )
}

export default Home;
