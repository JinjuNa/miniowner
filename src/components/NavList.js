import React from 'react';
import {Nav} from 'react-bootstrap';

const NavItem = ({title, link}) => {
    return (
        <Nav.Item>
            <Nav.Link href={link}>{title}</Nav.Link>
        </Nav.Item>
    )
}

const NavList = ({menuList, className}) => {
        const listItem = menuList.map((item, index)=> <NavItem title={item.title} link={item.link} key={index}/>);
    return (
        <Nav className={className}>
            {listItem}
        </Nav>
    )
}

export default NavList;