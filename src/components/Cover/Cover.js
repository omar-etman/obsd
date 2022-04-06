import React from 'react'
import './Cover.css'
import coverImg from '../../assets/—Pngtree—seafood pizza with cheese_4942142.png'

function Cover() {
  return (
      <div className='cover-container'>
        <img src={coverImg} alt='Pizza' className='cover-img'/>
        <div className='cover-text'>
            <h1 className='text-main'>
                ENJOY OUR<br/>DELICIOUS
                <span className='main-highLight'>FOOD</span>
            </h1>
            <ul className='text-tabsList'>
                <li className='tabsList-tab'>
                    Buy 1 Get 2
                </li>
                <li className='tabsList-tab'>
                    Order Online Now
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Cover