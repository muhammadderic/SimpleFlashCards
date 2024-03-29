import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header__logo">
          Simple Flash Cards
        </div>
        <div className="header__menu">
          <a href="/">Home</a>
        </div>
      </div>
    </header>
  )
}

export default Header;