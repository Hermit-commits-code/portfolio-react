import Container from "../layout/Container";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-titl">
      <Container>
        <div className="hero__content">
          <p className="hero__eyebrow">React Developer Profile</p>
          <h1 id="hero-title" className="hero__title">
            Hi I&apos;m Joseph. I build clean, practical web experiences.
          </h1>
          <p className="hero__description">
            This portfolio documents the projects I build, the problems I solve,
            and the lessons I learn along the way.
          </p>
        </div>
      </Container>
    </section>
  );
}
export default Hero;
