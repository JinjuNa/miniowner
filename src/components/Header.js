import React from 'react';
import logo from '../logo.svg';
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
        <div>
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            <NavList menuList={item} className="header-left"/>
        </div>
        <div>
            <NavList menuList={loginItem} className="header-right"/>
        </div>
      </div>
    </header>
  )
}

export default Header;
