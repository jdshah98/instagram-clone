import React, { useEffect, useState } from 'react'
import './RotatingHomeImage.css'
import rotatingImage1 from '../../images/rotating-img-1.png'
import rotatingImage2 from '../../images/rotating-img-2.png'
import rotatingImage3 from '../../images/rotating-img-3.png'
import rotatingImage4 from '../../images/rotating-img-4.png'

const RotatingHomeImage = () => {
  const images = [rotatingImage1, rotatingImage2, rotatingImage3, rotatingImage4]
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length)
        setFade(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [images.length]);

  return (
    <div className='image-bg'>
      <img className={`rotating-img ${fade ? 'fade-in' : 'fade-out'}`} src={images[index]} alt='' />
    </div>
  )
}

export default RotatingHomeImage