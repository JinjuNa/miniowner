import React from 'react';
import logo from '../logo.svg';
// import {BrowserRouter as Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap';
import NavList from './NavList';

const Header =() => {
    const item = [
        {title : '서비스소개', link : './about'},
        {title : '기업과제 리스트', link : './project'}
    ]

    const loginItem = [
        {title : '회원가입', link : './signup'},
        {title : '로그인', link : './login'}
    ]
  return (
    <header>
      <div className="wrap">
        <Navbar>
            <Navbar.Brand href="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
            <NavList menuList={item}/>
            <NavList menuList={loginItem} className="mr-auto" />
        </Navbar>
        
      </div>
    </header>
  )
}

export default Header;
