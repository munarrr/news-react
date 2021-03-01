import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from './cons'

const Nav = () => {
     const img = "https://www.worldfuturecouncil.org/wp-content/uploads/2018/01/Project-Donations_blue-Test_-Rahmen-30px-300x300.png";

     return (
          <div className="header__nav">
               <ul className="header__item flex">
                    {menu.map((item) => {
                         return <li className="header__list">
                              <Link className="header__link"  key={item.index} to={item.link}>{item.title}</Link>
                         </li>
                    }
                    )}
               </ul>
               <div className="header__info flex">
             <div className="header__info-title flex">
                  <h3 className="header__info-text">25 Songs That Tell Us Where Music Is Going</h3>
                  <img  className="header__info-img" src={img} alt="header__img" />
             </div>
             <div className="header__info-title flex">
                  <h3 className="header__info-text">25 Songs That Tell Us Where Music Is Going</h3>
                  <img className="header__info-img" src={img} alt="header__img" />
             </div>
             <div className="header__info-title flex">
                  <h3 className="header__info-text">25 Songs That Tell Us Where Music Is Going</h3>
                  <img  className="header__info-img" src={img} alt="header__img" />
             </div>
             <div className="header__info-title flex">
                  <h3 className="header__info-text">25 Songs That Tell Us Where Music Is Going</h3>
                  <img className="header__info-img" src={img} alt="header__img" />
             </div>
      </div>
          </div>
     )
}

export default Nav
