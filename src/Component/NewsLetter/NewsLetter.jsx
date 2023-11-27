import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <input type="email" placeholder='Type your email' />
        <button>Subscribe</button>
    </div>
  )
}

export default NewsLetter