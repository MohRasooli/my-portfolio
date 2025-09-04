import mainImage from "/src/assets/images/contact/main-contact-image.png";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Contact me</h2>
      </div>
      <div className="contact-main">
        <div className="contact-image">
          {" "}
          <img src={mainImage} alt="contact" />
        </div>
        <div className="contact-details">
          {" "}
          <p>If you’d like to get in touch, feel free to email me at:</p>
          <a href="mailto:mohrasooli.dev@gmail.com" className="contact-link">
            mohrasooli.dev@gmail.com
          </a>
          <p>or</p>
          <a href="mailto:rasooli112233@gmail.com" className="contact-link">
            rasooli112233@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
