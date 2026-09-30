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

export type Fellow = {
  name: string;
  theme: ThemeKey;
  projectTitle: string;
  bio: string;
  image?: string;
};

export const fellows: Fellow[] = [
  {
    name: "Benjamin Ekow Attabra",
    theme: "ai",
    image: "/images/fellows/ben.png",
    projectTitle: "Sequential Credit Risk Modelling for Data Constrained-Environments",
    bio: "Benjamin’s research explores whether mobile financial-service transaction histories can support better credit-risk modelling in settings where conventional credit information is limited. His work compares sequential deep-learning approaches with more conventional models and examines the possibilities and limitations of using alternative financial data for credit assessment.",
  },
  {
    name: "Essel-Biney Nana Benyin Eboe Nyamekye",
    theme: "ai",
    image: "/images/fellows/nana-benyin.png",
    projectTitle:
      "A Comparative Analysis of Few-Shot Learning Models for Text-Based Diagnosis of Crop Pests and Diseases in Ghana",
    bio: "Nana is investigating how artificial intelligence can support crop-disease and pest diagnosis when large labelled datasets are unavailable. His research focuses on maize, tomato and cassava and compares different machine-learning approaches for building useful diagnostic systems in data-constrained agricultural settings.",
  },
  {
    name: "McGovern Twumasi Owusu-Bekoe",
    theme: "ai",
    image: "/images/fellows/mcgovern.png",
    projectTitle:
      "OnEdge-Net: A Priority-Based Edge-Efficient AI System for Pneumonia Detection in Chest X-Rays for Low-Resource Clinical Settings",
    bio: "McGovern’s project examines how pneumonia-detection AI can operate in health facilities with limited connectivity and computing capacity. He is developing a lightweight system designed to analyse chest X-rays locally while considering the safety and reliability questions that arise when clinical AI is deployed on smaller devices.",
  },
  {
    name: "Ruth Biney Senior",
    theme: "ai",
    image: "/images/fellows/ruth.png",
    projectTitle:
      "Ampe Movement Dataset (Ampe-DB): A Paired Rhythmic Interaction Dataset for Traditional African Gameplay",
    bio: "Ruth’s research uses the Ghanaian game Ampe as the basis for studying paired human movement computationally. The project documents gameplay through video, audio, pose information and annotations, creating data that can support research into movement, rhythm, interaction and culturally grounded computing.",
  },
  {
    name: "Solomon Tuah",
    theme: "climate",
    image: "/images/fellows/solomon.png",
    projectTitle: "Projected Consecutive Dry Days over Ghana and Implications for Food and Water Security",
    bio: "Solomon’s research examines how the duration and distribution of dry periods across Ghana may change under future climate conditions. The work considers what these changes could mean for agriculture, water availability and climate adaptation planning.",
  },
  {
    name: "Lord Selase Nukporfe",
    theme: "climate",
    image: "/images/fellows/lord.png",
    projectTitle:
      "Sea Surface Temperature Trends and Variability in Ghana’s EEZ and Implications for Marine Fisheries",
    bio: "Lord is studying long-term changes in sea-surface temperature across Ghana’s Exclusive Economic Zone. His research examines how warming varies across seasons and coastal zones and what changing ocean conditions could mean for marine environments and fisheries.",
  },
  {
    name: "Brianna Ama Nyarkowaa Donkoh",
    theme: "health",
    image: "/images/fellows/brianna.png",
    projectTitle:
      "Lead Poisoning: Identifying High-Risk Groups Using Secondary Data to Support Targeted Interventions",
    bio: "Brianna’s research examines patterns of lead exposure and the groups that may face greater risk. By analysing existing data, the project aims to strengthen the evidence available for more focused prevention, surveillance and public-health intervention.",
  },
  {
    name: "Linda Akosua Essilfie",
    theme: "health",
    image: "/images/fellows/linda.png",
    projectTitle:
      "Assessing the Impact of Maternal Depression, Anxiety, and Early Caregiving on Child Behavioural Development in Ghana",
    bio: "Linda’s research examines the relationship between maternal mental health, caregiving responsiveness and child behavioural development. Her project considers how depression, anxiety and the quality of early caregiving may be connected to children’s emotional and developmental outcomes in Ghana.",
  },
  {
    name: "Character Dzorgbenyuie Aku Forfoe",
    theme: "health",
    image: "/images/fellows/aku.png",
    projectTitle:
      "Strengthening Integrated HIV-TB Care in Ghana: A Pathway to Equitable and Sustainable Health Systems",
    bio: "Character’s research focuses on the integration of HIV and tuberculosis services in Ghana. The project examines how service coordination can affect diagnosis, treatment adherence and patient outcomes, while also looking at the health-system constraints that can make integrated care difficult to deliver.",
  },
  {
    name: "Samuel Larbi",
    theme: "health",
    image: "/images/fellows/samuel.png",
    projectTitle: "Ageing, Obesity and Related Risk Factors among Ghanaian Adults",
    bio: "Samuel is investigating the relationship between ageing, obesity and associated risk factors among Ghanaian adults. His work sits within the wider challenge of understanding how demographic change and non-communicable disease are shaping public-health needs in Ghana.",
  },
];

export function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
