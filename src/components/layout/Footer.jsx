import Container from "./Container.jsx";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <p className="site-footer__copyright">
            &copy; {currentYear} Joseph Chu. All rights reserved.
          </p>

          <a className="site-footer__link" href="#home">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
