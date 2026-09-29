import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="container nav-container">
        <h1 className="logo">Shrestha's Portfolio</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section id="home" className="home">
      <div className="container home-content">
        <p className="intro">Hello, I am</p>
        <h2>Putul</h2>
        <h3>BCA 4C Student</h3>

        <p>
          Welcome to my personal portfolio. I am a BCA student interested in
          technology, web development and learning new skills.
        </p>

        <a href="#contact" className="button">
          Contact Me
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <p>
          I am a 4th year Bachelor of Computer Applications student at
          Techno India University. I am interested in technology,
          web development and computer applications.
        </p>

        <p>
          I enjoy learning new skills, exploring creative ideas and
          improving my technical knowledge.
        </p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="card">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p><strong>University:</strong> Techno India University</p>
          <p><strong>Year:</strong> 4th Year</p>
          <p><strong>Section:</strong> BCA 4C</p>
          <p><strong>Session:</strong> 2023 - 2027</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MS Office",
    "Canva",
    "Teamwork"
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-container">
          <div className="card">
            <h3>Personal Portfolio</h3>
            <p>
              A responsive personal portfolio website created using React,
              JSX and CSS.
            </p>
          </div>

          <div className="card">
            <h3>Student Management System</h3>
            <p>
              A simple web project designed to manage student-related
              information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Enter your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Shrestha pan | BCA 4C | Techno India University</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;