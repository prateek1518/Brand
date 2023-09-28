import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FREE DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Categoury</button>
            </div>
            <div className="shopping">
                <p>
                    Also Available On 
                </p>
                <div className="brand-icon">
                    <img src='/images/amazon.png' alt='no image'/>
                    <img src='/images/flipkart.png' alt='no image'/>

                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src='/images/hero-image.png' alt='No image'/>
        </div>
    </main>
  )
}

export default HeroSection;