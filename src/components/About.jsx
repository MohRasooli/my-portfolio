import mainImage from "/src/assets/images/main-about-image.png";

export default function About() {
  return (
    <>
      <section className="about">
        <section className="about-image">
          <img src={mainImage} alt="" />
        </section>
        <section className="about-info">
          <h2>
            Hi👋, I’m <br /> <span>Mohammad Rasooli</span>
          </h2>
          <p>
            I’m a Computer Science student and web developer who loves turning
            ideas into clean, responsive, and user-friendly websites.
          </p>
        </section>
      </section>
    </>
  );
}
