import React from "react";
import TopHeader from "./top_header";
import HeaderNavBar from "./header_nav_bar";
import './header.scss'

const Header = () => {
  return(
    <div className='header'>
      <TopHeader/>
      <HeaderNavBar/>
    </div>
  )
}
export default Header
