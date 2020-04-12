import React, { Component } from 'react';
import logo from '../logo.svg';
// import {BrowserRouter as Link} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap';

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
            {title : '서비스소개', link : './about'},
            {title : '기업과제 리스트', link : './project'}
        ]
        const listItem = item.map((item, index)=> <NavItem title={item.title} link={item.link} key={index}/>);
    return (
        <Nav className="mr-auto">
            {listItem}
        </Nav>
    )
    }
}

class LoginNav extends Component {
    render(){
        const loginItem = [
            {title : '회원가입', link : './signup'},
            {title : '로그인', link : './login'}
        ]
        const loginListItem = loginItem.map((loginItem, index)=> <NavItem title={loginItem.title} link={loginItem.link} key={index}/>);
        return(
            <Nav>
                {loginListItem}
            </Nav>
        )
    }
}
function Header() {
  return (
    <header>
      <div className="wrap">
        <Navbar>
            <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
            <NavList />
            <LoginNav />
        </Navbar>
        
      </div>
    </header>
  )
}

export default Header;
