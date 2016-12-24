import React from 'react';
import logo from 'assets/images/logo.png';


const Logo = () => (
  <div className="logo">
    <img src={logo} alt="Netflix" />
  </div>
);

const Search = () => (
  <div className="search">
    <input type="text" placeholder="Search for a title..."/>
  </div>
);

const User = () => (
  <div className="user">
    <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" alt="User"/>
  </div>
);

const Header = () => (
  <div className="navbar">
    <Logo />
    <div className="menu">
      <Search />
      <User />
    </div>

  </div>
)


export default Header;
