import React from 'react';
import styled from 'styled-components';
import ProjectComponent from '../components/ProjectComponent';
import './Home.css';

const CarouselImg = styled.div`
  width:800px;
  height:400px;
  background-color:#666;
`

const CarouselComponent = (props) =>{
  return (
    <div>
      <CarouselImg className="d-block w-100"/>
      <div>
        <h3>{props.label}</h3>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}

const CarouselBox = () => {
    const slideItem = [
      {num : 1, label : 'First slide label', detail : '첫번째 슬라이더에 관련된 내용입니다.', color: 'blue'},
      {num : 2, label : 'Second slide label', detail : '두번째 슬라이더에 관련된 내용입니다.', color : 'red'},
      {num : 3, label : 'Third slide label', detail : '세번째 슬라이더에 관련된 내용입니다.', color : 'yellow'}
    ]
    const slideContent = slideItem.map((slideItem, index)=> <CarouselComponent label={slideItem.label} detail={slideItem.detail} key={index} />);
    return(
      <div>
        {slideContent}
      </div>
    )
}

const Home = () => {
  return (
    <div className="pageContainer">
        <CarouselBox />

        <section className="projectSection">
          <h2>미니인턴을 신청하세요</h2>
          <p>이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요.</p>
          <div className="allProject">
            <a href="/project">모든 기업과제 보러가기</a>
          </div>
          <ProjectComponent limit={8} />
        </section>
    </div>
  )
}

export default Home;
