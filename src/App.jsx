import { useState } from 'react'
import './App.css'
import aboutPhoto from './assets/graduation.jpg.jpeg'
import profilePhoto from './assets/profile-photo.png'
import educationPhoto from './assets/education-photo.jpg'
import interestsPhoto from './assets/interests-photo.jpg'
import interestsPhotoTwo from './assets/interests-photo-2.jpg'
import interestsPhotoThree from './assets/interests-photo-3.jpg'
import interestsPhotoFour from './assets/interests-photo-4.jpg'
import fourIRPhoto from './assets/4IR.png'
import securityAIPhoto from './assets/securityAI.png'
import researchAIPhoto from './assets/ResearchAI.png'

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

const projects = [
  {
    title: 'Student Health Mobile Application',
    type: 'Mobile Application Development',
    description: 'A student-focused mobile application designed to support health tracking, wellness awareness, and easier access to health-related resources.',
    tools: 'JAVA • ANDROID • SQLITE • XML',
  },
  {
    title: 'Information Systems Analysis',
    type: 'Systems Analysis',
    description: 'Comprehensive analysis of information systems, identifying bottlenecks and proposing high-tech solutions.',
    tools: 'Requirements analysis, process modelling, documentation',
  },
  {
    title: 'Database Management Solution',
    type: 'Database and Software Development',
    description: 'A structured solution for organising records, improving data accuracy, and making information easier to manage and retrieve.',
    tools: 'SQL, database design, problem solving',
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
    image: securityAIPhoto,
    figureIntro: 'The research in Figure 2 helped AI researchers and practitioners gain a thorough understanding of the inherent vulnerabilities and existing defence methods in AI systems. These are divided into sections.',
    figureCaption: 'Figure 2. Taxonomy of attacks and defences in AI models in machine learning.',
    figurePoints: [
      'In Section 2, the analysis of vulnerabilities during the AI training phase focused on comparing attack vectors in centralised and distributed environments. In the centralised setting, particular attention was given to poisoning and backdoor attacks. In decentralised environments, the analysis first examined poisoning and privacy inference in federated learning. It then explored privacy inference and backdoor attacks within the split learning paradigm.',
      'In Section 3, shifting to the inference stage, the discussion covers classical ML attacks, including model stealing, private-data leakage, fault injection, and adversarial inputs, alongside emerging foundation-model threats such as jailbreaks and prompt attacks.',
      'In Section 4, the discussion presents defence tactics for protecting both centralised and distributed AI systems. The survey addresses defences against data poisoning, exit, and model-hijacking attacks in centralised settings, as well as defences and privacy-preserving techniques against data poisoning and backdoor attacks in federated and split learning.',
      'In Section 5, the discussion of inference-stage defences initially focused on the conventional centralised environment. These defences included strategies for detecting model stealing, fault injection, and adversarial attacks, as well as privacy-preserving techniques. The focus later shifted towards foundation models, with greater attention given to protecting their integrity against jailbreaks and prompt-based attacks (He et al., 2025).',
    ],
    paragraphs: [
      'Strengthens the industry\'s defences with proactive cybersecurity AI designed to predict attack paths and guide remediation before damage occurs. Autonomous security software can perform end-to-end cybersecurity tasks, including threat monitoring, incident response, and vulnerability patching, with minimal human intervention (TrendAI, 2026).',
      'Unlike traditional security software, which relies on static rules, or simple AI copilots that only summarise alerts, security agents can reason, plan multi-step actions, query databases, and execute remediation workflows dynamically. As technology evolves and adversaries become more sophisticated, businesses need security that can respond at the same speed.',
      'Cybersecurity protects information used for online banking, big data processing, healthcare, and business operations, but cyberattacks continue to grow in power and frequency. Because human error remains a major reason cybersecurity fails, researchers are turning to AI to create stronger and more automated defences.',
      'He et al. (2025) identify security and privacy risks across the full AI lifecycle, including data poisoning, backdoors, privacy leaks, prompt manipulation, and the theft of sensitive data or code. Defences require strict data filtering, privacy safeguards, tamper resistance, and specialised protections for foundation models. AI security is therefore not a once-off deployment task; it requires continuous protection from training through everyday use.',
      'The research also classifies attacks and defences across training and inference. Training-stage risks include poisoning and backdoor attacks in centralised systems, as well as poisoning and privacy inference in federated or split learning. Inference-stage risks include model stealing, privacy inference, fault injection, adversarial attacks, jailbreaks, and prompt-based attacks. Effective security must address both stages.',
    ],
  },
  {
    title: 'AI Research Partners',
    image: researchAIPhoto,
    imagePosition: 'right',
    paragraphs: [
      'AI in 2026 is no longer only summarising research papers; it is actively participating in discovery. These systems can generate hypotheses independently, control scientific experiments, and collaborate with human and AI research colleagues across industries.',
      'Researchers face a breadth-and-depth challenge: scientific topics require increasingly specialised expertise, while important insights may come from connecting knowledge across disciplines. AI systems can reason across complex fields, process multiple types of information, and use tools to solve long-term problems.',
      'Co-Scientist is a structured scientific thinking engine designed to collaborate with researchers. It is a compound, multi-agent system built on a large language model and designed to mirror the reasoning process behind the scientific method. Given a research goal in natural language, it can search literature, synthesise previous work, propose hypotheses, and suggest experimental protocols (Gottweis et al., 2026).',
      'Co-Scientist grounds recommendations by citing relevant literature, applying scientific reasoning, and verifying conclusions through external tools where appropriate. This makes it useful not only for producing answers, but also for identifying gaps, ranking hypotheses, analysing real-time data, and helping researchers explore many directions at once.',
      'In my view, AI research partners can support researchers beyond the natural sciences. They can help students and professionals analyse evidence, find useful papers, and develop stronger research questions while keeping human judgement responsible for the final interpretation.',
    ],
  },
  {
    title: 'Generative AI',
    paragraphs: [
      'Generative AI is transforming everyday office work and can bring similar benefits to many industries by deepening domain expertise and supporting AI assistants across design, implementation, optimisation, and operations.',
      'In manufacturing, automation design is dynamic and diverse, but it also includes repetitive activities such as clicking through screens, writing similar code, and executing routine tasks. Industrial engineering assistants are beginning to apply generative AI directly to these workflows so engineers can spend more time on problem-solving.',
      'Tools such as ChatGPT have shown engineers how powerful AI can be, while industrial tools are making that capability more practical in automation and engineering environments. The main value is not simply generating content; it is integrating assistance into real work where domain knowledge and human review remain important.',
      'Generative AI can also make difficult tasks simpler and help people brainstorm ideas quickly. A student using Visual Studio for the first time can ask an AI tool for clear steps, examples, and explanations. This makes technical learning more accessible, although outputs still need to be checked for accuracy, security, and quality.',
      'Over time, people may depend more heavily on generative systems. Responsible use therefore requires critical thinking, verification, and continued development of human technical skills rather than replacing them entirely.',
    ],
  },
  {
    title: 'Digital Twin Composer',
    paragraphs: [
      'The Digital Twin Composer delivers a vision for the industrial metaverse. It helps manufacturers manage complexity, accelerate production, reduce costs, improve resilience, and increase profitability by creating virtual representations of products, processes, and factories.',
      'Bhatia et al. (2025) examine how digital twin technology can represent a fusion power plant using NVIDIA Omniverse. The digital twin combines engineering designs, simulations, real-time sensor data, and AI models to support monitoring, prediction, testing, and decision-making.',
      'Digital twins can identify anomalies and potential design problems and allow corrective actions to be tested virtually before they are applied to the real plant. However, interoperability and technical challenges remain when different software and computing environments must work together.',
      'By combining engineering models, simulations, sensor data, and AI, organisations can better understand complex physical systems and test decisions virtually. This is relevant to mining, manufacturing, utilities, energy, and infrastructure in South Africa because it can improve safety, reduce downtime, and support smarter planning.',
      'Digital twins are powerful tools for helping businesses save time and deliver products more quickly, but demonstrations such as a fusion-power-plant model should not be treated as evidence that commercial fusion plants are already being produced through digital twins. Their value depends on reliable data, suitable models, and successful integration between systems.',
    ],
  },
  {
    title: 'Credo AI',
    paragraphs: [
      'Credo AI is a responsible AI governance platform that helps organisations assess, monitor, and document risks in AI systems. It focuses on fairness, security, privacy, transparency, and performance and provides standardised assessments, reports, and policy packs based on laws, regulations, standards, and organisational policies (OECD.AI, 2026).',
      'The platform addresses the problem of AI governance being time-consuming and inconsistent by helping development teams meet governance and compliance requirements while reducing manual work. This is increasingly important as AI adoption grows faster than many organisations\' governance structures.',
      'Radke et al. (2023) examine how agents with different preferences can cooperate in multi-agent reinforcement learning. Their work introduces the idea of a credo, which describes how agents balance their interests, their teams, and the wider system. Different preferences do not always prevent cooperation and can sometimes produce greater overall reward and equality.',
      'Fox et al. describe credo as a set of propositions about decision-making, formalised computationally through software and knowledge-engineering tools. This connects AI governance with a longer history of decision science, autonomous agents, and multi-agent systems.',
      'In South Africa, responsible AI governance is particularly important because emerging national policy and POPIA requirements increase the need for accountability and ethical decision-making. AI should not only be powerful; it should also be trustworthy, explainable, secure, and aligned with legal and social responsibilities.',
    ],
  },
]

const southAfricaTrendReport = [
  {
    title: '2.1. Autonomous AI Security: Defending High-Value Targets',
    paragraphs: [
      'South Africa is one of the most targeted countries on the continent for cybercrime, experiencing ransomware, Business Email Compromise, and AI-generated phishing attacks (Gilbert, 2025).',
      'Traditional audit-driven security strategies are struggling against AI-accelerated attack cycles. Autonomous AI security agents can help local organisations shift from reactive patching to proactive, continuous threat monitoring and contain incidents more quickly (Davison, 2026).',
      'A regional cybersecurity skills shortage also means that South African operations can use autonomous agents to augment understaffed security operations centres (Lebele, 2026).',
    ],
  },
  {
    title: '2.2. AI Research Partners: Accelerating Local Scientific Discovery',
    paragraphs: [
      'South African research institutions, including the CSIR and universities, work on complex challenges in healthcare, agriculture, and sustainable energy transition (IMARC Group, 2026).',
      'AI co-scientists can act as force multipliers for resource-constrained research teams by generating hypotheses, cross-referencing global literature with regional data, and suggesting experimental protocols. This can help local researchers connect specialised expertise with global scientific breakthroughs without requiring massive capital expenditure.',
    ],
  },
  {
    title: '2.3. Industrial Generative AI: Augmenting the Workforce',
    paragraphs: [
      'South Africa\'s mining, automotive, and logistics sectors face operational friction, high costs, and an ongoing need to upskill technical staff.',
      'Tools such as Siemens\' Eigen Engineering Agent bring generative AI into real engineering workflows. For local manufacturing sites, generative AI can reduce time spent on repetitive coding and programmable logic controller setup, allowing technicians and junior engineers to focus on problem-solving and rapid prototyping.',
    ],
  },
  {
    title: '2.4. Digital Twin Composers: Heavy Industry and Resource Efficiency',
    paragraphs: [
      'The South African digital twin market is expanding across mining, energy, and smart utility management. Digital twins built on platforms such as NVIDIA Omniverse are moving into high-stakes operational environments.',
      'In mining, partnerships involving the CSIR, the Mandela Mining Precinct, and the Minerals Council South Africa have produced AI-driven Trackless Mobile Machinery digital twins to model vehicle risks and help prevent underground collisions.',
      'Utilities and municipalities can use digital twins to simulate supply and demand, monitor equipment health remotely, and perform predictive maintenance to minimise costly downtime.',
    ],
  },
  {
    title: '2.5. Responsible AI Governance: Navigating POPIA and National Policy',
    paragraphs: [
      'The South African Department of Communications and Digital Technologies has published a Draft National AI Policy that establishes expectations around AI ethics, algorithmic bias, and accountability (Coelho et al., 2026).',
      'Platforms such as Credo AI are becoming operational infrastructure rather than optional corporate additions. Organisations must mitigate imported bias by checking whether models trained on Global North datasets produce discriminatory outcomes in local demographic contexts and under the Employment Equity Act.',
      'Governance platforms can also provide standardised policy packs and compliance tracking across POPIA, emerging sector-specific AI rules, and King V corporate governance recommendations.',
    ],
  },
]

const criticalTrendReport = [
  {
    title: 'AI Security',
    paragraphs: [
      'Abbas et al. (2019) describe the early development of AI security, its evolution, and the growth of research collaboration, particularly between the United States and China. This work provides useful historical context for understanding how AI became central to modern security discussions.',
    ],
  },
  {
    title: 'AI Agents and Scientific Discovery',
    paragraphs: [
      'Gottweis et al. (2026) present Co-Scientist as more than a productivity tool. It is described as a co-investigator that can generate hypotheses, reason through scientific methods, and support experimentally testable discovery. This is an important shift from plausible-sounding answers toward evidence-based research assistance.',
    ],
  },
  {
    title: 'Generative AI',
    paragraphs: [
      'Generative AI is a double-edged sword for businesses. It can increase profits through efficiency gains, but it also creates risks such as trade-secret leakage and unverified outputs. The literature includes editorial and conceptual work as well as practical examples, so claims about business impact should be interpreted with appropriate caution.',
    ],
  },
  {
    title: 'Digital Twin',
    paragraphs: [
      'Bhatia et al. (2025) show how NVIDIA Omniverse can integrate CAD models, simulation data, material properties, real-time visualisation, Python scripting, and generative AI for a fusion-power-plant digital twin. The key contribution is the integrated workflow that unifies previously siloed tools rather than a single new algorithm.',
    ],
  },
  {
    title: 'Credo AI',
    paragraphs: [
      'Radke et al. (2023) show how agents with partially different interests can cooperate in multi-agent learning. Their findings have implications for fleets of autonomous agents from different vendors that must cooperate without being fully aligned. Fox\'s decision-engineering framework adds a longer history of cognitive, logical, and computational principles for decision support.',
    ],
  },
]

const trendReferences = [
  'Abbas, N. N., Ahmed, T., Shah, S. H. U., Omar, M., & Park, H. W. (2019). Investigating the applications of artificial intelligence in cyber security. Scientometrics, 121(2), 1189-1211. https://doi.org/10.1007/s11192-019-03222-9',
  'Bhatia, N., Costa, R., Pamela, S. J. P., Davis, A., Gonzalez Beltran, A. N., Gopakumar, V., Zanisi, L., de Witt, S., & Akers, R. (2025). Visualizing digital twins of fusion power plants using NVIDIA Omniverse. AIP Advances, 15(4), Article 045018. https://doi.org/10.1063/5.0261883',
  'Coelho, R., Ramages, J., Brink, A., & Chivaura, T. (2026). South Africa: Draft National Artificial Intelligence Policy published for public comment. Bowmans.',
  'Davison, A. (2026). Is SA\'s cybersecurity lagging AI adoption? IT-Online.',
  'Fox, J. (2014). A credo for decision science and engineering. University of Oxford, Department of Engineering Science.',
  'Gilbert, P. (2025). AI-enabled cybersecurity lowers South African data breach costs. Connecting Africa.',
  'Gottweis, J., et al. (2026). Accelerating scientific discovery with Co-Scientist. Nature, 655(8122), 487-496. https://doi.org/10.1038/s41586-026-10644-y',
  'Lebele, K. (2026). AI is raising South Africa\'s cybersecurity stakes. SA Instrumentation & Control.',
  'Nah, F. F.-H., Zheng, R., Cai, J., Siau, K., & Chen, L. (2023). Generative AI and ChatGPT: Applications, challenges, and AI-human collaboration. Journal of Information Technology Case and Application Research, 25(3), 277-304. https://doi.org/10.1080/15228053.2023.2233814',
  'OECD.AI. (2026). Credo AI Responsible AI Governance Platform. OECD.AI Policy Observatory.',
  'Radke, D., Larson, K., & Brecht, T. (2023). The importance of credo in multiagent learning. Proceedings of AAMAS 2023. https://arxiv.org/abs/2204.07471',
  'Siemens. (2026). How generative AI is transforming automation engineering.',
  'Siemens. (2026). Introducing Digital Twin Composer.',
  'Trend Micro Incorporated. (2026). AI security | TrendAI.',
]

const darkSideReport = [
  {
    title: '1. Overview',
    subsections: [
      {
        title: '1. Autonomous AI Security: The "Over-Eager Guard Dog"',
        paragraphs: [
          'Allowing autonomous AI security agents wide latitude to edit code, restrict access, and perform remediation can relieve the burden on IT and cybersecurity teams. However, as these systems become more autonomous, they introduce new vulnerabilities. Unlike conventional rule-based security mechanisms, AI agents can understand and reason about natural-language information. This creates scope for their behaviour to be exploited or for genuine information to be misinterpreted (Kanjere, 2024).',
        ],
      },
      {
        title: 'Vulnerability to Indirect Instructions',
        paragraphs: [
          'AI agents may use data from emails, documents, user input, or system logs to guide decision-making. An agent might interpret malicious instructions hidden within these sources as legitimate rather than untrusted information. This creates the risk of indirect prompt injection, in which seemingly innocuous content influences an agent\'s behaviour and causes actions not intended by the organisation (Wells, 2026).',
          'The concern is not only about an attacker directly compromising the AI agent. The agent\'s ability to understand natural-language information becomes another attack vector.',
        ],
      },
      {
        title: 'Autonomous Errors and Operational Disruption',
        paragraphs: [
          'Autonomous security agents can mistake legitimate activity for malicious activity. An unusual but legitimate administrative action might be seen as a security threat. If an AI agent has broad privileges and operates autonomously, an erroneous decision could prevent valid users from accessing systems or disrupt vital services (Stellar Cyber, 2026).',
          'This is the problem of the "over-eager guard dog": a security system intended to protect an organisation can itself become a source of disruption if it overreacts without sufficient human verification.',
        ],
      },
      {
        title: '2. Generative AI: The Danger of Unverified Outputs',
        paragraphs: [
          'Generative AI is increasingly used for software development, technical decision-making, and organisational and industrial processes. As AI-generated outputs become integrated into these systems, the risks increase when users accept them without adequate verification.',
        ],
      },
      {
        title: 'Hallucinated Software Dependencies',
        paragraphs: [
          'Generative AI tools may cite software libraries or packages that do not exist. If developers do not verify the authenticity and provenance of dependencies, organisations may face software supply-chain risks. Malicious actors could register packages with names similar to those generated by AI and use them to distribute malicious code (The Cyber Archive, 2026). An AI hallucination can therefore become a broader security concern when recommendations are applied directly to production environments.',
        ],
      },
      {
        title: 'Reduced Human Verification and Technical Understanding',
        paragraphs: [
          'Reliance on Generative AI can create human-centred risks when developers produce complex code without properly understanding or reviewing it. Organisations may become dependent on outputs that employees are not equipped to assess, support, or troubleshoot.',
          'This is especially important when junior developers use AI-generated solutions without developing awareness of the underlying technologies. AI should augment human technical knowledge, critical thinking, code review, and problem-solving rather than replace them.',
        ],
      },
      {
        title: '3. AI Governance: The Risk of a False Sense of Security',
        paragraphs: [
          'AI governance platforms such as Credo AI can organise governance requirements, assess AI-related risks, and document compliance activities. However, these tools are not a complete replacement for continuous technical monitoring and operational risk management (Credo AI, 2026).',
        ],
      },
      {
        title: 'Compliance Does Not Necessarily Equal Operational Security',
        paragraphs: [
          'An organisation may meet documented governance requirements and appear compliant while its AI systems behave unpredictably or pose emerging security risks after deployment. Governance assessments show that controls and procedures exist, but they must form part of a broader lifecycle approach that includes ongoing monitoring, testing, and review.',
          'Compliance as a one-off activity can provide a false sense of security. Organisations must consider how AI systems behave in real-world environments and how their risks evolve (Malesci, 2026).',
        ],
      },
      {
        title: 'The Importance of Local Context',
        paragraphs: [
          'AI governance frameworks and assessment tools may need to be adapted for different regulatory and socio-economic environments. Assessments based on general international standards might not consider particular country legislation and local conditions.',
          'In South Africa, organisations need to consider requirements including POPIA and the Employment Equity Act. An AI system that performs well under a general governance framework may require further evaluation to determine whether it is suitable for the South African legal, demographic, and socio-economic context (Malesci, 2026).',
        ],
      },
      {
        title: 'Overall Critical Insight',
        paragraphs: [
          'These three areas show that AI-related risks go beyond the technical capabilities of the technologies themselves. Autonomous AI may result in erroneous or manipulated decisions; Generative AI may produce unreliable outputs that become embedded in software and organisational processes; and governance platforms can fail when compliance is used as a substitute for continuous risk management.',
          'Successful AI adoption therefore requires human expertise, ongoing oversight, independent verification, and governance that takes the operating environment into account.',
        ],
      },
    ],
  },
  {
    title: '2. Negative Application',
    subsections: [
      {
        title: 'Weaponisation of Emerging AI Technologies',
        paragraphs: [
          'The capabilities of autonomous AI, Generative AI, and AI governance platforms create opportunities for legitimate organisations, but malicious actors can also exploit them. As these technologies become integrated into security operations, software development, and organisational decision-making, they may increase the scale, speed, and sophistication of cyberattacks. AI should therefore be viewed not only as a defensive capability but also as a potential attack surface (Sarsekar & Mirzan, 2026).',
        ],
      },
      {
        title: '1. Weaponisation of Autonomous AI Security',
        paragraphs: [
          'Autonomous AI security systems improve threat detection, monitoring, and incident response. However, the ability to operate continuously and make decisions with limited human intervention may create opportunities for malicious exploitation.',
          'Agentic AI could help attackers discover vulnerabilities, adjust attack strategies, and generate malicious content. This could reduce the expertise required for some attacks while increasing their speed and scale (Sarsekar & Mirzan, 2026).',
          'Indirect prompt injection could also be used against defensive AI systems. Malicious content introduced through emails, documents, or other data could affect how a security agent interprets an event. If the agent has broad operational privileges, manipulation could result in improper security actions.',
          'The more autonomy and authority a defensive AI system has, the greater the consequences if it is manipulated or makes an incorrect decision.',
        ],
      },
      {
        title: '2. Malicious Exploitation of Generative AI',
        paragraphs: [
          'Generative AI can lower barriers to cybercrime by making it easier to produce convincing content, automate repetitive activities, and assist with technical tasks. This creates risks for individuals and organisations (Credo AI, 2026).',
          'AI coding assistants may generate incorrect, unreliable, or nonexistent dependencies. If developers do not independently check packages and sources, malicious actors could create packages resembling commonly suggested dependencies. An AI-generated error could therefore become a security vulnerability in organisational software (Kosinski & Forrest, 2024).',
          'Generative AI may also make phishing and social engineering more effective by producing convincing, contextually appropriate communications in different languages. These risks show that the threat extends beyond the technology itself and can strengthen existing forms of cybercrime.',
        ],
      },
      {
        title: '3. Misuse of AI Governance and Compliance Mechanisms',
        paragraphs: [
          'AI governance platforms are intended to improve accountability, risk assessment, documentation, and compliance. However, they can be misused when compliance is treated as an end in itself rather than as part of broader risk management.',
          'An organisation could engage in ethics-washing by presenting evidence of governance processes while failing to address risks in the actual operation of an AI system. This is the difference between showing that governance procedures exist and showing that they manage real-world risks effectively (Credo AI, 2026).',
          'Overly complex governance requirements could also create barriers to competition. Strong governance is necessary, but regulation should promote accountability without unnecessarily restricting innovation or placing disproportionate burdens on smaller organisations.',
        ],
      },
      {
        title: 'Overall Implication',
        paragraphs: [
          'The growing adoption of AI creates a dual-use environment. The same abilities that allow organisations to automate security, software development, and governance can also be used by malicious parties or misused by the organisation itself.',
          'Risk management must consider not only whether AI systems can protect themselves from external attacks, but also how AI autonomy, generated outputs, and governance mechanisms might become sources of danger. This reinforces the importance of monitoring, proper access, verification of AI outputs, security checks, and human supervision of decisions.',
        ],
      },
    ],
  },
  {
    title: '3. Global Perspective',
    subsections: [
      {
        title: 'Global Developments and Emerging Challenges',
        paragraphs: [
          'Looking beyond South Africa, the global environment is characterised by interconnected geopolitical, environmental, public health, and technological developments. These demonstrate how technological, social, and environmental challenges influence one another.',
        ],
      },
      {
        title: '1. Escalating Geopolitical Conflicts and Security Challenges',
        paragraphs: [
          'Russia-Ukraine War: The United Nations Security Council held an emergency briefing after a surge in missile and drone strikes on civilian infrastructure in Ukraine. UN monitors reported a large surge in civilian casualties in mid-2026, while over 10.8 million Ukrainians were identified as requiring immediate humanitarian assistance (UN News, 2026).',
          'Middle East Crisis: In Gaza, UN agencies reported that approximately 94% of the population, around 2.1 million people, requires urgent shelter and humanitarian assistance. Humanitarian operations and ceasefire arrangements remain fragile amid continuing military activity and insecurity (Global Issues, 2026).',
          'Sudan and the Horn of Africa: Sudan continues to experience armed conflict, food insecurity, famine, and large-scale displacement. The situation has prompted international warnings about worsening humanitarian conditions and the need for increased assistance (UN News, 2026).',
        ],
      },
      {
        title: '2. Environmental and Climate Disruption',
        paragraphs: [
          'Changing global weather patterns and climate change continue to pose major environmental and socio-economic challenges. The World Meteorological Organisation has expressed concern about changing ocean temperatures and the possible impact of El Nino and Indian Ocean climate patterns on extreme weather.',
          'These trends could lead to more frequent heatwaves, droughts, floods, and other disruptions, affecting food security, infrastructure, public health, economic activity, and access to essential services (World Meteorological Organisation, 2026).',
        ],
      },
      {
        title: '3. Emerging Global Public Health Challenges',
        paragraphs: [
          'Ebola in Central Africa: The Democratic Republic of the Congo continues to face Ebola-related public health challenges requiring vaccination, disease surveillance, and humanitarian assistance. Funding limitations continue to affect effective outbreak containment (Global Issues, 2026).',
          'Mpox and Children\'s Health: Public health authorities in parts of West Africa have reported significant numbers of children among newly identified mpox cases. This creates additional challenges for surveillance, diagnosis, treatment, vaccination, and public health communication.',
        ],
      },
      {
        title: '4. Technological Acceleration and Governance',
        paragraphs: [
          'Technological development, particularly the rapid integration of AI, is occurring alongside geopolitical, environmental, and public health challenges. International organisations are exploring AI applications for public services, environmental monitoring, healthcare, and humanitarian activities, including methane detection and medical diagnosis in resource-constrained environments.',
          'The availability of AI-generated content also creates governance and security concerns. International organisations are developing initiatives to protect individuals and civil society from deepfakes, online harassment, automated disinformation, and other digital manipulation (Global Issues, 2026).',
        ],
      },
      {
        title: 'Overall Global Implication',
        paragraphs: [
          'Technological advancement cannot be considered in isolation from broader global challenges. Geopolitical conflict, climate disruption, public health emergencies, and technological change are increasingly interconnected.',
          'AI can support responses to these challenges, but misuse can intensify existing vulnerabilities. Effective governance requires understanding the broader global environment in which technologies are developed and deployed.',
        ],
      },
    ],
  },
  {
    title: '4. South African Perspective and Implications for South Africa',
    subsections: [
      {
        title: 'Context',
        paragraphs: [
          'Autonomous, generative, and governing AI are particularly important in South Africa because they intersect with cybersecurity issues, a growing digital economy, regulation, and socio-economic differences. These technologies can increase productivity and service delivery, but implementation can create additional vulnerabilities without adequate technical and governance protections.',
        ],
      },
      {
        title: '1. AI Security Vulnerabilities in Critical Infrastructure',
        paragraphs: [
          'South African organisations face ransomware, business email compromise, and other cybercrime. Autonomous AI security tools could assist with threat detection and response, especially where specialised cybersecurity skills are scarce.',
          'However, agents with extensive privileges and inadequate runtime controls, monitoring, and human oversight may be manipulated through indirect prompt injection. A compromised or misbehaving agent could affect municipal information systems, financial infrastructure, and other critical services.',
        ],
      },
      {
        title: '2. Generative AI, Phishing, and Software Supply-Chain Risks',
        paragraphs: [
          'The use of Generative AI in South African enterprises, especially finance and software development, raises new security concerns. Developers may include insecure or unreliable dependencies when they do not verify AI-generated suggestions. Fictional libraries can create a supply-chain threat if bad actors register similarly named packages.',
          'Generative AI can also improve phishing and social engineering by enabling realistic messages. In South Africa\'s multilingual environment, local-language content may make malicious communications harder to distinguish from legitimate messages (Institute of Risk Management South Africa, 2025).',
        ],
      },
      {
        title: '3. AI Governance, POPIA, and Contextual Bias',
        paragraphs: [
          'AI adoption creates regulatory questions for South African organisations. POPIA requires organisations to consider how personal data is collected, processed, and protected.',
          'Meeting general governance requirements does not prove that an AI system is appropriate for the South African context. International frameworks may not address local socio-economic conditions, demographic characteristics, or sector-specific needs, creating the possibility of context-based bias.',
          'AI governance cannot therefore be reduced to generic compliance dashboards or instruments based only on international standards.',
        ],
      },
      {
        title: 'Overall Implication',
        paragraphs: [
          'South Africa\'s use of AI requires a balance between technological innovation and risk management. Autonomous AI can help mitigate resource limitations and improve efficiency, while Generative AI can support software development. These advantages may not be realised without cybersecurity, verification, governance, and ongoing monitoring.',
        ],
      },
    ],
  },
  {
    title: '5. Critical Analysis',
    subsections: [
      {
        title: 'Introduction',
        paragraphs: [
          'AI Governance, AI Security, and Generative AI contribute to efficiency and innovation, but rapid adoption also exposes organisations to critical failure modes, operational risks, and systemic vulnerabilities.',
        ],
      },
      {
        title: '1. The Dark Side of AI Governance',
        paragraphs: [
          'Platforms such as Credo AI can map system processes to regulations and frameworks including the EU AI Act, NIST AI RMF, and POPIA. However, relying solely on structured platforms can create weaknesses.',
        ],
      },
      {
        title: 'Static "Compliance Theatre" versus Dynamic Failure',
        paragraphs: [
          'The AI Risk Repository Meta-Review (2024) indicates that risks can emerge after deployment through complex, non-linear interactions rather than only through problems identified in pre-deployment assessments.',
          'Governance platforms can evaluate policies, controls, and requirements, but may not continuously enforce emerging agent behaviour. An organisation can pass compliance assessments while remaining exposed to active technical threats.',
        ],
      },
      {
        title: 'Centralisation Risks and Governance Gaps',
        paragraphs: [
          'Research published by the National Conference of State Legislatures (NCSL, 2024) highlights concerns about overreliance on centralised policy frameworks and automated risk reporting. If governance is not adapted to prompt injection, data drift, and other dynamic threats, an organisation may fall into "paperwork compliance" and focus more on documentation than resilience.',
          'This demonstrates the gap between static governance and dynamic operational threats. Compliance shows that policies and controls exist, while resilient governance requires evidence that controls continue to work under real conditions. Autonomous systems require continuous monitoring, runtime enforcement, anomaly detection, and mechanisms to address prompt injection and data drift.',
        ],
      },
      {
        title: '2. The Dark Side of AI Security',
        paragraphs: [
          'Modern AI security is moving from static rules to autonomous systems that monitor threats, reason about events, and execute remediation. This can improve speed and scale, but granting agents operational authority creates risks from external attacks and autonomous decision-making.',
        ],
      },
      {
        title: 'Indirect Prompt Injection and Memory Poisoning',
        paragraphs: [
          'He et al. (2025) emphasise the susceptibility of AI and multi-agent systems to prompt injection during inference. Malicious commands can be hidden in logs, emails, or user content. When a security agent processes that data, its reasoning and decisions may be influenced by instructions embedded in the data, blurring the distinction between information to analyse and commands to follow.',
        ],
      },
      {
        title: 'The "Confused Deputy" and Self-Inflicted Disruption',
        paragraphs: [
          'An AI security agent may identify a legitimate operation as malicious and trigger remediation that interferes with normal operations. Because security agents may have elevated permissions, an incorrect decision could affect access to applications, databases, and other systems. Excessive automation can turn a defensive function into an operational disruptor.',
        ],
      },
      {
        title: '3. The Dark Side of Generative AI',
        paragraphs: [
          'Generative AI now supports software development, automation, and complex workflow orchestration. Although these capabilities improve productivity, integrating AI outputs into software and automated processes creates supply-chain and systemic risks.',
        ],
      },
      {
        title: 'Package Hallucinations and Supply-Chain Attacks',
        paragraphs: [
          'IDC (2024) identifies package hallucination as a growing software supply-chain threat. Generative AI may reference packages that do not exist. Developers may search for these packages and encounter malicious ones with similar or identical names, allowing an AI coding error to become an entry point for malware.',
        ],
      },
      {
        title: 'Systemic Hallucination Amplification',
        paragraphs: [
          'IBM Research (2023) highlights risks in multi-agent systems where one AI component\'s output becomes another component\'s input. An inaccurate result can move through subsequent stages and be treated as fact without triggering syntax or system-level warnings.',
          'AI errors can therefore become embedded in dependencies or propagated through workflows, transforming isolated inaccuracies into organisational vulnerabilities. Organisations need human verification, dependency validation, provenance controls, and continuous monitoring when Generative AI is used in critical environments.',
        ],
      },
    ],
  },
]

const darkSideConclusion = [
  'The IT environment in 2026 will be influenced by autonomous and agentic AI solutions capable of performing functions independently, making decisions, and interacting with other systems. While these solutions offer advantages, increased autonomy also entails additional technological risks. The main issue is not AI adoption itself, but the consequences for system safety without proper monitoring, control, and supervision.',
  'Three issues arise from the discussion. First, AI governance may be overly static, assessing policies and risks without continuous monitoring of system performance. Second, autonomous security agents may create additional threats because of elevated privileges, indirect prompt injection, and incorrect or manipulated decisions. Finally, integrating Generative AI into software development creates risks from hallucinated packages and incorrect outputs propagating through interconnected systems.',
  'For developing countries including South Africa, where AI adoption can improve operations and access to the digital world, a balanced strategy is necessary. Organisations should move beyond governance checklists and technology adoption toward adaptive AI risk management, with runtime monitoring, frequent security testing and red-teaming, verification of AI-generated outputs, and human involvement in high-stakes decisions.',
  'AI autonomy does not mean that systems can replace humans. Systems should operate in controlled environments where their actions can be monitored, questioned, and overridden when necessary.',
]

const darkSideReferences = [
  'African Union Development Agency. (2022). Impact of Russia-Ukraine conflict on African food systems. AUDA-NEPAD. Retrieved August 25, 2026, from https://www.nepad.org/microsite/impact-of-russia-ukraine-conflict-african-food-systems',
  'Credo AI. (n.d.). AI risk. Credo AI Glossary. Retrieved August 25, 2026, from https://www.credo.ai/glossary/ai-risk',
  'The Cyber Archive. (2026, April 22). 7 AI agent security attacks researchers proved work in 2025-2026. Medium. https://medium.com/@thecyberarchive/7-ai-agent-security-attacks-researchers-proved-work-in-2025-2026-bd17cd9b020f',
  'Hooshidary, S., Canada, C., & Clark, W. (2024, November 22). Artificial intelligence in government: The federal and state landscape. National Conference of State Legislatures. https://www.ncsl.org/technology-and-communication/artificial-intelligence-in-government-the-federal-and-state-landscape',
  'Institute of Risk Management South Africa. (2025, May 29). Generative AI: A threat or an opportunity? Assessing the potential impact within the South African context. IRMSA. https://www.irmsa.org.za/communications/generative-ai-threat-or-opportunity-assessing-potential-impact-within-south-african',
  'Kosinski, M., & Forrest, A. (2024, March 26). What is a prompt injection attack? IBM. https://www.ibm.com/think/topics/prompt-injection',
  'Malesci, U. (2026, July 16). Credo AI vs Holistic AI (2026): AI governance compared - and where Kosmoy fits. Kosmoy. https://www.kosmoy.com/resources/blog/credo-ai-vs-holistic-ai/',
  'Sarsekar, P., & Mirzan, S. R. (n.d.). Prompt injection. OWASP Foundation. Retrieved August 25, 2026, from https://owasp.org/www-community/attacks/PromptInjection',
  'Slattery, P., Saeri, A. K., Grundy, E. A. C., Graham, J., Noetel, M., Uuk, R., Dao, J., Pour, S., Casper, S., & Thompson, N. (2024). The AI risk repository: A comprehensive meta-review, database, and taxonomy of risks from artificial intelligence. MIT FutureTech. https://airisk.mit.edu',
  'Stellar Cyber. (2026, March 17). Top agentic AI security threats in late 2026. https://stellarcyber.ai/learn/agentic-ai-securiry-threats/',
  'Tozzi, C. (2024, April 22). Package hallucination: The latest, greatest software supply chain security threat? IDC. https://www.idc.com/resource-center/blog/package-hallucination-the-latest-greatest-software-supply-chain-security-threat/',
  'UN News. (2026, August 24). Security Council LIVE: Civilian suffering grows in Russia-Ukraine war. United Nations. https://news.un.org/en/story/2026/08/1168191',
  'Wells, J. (2026, April 6). 7 AI agent failure modes and how to prevent them in production. Galileo. https://galileo.ai/blog/agent-failure-modes-guide',
  'World Meteorological Organization. (2026, July 31). Strong El Nino expected to intensify [Press release]. https://wmo.int/news/media-centre/strong-el-nino-expected-intensify',
]

const southAfricaIRReport = [
  {
    title: '1. Introduction',
    paragraphs: [
      'According to Manda and Ben Dhaou (2019), the Fourth Industrial Revolution (4IR) refers to the convergence of digital, physical, and biological technologies, robotics, cyber-physical systems, artificial intelligence, big data, the Internet of Things, and advanced manufacturing into a rapidly advancing wave of technological change. The still-developing Fifth Industrial Revolution (5IR), which emphasises human-machine cooperation, resilience, and sustainability, is presented as a counterbalance to 4IR\'s technology-first orientation.',
      'The Presidential Commission on the Fourth Industrial Revolution (PC4IR), according to South Africa\'s policy language, envisions smart, connected, and converged cyber, physical, and biological systems transforming social, economic, and political life (DCDT, 2020). Global value chains, mining, manufacturing, and public administration are already being reorganised around AI-enabled systems, so South Africa cannot ignore these revolutions.',
      'This essay challenges the assumptions in South Africa\'s 4IR narrative: that adopting global technology rhetoric creates the capacity to profit from it, and that a market-led digital transition will distribute gains widely rather than to those who already possess capital, skills, and connectivity. South Africa can benefit from 4IR and 5IR, but its history of policy implementation gaps, corruption, state capture, and extractive economic structures makes scepticism more reasonable than optimism about whether those benefits will be distributed fairly without sustained political intervention.',
    ],
  },
  {
    title: '2. South Africa\'s Current Position',
    subsections: [
      {
        title: '2.1. A regional leader, a global laggard - and a narrower base than headline figures suggest',
        paragraphs: [
          'The digital economy is expected to grow from 8-10% of GDP in 2020 to 15-20% by 2025, and over 75% of households have some internet access, making South Africa one of Africa\'s most advanced digital economies (International Trade Administration, 2026). E-commerce sales reached approximately R71 billion in 2023. However, South Africa lags behind China, Russia, and India on BRICS competitiveness measures related to 4IR readiness (Manda & Ben Dhaou, 2019).',
          'Aggregate statistics hide distribution. The fact that 75% of households have internet access says nothing about quality, cost, or dependability. South Africa also has some of the highest mobile data prices in Africa, suggesting that many households use low-bandwidth, data-capped connections unsuitable for AI-driven and data-intensive 4IR services.',
        ],
      },
      {
        title: '2.2. AI, automation and IoT: real but narrow',
        paragraphs: [
          'A 2026 PwC and Minerals Council of South Africa study reports that mining companies use AI for geological analysis, safety monitoring, and predictive maintenance. Leaders framed AI as an enabler of human capability rather than a labour replacement (PwC and Minerals Council of South Africa, 2026). However, the study was based on structured interviews with mining CEOs and line management rather than employees whose jobs are most vulnerable to automation.',
          'The claim that AI is not viewed as a replacement for people is an executive perception rather than a labour-market outcome. It sits awkwardly beside evidence cited by Sutherland (2020) that each additional industrial robot per thousand workers can reduce employment and wages. A study that surveys those who commission and deploy technology is structurally likely to describe it favourably.',
        ],
      },
      {
        title: '2.3. Digital infrastructure: investment without delivery',
        paragraphs: [
          'SA Connect aims to provide universal broadband by 2030, while the government has invested in data centres and fibre infrastructure (International Trade Administration, 2026). Manda and Ben Dhaou (2019) note that ICT infrastructure quality has remained low despite historically high spending, limiting e-government effectiveness.',
          'SA Connect\'s implementation history is instructive: budget constraints reduced its first phase from an initial scope of 6,135 locations to 970, an approximately 84% shortfall. This reflects a recurring pattern in South African 4IR policy in which ambitious targets are announced, missed milestones are followed by new announcements, and delivery is not adequately reckoned with.',
        ],
      },
      {
        title: '2.4. Skills: the binding constraint',
        paragraphs: [
          'Manda and Ben Dhaou (2019) describe a workforce in which only 24% of workers are skilled and approximately 30% are unskilled, alongside a failing foundational education system. Sutherland (2020) argues that the education system cannot generate enough STEM graduates, while the International Trade Administration (2026) identifies a severe cybersecurity skills shortage.',
          'Government strategy documents list digital skills development and human-capital investment as pillars. This can understate the problem by presenting a foundational education failure rooted in exclusion and inadequate basic education as one workstream among several equal priorities.',
        ],
      },
      {
        title: '2.5. Policy direction: abundant strategy, thin implementation',
        paragraphs: [
          'The PC4IR Report, Digital Economy Masterplan, National e-Government Strategy, SA Connect, and Industrial Development Strategy 2026 are detailed policy instruments intended to address deindustrialisation, slow growth, declining industrial capacity, weak investment, and infrastructure backlogs (DCDT, 2020).',
          'The 2026 industrial strategy begins by identifying deindustrialisation and declining industrial capacity as problems, implicitly acknowledging that prior digital-transformation and industrial policies have not prevented decline. Across sources, the consistent finding is that South Africa\'s constraint is delivery rather than design. This should temper optimism that the latest strategy will behave differently from its predecessors.',
        ],
      },
    ],
  },
  {
    title: '3. The Case For 4IR and 5IR and Its Limits',
    subsections: [
      {
        title: '3.1. Economic development, innovation and competitiveness',
        paragraphs: [
          'South Africa\'s fintech, start-up, and research ecosystems, including the CSIR and Technology Innovation Agency, provide a legitimate but limited foundation for diversification beyond mining and low-value manufacturing (Manda & Ben Dhaou, 2019; International Trade Administration, 2026).',
          'Sutherland (2020) argues that 4IR rhetoric is a Davos-originated, elite, and neoliberal narrative that signals investment readiness to multinational capital. The estimated R134 billion in pledged investment is a real achievement, but it says more about signalling to global capital than about whether ordinary South Africans will share in resulting growth. The economic case is real, but it is also partly a story told to investors rather than a plan built for citizens.',
        ],
      },
      {
        title: '3.2. Healthcare',
        paragraphs: [
          'Telemedicine, remote monitoring, and AI-assisted diagnosis could serve underprivileged rural populations (International Trade Administration, 2026). However, these applications depend on uneven connectivity and electricity reliability. Without prioritising public health infrastructure first, AI-assisted healthcare could widen the gap between well-served urban facilities and underserved communities.',
        ],
      },
      {
        title: '3.3. Agriculture and mining',
        paragraphs: [
          'IoT-enabled precision farming and AI for mining safety and predictive maintenance offer real opportunities. Yet both industries are capital-intensive and relatively well-capitalised. Adoption may increase productivity for current owners rather than create large numbers of jobs. Mining automation is expected to increase demand for highly educated workers while reducing demand for unskilled labour, which conflicts with South Africa\'s current skills profile (Sutherland, 2020).',
        ],
      },
      {
        title: '3.4. Government',
        paragraphs: [
          'Online tax filing, digital identities, and integrated case management could improve access and reduce exposure to corruption outside urban areas (International Trade Administration, 2026; Manda & Ben Dhaou, 2019). But digitisation is not automatically anti-corruption: it can digitise procurement dysfunction and patronage. Governance reform is therefore a prerequisite for 4IR technology to function effectively rather than a problem technology will solve by itself.',
        ],
      },
      {
        title: '3.5. The 5IR framing: aspiration ahead of institutional reality',
        paragraphs: [
          'The argument that technology alone will not transform mining, and that people, culture, and disciplined execution matter, is essentially a 5IR argument. However, South Africa has consistently struggled with the institutional coordination capacity required for a human-centred and sustainable orientation. Without retraining budgets, worker consultation, and long-term sustainability commitments, 5IR language risks becoming a more appealing human-centred gloss on the same technology-adoption agenda.',
        ],
      },
    ],
  },
  {
    title: '4. The Case Against / Risks Deepened',
    subsections: [
      {
        title: '4.1. Job displacement in an already jobless economy',
        paragraphs: [
          'South Africa\'s unemployment rate has remained between 26% and 30% for many years. Automation primarily affects low- and semi-skilled workers (Manda & Ben Dhaou, 2019). Sutherland (2020) warns that automation and mass customisation could undermine the labour-intensive, export-led path that lifted Asian tiger economies out of poverty.',
          'Optimistic 4IR employment narratives often rely on economies with reskilling programmes, social safety nets, and labour-market mobility. South Africa does not consistently meet these conditions, so importing an OECD-derived jobs narrative into this labour market is a category error with tangible consequences.',
        ],
      },
      {
        title: '4.2. The digital divide',
        paragraphs: [
          'Rural areas continue to face high data costs and lag behind urban areas in broadband, mobile coverage, and speed (International Trade Administration, 2026). The digital divide is not a new technology-specific problem; it is a recent manifestation of older spatial and racial inequality rooted in apartheid-era planning and the minerals-energy economy.',
          'Because the divide is embedded in land, housing, and labour-market geography, it cannot be addressed solely through broadband rollout targets. Infrastructure matters, but it must be combined with broader social and economic reform.',
        ],
      },
      {
        title: '4.3. Skills shortages',
        paragraphs: [
          'Poor foundational mathematics and science results restrict STEM entry, while cybersecurity and AI-specific professional capacity remain scarce (Manda & Ben Dhaou, 2019; International Trade Administration, 2026). A strategy focused only on data scientists and AI engineers targets the top of a pyramid when basic literacy and numeracy are the real constraint.',
          'Small, well-funded boot camps, university partnerships, and corporate academies can create success stories that conceal the reality that most school dropouts cannot access any 4IR-relevant pathway.',
        ],
      },
      {
        title: '4.4. Infrastructure fragility and governance failure',
        paragraphs: [
          'Load-shedding threatens technology integration, while spectrum-allocation delays slow 4G and 5G rollout (International Trade Administration, 2026). These problems are connected to state capture and poor management of state-owned businesses (Sutherland, 2020). Electricity capacity, SOE governance, and procurement integrity are not issues that digital-economy policy can solve on its own.',
          'A digital transformation strategy is built on a foundation it does not control if energy-sector and SOE governance reform are treated as parallel workstreams rather than prerequisites.',
        ],
      },
    ],
  },
  {
    title: '5. Critical Analysis: Interrogating the 4IR Narrative Itself',
    subsections: [
      {
        title: '5.1. The rhetoric-implementation gap as a structural feature',
        paragraphs: [
          'Across academic and institutional sources, the same pattern recurs: ambitious policy framing followed by documented implementation shortfalls. Sutherland (2020) argues that 4IR terminology signals to foreign capital independently of domestic delivery, making it politically easier to announce strategies than to fund and coordinate their execution.',
          'A critical reading should therefore treat each strategy document as a data point in a longer pattern and ask what has changed institutionally, including budget authority, coordination, and accountability, rather than only what has changed rhetorically.',
        ],
      },
      {
        title: '5.2. Whose interests are centred in the 4IR narrative',
        paragraphs: [
          'Sutherland (2020) characterises 4IR partly as a corporate repositioning exercise amplified by World Economic Forum lobbying. The focus on foreign direct investment, a gateway-to-Africa position, and investment readiness indicates whose support the strategy seeks. Workers, organised labour, and historically disadvantaged communities are often discussed as risks to be managed rather than as the primary constituency to be served.',
        ],
      },
      {
        title: '5.3. Structural dependency: leapfrogging rhetoric versus extractive continuity',
        paragraphs: [
          'Manda and Ben Dhaou (2019) cite the belief that 4IR can help developing countries leapfrog stages of development. Sutherland (2020) challenges this optimism by tracing South Africa\'s history through a colonial and apartheid-era minerals-energy complex in which cheap labour and raw materials were supplied while capital, technology, and finished-goods production remained elsewhere.',
          'South Africa may be a technology taker rather than a technology producer, relying on US and Chinese ecosystems and vendors. Quick adoption of imported systems is not the same as building domestic capability in semiconductor design, platform ownership, or AI research infrastructure. Value created by domestic businesses and employees is more likely to be distributed locally than profits repatriated by foreign platform owners.',
        ],
      },
      {
        title: '5.4. Evidentiary limits: who is being asked, and who is answering',
        paragraphs: [
          'The optimistic claims in this paper should be read critically. The PwC/Minerals Council study draws on management focus groups and interviews with mining CEOs rather than miners or workers at risk of displacement. Government strategy documents were created by organisations whose delivery records are under scrutiny, while the International Trade Administration guide is designed to assist US business interests in South Africa.',
          'The more critical evidence comes from independent academic analysis, while more optimistic evidence comes from government departments, industry associations, and professional services firms with an interest in a positive 4IR narrative. Sources should therefore be weighed rather than treated as equally neutral.',
        ],
      },
      {
        title: '5.5. The equity paradox in a market-led digital strategy',
        paragraphs: [
          'Rapid market-driven digital growth and inclusive, redistributive outcomes are often paired in policy documents without resolving their tension. Without clear redistributive mechanisms, such as taxing digital profits, requiring local participation, or linking incentives to skills transfer, a strategy cannot maximise market-led growth and guarantee equitable distribution at the same time.',
          'The absence of an operational mechanism for managing this trade-off is one of the largest discrepancies between South Africa\'s equity commitments and its 4IR aspirations.',
        ],
      },
      {
        title: '5.6. Governance capacity as the ultimate constraint',
        paragraphs: [
          'Every technical and economic argument about infrastructure, skills, investment, and jobs depends on the state\'s ability to plan, finance, coordinate, and implement policy over many years. Corruption in rail and electricity utilities, weak scrutiny of infrastructure laws, and delays in data-protection implementation show that governance capacity is central to the 4IR question.',
          'Technology-specific interventions such as AI institutes, digital-skills academies, and broadband targets will underperform if implemented through the same institutional machinery whose weaknesses are already known. The most effective intervention for an inclusive transition may therefore be broader public-sector governance and anti-corruption reform rather than another 4IR-specific policy.',
        ],
      },
    ],
  },
  {
    title: '6. Synthesis: Conditions for an Inclusive Transition',
    paragraphs: [
      'Viewed critically rather than descriptively, the evidence supports a more cautious position than the technology-optimist narrative in South African policy discourse. Manda and Ben Dhaou\'s (2019) socio-technical framework is useful: technology and society coevolve, and the social system of skills, institutions, trust, and governance determines the effects of a technical system.',
      'South Africa\'s technical preparedness for 4IR is real but incomplete, while institutional and social preparedness is further behind. The risk of growing inequality is concentrated in that gap.',
      'An inclusive transition should prioritise foundational skills before advanced technology; invest in digital literacy, basic numeracy, affordable access, electricity reliability, and cybersecurity; strengthen governance and anti-corruption institutions; require local participation and skills transfer; and build worker-centred and environmentally sustainable production models.',
    ],
  },
  {
    title: '7. Conclusion',
    paragraphs: [
      'South Africa is in an uncomfortable middle position regarding 4IR and 5IR: it has real strengths in policy ambition, research institutions, fintech innovation, and sector-specific technology adoption, but also consequential weaknesses in foundational skills, digital access, infrastructure reliability, governance capacity, and clear mechanisms to ensure that gains are distributed rather than concentrated.',
      'A critical analysis indicates that South Africa\'s commitment to using 4IR and 5IR for inclusive growth is not currently matched by the institutional means to deliver it. Without a significant shift in implementation discipline and governance capacity, rather than additional strategy documents, the more likely result is a digital transition that exacerbates rather than resolves existing disparities.',
    ],
  },
]

const southAfricaIRReferences = [
  {
    citation: 'Balkaran, S. (n.d.). The Fourth Industrial Revolution - Its impact on the South African public sector. Walter Sisulu University.',
  },
  {
    citation: 'Department of Communications and Digital Technologies (DCDT). (2020). 4IR Project Management Office.',
    url: 'https://www.dcdt.gov.za/4ir-pmo.html',
  },
  {
    citation: 'International Trade Administration. (2026). South Africa - Digital economy. U.S. Department of Commerce.',
    url: 'https://www.trade.gov/country-commercial-guides/south-africa-digital-economy',
  },
  {
    citation: 'Manda, M. I., & Ben Dhaou, S. (2019). Responding to the challenges and opportunities in the 4th Industrial Revolution in developing countries. Proceedings of the 12th International Conference on Theory and Practice of Electronic Governance (ICEGOV2019), Melbourne, Australia.',
  },
  {
    citation: 'PwC & Minerals Council of South Africa. (2026). Ten insights into 4IR in South African mining 2026.',
    url: 'https://www.pwc.co.za/en/press-room/ten-insights-into-4ir.html',
  },
  {
    citation: 'Sutherland, E. (2020). The Fourth Industrial Revolution - The case of South Africa. Politikon: South African Journal of Political Studies, 47(2), 233-252.',
  },
  {
    citation: 'the dtic (Department of Trade, Industry and Competition). (2026). South Africa\'s Industrial Development Strategy 2026.',
    url: 'https://www.thedtic.gov.za/south-africas-industrial-development-strategy-2026/',
  },
]

function App() {
  const [isDark, setIsDark] = useState(true)
  const [activePage, setActivePage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const changePage = (page) => {
    setActivePage(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About Me' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'interests', label: 'Interests' },
    { key: 'trends', label: 'IT Trends' },
    { key: 'dark-side', label: 'Dark Side' },
    { key: 'fourir', label: '4IR' },
    { key: 'sa-ir', label: '4IR and 5IR in SA' },
    { key: 'contact', label: 'Contact' },
  ]

  const renderHomePage = () => (
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
            <a
              className="primary-btn"
              href={`${import.meta.env.BASE_URL}Zintle-Zinyanga-CV.pdf`}
              download="Zintle-Zinyanga-CV.pdf"
            >
              Download CV
            </a>
          </div>

        </div>

        <div className="hero-image-wrap" aria-label="Profile photo">
          <img className="hero-image" src={profilePhoto} alt="Zintle Zinyanga" />
        </div>
      </section>
    </main>
  )

  const renderAboutPage = () => (
    <main>
      <section className="section page-view" id="about">
        <div className="section-heading">
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div>
            <p>
              I am a highly motivated and results-driven Information Systems graduate with a strong foundation
              in data science, data analytics, systems analysis, and software development.
            </p>
            <p>
              My academic journey at the University of KwaZulu-Natal has given me practical grounding in
              information systems, database management, and analytical thinking.
            </p>
            <p>
              I am passionate about using technology, data science, and information systems expertise to solve
              real-world problems and add organisational value.
            </p>
            <p>
              My strengths include analytical thinking, problem solving, communication, attention to detail,
              and the ability to learn new technologies quickly. I am particularly interested in work that
              connects people, processes, data, and technology to improve how organisations operate.
            </p>
            <p>
              I approach professional development as a continuous process. My academic work, workplace
              exposure, volunteering, and personal interests have helped me build discipline, resilience,
              confidence, and a practical understanding of how technology can create meaningful value.
            </p>
          </div>
          <img className="about-photo" src={aboutPhoto} alt="Personal development and spiritual growth" />
        </div>
      </section>
    </main>
  )

  const renderPortfolioPage = () => (
    <main>
      <section className="section page-view" id="portfolio">
        <div className="section-heading">
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio-stack">
          <section className="portfolio-subsection">
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

          <section className="portfolio-subsection">
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

          <section className="portfolio-subsection">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-tools"><strong>Focus:</strong> {project.tools}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="portfolio-subsection">
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
    </main>
  )

  const renderInterestsPage = () => (
    <main>
      <section className="section page-view" id="interests">
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
            <img className="interests-photo" src={interestsPhoto} alt="Personal interests" />
            <img className="interests-photo" src={interestsPhotoTwo} alt="Personal interests" />
            <img className="interests-photo" src={interestsPhotoThree} alt="Personal interests" />
            <img className="interests-photo" src={interestsPhotoFour} alt="Personal interests" />
          </div>

          <div className="paper-block">
            <h3>My Personal Motto</h3>
            <p>
              I believe that consistent effort, discipline, and a willingness to learn can turn difficult
              goals into achievable progress. I try to carry this mindset into my studies, work, relationships,
              and future career in technology.
            </p>
          </div>
        </div>
      </section>
    </main>
  )

  const renderTrendsPage = () => (
    <main>
      <section className="section page-view" id="trends">
        <div className="section-heading">
          <p className="eyebrow">IT Trends</p>
          <h2>Top 5 IT Trends</h2>
        </div>

        <div className="paper-block trend-introduction">
          <h3>Introduction</h3>
          <p>
            When we talk about "hot trends in IT," we are not just talking about temporary hype or the latest
            industry buzzwords. We are looking at major technological shifts that are solving real-world problems,
            attracting serious investment, and changing how businesses operate. These are the tools and frameworks
            that are moving the needle and setting new standards for how we secure, build, and scale digital systems.
          </p>
          <p>
            The five trends covered in this report are AI Security, AI Research Partners, Generative AI in Industry,
            Digital Twin Composers, and AI Governance platforms like Credo AI. They were chosen because they tackle
            urgent problems, address real pain points that organisations face right now, and move beyond basic,
            passive automation into active reasoning, real-time simulation, and complex problem-solving.
          </p>
          <p>
            Their impact is not limited to a single role. They operate across cybersecurity, manufacturing,
            scientific research, enterprise management, and many other areas. Looking at the current IT landscape,
            we are at a clear turning point: the focus has shifted from standalone software that relies on constant
            human input toward autonomous AI agents, multi-agent systems, and real-time virtual environments that
            can reason, adapt, and work alongside us.
          </p>
          <p>
            The goal of this discussion is to map out how these five key trends are driving that shift, mitigating
            modern risks, and shaping what comes next.
          </p>
        </div>

        <div className="section-heading trend-subheading">
          <p className="eyebrow">Section 1</p>
          <h2>IT Trends</h2>
        </div>

        <div className="trend-list">
          {trendReport.map((trend) => (
            <article key={trend.title} className="trend-card">
              <h3>{trend.title}</h3>
              {trend.image ? (
                trend.imagePosition === 'right' ? (
                  <div className="trend-item-layout research-ai-layout">
                    <div className="trend-copy">
                      {trend.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 18)}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="trend-visual">
                      <img src={trend.image} alt="Research AI technology" loading="lazy" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="trend-copy">
                      {trend.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 18)}>{paragraph}</p>
                      ))}
                    </div>
                    {trend.figureIntro && (
                      <p className="figure-intro">{trend.figureIntro}</p>
                    )}
                    <div className="trend-visual trend-figure-image">
                      <img src={trend.image} alt="AI security technology" loading="lazy" />
                    </div>
                    {trend.figureCaption && (
                      <div className="trend-figure-notes">
                        <p className="figure-caption">{trend.figureCaption}</p>
                        <ul>
                          {trend.figurePoints.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )
              ) : (
                trend.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 18)}>{paragraph}</p>
                ))
              )}
            </article>
          ))}
        </div>

        <div className="section-heading trend-subheading">
          <p className="eyebrow">South African context</p>
          <h2>The impact of global IT trends on South Africa</h2>
        </div>

        <div className="trend-list">
          {southAfricaTrendReport.map((trend) => (
            <article key={trend.title} className="trend-card">
              <h3>{trend.title}</h3>
              {trend.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 22)}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <div className="section-heading trend-subheading">
          <p className="eyebrow">Critical analysis</p>
          <h2>Evaluating the opportunities and risks</h2>
        </div>

        <div className="trend-list">
          {criticalTrendReport.map((trend) => (
            <article key={trend.title} className="trend-card">
              <h3>{trend.title}</h3>
              {trend.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 22)}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>

        <div className="paper-block">
          <h3>Conclusion</h3>
          <p>
            These emerging AI technologies represent an important stage in the ongoing evolution of the digital
            landscape. Their rapid development is influencing how individuals, organisations, and societies
            operate, often in ways that may not yet be fully recognised.
          </p>
          <p>
            The reviewed literature highlights both opportunities and challenges. These technologies can improve
            organisational efficiency by automating tasks, reducing the time needed to complete processes, and
            supporting higher-quality products and services.
          </p>
          <p>
            However, dependence on AI also introduces security, governance, reliability, and ethical risks.
            Continued digital evolution therefore requires more than adopting emerging technologies. It requires
            individuals, organisations, and governments to understand their benefits and limitations and to pair
            innovation with oversight, responsible use, and continuous adaptation.
          </p>
        </div>

        <div className="references-block">
          <h3>References</h3>
          {trendReferences.map((reference) => (
            <p key={reference}>{reference}</p>
          ))}
        </div>
      </section>
    </main>
  )

  const renderDarkSidePage = () => (
    <main>
      <section className="section page-view" id="dark-side">
        <div className="section-heading">
          <p className="eyebrow">Dark Side</p>
          <h2>The Dark Side of Technology</h2>
        </div>

        <div className="paper-block dark-side-report">
          {darkSideReport.map((section) => (
            <div key={section.title} className="dark-side-section">
              <h3>{section.title}</h3>
              {section.subsections.map((subsection) => (
                <div key={subsection.title} className="dark-side-subsection">
                  <h4>{subsection.title}</h4>
                  {subsection.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}

          <div className="dark-side-section">
            <h3>Conclusion</h3>
            {darkSideConclusion.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>

          <div className="references-block dark-side-references">
            <h3>References</h3>
            {darkSideReferences.map((reference) => {
              const [citation, url] = reference.split(' https://')

              return (
                <p key={reference}>
                  {citation}{' '}
                  {url ? (
                    <a href={`https://${url}`} target="_blank" rel="noreferrer">
                      https://{url}
                    </a>
                  ) : null}
                </p>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )

  const renderFourIRPage = () => (
    <main>
      <section className="section page-view" id="fourth-industrial-revolution">
        <div className="section-heading">
          <p className="eyebrow">4IR</p>
          <h2>From Industry 4.0 to Industry 5.0</h2>
        </div>

        <div className="paper-intro">
          <p>
            <em>
              Two overlapping technological eras, what each promises society, and why an Information Systems &amp;
              Technology professional should hold both narratives at arm&apos;s length.
            </em>
          </p>
        </div>

        <div className="paper-block">
          <h3>Understanding the Fourth Industrial Revolution</h3>
          <p>
            The World Economic Forum&apos;s founder, Klaus Schwab, popularised the term &quot;Fourth Industrial
            Revolution&quot; (4IR) to refer to a time when developments in robotics, artificial intelligence, the
            Internet of Things, biotechnology, and big data are merging in ways that make it difficult to
            distinguish between the digital, biological, and physical realms (Schwab, 2016).
          </p>
          <p>
            In contrast to the Third Industrial Revolution, which brought computing and early digitisation, 4IR
            is defined by the interconnection of machines, data, and living systems at a scale and speed that
            its proponents claim is unprecedented. This includes devices that sense and act on the physical
            world without direct human input, algorithms that make decisions previously made by humans, and
            smart factories that reconfigure themselves in real time.
          </p>
          <p>
            According to this theory, the compounding effect of multiple exponential technologies maturing
            together is what sets 4IR apart from previous waves of automation, rather than a single invention.
          </p>
          <img className="fourir-image" src={fourIRPhoto} alt="Fourth Industrial Revolution technology" />

          <p>
            <strong>Figure 1.</strong> 5IR is generally framed as a reorientation of 4IR technologies around
            human, social, and environmental goals rather than a distinct technological rupture (Breque, De Nul,
            and Petridis, 2021). Dates are approximate and contested.
          </p>

          <h3>The move toward Industry 5.0</h3>
          <p>
            In a 2021 policy paper, the Directorate-General for Research and Innovation of the European Commission
            formally introduced Industry 5.0, positioning it as an addition to Industry 4.0 rather than its
            replacement (Breque, De Nul, and Petridis, 2021).
          </p>
          <p>
            In contrast to the 4IR narrative, which focuses on what new technology can do, 5IR asks what
            technology can do for people. It puts worker welfare, environmental constraints, and the ability of
            production systems to withstand shocks such as the COVID-19 pandemic alongside efficiency.
          </p>
          <p>
            The Commission bases this change on three pillars: human-centricity, which adapts work to people;
            sustainability, which uses circular-economy practices to keep production within planetary bounds; and
            resilience, which builds industries able to withstand disruption rather than maximising efficiency alone.
          </p>

          <p>
            <strong>Figure 2.</strong> The two eras overlap heavily in practice, and the &quot;revolution&quot;
            framing itself is disputed.
          </p>
        </div>

        <div className="comparison-table" role="table" aria-label="Comparison of Industry 4.0 and Industry 5.0">
          <div className="comparison-row comparison-header" role="row">
            <div role="columnheader">4IR / Industry 4.0</div>
            <div role="columnheader">5IR / Industry 5.0</div>
          </div>
          <div className="comparison-row" role="row">
            <div role="cell"><strong>Central question</strong><br />What can this technology do?</div>
            <div role="cell"><strong>Central question</strong><br />What can technology do for people?</div>
          </div>
          <div className="comparison-row" role="row">
            <div role="cell"><strong>Primary driver</strong><br />Connectivity, automation, data</div>
            <div role="cell"><strong>Primary driver</strong><br />Wellbeing, sustainability, resilience</div>
          </div>
          <div className="comparison-row" role="row">
            <div role="cell"><strong>Locus of value</strong><br />Shareholder value, efficiency</div>
            <div role="cell"><strong>Locus of value</strong><br />Stakeholder value, worker and planet</div>
          </div>
          <div className="comparison-row" role="row">
            <div role="cell"><strong>Typical technology</strong><br />AI, IoT, robotics, big data</div>
            <div role="cell"><strong>Typical technology</strong><br />Cobots, circular design, digital twins</div>
          </div>
          <div className="comparison-row" role="row">
            <div role="cell"><strong>Key source</strong><br />Schwab (2016)</div>
            <div role="cell"><strong>Key source</strong><br />Breque, De Nul and Petridis (2021)</div>
          </div>
        </div>

        <div className="paper-block">
          <h3>Potential benefits to society</h3>
          <p>
            <strong>4IR - Wider access to services.</strong> AI-assisted diagnostics and telemedicine can extend
            specialist healthcare into areas with few doctors, while data-driven precision agriculture can raise
            yields with less water and fertiliser.
          </p>
          <p>
            <strong>4IR - New categories of work.</strong> Global estimates suggest that 4IR technologies could
            create more jobs than they displace overall, even though the effects are unevenly distributed across
            regions and skill levels (Fox &amp; Signé, 2022).
          </p>
          <p>
            <strong>5IR - Safer, less strenuous work.</strong> Collaborative robots can take on physically
            demanding or hazardous tasks, freeing people for judgement and creativity rather than repetitive
            labour (Breque, De Nul and Petridis, 2021).
          </p>
          <p>
            <strong>5IR - Production within planetary limits.</strong> Circular-economy manufacturing designed
            to reuse materials and cut emissions responds directly to climate targets rather than treating
            sustainability as an afterthought (Breque, De Nul and Petridis, 2021).
          </p>

          <h3>Challenges the shift is likely to present</h3>
          <p>
            <strong>4IR - Job displacement and inequality.</strong> Automation is expected to affect low-skilled
            and routine work most heavily. Without deliberate policy, the income gap between high- and low-skilled
            workers is likely to widen further (Zervoudi, 2020).
          </p>
          <p>
            <strong>4IR - Uneven readiness.</strong> In much of Sub-Saharan Africa, where large shares of the
            workforce are informally employed, 4IR technologies may arrive faster than the education and
            infrastructure needed to benefit from them (Fox and Signé, 2022). A South African construction study
            similarly found that patchy skills and awareness slowed potential safety gains (Malomane, Musonda and
            Okoro, 2022).
          </p>
          <p>
            <strong>5IR - Whose human-centricity?</strong> A model built around European worker wellbeing does not
            automatically extend to labour that supplies raw materials and components elsewhere in the world.
            Resilience and sustainability at one end of a supply chain can still externalise costs to the other.
          </p>
          <p>
            <strong>5IR - Hyperconnected exposure.</strong> Sensors, cobots, and data links widen the attack
            surface for cyber-intrusion, while privacy risk grows as more worker movement and performance is
            captured as data.
          </p>
        </div>

        <div className="paper-block">
          <h3>A critical note, for IS&amp;T professionals</h3>
          <p>
            Considering the origins of these labels is worthwhile. The World Economic Forum created &quot;4IR,&quot;
            and the European Commission created &quot;Industry 5.0.&quot; Both organisations have an institutional
            stake in portraying technological change as urgent, logical, and deserving of their ongoing convening
            authority. This does not imply that either account is untrue, but it is a reason to interpret them as
            debates rather than objective statements of reality.
          </p>
          <p>
            Ian Moll of the University of the Witwatersrand (2021) tests 4IR against the standards that made
            previous industrial revolutions historically real, including a genuinely new technological base, a
            transformed labour process, altered workplace relations, new community life, and global economic
            restructuring. Moll argues that current evidence meets few of these criteria, making &quot;4IR&quot; more
            of an ideological label than a proven historical fact. Industry 5.0 is now being asked a similar
            question.
          </p>
        </div>

        <div className="paper-block">
          <h3>Conclusion</h3>
          <p>
            4IR describes the fusion of digital, physical, and biological technologies reshaping production and
            daily life. 5IR is best understood as a corrective proposal, redirecting those technologies toward
            human wellbeing, sustainability, and resilience rather than efficiency alone.
          </p>
          <p>
            Both offer genuine social benefits in healthcare, safer work, and environmental performance, and both
            carry a real risk of deepening inequality where skills and infrastructure lag behind the technology.
            Treating either label as an unquestioned fact, rather than a framing advanced by interested institutions,
            would be a mistake for anyone tasked with implementing these technologies responsibly.
          </p>
        </div>

        <div className="references-block fourth-industrial-references">
          <h3>References</h3>
          <p>
            Dhakal, S. P. (2025). Fifth industrial revolution and the future of education and employment.{' '}
            <em>Quality &amp; Quantity, 60</em>, 2459-2477.
          </p>
          <p>
            Fanoro, M., Božanić, M., &amp; Sinha, S. (2021). A review of 4IR/5IR enabling technologies and their
            linkage to manufacturing supply chain. <em>Technologies, 9</em>(4), 77.
          </p>
          <p>
            IIUM Press. (2023). 4IR, 5IR, Society 5.0, and values in education [Editorial].{' '}
            <em>IIUM Journal of Educational Studies (Arabic), 11</em>(1), 1-2.
          </p>
          <p>
            Schwab, K. (2016). <em>The Fourth Industrial Revolution: What it means and how to respond</em>.
            World Economic Forum.{' '}
            <a
              href="https://www.weforum.org/stories/technological-innovation/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.weforum.org/stories/technological-innovation/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/
            </a>
          </p>
          <p>
            Xu, M., David, J. M., &amp; Kim, S. H. (2018). The Fourth Industrial Revolution: Opportunities and
            challenges. <em>International Journal of Financial Research, 9</em>(2), 90-95.
          </p>
        </div>
      </section>
    </main>
  )

  const renderSouthAfricaPage = () => (
    <main>
      <section className="section page-view" id="fourth-and-fifth-industrial-revolution">
        <div className="section-heading">
          <p className="eyebrow">4IR and 5IR in South Africa</p>
          <h2>Can South Africa Benefit from the Fourth and Fifth Industrial Revolutions Without Deepening Existing Inequalities?</h2>
        </div>

        <div className="paper-block south-africa-ir-report">
          {southAfricaIRReport.map((section) => (
            <div key={section.title} className="south-africa-ir-section">
              <h3>{section.title}</h3>
              {section.subsections?.map((subsection) => (
                <div key={subsection.title} className="south-africa-ir-subsection">
                  <h4>{subsection.title}</h4>
                  {subsection.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                  ))}
                </div>
              ))}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </div>
          ))}

          <div className="references-block south-africa-ir-references">
            <h3>References</h3>
            <p>
              Balkaran, S. (n.d.). <em>The Fourth Industrial Revolution - Its impact on the South African public sector</em>.
              Walter Sisulu University.
            </p>
            <p>
              Department of Communications and Digital Technologies (DCDT). (2020). <em>4IR Project Management Office</em>.
              {' '}<a href="https://www.dcdt.gov.za/4ir-pmo.html" target="_blank" rel="noreferrer">https://www.dcdt.gov.za/4ir-pmo.html</a>
            </p>
            <p>
              International Trade Administration. (2026). <em>South Africa - Digital economy</em>. U.S. Department of Commerce.
              {' '}<a href="https://www.trade.gov/country-commercial-guides/south-africa-digital-economy" target="_blank" rel="noreferrer">https://www.trade.gov/country-commercial-guides/south-africa-digital-economy</a>
            </p>
            <p>
              Manda, M. I., &amp; Ben Dhaou, S. (2019). Responding to the challenges and opportunities in the 4th Industrial
              Revolution in developing countries. <em>Proceedings of the 12th International Conference on Theory and Practice
              of Electronic Governance (ICEGOV2019)</em>, Melbourne, Australia.
            </p>
            <p>
              PwC &amp; Minerals Council of South Africa. (2026). <em>Ten insights into 4IR in South African mining 2026</em>.
              {' '}<a href="https://www.pwc.co.za/en/press-room/ten-insights-into-4ir.html" target="_blank" rel="noreferrer">https://www.pwc.co.za/en/press-room/ten-insights-into-4ir.html</a>
            </p>
            <p>
              Sutherland, E. (2020). The Fourth Industrial Revolution - The case of South Africa. <em>Politikon: South African
              Journal of Political Studies, 47</em>(2), 233-252.
            </p>
            <p>
              the dtic (Department of Trade, Industry and Competition). (2026). <em>South Africa&apos;s Industrial Development
              Strategy 2026</em>.{' '}<a href="https://www.thedtic.gov.za/south-africas-industrial-development-strategy-2026/" target="_blank" rel="noreferrer">https://www.thedtic.gov.za/south-africas-industrial-development-strategy-2026/</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )

  const renderContactPage = () => (
    <main>
      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Let’s connect</p>
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
    </main>
  )

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return renderAboutPage()
      case 'portfolio':
        return renderPortfolioPage()
      case 'interests':
        return renderInterestsPage()
      case 'trends':
        return renderTrendsPage()
      case 'dark-side':
        return renderDarkSidePage()
      case 'fourir':
        return renderFourIRPage()
      case 'sa-ir':
        return renderSouthAfricaPage()
      case 'contact':
        return renderContactPage()
      case 'home':
      default:
        return renderHomePage()
    }
  }

  return (
    <div className={`portfolio-page ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <div className="brand">Z</div>

        <nav className="nav desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`nav-button ${activePage === item.key ? 'active' : ''}`}
              onClick={() => changePage(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {activePage !== 'home' && (
          <button
            type="button"
            className="theme-toggle desktop-theme-toggle"
            onClick={() => setIsDark((value) => !value)}
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        )}

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">☰</span>
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`nav-button ${activePage === item.key ? 'active' : ''}`}
                onClick={() => changePage(item.key)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {activePage !== 'home' && (
            <button
              type="button"
              className="theme-toggle mobile-theme-toggle"
              onClick={() => setIsDark((value) => !value)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          )}
        </div>
      </header>

      {renderPage()}
    </div>
  )
}

export default App
