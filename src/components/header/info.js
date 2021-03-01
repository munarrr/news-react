import React from 'react'
import {info} from './cons'
import ReactPlayer from 'react-player';
import Rectenge from '../../assets/Rectangle.png'

const Info = () => {
   
     return (
          <div className="header__content ">
          <img className="header__content-img" src={Rectenge} alt="bacgraund" />
        <div className="header__content-text flex-column">
             <div className="header__content-blok">
                  <h2 className="header__content-recom">Recommended for you</h2>
                  <h5 className="header__content-title">
                  Food
                  </h5>
                  <p className="header__content-suptitle">
                  For Chicken-Fried Steak, Too Much Is Just Enough
                  </p>
             </div>
             <div className="header__content-blok">
                  <h5 className="header__content-title">
                  Cars
                  </h5>
                  <p className="header__content-suptitle">
                  Storm Has Car Dealers Doing Swift Business                  </p>
             </div>
             <div className="header__content-blok">
                  <h5 className="header__content-title">
                  Movies
                  </h5>
                  <p className="header__content-suptitle">
                  War Is Hell? In New Military Dramas, It’s One-Dimensional                  </p>
             </div>
             <div className="header__content-blok">
                  <h5 className="header__content-title">
                  NFL                  </h5>
                  <p className="header__content-suptitle">
                  11 surprising stat rankings for active NFL players                  </p>
             </div>
             <div className="header__content-blok">
                  <h5 className="header__content-title">
                  Tech Reviews                  </h5>
                  <p className="header__content-suptitle"></p>
                  The bookcases you can buy online and assemble yourself
                </div>
        </div>
          </div>
         
     )
}

export default Info
