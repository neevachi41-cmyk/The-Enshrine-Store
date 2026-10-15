import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function NavLinks() {
  const location = useLocation()
  const currentPath = location.pathname
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['shop', 'moods', 'custom']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="navlinks">
      <a href="#shop" className={activeSection === 'shop' && currentPath === '/' ? 'active' : ''}>Shop</a>
      <a href="#moods" className={activeSection === 'moods' && currentPath === '/' ? 'active' : ''}>Moods</a>
      <a href="#custom" className={activeSection === 'custom' && currentPath === '/' ? 'active' : ''}>Custom</a>
      <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>About</Link>
    </div>
  )
}

export default NavLinks
