import React, { Component } from 'react';
// import {BrowserRouter as Link} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../logo.svg';

class NavItem extends Component {
    render(){
    return (
        <Nav.Item>
            <Nav.Link href={this.props.link}>{this.props.title}</Nav.Link>
        </Nav.Item>
    )
    }
}

class NavList extends Component {
    render(){
        const item = [
            {title : '이용약관', link : '#'},
            {title : '개인정보취급방침', link : '#'},
            {title : '고객센터', link : '#'}
        ]
        const listItem = item.map((item, index)=> <NavItem title={item.title} link={item.link} key={index}/>);
    return (
        <Nav>
            {listItem}
        </Nav>
    )
    }
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Navbar>
            <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
            <NavList />
        </Navbar>
        <div className="copyRight">
            (주) 딘두놀 | 대표이사 : 나진주 <br />
            서울특별시 마포구
            이메일 : dindoo0524@gmail.com
        </div>
      </div>
    </footer>
  )
}

export default Footer;
