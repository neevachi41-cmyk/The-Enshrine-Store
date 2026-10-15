import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <div className="navlinks">
      <a href="#shop">Shop</a>
      <a href="#moods">Moods</a>
      <a href="#custom">Custom</a>
      <Link to="/about">About</Link>
    </div>
  )
}

export default NavLinks
