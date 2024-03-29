import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition={type:'spring',
                     duration:'3'}
  return (
    <div className='hero' id="hero">
        {/* <div className="blur hero-blur"></div> */}
      <div className="left"
                >
            <Header />
            <div className="best-add">
                <motion.div
                initial={{left:'5rem'}}
                whileInView={{left:'.6rem'}}
                transition={{...transition,type:'tween'}}

                ></motion.div>
                <span>THE BEST FITNESS CLUB IN THE TOWN</span>
            </div>
            <div className='hero-text'>
                <motion.div 
                 initial={{left:'0'}}
                 whileInView={{left:'5rem'}}
                 transition={{...transition}}>
                    <span className='stroke-text'>SHAPE</span>
                    <span>YOUR</span>
                </motion.div>
                <motion.div 
                initial={{left:'0'}}
                whileInView={{left:'5rem'}}
                transition={{...transition}}>
                    <shape>IDEAL </shape>
                    <shape>BODY</shape>
                </motion.div>  
                <div className='hero-description'>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                </div>
            </div>
            <div className="hero-number">
                <div>
                    <span><NumberCounter start={100} end={168} preFix="+" delay='3'></NumberCounter></span>
                    <span>EXPERT COACHES</span>
                </div>
                <div>
                    <span><NumberCounter start={583} end={683} preFix="+" delay='3'></NumberCounter></span>
                    <span>EXPERT COACHES</span>
                </div>
                <div className="hero-count" >
                    <span><NumberCounter start={50} end={87} preFix="+" delay='3'></NumberCounter></span>
                    <span>EXPERT COACHES</span>
                </div>
            </div> 
            <motion.div className="hero-button"
            initial={{left:'0'}}
            whileInView={{left:'5rem'}}
            transition={{...transition}}>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>                
            </motion.div>                       
      </div>
      <div className="right">
            <button className='btn'>Join Now</button>
            <motion.img
            initial={{height:'70%'}}
            whileInView={{height:'78%'}}
            transition={{...transition}}
            src={hero_image} alt=""/>
            <motion.img 
            initial={{right:'10rem'}}
            whileInView={{right:'20rem'}}
            transition={{...transition}}
            src={hero_image_back} alt=""/>
      </div>
    </div>
  )
}

export default Hero
