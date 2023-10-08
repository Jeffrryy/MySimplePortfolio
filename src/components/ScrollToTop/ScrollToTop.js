import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './ScrollToTop.css'
import { animateScroll as Scroll } from 'react-scroll';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 400 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' onClick={() => Scroll.scrollToTop()
      }>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
