import HTMLLogo from "/src/assets/images/skills/html-logo.png";
import CSSLogo from "/src/assets/images/skills/css-logo.png";
import JavaScriptLogo from "/src/assets/images/skills/js-logo.png";
import ReactLogo from "/src/assets/images/skills/react-logo.png";
import mainImage from "/src/assets/images/skills/main-skills-image.png";

export default function Skills() {
  const skills = [
    { name: "HTML", logo: HTMLLogo },
    { name: "CSS", logo: CSSLogo },
    { name: "JavaScript", logo: JavaScriptLogo },
    { name: "React", logo: ReactLogo },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>Skills</h2>
      </div>
      <div className="skills-content">
        <img className="main-image" src={mainImage} alt="skills" />
        <div className="skills-text-column">
          <p className="skills-description">
            I have experience in the following web technologies:
          </p>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="skill-icon">
                  <img src={skill.logo} alt="skill logo" />
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
