import Container from "./Container";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__inner">
          <a href="#home" className="site-header__brand">
            Joseph Chu
          </a>
          <nav
            className="site-header___navigation"
            aria-label="Primary Navigation"
          >
            <ul className="site-header__links">
              <li>
                <a href="#home" className="site-header__link">
                  Home
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
export default Header;
