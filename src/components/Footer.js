import React from 'react';
// import {BrowserRouter as Link} from 'react-router-dom'
import logo from '../logo.svg';
import NavList from './NavList';



const Footer = () => {
    const item = [
        {title : '이용약관', link : '#'},
        {title : '개인정보취급방침', link : '#'},
        {title : '고객센터', link : '#'}
    ]
  return (
    <footer>
      <div className="wrap">
        <div>
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            <NavList menuList={item} className="footer-nav"/>
        </div>
        <div className="copy-right">
            (주) 딘두놀 | 대표이사 : 나진주 <br />
            서울특별시 마포구
            이메일 : dindoo0524@gmail.com
        </div>
      </div>
    </footer>
  )
}

export default Footer;
