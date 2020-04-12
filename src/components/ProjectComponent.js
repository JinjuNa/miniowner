import React, { Component } from 'react';
import styled from 'styled-components';
// import {BrowserRouter as Link} from 'react-router-dom'
// import {Nav, Navbar} from 'react-bootstrap';
const UL = styled.ul`
    text-align:center;
`

const LI = styled.li`
    width:25%;
    height:250px;
    display:inline-block;
    box-sizing:border-box;
    padding:10px;
    vertical-align:top;

    & p {
        color:#ddd;
        font-size:10px;
    }

    & h3 {
        font-size:12px;
    }

    & .imgContainer {
        width:100%;
        height:100px;
        background-color:#999;
    }

    & .txtContainer {
        background-color : #fff;
        height:100px;
        padding:10px;
    }

    & .dateContainer {
        background-color : #fff;
        border-top: 1px solid #eee;
        text-align : left;
        padding:10px;
        font-size:12px;
    }

    & .dateContainer.green {
        color:green;
    }

    & .dateContainer.red {
        color : red;
    }

    & .dateContainer.gray {
        color : gray;
    }
`
class ProjectBox extends Component {
    render(){
        let statusClass ='dateContainer ';
        if(this.props.status === '모집 중'){ statusClass += 'green' }
        if(this.props.status === '진행 중'){ statusClass += 'red' }
        if(this.props.status === '종료'){ statusClass += 'gray' }
        const link = '/item?num='+this.props.num;
    return (
        <LI>
            <a href={link}>
            <div className="imgContainer"></div>
            <div className="txtContainer">
                <p>{this.props.category}</p>
                <h3>{this.props.title}</h3>
            </div>
            <div className= {statusClass}>
                {this.props.status}
            </div>
            </a>
        </LI>
    )
    }
}

class ProjectComponent extends Component {
    render(){
        const limit = this.props.limit;
        const projectItem = [
            {num : 1, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '모집 중', dateActive : true, date : '2020.04.27', img : '1.jpg' },
            {num : 2, title : '새로운 소비 트랜드, \'그린 컨슈머\'를 겨냥한 친환경 화장품 파우치 기획', category : '기획아이디어제안마케팅', status : '모집 중', dateActive : true, date : '2020.04.27', img : '2.jpg' },
            {num : 3, title : '픽네일 앱 사용자의 리텐션(잔존율)을 높이기 위한 아이디어 제안', category : '기획아이디어제안마케팅', status : '모집 중', dateActive : true, date : '2020.04.27', img : '3.jpg' },
            {num : 4, title : '미니인턴을 효과적으로 알릴 수 있는 광고 컨셉 및 아이디어 제안', category : '기획아이디어제안마케팅', status : '진행 중', dateActive : true, date : '2020.04.27', img : '4.jpg' },
            {num : 5, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '5.jpg' },
            {num : 6, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '6.jpg' },
            {num : 7, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '7.jpg' },
            {num : 8, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '8.jpg' },
            {num : 9, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '9.jpg' },
            {num : 10, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '10.jpg' },
            {num : 11, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '11.jpg' },
            {num : 12, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '12.jpg' },
            {num : 13, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '13.jpg' },
            {num : 14, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '14.jpg' },
            {num : 15, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '15.jpg' },
            {num : 16, title : '\'중고나라\' 브랜드 개선 아이디어 제안', category : '기획아이디어제안마케팅', status : '종료', date : '2020.04.27', dateActive : false, img : '16.jpg' }
        ]
        const projectListItem = projectItem.slice(0, limit).map((projectItem, index)=> <ProjectBox num={projectItem.num} title={projectItem.title} category={projectItem.category} status={projectItem.status} key={index}/>);
        return(
            <UL>
            {projectListItem}
            </UL>
        )
    }
}


export default ProjectComponent;
