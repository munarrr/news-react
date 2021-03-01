import React from 'react'
import Car from '../../assets/car.png'
import Girl from '../../assets/girl.png'
import './content.scss'

const Rows = () => {
     return (
          <div className="content__rows">
               <div className="content__cars col-6">
                    <div className="content__cars-info">
                         <div className="content__car">
                              <h5 className="content__suptitle">CARS</h5>
                              <h3 className="content__title">The joy of replicas: A $ 5 million car for $ 50,000</h3>
                              <p className="content__text">The 31-year-old self-taught engineer and former amateur racer spends his days building artful recreations of one of most iconic sports cars</p>

                         </div>
                         <img src={Car} alt="car" />
                    </div>
                    <div className="content__cars-footer flex">
                         <img src={Girl} alt="Girl" />
                         <span className="content__cars-footername">Jessica Miller:</span>
                         <p className="content__cars-footertext">Even as the ride-hailing service’s future remem…</p>
                         <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1346 10.9998V13.9998L8.36064 10.9998H2.25C1.42157 10.9998 0.75 10.3282 0.75 9.49976V1.99976C0.75 1.17133 1.42157 0.499756 2.25 0.499756H12.75C13.5784 0.499756 14.25 1.17133 14.25 1.99976V9.49976C14.25 10.3282 13.5784 10.9998 12.75 10.9998H11.1346Z" fill="#BCBFC2"/>
                         </svg>
                         <span className="content__carsspan">342</span>
                    </div>
               </div>
               <div className="content__popular col-4">
                    <button className="content__popular-button">Popular</button>
                    <h4 className="content__popular-suptitle">Art  Design</h4>
                    <h2 className="content__popular-title">Invisible ink: the weird world of tattoo removal – in pictures</h2>
                    <img src={Girl} alt="Girl" />
                    <span className="content__cars-footername">Jessica Miller:</span>
                         <p className="content__cars-footertext">Even as the ride-hailing service’s future remem…</p>
                         <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1346 10.9998V13.9998L8.36064 10.9998H2.25C1.42157 10.9998 0.75 10.3282 0.75 9.49976V1.99976C0.75 1.17133 1.42157 0.499756 2.25 0.499756H12.75C13.5784 0.499756 14.25 1.17133 14.25 1.99976V9.49976C14.25 10.3282 13.5784 10.9998 12.75 10.9998H11.1346Z" fill="#BCBFC2"/>
                         </svg>
                         <span className="content__carsspan">342</span>
               </div>
               <div className="content__reviews col-4"></div>
          </div>
     )
}

export default Rows
