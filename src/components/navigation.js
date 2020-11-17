import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Avatar} from "antd";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
];

export default function Navigation({user}) {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <nav className="site-nav">
            <span className="menu-title">Jasper's Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {
                        navLinks.map((link, index) => {
                            return (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                            )
                        })
                    }
                </ul>
                <span className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
            <ion-icon className="s-ion-icon ion-ios-menu" name="menu" onClick={() => setMenuActive(!menuActive)}> </ion-icon>
        </nav>
    )
}
