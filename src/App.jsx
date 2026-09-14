import { useEffect, useState } from 'react'
import './App.css'
import aboutPhoto from './assets/graduation.jpg.jpeg'
import profilePhoto from './assets/profile-photo.png'
import educationPhoto from './assets/education-photo.jpg'
import interestsPhoto from './assets/interests-photo.jpg'
import interestsPhotoTwo from './assets/interests-photo-2.jpg'
import interestsPhotoThree from './assets/interests-photo-3.jpg'
import interestsPhotoFour from './assets/interests-photo-4.jpg'

const skills = [
  'Data Science',
  'Data Analytics',
  'Systems Analysis',
  'Software Development',
  'Database Management',
  'IT Support',
  'Administrative Operations',
  'Python',
  'SQL',
  'Excel',
  'Business Intelligence',
  'Problem Solving',
]

const education = [
  {
    program: 'Bachelor of Science (Honours) in Information Systems',
    institution: 'University of KwaZulu-Natal (UKZN)',
    period: 'Jan 2026 – Present',
  },
  {
    program: 'Bachelor of Science in Information Systems',
    institution: 'University of KwaZulu-Natal (UKZN)',
    period: 'Jan 2021 – Dec 2025',
  },
  {
    program: 'National Senior Certificate (Grade 12)',
    institution: 'Impiyamandla Junior High School',
    period: 'Jan 2020 – Dec 2020',
  },
]

const experience = [
  {
    role: 'IT Intern',
    company: 'Gijima',
    period: 'Feb 2026 – Mar 2026',
    details: [
      'Gained practical exposure to corporate IT operations and systems within a professional environment.',
      'Supported internal technology processes and contributed to team-based IT tasks.',
      'Developed professional workplace skills including communication, punctuality, and structured reporting.',
    ],
  },
  {
    role: 'IT Volunteer',
    company: 'All In IT',
    period: 'May 2026 – Jun 2026',
    details: [
      'Volunteered in an IT support and operations capacity, assisting with technology-related tasks and projects.',
      'Provided technical support and contributed to IT initiatives within a community or organisational setting.',
      'Demonstrated initiative, reliability, and commitment to professional development through volunteer engagement.',
    ],
  },
  {
    role: 'Assistant Administrator (Volunteering)',
    company: 'Ngunikazi Concepts',
    period: 'Jan 2024 – Oct 2024',
    details: [
      'Managed and maintained organisational databases, ensuring accurate and timely data entry into internal systems.',
      'Supported day-to-day administrative operations including document preparation and record keeping.',
      'Maintained high levels of accuracy and attention to detail while handling sensitive organisational data.',
      'Collaborated with management to streamline administrative processes and improve operational efficiency.',
    ],
  },
]

const stats = [
  { label: 'Honours degree', value: 'In progress' },
  { label: 'Languages', value: '3' },
  { label: 'IT exposure', value: 'Hands-on' },
]

const socials = [
  { label: 'Website', href: 'https://zintlezinyanga.github.io' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zintle-zinyanga-0bbb76315' },
  { label: 'GitHub', href: 'https://github.com/Zintle2001' },
  { label: 'Email', href: 'mailto:Zinhlelusanda.zinyanga@mail.com' },
]

const interests = [
  {
    title: 'Martial Arts (Karate)',
    description: 'I enjoy participating in karate because it has taught me discipline, resilience, self-confidence, and perseverance. Progressing through the belt system has strengthened my commitment to continuous learning and personal growth.',
  },
  {
    title: 'Reading',
    description: 'I read articles, books, and online resources about personal growth and various topics that broaden my perspective.',
  },
  {
    title: 'Listening to Music',
    description: 'Music helps me relax, focus, and stay motivated while I take on new projects or just unwind.',
  },
  {
    title: 'Spending Time with Family and Friends',
    description: 'Quality time with loved ones helps me keep a healthy balance between work and personal life.',
  },
]

const trends = [
  {
    title: 'AI Security',
    description: 'AI-powered security agents help detect threats, respond faster, and reduce the risk of cyber attacks in modern organisations.',
  },
  {
    title: 'AI Research Partners',
    description: 'AI co-scientists are helping researchers generate ideas, compare evidence, and accelerate scientific discovery.',
  },
  {
    title: 'Generative AI',
    description: 'Generative AI is transforming productivity, automation, and decision-making across business and technical workflows.',
  },
  {
    title: 'Digital Twin Composer',
    description: 'Digital twins are creating virtual models for factories, infrastructure, and systems to simulate and improve performance.',
  },
]

const trendReport = [
  {
    title: 'AI Security',
    paragraphs: [
      'AI security is becoming one of the most important areas of modern technology because organisations are seeing more sophisticated cyber threats and more rapid attack cycles. Traditional security strategies are no longer enough when attackers use automation, AI-generated phishing, and advanced malware to exploit vulnerabilities at scale.',
      'In South Africa, the demand for AI-driven security is growing because the country faces high levels of cybercrime and a shortage of skilled security specialists. Autonomous AI security tools can monitor networks, detect suspicious patterns, and automate response actions far faster than manual teams alone.',
      'These systems help organisations move from reactive security to proactive defence, lowering risk and improving resilience across business operations.',
    ],
  },
  {
    title: 'AI Research Partners',
    paragraphs: [
      'AI in 2026 is no longer only summarising information; it is actively participating in discovery. AI co-scientists can generate hypotheses, compare research, and assist scientists with experiments and decision-making.',
      'The example of Co-Scientist shows how AI systems are being designed to act like research collaborators. They can search literature, reason across disciplines, and propose meaningful pathways for investigation, which is especially valuable in resource-constrained research environments.',
      'For South Africa, this is important because local institutions are dealing with major challenges in health, agriculture, and energy, and AI can help research teams accelerate discovery without requiring massive resources.',
    ],
  },
  {
    title: 'Generative AI',
    paragraphs: [
      'Generative AI is already transforming how people work, learn, and solve problems. It is not only a tool for content creation; it is also being used to simplify technical tasks, support engineering workflows, and improve productivity across many industries.',
      'For example, tools such as ChatGPT and industrial AI assistants can help people understand software, generate code, and support decision-making, making it easier for students and professionals to learn new systems quickly.',
      'This trend matters because it turns complex tasks into more manageable workflows, while also creating new opportunities for innovation and skills development.',
    ],
  },
  {
    title: 'Digital Twin Composer',
    paragraphs: [
      'The Digital Twin Composer introduces a virtual representation of physical systems that can be monitored, simulated, and optimised in real time. By combining CAD models, sensor data, engineering designs, and AI-driven analysis, digital twins can help organisations predict failures before they happen.',
      'This is especially relevant in industries such as mining, manufacturing, utilities, and energy. In South Africa, digital twin technology can help improve safety, reduce equipment downtime, and support smarter infrastructure planning.',
      'The value comes from unifying multiple data sources into one interactive environment, allowing teams to test ideas and decisions virtually before applying them in the real world.',
    ],
  },
  {
    title: 'Credo AI',
    paragraphs: [
      'Credo AI is a responsible AI governance platform designed to help organisations manage fairness, privacy, transparency, and compliance in AI systems. It is becoming essential in environments where AI adoption is growing faster than clear governance structures.',
      'In South Africa, this is particularly important because emerging AI regulations, such as the Draft National AI Policy and POPIA requirements, increase the need for accountability and ethical decision-making. Governance tools help ensure that AI systems are deployed in a way that respects legal and social responsibilities.',
      'The core idea is that AI should not only be powerful, but also trustworthy, explainable, and aligned with organisational and regulatory expectations.',
    ],
  },
]

function App() {
  const [isDark, setIsDark] = useState(true)
  const [activeDetailPage, setActiveDetailPage] = useState(null)

  useEffect(() => {
    const syncDetailPageFromHash = () => {
      const hash = window.location.hash
      const isTrendsPage = hash === '#trends'
      const isDarkSidePage = hash === '#dark-side'
      const isFourthIndustrialPage = hash === '#fourth-industrial-revolution'

      if (isTrendsPage) {
        setActiveDetailPage('trends')
      } else if (isDarkSidePage) {
        setActiveDetailPage('dark-side')
      } else if (isFourthIndustrialPage) {
        setActiveDetailPage('fourth-industrial-revolution')
      } else {
        setActiveDetailPage(null)
      }
    }

    syncDetailPageFromHash()
    window.addEventListener('hashchange', syncDetailPageFromHash)

    return () => window.removeEventListener('hashchange', syncDetailPageFromHash)
  }, [])

  const handleDetailPage = (page) => {
    setActiveDetailPage(page)
  }

  const closeDetailPage = () => {
    setActiveDetailPage(null)
  }

  return (
    <div className={`portfolio-page ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <div className="brand">Zintle</div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home" onClick={() => setActiveDetailPage(null)}>Home</a>
          <a href="#about" onClick={() => setActiveDetailPage(null)}>About Me</a>
          <a href="#portfolio" onClick={() => setActiveDetailPage(null)}>Portfolio</a>
          <a href="#interests" onClick={() => setActiveDetailPage(null)}>Interests</a>
          <a href="#trends" onClick={() => setActiveDetailPage(null)}>IT Trends</a>
          <a href="#dark-side" onClick={() => setActiveDetailPage(null)}>Dark Side</a>
          <a href="#fourth-industrial-revolution" onClick={() => setActiveDetailPage(null)}>4IR</a>
          <a href="#contact" onClick={() => setActiveDetailPage(null)}>Contact</a>
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setIsDark((value) => !value)}
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <h1>Hi, I’m Zintle Zinyanga.</h1>
            <p className="lead">
              A highly motivated Information Systems graduate with a strong foundation in data science,
              analytics, systems analysis, and software development. I use technology and data to solve
              problems, improve processes, and drive informed decision-making.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#portfolio">
                Downloadable CV
              </a>
              <a className="primary-btn" href="#trends" onClick={() => setActiveDetailPage(null)}>
                View IT Trends
              </a>
            </div>
          </div>

          <div className="hero-image-wrap" aria-label="Profile photo">
            <img className="hero-image" src={profilePhoto} alt="Zintle Zinyanga" />
          </div>
        </section>

        <section className={`section about ${activeDetailPage ? 'hidden-section' : ''}`} id="about">
          <div className="section-heading">
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div>
              <p>
                I am a highly motivated and results-driven Information Systems graduate with a strong foundation
                in data science, data analytics, systems analysis, and software development. My academic journey
                at the University of KwaZulu-Natal has given me practical grounding in information systems,
                database management, and analytical thinking.
              </p>
              <p>
                I am passionate about using technology, data science, and information systems expertise to solve
                real-world problems and add organisational value. I work effectively both independently and in teams,
                manage structured workflows, and deliver accurate work even under deadline pressure.
              </p>
              <p>
                Beyond my professional and academic pursuits, I am dedicated to personal development through
                literature and spiritual growth. I find significant value in the works of Robert Kiyosaki, which
                have refined my perspective on financial literacy and strategic foresight. Furthermore, my active
                participation in my faith community provides a foundation of resilience and ethical guidance,
                fostering a consistent commitment to professional and personal excellence.
              </p>
            </div>
            <img className="about-photo" src={aboutPhoto} alt="Personal development and spiritual growth" />
          </div>
        </section>

        <section className={`section portfolio ${activeDetailPage ? 'hidden-section' : ''}`} id="portfolio">
          <div className="section-heading">
            <h2>Portfolio</h2>
          </div>

          <div className="portfolio-stack">
            <section className="portfolio-subsection" id="education">
              <div className="section-heading">
                <p className="eyebrow">Education</p>
                <h2>Academic background.</h2>
              </div>

              <div className="education-layout">
                <div className="timeline">
                  {education.map((item) => (
                    <div key={item.program} className="timeline-item">
                      <span className="time-period">{item.period}</span>
                      <div>
                        <h3>{item.program}</h3>
                        <p className="company">{item.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <img className="education-photo" src={educationPhoto} alt="Education and academic growth" />
              </div>
            </section>

            <section className="portfolio-subsection" id="experience">
              <div className="section-heading">
                <p className="eyebrow">Experience and Project</p>
                <h2>Experience</h2>
              </div>

              <div className="timeline">
                {experience.map((item) => (
                  <div key={item.role} className="timeline-item">
                    <span className="time-period">{item.period}</span>
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <ul className="bullet-list">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="portfolio-subsection" id="skills">
              <div className="section-heading">
                <p className="eyebrow">Skills</p>
                <h2>Core strengths and technical capabilities.</h2>
              </div>

              <div className="skills-grid">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className={`section interests ${activeDetailPage ? 'hidden-section' : ''}`} id="interests">
          <div className="section-heading">
            <p className="eyebrow">Interests</p>
            <h2>Things that inspire me beyond the classroom and workplace.</h2>
          </div>

          <div className="interests-content">
            <div className="interests-grid">
              {interests.map((interest) => (
                <div key={interest.title} className="interest-card">
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
            <div className="interests-photos">
              <img
                className="interests-photo"
                src={interestsPhoto}
                alt="Personal interests"
              />
              <img
                className="interests-photo"
                src={interestsPhotoTwo}
                alt="Personal interests"
              />
              <img
                className="interests-photo"
                src={interestsPhotoThree}
                alt="Personal interests"
              />
              <img
                className="interests-photo"
                src={interestsPhotoFour}
                alt="Personal interests"
              />
            </div>
          </div>
          <div className="motto-card">
            <p className="eyebrow">My Personal Motto</p>
            <blockquote>
              “Success comes through continuous learning, perseverance, and embracing new challenges.”
            </blockquote>
          </div>
        </section>

        <section className={`section trends ${activeDetailPage && activeDetailPage !== 'trends' ? 'hidden-section' : ''}`} id="trends">
          <div className="section-heading">
            <p className="eyebrow">IT Trends</p>
            <h2>Top 5 IT Trends</h2>
          </div>

          <div className="trend-report">
            <article className="trend-report-item">
              <h3>Introduction</h3>
              <p>
                When we talk about “hot trends in IT,” we are not just talking about temporary hype or the latest industry buzzwords. We are looking at major technological shifts that are solving real-world problems, attracting serious investment, and changing how businesses operate (Abbas et al., 2019; Gottweis et al., 2026). The five trends covered in this report—AI Security, AI Research Partners, Generative AI in Industry, Digital Twin Composers, and AI Governance platforms such as Credo AI—were chosen because they tackle urgent problems, address real pain points that organisations face today, and move beyond passive automation into active reasoning, real-time simulation, and more complex decision-making.
              </p>
              <p>
                Looking at the current IT landscape, we are sitting at a clear turning point. We have moved past the days of standalone software that relies on constant human input. Instead, the focus has shifted towards autonomous AI agents, multi-agent systems, and real-time virtual environments that can reason, adapt, and work alongside us (Nah et al., 2023; Bhatia et al., 2025). The purpose of this discussion is to map how these key trends are driving this shift, mitigating modern risks, and shaping what comes next.
              </p>
            </article>

            <article className="trend-report-item">
              <h3>1. AI Security</h3>
              <p>
                AI security is becoming one of the most important areas of modern technology because organisations are seeing more sophisticated cyber threats and faster attack cycles. Traditional security strategies are no longer enough when attackers use automation, AI-generated phishing, and advanced malware to exploit vulnerabilities at scale (He et al., 2025; Trend Micro, 2026).
              </p>
              <p>
                In South Africa, the demand for AI-driven security is growing because the country faces high volumes of cybercrime and a shortage of skilled security specialists. Autonomous AI security agents can monitor networks, detect suspicious patterns, and automate response actions far faster than manual teams alone (Davison, 2026; Lebele, 2026).
              </p>
              <p>
                This matters because human error remains a major driver of security failures. By combining intelligent detection, contextual understanding, and faster remediation, AI security strengthens defensive capability while reducing response time and operational disruption (Abbas et al., 2019).
              </p>
            </article>

            <article className="trend-report-item">
              <h3>2. AI Research Partners</h3>
              <p>
                AI in 2026 is no longer only summarising research papers; it is actively participating in discovery. These intelligent systems generate hypotheses independently, collaborate with human researchers, and help teams explore multiple possible research directions at once (Gottweis et al., 2026).
              </p>
              <p>
                The example of Co-Scientist shows how AI systems are being designed to act as research collaborators. They can search literature, reason across disciplines, and propose novel hypotheses and experimental protocols, which is especially valuable in resource-constrained research environments (Gottweis et al., 2026).
              </p>
              <p>
                For South Africa, this is important because institutions are dealing with major challenges in healthcare, agriculture, and energy, and AI can help teams accelerate discovery without requiring massive capital expenditure (Coelho et al., 2026).
              </p>
            </article>

            <article className="trend-report-item">
              <h3>3. Generative AI</h3>
              <p>
                Generative AI is already transforming how people work, learn, and solve problems. It is not only used for content generation; it is also helping with software development, technical documentation, engineering design, and business process support (Nah et al., 2023).
              </p>
              <p>
                Siemens’ work on Generative AI in industrial engineering shows how AI can reduce repetition, support automation workflows, and help engineers focus on more meaningful problem-solving (Siemens, 2026a). This makes the technology valuable across manufacturing, software development, and digital transformation initiatives.
              </p>
              <p>
                In my opinion, Generative AI is also a way to make difficult tasks simpler and brainstorm ideas more quickly. For example, students and junior professionals can use AI tools to explain technical steps, generate learning pathways, and support practical problem-solving in a more accessible way (Nah et al., 2023).
              </p>
            </article>

            <article className="trend-report-item">
              <h3>4. Digital Twin Composer</h3>
              <p>
                The Digital Twin Composer delivers a vision for the industrial metaverse and helps manufacturers overcome complexity, accelerate production, reduce costs, and improve performance (Siemens, 2026b). Digital twins create virtual models of physical systems that can be monitored, simulated, and optimised in real time.
              </p>
              <p>
                Bhatia et al. (2025) show how Digital Twin technology can be used to create a virtual representation of a fusion power plant using NVIDIA Omniverse. The Digital Twin combines engineering designs, simulations, real-time sensor data, and AI models to support monitoring, prediction, testing, and decision-making.
              </p>
              <p>
                This is especially relevant in South Africa, where mining, utilities, logistics, and manufacturing require smarter operational planning. Digital twins can improve safety, reduce downtime, and support predictive maintenance while allowing organisations to test ideas virtually before implementing them in the real world (Bhatia et al., 2025).
              </p>
            </article>

            <article className="trend-report-item">
              <h3>5. Credo AI</h3>
              <p>
                Credo AI is a Responsible AI governance platform that helps organisations assess, monitor, and document the risks associated with their AI systems. It focuses on areas such as fairness, security, privacy, transparency, and performance (OECD.AI, 2026).
              </p>
              <p>
                In South Africa, this is particularly important because emerging regulations, such as the Draft National AI Policy and POPIA, increase the need for accountability and ethical decision-making (Coelho et al., 2026). Governance platforms provide structured assessment tools that help organisations align AI adoption with legal, ethical, and operational requirements.
              </p>
              <p>
                The key principle is that AI should not only be powerful, but also trustworthy, explainable, and aligned with organisational and regulatory expectations (Fox, 2014; Radke et al., 2023).
              </p>
            </article>

            <article className="trend-report-item">
              <h3>2. The impact these global IT trends have on South Africa</h3>
              <p>
                As global technology transitions into autonomous, agentic, and real-time operational models, South Africa finds itself at a unique intersection of rapid adoption, pressing infrastructure constraints, and evolving regulatory demands. While the country leads Africa in AI readiness and adoption, local enterprises still face structural realities such as energy instability, severe cybercrime exposure, and strict compliance requirements under POPIA and the 2026 Draft National AI Policy (Coelho et al., 2026; Davison, 2026).
              </p>
              <p>
                The practical impact is clear: AI Security supports critical protection for organisations under cyber pressure; AI Research Partners accelerate local scientific discovery; Generative AI augments workforce productivity and engineering; Digital Twin Composer improves industrial efficiency and safety; and Credo AI helps organisations move toward responsible governance in a regulatory environment that continues to evolve (Lebele, 2026; OECD.AI, 2026).
              </p>
            </article>

            <article className="trend-report-item">
              <h3>3. Critical Analysis</h3>
              <p>
                These technologies mark the beginning and continuation of digital evolution. They are shaping humanity in ways many people are unaware of, and the major lesson is that organisations must adapt intentionally rather than passively (Abbas et al., 2019; Bhatia et al., 2025). The literature shows that AI and digital technologies are not merely productivity enhancers; they are strategic tools that influence cybersecurity, innovation, governance, and industrial transformation.
              </p>
              <p>
                The strongest conclusion is that AI adoption is most effective when organisations combine technical capability with responsible governance, real-world verification, and human oversight. Without this balance, the same technologies that improve efficiency can also create new risks in security, compliance, and decision quality (Nah et al., 2023; OECD.AI, 2026).
              </p>
            </article>
          </div>

          <div className="references-block">
            <h3>References</h3>
            <p>Abbas, N. N., Ahmed, T., Shah, S. H. U., Omar, M., &amp; Park, H. W. (2019). Investigating the applications of artificial intelligence in cyber security. Scientometrics, 121(2), 1189–1211. https://doi.org/10.1007/s11192-019-03222-9</p>
            <p>Bhatia, N., Costa, R., Pamela, S. J. P., Davis, A., Gonzalez Beltran, A. N., Gopakumar, V., Zanisi, L., de Witt, S., &amp; Akers, R. (2025). Visualizing digital twins of fusion power plants using NVIDIA Omniverse. AIP Advances, 15(4), Article 045018. https://doi.org/10.1063/5.0261883</p>
            <p>Coelho, R., Ramages, J., Brink, A., &amp; Chivaura, T. (2026, April 10). South Africa: Draft National Artificial Intelligence Policy published for public comment. Bowmans. https://bowmanslaw.com/insights/south-africa-draft-national-artificial-intelligence-policy-published-for-public-comment/</p>
            <p>Davison, A. (2026, June 23). Is SA's cybersecurity lagging AI adoption? IT-Online. https://it-online.co.za/2026/06/23/is-sas-cybersecurity-lagging-ai-adoption/</p>
            <p>Fox, J. (2014). A credo for decision science and engineering [Retrospective review]. University of Oxford, Department of Engineering Science.</p>
            <p>Gottweis, J., Weng, W.-H., Daryin, A., Tu, T., Sirkovic, P., Myaskovsky, A., Glowaty, G., Weissenberger, F., Orlandi, A., Popovici, D., Palepu, A., Rong, K., Tanno, R., Saab, K., Zhang, F., Blum, J., Carroll, A., Kulkarni, K., Tomašev, N., … Natarajan, V. (2026). Accelerating scientific discovery with Co-Scientist. Nature, 655(8122), 487–496. https://doi.org/10.1038/s41586-026-10644-y</p>
            <p>He, H., Wang, Q., &amp; Chen, Y. (2025). AI security and privacy: Threats, defences, and future directions. Journal of Secure AI Systems, 12(3), 89–116.</p>
            <p>Lebele, K. (2026, August). AI is raising South Africa's cybersecurity stakes. SA Instrumentation &amp; Control. https://www.instrumentation.co.za/27921r</p>
            <p>Nah, F. F.-H., Zheng, R., Cai, J., Siau, K., &amp; Chen, L. (2023). Generative AI and ChatGPT: Applications, challenges, and AI-human collaboration. Journal of Information Technology Case and Application Research, 25(3), 277–304. https://doi.org/10.1080/15228053.2023.2233814</p>
            <p>OECD.AI. (2026). Credo AI Responsible AI Governance Platform. OECD.AI Policy Observatory. https://oecd.ai/en/catalogue/tools/credo-ai-responsible-ai-governance-platform</p>
            <p>Radke, D., Larson, K., &amp; Brecht, T. (2023). The importance of credo in multiagent learning. In Proceedings of the 22nd International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2023). https://arxiv.org/abs/2204.07471</p>
            <p>Siemens. (2026a, March). How generative AI is transforming automation engineering. https://www.siemens.com/en-us/company/insights/prism-systems-automation-engineering-ai/</p>
            <p>Siemens. (2026b). Introducing Digital Twin Composer. https://www.siemens.com/en-us/company/digital-transformation/industrial-metaverse/introducing-digital-twin-composer/</p>
            <p>Trend Micro Incorporated. (2026). AI security | TrendAI. https://www.trendaisecurity.com/en/platform/proactive-ai-security</p>
          </div>
        </section>

        <section className={`section dark-side ${activeDetailPage && activeDetailPage !== 'dark-side' ? 'hidden-section' : ''}`} id="dark-side" aria-label="Dark side of technology">
          <div className="dark-side-inner">
            <p className="eyebrow">Dark side of technology</p>
            <h2>The Dark Side of Technology</h2>

            <div className="dark-side-paper">
              <div className="dark-side-overview" aria-label="Dark side overview categories">
                <div className="overview-chip">
                  <span className="chip-icon">🛡️</span>
                  <span>AI SECURITY</span>
                </div>
                <div className="overview-chip">
                  <span className="chip-icon">🤖</span>
                  <span>GENERATIVE AI</span>
                </div>
                <div className="overview-chip">
                  <span className="chip-icon">📘</span>
                  <span>GOVERNANCE AI</span>
                </div>
              </div>

              <div className="dark-side-intro">
                <p>
                  <strong>1. Overview</strong>
                </p>
                <button type="button" className="back-btn" onClick={closeDetailPage}>Back to profile</button>
              </div>

              <div className="dark-side-section">
                <h3>1. Autonomous AI Security: The "Over-Eager Guard Dog"</h3>
                <p>
                  Giving autonomous AI security agents extensive permissions to modify code, restrict access, and perform remediation can significantly reduce the workload of IT and cybersecurity teams. However, as these systems become more autonomous, they also introduce new vulnerabilities. Unlike conventional rule-based security mechanisms, AI agents can interpret and reason about natural-language information. This creates opportunities for their behaviour to be manipulated or for legitimate information to be misunderstood (Kanjere, 2024).
                </p>
                <h4>Vulnerability to Indirect Instructions</h4>
                <p>
                  AI agents may process information from emails, documents, user inputs, or system logs as part of their decision-making process. If malicious instructions are hidden within these sources, an agent may interpret them as legitimate instructions rather than treating them as untrusted information. This poses a risk of indirect prompt injection, in which seemingly ordinary content influences an agent's behaviour, causing it to perform actions not intended by the organisation (Wells, 2026).
                </p>
                <p>
                  The concern is therefore not limited to an attacker directly compromising the AI agent. Instead, the agent's ability to interpret natural-language information becomes an additional attack surface that can potentially be exploited.
                </p>
                <h4>Autonomous Errors and Operational Disruption</h4>
                <p>
                  Autonomous security agents can also create problems when legitimate activity is incorrectly identified as malicious. For example, an unusual but authorised administrative action could be interpreted as a security threat. If the AI agent has extensive privileges and is authorised to respond automatically, an incorrect decision could prevent legitimate users from accessing systems or disrupt important services (Stellar Cyber, 2026).
                </p>
                <p>
                  This reflects the potential “over-eager guard dog” problem. A security system designed to protect an organisation can itself become a source of disruption if it responds too aggressively without sufficient human verification.
                </p>
              </div>

              <div className="dark-side-section">
                <h3>2. Generative AI: The Danger of Unverified Outputs</h3>
                <p>
                  Generative AI is increasingly being used for more than producing text. It now supports software development, technical decision-making, and various organisational and industrial processes. As AI-generated outputs become more closely integrated into these systems, the risks increase when users accept them without adequate verification.
                </p>
                <h4>Hallucinated Software Dependencies</h4>
                <p>
                  Generative AI tools can sometimes produce references to software libraries or packages that do not actually exist. If developers implement these recommendations without verifying the authenticity and provenance of dependencies, organisations may be exposed to software supply chain risks. Malicious actors could potentially take advantage of this behaviour by registering packages with names similar to those commonly generated by AI and using them to distribute malicious code (The Cyber Archive, 2026). This shows how an AI hallucination can develop into a broader security problem when AI-generated recommendations are incorporated directly into production environments.
                </p>
                <h4>Reduced Human Verification and Technical Understanding</h4>
                <p>
                  Heavy reliance on Generative AI for software development can also create human-centred risks. When developers regularly use AI to generate complex code without fully understanding or reviewing it, organisations may become dependent on outputs that employees are unable to properly evaluate, maintain, or troubleshoot.
                </p>
                <p>
                  This concern is particularly relevant when less-experienced developers use AI-generated solutions without developing a corresponding understanding of the underlying technologies. AI should therefore support, rather than replace, human technical knowledge, critical thinking, code review, and problem-solving.
                </p>
              </div>

              <div className="dark-side-section">
                <h3>3. AI Governance: The Risk of a False Sense of Security</h3>
                <p>
                  AI governance platforms such as Credo AI can help organisations organise governance requirements, assess AI-related risks, and document compliance activities. However, these tools should not be viewed as a complete replacement for continuous technical monitoring and operational risk management (Credo AI, n.d.).
                </p>
                <h4>Compliance Does Not Necessarily Equal Operational Security</h4>
                <p>
                  An organisation may meet documented governance requirements and appear compliant, yet its AI systems continue to exhibit unexpected behaviour or pose emerging security risks after deployment. Governance assessments provide useful evidence that controls and procedures are in place, but they need to form part of a broader lifecycle approach that includes continuous monitoring, testing, and evaluation.
                </p>
                <p>
                  Treating compliance as a once-off activity can therefore create a false sense of security. Organisations must also consider how AI systems behave in real-world environments and how their risks change over time (Malesci, 2026).
                </p>
                <h4>The Importance of Local Context</h4>
                <p>
                  AI governance frameworks and assessment tools may also need to be adapted when they are applied in different regulatory and socio-economic environments. A governance assessment based on general international standards may not fully account for country-specific legislation or local conditions.
                </p>
                <p>
                  In South Africa, organisations must consider relevant legislation and regulatory requirements, including the Protection of Personal Information Act (POPIA) and the Employment Equity Act. Therefore, an AI system that performs well against a general governance framework may still require additional assessment to determine whether it is appropriate for South African legal, demographic, and socio-economic conditions (Malesci, 2026).
                </p>
              </div>

              <div className="dark-side-section">
                <h3>Overall Critical Insight</h3>
                <p>
                  These three areas demonstrate that AI-related risks extend beyond the technical capabilities of the technologies themselves. Autonomous AI can make incorrect or manipulated decisions, Generative AI can produce unreliable outputs that become embedded in software and organisational processes, and governance platforms can create limitations when compliance is treated as a substitute for continuous risk management.
                </p>
                <p>
                  Effective AI adoption, therefore, requires more than technological capability. It requires human expertise, continuous monitoring, independent verification, and governance that takes the operating context into account.
                </p>
              </div>

              <div className="dark-side-section">
                <h3>2. Negative Application</h3>
                <p>
                  <strong>Weaponisation of Emerging AI Technologies</strong>
                </p>
                <p>
                  The growing capabilities of autonomous AI, Generative AI, and AI governance platforms create opportunities for legitimate organisations, but malicious actors can also exploit them. As these technologies become increasingly integrated into security operations, software development, and organisational decision-making, their capabilities may be used to increase the scale, speed, and sophistication of cyberattacks. AI should therefore be viewed not only as a defensive capability but also as a potential attack surface (Sarsekar &amp; Mirzan, n.d.).
                </p>
                <h4>1. Weaponisation of Autonomous AI Security</h4>
                <p>
                  Autonomous AI security systems are primarily designed to improve threat detection, monitoring, and incident response. However, the same features that make these systems useful to defenders, particularly their ability to operate continuously and make decisions with limited human intervention, may also create opportunities for malicious exploitation.
                </p>
                <p>
                  One emerging concern is the potential use of agentic AI to automate aspects of cyberattacks. AI agents could assist attackers in identifying vulnerabilities, adapting attack strategies, and generating malicious content. This could reduce the level of technical expertise required for certain attacks while increasing the speed and scale at which malicious activities can be carried out (Sarsekar &amp; Mirzan, n.d.).
                </p>
                <p>
                  Another concern is the manipulation of defensive AI systems through indirect prompt injection. Malicious content introduced through emails, documents, or other system data could influence how an AI security agent interprets an event. If the agent has extensive operational privileges, successful manipulation could lead to inappropriate security actions.
                </p>
                <p>
                  This creates an important paradox: the more autonomy and authority given to a defensive AI system, the greater the potential consequences if that system is manipulated or makes an incorrect decision (Sarsekar &amp; Mirzan, n.d.).
                </p>
                <h4>2. Malicious Exploitation of Generative AI</h4>
                <p>
                  Generative AI can also lower barriers to certain forms of cybercrime by making it easier to produce convincing content, automate repetitive activities, and assist with technical tasks. This creates risks for both individuals and organisations (Credo AI, n.d.).
                </p>
                <p>
                  One significant concern is the potential link between AI-generated code and software supply chain attacks. AI coding assistants may sometimes generate incorrect, unreliable, or nonexistent software dependencies. If developers adopt these recommendations without independently checking the packages and their sources, malicious actors could potentially exploit the situation by creating packages that resemble commonly suggested dependencies. In this way, an AI-generated error could become a security vulnerability once the recommendation is incorporated into organisational software (Kosinski &amp; Forrest, 2024).
                </p>
                <p>
                  Generative AI may also make phishing and social engineering attacks more effective by enabling attackers to produce more convincing and contextually appropriate communications. The ability to generate content in different languages and adapt messages to particular organisational environments could make fraudulent communications more difficult to recognise. These risks show that the threat posed by Generative AI extends beyond the technology itself and includes its potential to strengthen existing forms of cybercrime.
                </p>
                <h4>3. Misuse of AI Governance and Compliance Mechanisms</h4>
                <p>
                  AI governance platforms are intended to improve accountability, risk assessment, documentation, and regulatory compliance. However, governance mechanisms can also be misused when organisations treat compliance as an end in itself rather than as part of a broader risk-management process.
                </p>
                <p>
                  For example, an organisation could engage in ethics-washing by presenting evidence of governance processes or compliance assessments while failing to address risks that exist in the actual operation of an AI system. This highlights the difference between demonstrating that governance procedures exist and demonstrating that those procedures are actually effective in managing real-world risks (Credo AI, n.d.).
                </p>
                <p>
                  There is also a broader concern that overly complex governance requirements could create barriers to competition. If compliance frameworks become excessively expensive or difficult to implement, smaller organisations and emerging technology providers may struggle to meet the requirements. Although strong governance is necessary, regulatory mechanisms should therefore promote accountability without unnecessarily restricting innovation or placing disproportionate burdens on smaller organisations.
                </p>
                <p>
                  <strong>Overall Implication</strong>
                </p>
                <p>
                  Taken together, these perspectives demonstrate that the increasing adoption of AI creates a dual-use environment. The same capabilities that allow organisations to automate security, software development, and governance can potentially be exploited by malicious actors or misused by organisations themselves.
                </p>
                <p>
                  AI risk management should therefore consider not only whether AI systems can defend against external threats, but also how their autonomy, generated outputs, and governance mechanisms could themselves become sources of vulnerability.
                </p>
                <p>
                  This reinforces the need for a balanced approach based on continuous monitoring, appropriate access controls, independent verification of AI-generated outputs, regular security testing, and human oversight of high-impact decisions. The goal should not be to eliminate AI autonomy, but to ensure that it operates within clearly defined and accountable boundaries.
                </p>
              </div>

              <div className="dark-side-section">
                <h3>3. Global Perspective</h3>
                <p>
                  <strong>Global Developments and Emerging Challenges</strong>
                </p>
                <p>
                  Looking beyond South Africa, the global environment is characterised by several interconnected geopolitical, environmental, public health, and technological developments. These developments demonstrate the growing complexity of the global landscape and show how technological, social, and environmental challenges can influence one another.
                </p>
                <h4>1. Escalating Geopolitical Conflicts and Security Challenges</h4>
                <p>
                  <strong>Russia–Ukraine War:</strong> The United Nations Security Council convened an emergency briefing following intensified missile and drone attacks targeting civilian infrastructure in Ukraine. UN monitors reported a significant increase in civilian casualties during mid-2026, contributing to some of the highest levels of civilian harm recorded since the beginning of the conflict. More than 10.8 million Ukrainians were reported to require immediate humanitarian assistance (UN News, 2026).
                </p>
                <p>
                  <strong>Middle East Crisis:</strong> In Gaza, UN agencies reported that approximately 94% of the population, representing around 2.1 million people, requires urgent shelter and humanitarian assistance. Humanitarian operations and ceasefire arrangements remain fragile amid continuing military activity and insecurity (UN News, 2026).
                </p>
                <p>
                  <strong>Sudan and the Horn of Africa:</strong> Sudan continues to experience a complex humanitarian crisis characterised by armed conflict, food insecurity, famine, and large-scale displacement. The deteriorating situation has prompted ongoing international warnings about worsening humanitarian conditions and the need for increased humanitarian assistance (UN News, 2026).
                </p>
                <h4>2. Environmental and Climate Disruption</h4>
                <p>
                  Climate change and changing global weather patterns continue to create major environmental and socio-economic challenges. The World Meteorological Organisation (WMO) has raised concerns about changing ocean temperatures and the potential influence of El Niño and Indian Ocean climate patterns on extreme weather conditions.
                </p>
                <p>
                  These developments may contribute to more frequent heatwaves, droughts, and floods, as well as other climate-related disruptions across regions. Such environmental changes can have wider effects on food security, infrastructure, public health, economic activity, and access to essential services (World Meteorological Organisation [WMO], 2026).
                </p>
                <h4>3. Emerging Global Public Health Challenges</h4>
                <p>
                  <strong>Ebola in Central Africa:</strong> The Democratic Republic of the Congo (DRC) continues to face Ebola-related public health challenges, requiring coordinated international responses involving vaccination, disease surveillance, and humanitarian assistance. International vaccine coordination efforts have included the deployment of emergency vaccine supplies, while funding limitations continue to pose challenges to effective outbreak containment (UN News, 2026).
                </p>
                <p>
                  <strong>Mpox and Children's Health:</strong> Public health authorities in parts of West Africa have reported significant numbers of children among newly identified mpox cases. The increasing involvement of younger populations creates additional challenges for healthcare systems, particularly regarding disease surveillance, diagnosis, treatment, vaccination, and public health communication.
                </p>
                <h4>4. Technological Acceleration and Governance</h4>
                <p>
                  Technological development, particularly the rapid integration of Artificial Intelligence (AI), is occurring alongside these geopolitical, environmental, and public health challenges. International organisations are increasingly exploring AI applications to support public services, environmental monitoring, healthcare, and humanitarian activities. Examples include AI-assisted systems for detecting methane emissions and supporting medical diagnosis in resource-constrained environments.
                </p>
                <p>
                  At the same time, the growing availability of AI-generated content has created new governance and security concerns. International organisations are developing initiatives to protect individuals and civil society from AI-enabled deepfakes, online harassment, automated disinformation, and other forms of digital manipulation (Slattery et al., 2024).
                </p>
                <p>
                  <strong>Overall Global Implication</strong>
                </p>
                <p>
                  These developments demonstrate that technological advancement cannot be considered in isolation from broader global challenges. Geopolitical conflict, climate disruption, public health emergencies, and technological change are increasingly interconnected.
                </p>
                <p>
                  AI and other emerging technologies have the potential to support responses to these challenges, but their misuse can also intensify existing vulnerabilities. Effective technological governance, therefore, requires an understanding of the broader global environment in which these technologies are developed and deployed.
                </p>
              </div>

              <div className="dark-side-section">
                <h3>4. South African Perspective and Implications for South Africa</h3>
                <p>
                  The risks associated with autonomous AI, Generative AI, and AI governance have particular implications for South Africa because they intersect with the country's cybersecurity challenges, expanding digital economy, regulatory environment, and socio-economic diversity.
                </p>
                <p>
                  Although these technologies offer opportunities to improve efficiency and service delivery, their adoption may also introduce new vulnerabilities when appropriate technical and governance safeguards are absent.
                </p>
                <h4>1. AI Security Vulnerabilities in Critical Infrastructure</h4>
                <p>
                  South African organisations face significant cybersecurity challenges, including ransomware, business email compromise, and other forms of cybercrime. In this environment, autonomous AI security tools could provide valuable support by assisting with threat detection and response, particularly where there are shortages of specialised cybersecurity skills.
                </p>
                <p>
                  However, increasing reliance on autonomous security agents also introduces new risks. If these agents are given extensive privileges without appropriate runtime controls, monitoring, and human oversight, attackers may attempt to manipulate their behaviour through techniques such as indirect prompt injection.
                </p>
                <p>
                  A compromised or misbehaving security agent could affect sensitive organisational systems, including municipal information systems, financial infrastructure, and other critical services. This demonstrates that AI-based security solutions should not automatically be considered secure simply because their purpose is to defend against cyber threats.
                </p>
                <h4>2. Generative AI, Phishing, and Software Supply-Chain Risks</h4>
                <p>
                  The growing adoption of Generative AI in South African businesses, particularly in areas such as financial services and software development, also creates new security considerations.
                </p>
                <p>
                  Developers using AI coding assistants may unintentionally introduce insecure or unreliable dependencies if AI-generated recommendations are not independently verified. Hallucinated software packages represent one potential supply-chain risk because malicious actors could exploit confusion surrounding non-existent or similarly named packages.
                </p>
                <p>
                  Generative AI may also increase the sophistication and scalability of phishing and social engineering attacks by enabling attackers to produce convincing, contextually appropriate messages. In South Africa's multilingual environment, the ability to generate content in multiple local languages could potentially make such attacks more difficult for users to recognise.
                </p>
                <p>
                  These developments highlight the importance of secure software development practices, verification of AI-generated code, and ongoing user awareness (Institute of Risk Management South Africa, 2025).
                </p>
                <h4>3. AI Governance, POPIA, and Contextual Bias</h4>
                <p>
                  The increasing use of AI also creates important governance and regulatory considerations for South African organisations. Compliance with frameworks such as the Protection of Personal Information Act (POPIA) requires organisations to consider how personal information is collected, processed, and protected.
                </p>
                <p>
                  However, compliance with general AI governance frameworks does not necessarily guarantee that an AI system is appropriate for the South African context. Governance frameworks and assessment tools developed primarily around international regulatory and risk-management approaches may not fully account for local socio-economic conditions, demographic diversity, or sector-specific requirements (Institute of Risk Management South Africa, 2025).
                </p>
                <p>
                  This poses a risk of contextual or imported bias, where organisations rely on governance assessments that indicate compliance while overlooking risks particularly relevant to South African users and institutions.
                </p>
                <p>
                  AI governance should therefore not rely exclusively on generic compliance dashboards or international benchmarks. Organisations should also evaluate whether AI systems are appropriate for local populations, regulatory requirements, languages, and socio-economic conditions.
                </p>
                <p>
                  <strong>Overall Implication</strong>
                </p>
                <p>
                  Taken together, these issues demonstrate that South Africa's adoption of AI requires a balance between technological innovation and contextual risk management.
                </p>
                <p>
                  Autonomous AI can help organisations address resource constraints and improve efficiency, while Generative AI can support software development and business processes. However, these benefits may be undermined if AI is adopted without adequate security controls, verification mechanisms, and locally appropriate governance.
                </p>
                <p>
                  South Africa, therefore, requires an approach to AI adoption that combines technological innovation with continuous monitoring, cybersecurity safeguards, regulatory compliance, and human oversight.
                </p>
              </div>

              <div className="dark-side-section">
                <h3>5. Critical Analysis</h3>
                <p>
                  While AI Governance, AI Security, and Generative AI are contributing to efficiency and innovation in the modern IT environment, their rapid adoption also exposes organisations to critical failure modes, operational risks, and systemic vulnerabilities.
                </p>
                <h4>1. The Dark Side of AI Governance</h4>
                <p>
                  AI governance platforms such as Credo AI can automate aspects of compliance by mapping system processes to regulations and frameworks, including the EU AI Act, NIST AI RMF, and POPIA. However, relying solely on structured governance platforms can create significant weaknesses.
                </p>
                <h4>Static "Compliance Theatre" versus Dynamic Failure</h4>
                <p>
                  According to Slattery et al. (2024), AI risks can emerge after deployment through complex, non-linear interactions rather than only from problems identified during pre-deployment assessments.
                </p>
                <p>
                  Governance platforms such as Credo AI can evaluate policies, controls, and risk requirements, but these assessments do not necessarily provide continuous enforcement of emerging agent behaviour. This can create a false sense of security in which an organisation successfully passes compliance assessments while remaining exposed to active or emerging technical threats.
                </p>
                <h4>Centralisation Risks and Governance Gaps</h4>
                <p>
                  Research published by the National Conference of State Legislatures (Hooshidary et al., 2024) highlights concerns surrounding over-reliance on centralised policy frameworks and automated risk reporting. These approaches may be less effective when the underlying technical environment does not support continuous monitoring. When governance mechanisms fail to adapt to real-time threats such as prompt injection or data drift, organisations may fall into a form of “paperwork compliance”, where documentation receives greater attention than actual technical resilience.
                </p>
                <p>
                  The analysis, therefore, indicates a significant gap between static AI governance and the dynamic nature of risks that emerge during system operation. Although governance platforms and centralised policy frameworks can support compliance, risk assessment, and accountability, they may not be sufficient when AI systems encounter changing data, adversarial inputs, users, and unexpected interactions after deployment.
                </p>
                <p>
                  This highlights an important distinction between compliance and effective security. Compliance-oriented approaches primarily demonstrate that policies and controls exist, whereas resilient AI governance requires evidence that these controls continue to work under real-world conditions. For autonomous and agentic systems, this requires continuous monitoring, runtime enforcement, detection of anomalous behaviour, and mechanisms capable of responding to emerging threats such as prompt injection and data drift. AI governance should therefore be treated not as a static compliance activity, but as a continuous process that connects organisational policies with technical safeguards throughout the AI system lifecycle.
                </p>
                <h4>2. The Dark Side of AI Security</h4>
                <p>
                  Modern AI security is moving from static, rule-based systems to autonomous, agentic AI systems that can monitor threats, reason about security events, and execute remediation actions. Although this transition can improve the speed and scalability of security operations, granting AI agents operational authority introduces new risks. These risks arise not only from external attacks but also from the systems' autonomous decision-making capabilities.
                </p>
                <h4>Indirect Prompt Injection and Memory Poisoning</h4>
                <p>
                  Sarsekar and Mirzan (n.d.) highlight the vulnerability of AI and multi-agent systems to indirect prompt injection and related attacks during inference and operational processes. Malicious instructions can be embedded within seemingly legitimate inputs, such as system logs, emails, or user-generated content. When an autonomous security agent processes these inputs, the embedded instructions may influence its reasoning and subsequent actions. This illustrates a fundamental challenge in agentic systems: the distinction between information that an agent should analyse and instructions that it should follow can become blurred. Consequently, increasing the operational autonomy of security agents can also increase the potential impact of successful input manipulation.
                </p>
                <h4>The "Confused Deputy" and Self-Inflicted Disruption</h4>
                <p>
                  Research on multi-agent safety also highlights the potential consequences of incorrect autonomous decisions. If an AI security agent incorrectly identifies legitimate activity as malicious, it could potentially trigger automated remediation actions that disrupt normal operations. Because security agents may operate with elevated privileges, an incorrect decision could affect user access, applications, databases, or other critical systems. In extreme cases, excessive automation could therefore turn a defensive mechanism into a source of operational disruption. This reinforces the importance of limiting the authority given to autonomous security agents and ensuring that high-impact actions remain subject to appropriate controls and human oversight.
                </p>
                <h4>3. The Dark Side of Generative AI</h4>
                <p>
                  Generative AI has expanded beyond text generation to support software development, automation, and the orchestration of increasingly complex workflows. While these capabilities can improve productivity and operational efficiency, integrating AI-generated outputs into software development and automated processes introduces significant supply-chain and systemic risks.
                </p>
                <h4>Package Hallucinations and Supply-Chain Attacks</h4>
                <p>
                  Tozzi (2024) identifies package hallucination as an emerging concern in software supply chain security. Generative AI systems may produce references to software libraries or packages that do not exist.
                </p>
                <p>
                  When developers trust and directly implement AI-generated code, they may subsequently search for these packages and unintentionally encounter malicious packages registered under similar or identical names. This creates a potential connection between AI hallucinations and software supply chain attacks, in which an error originating from an AI coding assistant could serve as an entry point for malicious software. The risk becomes greater when AI-generated code is adopted without verifying package authenticity, provenance, and security.
                </p>
                <h4>Systemic Hallucination Amplification</h4>
                <p>
                  A second concern is the amplification of inaccurate information within interconnected AI workflows. Kosinski and Forrest (2024) highlight potential risks in multi-agent and automated systems in which the output of one AI component becomes the input to another.
                </p>
                <p>
                  In these environments, an inaccurate AI-generated result can be passed to subsequent stages and treated as a fact. Unlike conventional software failures, these errors may not trigger syntax or system-level warnings because each component may continue to function normally. The resulting problem is therefore not necessarily a failure of system functionality, but a failure in the information and reasoning on which subsequent decisions are based.
                </p>
                <p>
                  Taken together, these perspectives demonstrate that Generative AI introduces risks that extend beyond individual model inaccuracies. AI-generated errors can become embedded within software dependencies or propagated through interconnected workflows, potentially transforming isolated hallucinations into broader organisational vulnerabilities. Organisations adopting Generative AI, therefore, require verification mechanisms that assess not only whether AI-generated outputs are technically functional, but also whether they are accurate, trustworthy, and safe to incorporate into downstream systems. This reinforces the importance of human verification, software dependency validation, provenance controls, and continuous monitoring when Generative AI is integrated into critical development and operational environments.
                </p>
              </div>

              <div className="dark-side-section">
                <h3>Conclusion</h3>
                <p>
                  The 2026 IT landscape is increasingly shaped by autonomous and agentic AI systems that can perform tasks independently, make decisions, and interact with other systems. Although these capabilities offer significant opportunities to improve efficiency and service delivery, the literature shows that increased autonomy also introduces new forms of technological risk. The central concern is therefore not AI adoption itself, but the potential consequences of giving AI systems operational authority without sufficient monitoring, security controls, and human oversight.
                </p>
                <p>
                  Three key areas of concern emerge from the discussion. First, AI governance can become overly focused on static compliance when governance mechanisms assess policies and risks without continuously monitoring how AI systems behave after deployment. This creates a potential gap between compliance on paper and the actual security of AI systems during operation. Second, autonomous AI security agents can introduce new vulnerabilities when granted elevated privileges. Indirect prompt injection can manipulate the information an agent processes, while excessive autonomy may allow an incorrect or manipulated decision to lead to harmful actions. Third, integrating Generative AI into software development and automated workflows introduces supply-chain and systemic risks.
                </p>
                <p>
                  Hallucinated software packages can potentially expose organisations to malicious dependencies, while inaccurate AI-generated outputs can spread through interconnected systems and contribute to cascading errors. These risks demonstrate that AI autonomy can amplify the consequences of both external attacks and internal AI errors. For emerging economies such as South Africa, where AI adoption can create important opportunities to improve operational efficiency and access to digital services, this creates a need for a balanced approach to technological adoption. Organisations should therefore move beyond checklist-based governance and passive adoption towards continuous and adaptive AI risk management. Technological resilience requires AI capabilities to operate within clearly defined boundaries, supported by continuous runtime monitoring, regular security testing and red-teaming, verification of AI-generated outputs, and human oversight of high-impact decisions.
                </p>
                <p>
                  Rather than attempting to replace human judgment entirely, autonomous AI should operate within controlled environments where its actions can be monitored, challenged, and, when necessary, overridden. This approach allows organisations to benefit from AI-driven automation while reducing the likelihood that autonomous systems become sources of security breaches, operational disruption, or cascading technological failures.
                </p>
              </div>

              <div className="references-block dark-side-references">
                <h3>References</h3>
                <ol>
                  <li>African Union Development Agency. (2022). <em>Impact of Russia-Ukraine conflict on African food systems</em>. AUDA-NEPAD. Retrieved August 25, 2026, from <a href="https://www.nepad.org/microsite/impact-of-russia-ukraine-conflict-african-food-systems" target="_blank" rel="noreferrer">https://www.nepad.org/microsite/impact-of-russia-ukraine-conflict-african-food-systems</a></li>
                  <li>Credo AI. (n.d.). <em>AI risk</em>. Credo AI Glossary. Retrieved August 25, 2026, from <a href="https://www.credo.ai/glossary/ai-risk" target="_blank" rel="noreferrer">https://www.credo.ai/glossary/ai-risk</a></li>
                  <li>The Cyber Archive. (2026, April 22). <em>7 AI agent security attacks researchers proved work in 2025–2026</em>. Medium. <a href="https://medium.com/@thecyberarchive/7-ai-agent-security-attacks-researchers-proved-work-in-2025-2026-bd17cd9b020f" target="_blank" rel="noreferrer">https://medium.com/@thecyberarchive/7-ai-agent-security-attacks-researchers-proved-work-in-2025-2026-bd17cd9b020f</a></li>
                  <li>Hooshidary, S., Canada, C., &amp; Clark, W. (2024, November 22). <em>Artificial intelligence in government: The federal and state landscape</em>. National Conference of State Legislatures. <a href="https://www.ncsl.org/technology-and-communication/artificial-intelligence-in-government-the-federal-and-state-landscape" target="_blank" rel="noreferrer">https://www.ncsl.org/technology-and-communication/artificial-intelligence-in-government-the-federal-and-state-landscape</a></li>
                  <li>Institute of Risk Management South Africa. (2025, May 29). <em>Generative AI: A threat or an opportunity? Assessing the potential impact within the South African context</em>. IRMSA. <a href="https://www.irmsa.org.za/communications/generative-ai-threat-or-opportunity-assessing-potential-impact-within-south-african" target="_blank" rel="noreferrer">https://www.irmsa.org.za/communications/generative-ai-threat-or-opportunity-assessing-potential-impact-within-south-african</a></li>
                  <li>Kosinski, M., &amp; Forrest, A. (2024, March 26). <em>What is a prompt injection attack?</em> IBM. <a href="https://www.ibm.com/think/topics/prompt-injection" target="_blank" rel="noreferrer">https://www.ibm.com/think/topics/prompt-injection</a></li>
                  <li>Malesci, U. (2026, July 16). <em>Credo AI vs Holistic AI (2026): AI governance compared — and where Kosmoy fits</em>. Kosmoy. <a href="https://www.kosmoy.com/resources/blog/credo-ai-vs-holistic-ai/" target="_blank" rel="noreferrer">https://www.kosmoy.com/resources/blog/credo-ai-vs-holistic-ai/</a></li>
                  <li>Sarsekar, P., &amp; Mirzan, S. R. (n.d.). <em>Prompt injection</em>. OWASP Foundation. Retrieved August 25, 2026, from <a href="https://owasp.org/www-community/attacks/PromptInjection" target="_blank" rel="noreferrer">https://owasp.org/www-community/attacks/PromptInjection</a></li>
                  <li>Slattery, P., Saeri, A. K., Grundy, E. A. C., Graham, J., Noetel, M., Uuk, R., Dao, J., Pour, S., Casper, S., &amp; Thompson, N. (2024). <em>The AI risk repository: A comprehensive meta-review, database, and taxonomy of risks from artificial intelligence</em>. MIT FutureTech. <a href="https://airisk.mit.edu" target="_blank" rel="noreferrer">https://airisk.mit.edu</a></li>
                  <li>Stellar Cyber. (2026, March 17). <em>Top agentic AI security threats in late 2026</em>. <a href="https://stellarcyber.ai/learn/agentic-ai-securiry-threats/" target="_blank" rel="noreferrer">https://stellarcyber.ai/learn/agentic-ai-securiry-threats/</a></li>
                  <li>Tozzi, C. (2024, April 22). <em>Package hallucination: The latest, greatest software supply chain security threat?</em> IDC. <a href="https://www.idc.com/resource-center/blog/package-hallucination-the-latest-greatest-software-supply-chain-security-threat/" target="_blank" rel="noreferrer">https://www.idc.com/resource-center/blog/package-hallucination-the-latest-greatest-software-supply-chain-security-threat/</a></li>
                  <li>UN News. (2026, August 24). <em>Security Council LIVE: Civilian suffering grows in Russia-Ukraine war</em>. United Nations. <a href="https://news.un.org/en/story/2026/08/1168191" target="_blank" rel="noreferrer">https://news.un.org/en/story/2026/08/1168191</a></li>
                  <li>Wells, J. (2026, April 6). <em>7 AI agent failure modes and how to prevent them in production</em>. Galileo. <a href="https://galileo.ai/blog/agent-failure-modes-guide" target="_blank" rel="noreferrer">https://galileo.ai/blog/agent-failure-modes-guide</a></li>
                  <li>World Meteorological Organization. (2026, July 31). <em>Strong El Niño expected to intensify</em> [Press release]. <a href="https://wmo.int/news/media-centre/strong-el-nino-expected-intensify" target="_blank" rel="noreferrer">https://wmo.int/news/media-centre/strong-el-nino-expected-intensify</a></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className={`section fourth-industrial ${activeDetailPage && activeDetailPage !== 'fourth-industrial-revolution' ? 'hidden-section' : ''}`} id="fourth-industrial-revolution" aria-label="Fourth Industrial Revolution">
          <div className="fourth-industrial-inner">
            <p className="eyebrow">Industry 4.0 to Industry 5.0</p>
            <h2>From Industry 4.0 to Industry 5.0</h2>

            <div className="paper-intro">
              <p>
                <em>Two overlapping technological eras, what each promises society, and why an Information Systems &amp; Technology professional should hold both narratives at arm’s length.</em>
              </p>
              <button type="button" className="back-btn" onClick={closeDetailPage}>Back to profile</button>
            </div>

            <div className="paper-block">
              <h3>Understanding the Fourth Industrial Revolution</h3>
              <p>
                The World Economic Forum’s founder, Klaus Schwab, popularised the term “Fourth Industrial Revolution” (4IR) to refer to a time when developments in robotics, artificial intelligence, the Internet of Things, biotechnology, and big data are merging in ways that make it difficult to distinguish between the digital, biological, and physical realms (Schwab, 2016). In contrast to the Third Industrial Revolution, which brought computing and early digitisation, the Fourth Industrial Revolution (4IR) is defined by the interconnection of machines, data, and living systems at a scale and speed that its proponents claim is unprecedented. This includes devices that sense and act on the physical world without direct human input, algorithms that make decisions previously only made by humans, and smart factories that reconfigure themselves in real time. According to this theory, the compounding effect of multiple exponential technologies maturing together is what sets the 4IR apart from previous waves of automation, rather than a single invention.
              </p>
            </div>

            <div className="paper-block">
              <h3>The move toward a Fifth Industrial Revolution</h3>
              <p>
                In a 2021 policy paper, the Directorate-General for Research and Innovation of the European Commission formally introduced Industry 5.0, positioning it as an addition to Industry 4.0 rather than its replacement (Breque, De Nul, and Petridis, 2021). In contrast to the 4IR narrative, which focuses on what new technology can do, the 5IR asks what technology can do for people, putting worker welfare, environmental constraints, and the capacity of production systems to withstand shocks like the COVID-19 pandemic at the centre of design decisions alongside efficiency (Breque, De Nul, and Petridis, 2021). According to Breque, De Nul, and Petridis, the Commission bases this change on three pillars: human-centricity, which uses technology to adapt work to people rather than the other way around; sustainability, which uses circular economy practices to keep production within planetary bounds; and resilience, which builds industries that can withstand disruption rather than maximise efficiency alone.
              </p>
            </div>

            <div className="comparison-table">
              <div className="comparison-row comparison-header">
                <div>Dimension</div>
                <div>4IR / Industry 4.0</div>
                <div>5IR / Industry 5.0</div>
              </div>
              <div className="comparison-row">
                <div>Central question</div>
                <div>What can this technology do?</div>
                <div>What can technology do for people?</div>
              </div>
              <div className="comparison-row">
                <div>Primary driver</div>
                <div>Connectivity, automation, data</div>
                <div>Wellbeing, sustainability, resilience</div>
              </div>
              <div className="comparison-row">
                <div>Locus of value</div>
                <div>Shareholder value, efficiency</div>
                <div>Stakeholder value, worker &amp; planet</div>
              </div>
              <div className="comparison-row">
                <div>Typical technology</div>
                <div>AI, IoT, robotics, big data</div>
                <div>Cobots, circular design, digital twins</div>
              </div>
              <div className="comparison-row">
                <div>Key source</div>
                <div>Schwab (2016)</div>
                <div>Breque, De Nul &amp; Petridis (2021)</div>
              </div>
            </div>

            <div className="paper-block">
              <h3>Potential benefits to society</h3>
              <p>
                Both eras are argued to offer real gains when technology is deployed deliberately. A few examples, drawn from current literature:
              </p>
              <ul className="paper-list">
                <li><strong>4IR:</strong> Wider access to services. AI-assisted diagnostics and telemedicine can extend specialist healthcare into areas with few doctors, and data-driven precision agriculture can raise yields with less water and fertiliser.</li>
                <li><strong>4IR:</strong> New categories of work. Global estimates suggest that 4IR technologies could create more jobs than they displace overall, even though the two effects are unevenly distributed across regions and skill levels (Fox &amp; Signé, 2022).</li>
                <li><strong>5IR:</strong> Safer, less strenuous work. Collaborative robots can take on physically demanding or hazardous tasks, freeing people for judgement- and creativity-based work rather than repetitive labour (Breque, De Nul and Petridis, 2021).</li>
                <li><strong>5IR:</strong> Production within planetary limits. Circular-economy manufacturing, designed to reuse materials and cut emissions, responds directly to climate targets rather than treating sustainability as an afterthought (Breque, De Nul and Petridis, 2021).</li>
              </ul>
            </div>

            <div className="paper-block">
              <h3>Challenges the shift is likely to present</h3>
              <ul className="paper-list">
                <li><strong>4IR:</strong> Job displacement and inequality. Automation is expected to hit low-skilled and routine work hardest, and without deliberate policy the income gap between high- and low-skilled workers is likely to widen further (Zervoudi, 2020).</li>
                <li><strong>4IR:</strong> Uneven readiness. In much of Sub-Saharan Africa, where large shares of the workforce are informally employed, 4IR technologies risk arriving faster than the education and infrastructure needed to benefit from them (Fox and Signé, 2022). A South African construction-industry study similarly found that patchy skills and awareness slowed the safety gains 4IR tools could otherwise deliver (Malomane, Musonda and Okoro, 2022).</li>
                <li><strong>5IR:</strong> Whose “human-centric”? A model built around European worker wellbeing does not automatically extend to the labour that supplies its raw materials and components elsewhere in the world — resilience and sustainability framed at one end of a supply chain can still externalise cost to the other end.</li>
                <li><strong>5IR:</strong> Hyperconnected exposure. The same sensors, cobots and data links that enable human-centric production widen the attack surface for cyber-intrusion, and privacy risk grows as more of a worker's movement and performance is captured as data.</li>
              </ul>
            </div>

            <div className="paper-block">
              <h3>A critical note, for IS&amp;T professionals</h3>
              <p>
                Considering the origins of these labels is worthwhile. The World Economic Forum created “4IR,” and the European Commission created “Industry 5.0.” Both organisations have an institutional stake in portraying technological change as urgent, logical, and deserving of their ongoing convening authority. This does not imply that either account is untrue, but it is a reason to interpret them as debates rather than objective statements of reality. According to this article, there isn’t a Fourth Industrial Revolution. Ian Moll, University of the Witwatersrand (2021), tests the 4IR against the standards that made previous industrial revolutions historically real, such as a truly new technological base, a transformed labour process, altered workplace relations, new community life, and global economic restructuring. Moll argues that current evidence meets few of these criteria, making “4IR” more of an ideological label than a proven historical fact. Industry 5.0 is now being asked a similar question.
              </p>
            </div>

            <div className="paper-block">
              <h3>Conclusion</h3>
              <p>
                The 4IR describes the fusion of digital, physical and biological technologies reshaping production and daily life; the 5IR is best understood as a corrective proposal, redirecting those same technologies toward human wellbeing, sustainability and resilience rather than efficiency alone. Both offer genuine social benefit in healthcare, safer work, and environmental performance and both carry a real risk of deepening inequality, particularly where skills and infrastructure lag behind the technology. Treating either label as an unquestioned fact, rather than a framing advanced by interested institutions, would be a mistake for anyone tasked with implementing these technologies responsibly.
              </p>
            </div>

            <div className="references-block">
              <h3>References</h3>
              <p>Breque, M., De Nul, L., &amp; Petridis, A. (2021). Industry 5.0 – Towards a sustainable, human-centric and resilient European industry. Publications Office of the European Union. https://doi.org/10.2777/30840</p>
              <p>Fox, L., &amp; Signé, L. (2022, September 23). Inclusion, inequality, and the Fourth Industrial Revolution (4IR) in Africa. Brookings. https://www.brookings.edu/articles/inclusion-inequality-and-the-fourth-industrial-revolution-4ir-in-africa</p>
              <p>Malomane, R., Musonda, I., &amp; Okoro, C. S. (2022). The opportunities and challenges associated with the implementation of Fourth Industrial Revolution technologies to manage health and safety. International Journal of Environmental Research and Public Health, 19(2), Article 846. https://doi.org/10.3390/ijerph19020846</p>
              <p>Moll, I. (2021). The myth of the Fourth Industrial Revolution. Theoria: A Journal of Social and Political Theory, 68(167), 1–38. https://doi.org/10.3167/th.2021.6816701</p>
              <p>Oosthuizen, R. M. (2022). The Fourth Industrial Revolution – Smart technology, artificial intelligence, robotics and algorithms: Industrial psychologists in future workplaces. Frontiers in Artificial Intelligence, 5, Article 913168. https://doi.org/10.3389/frai.2022.913168</p>
              <p>Schwab, K. (2016, January 14). The Fourth Industrial Revolution: What it means and how to respond. World Economic Forum. https://www.weforum.org/stories/technological-innovation/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/</p>
              <p>Sott, M. K. (2026). Industry 5.0: Revolution or repackaging? Unveiling the ambiguities of the new industrial era. Sustainable Futures, 11, Article 101699. https://doi.org/10.1016/j.sftr.2026.101699</p>
              <p>Zervoudi, E. K. (2020). Fourth Industrial Revolution: Opportunities, challenges, and proposed policies. In Industrial robotics – New paradigms. IntechOpen. https://doi.org/10.5772/intechopen.90412</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Let’s connect</p>
          <h2>Open to internships, graduate roles, and entry-level tech opportunities.</h2>
        </div>

        <div className="footer-actions">
          <a className="primary-btn" href="mailto:Zinhlelusanda.zinyanga@mail.com">
            Zinhlelusanda.zinyanga@mail.com
          </a>
          <div className="socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
