const skills = [
  'React.js',
  'JavaScript',
  'Node.js',
  'TypeScript',
  'HTML & CSS',
  'REST APIs',
  'Git',
  'Responsive Web Design',
]

function AboutSection() {
  return (
    <section className="content-card profile-content-card" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p className="about-copy">
        Full Stack Developer passionate about building useful, user-friendly
        web applications. I work across the stack and enjoy turning complex
        ideas into reliable products, with a growing focus on AI-powered
        solutions.
      </p>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="content-card profile-content-card" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <p className="section-intro">Strengths and technologies used in my work.</p>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li className="skill-chip" key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="content-card profile-content-card" aria-labelledby="education-title">
      <h2 id="education-title">Education</h2>
      <article className="education-item">
        <div className="education-logo" aria-hidden="true">U</div>
        <div>
          <h3>Computer Science</h3>
          <p className="education-school">Bachelor of Technology</p>
          <p className="experience-meta">2019 – 2023</p>
        </div>
      </article>
    </section>
  )
}

function ActivitySection() {
  return (
    <section className="content-card profile-content-card" aria-labelledby="activity-title">
      <div className="activity-heading">
        <div>
          <h2 id="activity-title">Activity</h2>
          <p className="section-intro">Posts and updates from Darshan Kamble</p>
        </div>
        <span className="activity-followers">128 followers</span>
      </div>
      <article className="activity-post">
        <div className="post-avatar" aria-hidden="true">DK</div>
        <div className="post-content">
          <h3>Darshan Kamble <span>· 1st</span></h3>
          <p className="post-headline">Full Stack Developer · 2w</p>
          <p>
            Every project is a chance to learn something new. Lately, I’ve been
            exploring how thoughtful AI features can make everyday web
            experiences more useful. Excited to keep building and sharing what
            I learn.
          </p>
          <div className="post-reactions">
            <span className="reaction-bubble">👍</span>
            <span>24 · 3 comments</span>
          </div>
        </div>
      </article>
    </section>
  )
}

function ProfileContent({ activeTab }) {
  switch (activeTab) {
    case 'About':
      return <AboutSection />
    case 'Skills':
      return <SkillsSection />
    case 'Education':
      return <EducationSection />
    case 'Activity':
      return <ActivitySection />
    default:
      return null
  }
}

export default ProfileContent
