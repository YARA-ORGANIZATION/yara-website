export type ThemeKey = "ai" | "climate" | "health";

export type Theme = {
  key: ThemeKey;
  name: string;
  href: string;
  /** Homepage "Our work" copy */
  homeSummary: string;
  /** /research index copy */
  indexSummary: string;
  heroTitle: string;
  heroIntro: string;
  subThemes: { title: string; body: string }[];
};

export const themes: Theme[] = [
  {
    key: "ai",
    name: "Artificial Intelligence",
    href: "/research/artificial-intelligence",
    homeSummary:
      "Useful AI depends on the data, methods and institutions around it. YARA focuses on locally grounded data, AI that can work in resource-constrained settings, and the governance and safeguards needed for responsible use.",
    indexSummary:
      "Research on the data, methods, applications and governance needed for AI to work well in African contexts.",
    heroTitle: "AI built around the realities in which it will be used.",
    heroIntro:
      "YARA's AI research examines the data, methods and decisions behind artificial-intelligence systems, with particular attention to African contexts.",
    subThemes: [
      {
        title: "AI Foundations",
        body: "African data, benchmarks, model evaluation and methods designed for settings where data or compute may be limited.",
      },
      {
        title: "Applied AI",
        body: "The use of AI in health, agriculture, finance, climate, science and other areas where better tools could answer practical questions.",
      },
      {
        title: "Governance & Safety",
        body: "How AI systems are evaluated, deployed and governed, including privacy, accountability, bias, standards and safety.",
      },
    ],
  },
  {
    key: "climate",
    name: "Climate",
    href: "/research/climate",
    homeSummary:
      "A changing climate is reshaping food systems, water, weather patterns, oceans and livelihoods. YARA supports research that strengthens understanding, adaptation and resilience.",
    indexSummary:
      "Research on changing climate and ocean conditions, environmental risk, adaptation and the systems that support food, water and livelihoods.",
    heroTitle: "Research for understanding environmental change and responding to it.",
    heroIntro:
      "YARA's climate work examines changing conditions, the risks they create and the evidence needed to make better decisions about adaptation.",
    subThemes: [
      {
        title: "Climate Intelligence",
        body: "Climate and ocean data, observation, forecasting, modelling and risk analysis.",
      },
      {
        title: "Adaptation & Resilience",
        body: "How communities, institutions and infrastructure respond to changing environmental conditions.",
      },
      {
        title: "Food, Water & Nature",
        body: "Agriculture, food systems, water, oceans, coasts and the natural systems on which livelihoods depend.",
      },
    ],
  },
  {
    key: "health",
    name: "Public Health",
    href: "/research/public-health",
    homeSummary:
      "Health outcomes are shaped by disease, environmental exposure and the systems responsible for prevention and care. YARA supports research that strengthens prevention, detection and health-system resilience.",
    indexSummary:
      "Research on disease, environmental exposure, mental and population health, and the systems responsible for prevention and care.",
    heroTitle: "Research into the conditions that shape health.",
    heroIntro:
      "YARA's public-health work examines disease, environmental exposure, mental and population health, and how health systems respond.",
    subThemes: [
      {
        title: "Disease & Prevention",
        body: "Infectious and non-communicable disease, maternal and child health, mental health, epidemiology, surveillance and prevention.",
      },
      {
        title: "Environmental Health",
        body: "Pollution, lead and other toxins, heat, water, occupational exposure and environmental risks to health.",
      },
      {
        title: "Health Systems",
        body: "Diagnosis, service delivery, implementation, digital health and the ability of health institutions to act on evidence.",
      },
    ],
  },
];

export function getTheme(key: ThemeKey) {
  return themes.find((t) => t.key === key)!;
}

export type Project = {
  question: string;
  researcher: string;
  /** Primary theme first; a project can appear on more than one theme page. */
  themes: ThemeKey[];
  tags: string;
  summary: string;
  /** Short descriptions used on each theme page, keyed by theme. */
  themeSummary: Partial<Record<ThemeKey, string>>;
};

export const projects: Project[] = [
  {
    question:
      "Can transaction histories improve credit-risk modelling where conventional credit data is limited?",
    researcher: "Benjamin Ekow Attabra",
    themes: ["ai"],
    tags: "Artificial Intelligence · Financial Systems",
    summary:
      "Benjamin is comparing sequential models with conventional credit-risk approaches using mobile financial-service transaction histories. His work examines whether preserving the order of transactions can improve how repayment risk is distinguished in data-constrained settings.",
    themeSummary: {
      ai: "Research comparing sequential neural networks and conventional models using mobile financial-service transaction histories.",
    },
  },
  {
    question: "Can AI diagnose crop pests and diseases from text when labelled data is scarce?",
    researcher: "Essel-Biney Nana Benyin Eboe Nyamekye",
    themes: ["ai"],
    tags: "Artificial Intelligence · Agriculture",
    summary:
      "Nana is comparing few-shot learning approaches for text-based diagnosis of pests and diseases affecting maize, tomato and cassava. The research examines how useful agricultural AI can be built when large labelled datasets are not available.",
    themeSummary: {
      ai: "Research comparing few-shot approaches for text-based diagnosis of pests and diseases affecting maize, tomato and cassava.",
    },
  },
  {
    question: "Can pneumonia screening run safely on small devices without reliable internet access?",
    researcher: "McGovern Twumasi Owusu-Bekoe",
    themes: ["ai", "health"],
    tags: "Artificial Intelligence · Public Health",
    summary:
      "McGovern developed OnEdge-Net, a compact model for offline pneumonia screening and triage from chest X-rays in low-resource clinical settings. His research also examines what happens when models are compressed for deployment on small devices and how potentially unsafe changes in predictions can be identified.",
    themeSummary: {
      ai: "Research into compact offline pneumonia screening, edge deployment and the safety effects of model compression.",
      health: "Research into offline AI-supported pneumonia screening for low-resource clinical settings.",
    },
  },
  {
    question: "How can movement in Ampe be documented for computational research and preservation?",
    researcher: "Ruth Biney Senior",
    themes: ["ai"],
    tags: "Artificial Intelligence · African Data",
    summary:
      "Ruth is developing machine-readable data from the Ghanaian game Ampe, documenting movement during gameplay so it can be studied computationally and preserved as a source for future research.",
    themeSummary: {
      ai: "Research creating machine-readable movement data from Ampe for computational study and preservation.",
    },
  },
  {
    question:
      "How quickly are Ghana's coastal waters warming, and what could that mean for marine fisheries?",
    researcher: "Lord Selase Nukporfe",
    themes: ["climate"],
    tags: "Climate · Oceans & Fisheries",
    summary:
      "Lord studied sea-surface temperature across Ghana's Exclusive Economic Zone from 1981 to 2025, examining long-term warming, seasonal differences and variation across coastal zones. The work considers what changing ocean temperatures could mean for marine conditions and fish availability.",
    themeSummary: {
      climate:
        "Research analysing sea-surface temperature trends and variability across Ghana's Exclusive Economic Zone and their possible implications for marine fisheries.",
    },
  },
  {
    question: "What could longer dry periods mean for Ghana's food and water security?",
    researcher: "Solomon Tuah",
    themes: ["climate"],
    tags: "Climate · Climate Intelligence",
    summary:
      "Solomon is studying projected consecutive dry days over Ghana and what changes in dry periods could mean for agriculture, water security and adaptation planning.",
    themeSummary: {
      climate:
        "Research into projected consecutive dry days over Ghana and their implications for agriculture, water security and adaptation planning.",
    },
  },
  {
    question: "Who is most at risk of lead poisoning?",
    researcher: "Brianna Ama Nyarkowaa Donkoh",
    themes: ["health"],
    tags: "Public Health · Environmental Health",
    summary:
      "Brianna is using existing data to identify groups at greater risk of lead poisoning and examine how prevention efforts could be better targeted.",
    themeSummary: {
      health:
        "Research using existing data to identify groups at greater risk of lead poisoning and support more targeted prevention.",
    },
  },
  {
    question:
      "How are maternal mental health and early caregiving related to children's behavioural development in Ghana?",
    researcher: "Linda Akosua Essilfie",
    themes: ["health"],
    tags: "Public Health · Maternal & Child Health",
    summary:
      "Linda is studying the relationships between maternal depression and anxiety, caregiving responsiveness and child behavioural development in Ghana. Her work considers how maternal psychological wellbeing and the quality of early caregiving relate to children's emotional and developmental outcomes.",
    themeSummary: {
      health:
        "Research examining maternal depression and anxiety, caregiving responsiveness and child behavioural development.",
    },
  },
  {
    question: "Does more integrated HIV-TB care lead to better patient outcomes?",
    researcher: "Character Dzorgbenyuie Aku Forfoe",
    themes: ["health"],
    tags: "Public Health · Disease & Prevention",
    summary:
      "Character examined HIV-TB service integration in Ghana, including its relationship with diagnostic delays, treatment adherence and patient outcomes. The study also considers barriers such as fragmented services, referral systems, workforce constraints and weak health-information links.",
    themeSummary: {
      health:
        "Research examining HIV-TB service integration, patient outcomes and the health-system barriers affecting implementation.",
    },
  },
  {
    question: "How are ageing and related risk factors shaping obesity among Ghanaian adults?",
    researcher: "Samuel Larbi",
    themes: ["health"],
    tags: "Public Health · Population Health",
    summary:
      "Samuel is studying ageing, obesity and related risk factors among Ghanaian adults, with relevance to the growing burden of non-communicable disease.",
    themeSummary: {
      health: "Research into ageing, obesity and related risk factors among Ghanaian adults.",
    },
  },
];

/** Order used on each theme page (copy master order). */
export const themeProjectOrder: Record<ThemeKey, string[]> = {
  ai: [
    "Benjamin Ekow Attabra",
    "Essel-Biney Nana Benyin Eboe Nyamekye",
    "McGovern Twumasi Owusu-Bekoe",
    "Ruth Biney Senior",
  ],
  climate: ["Lord Selase Nukporfe", "Solomon Tuah"],
  health: [
    "Brianna Ama Nyarkowaa Donkoh",
    "Linda Akosua Essilfie",
    "Character Dzorgbenyuie Aku Forfoe",
    "Samuel Larbi",
    "McGovern Twumasi Owusu-Bekoe",
  ],
};

export function projectsForTheme(key: ThemeKey) {
  return themeProjectOrder[key].map((name) => projects.find((p) => p.researcher === name)!);
}

export type Fellow = {
  name: string;
  theme: ThemeKey;
  projectTitle: string;
  bio: string;
};

export const fellows: Fellow[] = [
  {
    name: "Benjamin Ekow Attabra",
    theme: "ai",
    projectTitle: "Sequential Credit Risk Modelling for Data Constrained-Environments",
    bio: "Benjamin’s research explores whether mobile financial-service transaction histories can support better credit-risk modelling in settings where conventional credit information is limited. His work compares sequential deep-learning approaches with more conventional models and examines the possibilities and limitations of using alternative financial data for credit assessment.",
  },
  {
    name: "Essel-Biney Nana Benyin Eboe Nyamekye",
    theme: "ai",
    projectTitle:
      "A Comparative Analysis of Few-Shot Learning Models for Text-Based Diagnosis of Crop Pests and Diseases in Ghana",
    bio: "Nana is investigating how artificial intelligence can support crop-disease and pest diagnosis when large labelled datasets are unavailable. His research focuses on maize, tomato and cassava and compares different machine-learning approaches for building useful diagnostic systems in data-constrained agricultural settings.",
  },
  {
    name: "McGovern Twumasi Owusu-Bekoe",
    theme: "ai",
    projectTitle:
      "OnEdge-Net: A Priority-Based Edge-Efficient AI System for Pneumonia Detection in Chest X-Rays for Low-Resource Clinical Settings",
    bio: "McGovern’s project examines how pneumonia-detection AI can operate in health facilities with limited connectivity and computing capacity. He is developing a lightweight system designed to analyse chest X-rays locally while considering the safety and reliability questions that arise when clinical AI is deployed on smaller devices.",
  },
  {
    name: "Ruth Biney Senior",
    theme: "ai",
    projectTitle:
      "Ampe Movement Dataset (Ampe-DB): A Paired Rhythmic Interaction Dataset for Traditional African Gameplay",
    bio: "Ruth’s research uses the Ghanaian game Ampe as the basis for studying paired human movement computationally. The project documents gameplay through video, audio, pose information and annotations, creating data that can support research into movement, rhythm, interaction and culturally grounded computing.",
  },
  {
    name: "Solomon Tuah",
    theme: "climate",
    projectTitle: "Projected Consecutive Dry Days over Ghana and Implications for Food and Water Security",
    bio: "Solomon’s research examines how the duration and distribution of dry periods across Ghana may change under future climate conditions. The work considers what these changes could mean for agriculture, water availability and climate adaptation planning.",
  },
  {
    name: "Lord Selase Nukporfe",
    theme: "climate",
    projectTitle:
      "Sea Surface Temperature Trends and Variability in Ghana’s EEZ and Implications for Marine Fisheries",
    bio: "Lord is studying long-term changes in sea-surface temperature across Ghana’s Exclusive Economic Zone. His research examines how warming varies across seasons and coastal zones and what changing ocean conditions could mean for marine environments and fisheries.",
  },
  {
    name: "Brianna Ama Nyarkowaa Donkoh",
    theme: "health",
    projectTitle:
      "Lead Poisoning: Identifying High-Risk Groups Using Secondary Data to Support Targeted Interventions",
    bio: "Brianna’s research examines patterns of lead exposure and the groups that may face greater risk. By analysing existing data, the project aims to strengthen the evidence available for more focused prevention, surveillance and public-health intervention.",
  },
  {
    name: "Linda Akosua Essilfie",
    theme: "health",
    projectTitle:
      "Assessing the Impact of Maternal Depression, Anxiety, and Early Caregiving on Child Behavioural Development in Ghana",
    bio: "Linda’s research examines the relationship between maternal mental health, caregiving responsiveness and child behavioural development. Her project considers how depression, anxiety and the quality of early caregiving may be connected to children’s emotional and developmental outcomes in Ghana.",
  },
  {
    name: "Character Dzorgbenyuie Aku Forfoe",
    theme: "health",
    projectTitle:
      "Strengthening Integrated HIV-TB Care in Ghana: A Pathway to Equitable and Sustainable Health Systems",
    bio: "Character’s research focuses on the integration of HIV and tuberculosis services in Ghana. The project examines how service coordination can affect diagnosis, treatment adherence and patient outcomes, while also looking at the health-system constraints that can make integrated care difficult to deliver.",
  },
  {
    name: "Samuel Larbi",
    theme: "health",
    projectTitle: "Ageing, Obesity and Related Risk Factors among Ghanaian Adults",
    bio: "Samuel is investigating the relationship between ageing, obesity and associated risk factors among Ghanaian adults. His work sits within the wider challenge of understanding how demographic change and non-communicable disease are shaping public-health needs in Ghana.",
  },
];

export function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
