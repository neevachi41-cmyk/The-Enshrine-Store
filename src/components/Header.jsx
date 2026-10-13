import Logo from './sections/Logo'
import NavLinks from './sections/NavLinks'

function Header({ currentTheme, toggleTheme, onSearchClick, onAdminClick, onDarkModeToggle, isDarkMode }) {
  return (
    <header>
      <nav className="nav">
        <Logo />
        <NavLinks />
        <div className="nav-actions">
          <button className="iconbtn" onClick={onDarkModeToggle} aria-label="Toggle dark mode">
            {isDarkMode ? '☀' : '☾'}
          </button>
          <button className="iconbtn" onClick={onSearchClick} aria-label="Search">⌕</button>
          <button className="iconbtn" onClick={onAdminClick} aria-label="Admin">♙</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
