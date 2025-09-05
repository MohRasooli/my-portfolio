import gmailLogo from "/src/assets/images/footer/footer-gmail.png";
import linkedinLogo from "/src/assets/images/footer/footer-linkedin.png";
import resumeLogo from "/src/assets/images/footer/footer-resume.png";
import whatsAppLogo from "/src/assets/images/footer/footer-whatsapp.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-social">
          <p>My social media links:</p>
          <div className="links-images">
            <a>
              <img src={whatsAppLogo} alt="LinkedIn" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-rasooli-083b9937a/"
              target="_blank"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a href="mailto:mohrasooli.dev@gmail.com">
              <img src={gmailLogo} alt="Gmail" />
            </a>
          </div>
        </div>

        <div className="footer-github-link">
          <p>More projects I’ve worked on:</p>
          <span className="footer-github">
            @
            <a href="https://github.com/MohRasooli/" target="_blank">
              MohRasooli
            </a>{" "}
            on GitHub
          </span>
        </div>
      </div>
    </footer>
  );
}
