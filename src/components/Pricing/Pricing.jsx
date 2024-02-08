import React from 'react'
import '../Pricing/Pricing.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Pricing = () => {
  return (
    <div className='pricing' id="pricing">
        <div className='header-p'>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
        </div>
        {/* <div className='blur pricing-blur-left'></div> */}
        {/* <div className='blur pricing-blur-right'></div> */}

        <div className='pricing-cards'>
           {
            plansData.map(plan=>(
                <div className="plan">
                    {/* <span className='plan-icon'>{plan.icon}</span> */}
                    {plan.icon}
                    <span className='plan-name'>{plan.name}</span>
                    <span className='plan-currency'>$ {plan.price}</span>
                    
                    <div className="plan-features">
                        {
                            plan.features.map(feature=>(
                                <div className="feature">
                                    <img src={whiteTick} alt=''></img>
                                    <span>{feature}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="plan-footer">
                        <span>See more benefits -></span>
                    </div>    
                    <button className='btn'>Join now</button>
                </div>
            ))
           } 
        </div>
    </div>
  )
}

export default Pricing
