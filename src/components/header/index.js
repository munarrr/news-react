import React from 'react';
import {BiAlignLeft , BiSearch,BiUser } from 'react-icons/bi';
import logo from '../../assets/image-253.png';
import Woman from '../../assets/sub-logo.png';
import Nav from './Nav'
import Info from './info'

import './style.scss';
const menu = ["News","Opinion",]
const Header = () => {
     return (
          <div className="header">
               <div className="header__logo">
                    <div className="header__right flex">
               <BiAlignLeft width="30px" height="30px"  />
               <h4 className="header__sections">Sections</h4>
               <BiSearch className="header__search" color="#D9DADB" />
               <input className="header__input" type="search"  placeholder="Search" />
               </div>
               <div className="header__left flex">
               <img className="header__img" src={logo} alt="image-header"/>
               <div className="flex-column">
               <span className="header__subscribe">Subscribe Now</span>
               <span className="header__date">3 month for $19</span>
               </div>
               <BiUser color="#D9DADB" />
               <span header="header__sign-in">Sign In</span>
               </div>
               </div>
               <div className="header__logotip flex">
                    <img src={Woman} alt="woman" />
                    <span>Boston and New York Bear Brunt</span>
                   
                    <span>Monday, January 1, 2018</span>
                    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clip-rule="evenodd" d="M9 15.4763C9.4151 15.4763 9.74939 15.8106 9.74939 16.2257V17.2506C9.74939 17.6657 9.4151 18 9 18C8.5849 18 8.25061 17.6657 8.25061 17.2506V16.2257C8.25061 15.8106 8.5849 15.4763 9 15.4763ZM9 2.52367C8.5849 2.52367 8.25061 2.18939 8.25061 1.77429V0.749388C8.25061 0.334286 8.5849 0 9 0C9.4151 0 9.74939 0.334286 9.74939 0.749388V1.77429C9.74939 2.18939 9.4151 2.52367 9 2.52367ZM17.2506 8.25061C17.6657 8.25061 18 8.5849 18 9C18 9.4151 17.6657 9.74939 17.2506 9.74939H16.2257C15.8106 9.74939 15.4763 9.4151 15.4763 9C15.4763 8.5849 15.8106 8.25061 16.2257 8.25061H17.2506ZM1.77429 8.25061C2.18939 8.25061 2.52367 8.5849 2.52367 9C2.52367 9.4151 2.18939 9.74939 1.77429 9.74939H0.749388C0.334286 9.74939 0 9.4151 0 9C0 8.5849 0.334286 8.25061 0.749388 8.25061H1.77429ZM14.6388 4.42286C14.3449 4.71306 13.871 4.71673 13.5771 4.42286C13.2833 4.12898 13.2833 3.6551 13.5771 3.36122L14.3008 2.63755C14.5947 2.34367 15.0686 2.34367 15.3624 2.63755C15.6563 2.93143 15.6563 3.40531 15.3624 3.69918L14.6388 4.42286ZM3.36122 13.5771C3.6551 13.2869 4.12898 13.2833 4.42286 13.5771C4.71673 13.871 4.71673 14.3449 4.42286 14.6388L3.69918 15.3624C3.40531 15.6563 2.93143 15.6563 2.63755 15.3624C2.34367 15.0686 2.34367 14.5947 2.63755 14.3008L3.36122 13.5771ZM14.6388 13.5771L15.3624 14.3008C15.6563 14.5947 15.6563 15.0686 15.3624 15.3624C15.0686 15.6563 14.5947 15.6563 14.3008 15.3624L13.5771 14.6388C13.2833 14.3449 13.2833 13.871 13.5771 13.5771C13.871 13.2833 14.3449 13.2833 14.6388 13.5771ZM3.36122 4.42286L2.63755 3.69918C2.34367 3.40531 2.34367 2.93143 2.63755 2.63755C2.93143 2.34367 3.40531 2.34367 3.69918 2.63755L4.42286 3.36122C4.71673 3.6551 4.71673 4.12898 4.42286 4.42286C4.12898 4.71673 3.6551 4.71673 3.36122 4.42286ZM9 3.36122C12.1078 3.36122 14.6388 5.89224 14.6388 9C14.6388 12.1114 12.1078 14.6388 9 14.6388C5.88857 14.6388 3.36122 12.1078 3.36122 9C3.36122 5.88857 5.89224 3.36122 9 3.36122ZM9 13.1363C11.2812 13.1363 13.1363 11.2812 13.1363 9C13.1363 6.71878 11.2812 4.86367 9 4.86367C6.71878 4.86367 4.86367 6.71878 4.86367 9C4.86367 11.2812 6.71878 13.1363 9 13.1363Z" fill="#BCBFC2"/>
</svg>
- 23 °C</span>
                    </div> 
               <hr color="#D9DADB" height="6px" />
               <Nav />
               <Info />
          </div>
     )
}

export default Header
