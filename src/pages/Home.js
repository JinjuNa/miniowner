import React from 'react';
import ProjectComponent from '../components/ProjectComponent';
import './Home.css';
import Slider from '../components/Slider';


const Home = () => {
  return (
    <main className="page-container">
        <Slider />
        <section className="project-section">
          <h2>미니인턴을 신청하세요</h2>
          <p>이제 집, 학교, 도서관, 카페에서 인턴십을 경험하고, 실무역량평가로 취업하세요.</p>
          <div className="all-project">
            <a href="/project">모든 기업과제 보러가기</a>
          </div>
          <ProjectComponent limit={8} />
        </section>
    </main>
  )
}

export default Home;
