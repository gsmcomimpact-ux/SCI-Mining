/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoldDeposit, NigerIndicator, Testimonial } from "./types";

export type Language = "fr" | "en";

export interface StaticTranslation {
  // Navigation
  navHome: string;
  navIntervention: string;
  navProjects: string;
  navEthics: string;
  navFaq: string;
  navContact: string;
  btnContact: string;
  
  // Hero section
  heroSubtitle: string;
  heroTitle: string;
  heroTitleGradient: string;
  heroTitleEnd: string;
  heroDesc: string;
  heroBtnDiscover: string;
  heroBtnContact: string;
  
  // Hero badges
  badgeLocations: string;
  badgeLocationsVal: string;
  badgeProcess: string;
  badgeProcessVal: string;
  badgeEquipment: string;
  badgeEquipmentVal: string;
  badgeImpact: string;
  badgeImpactVal: string;
  
  // Hero sidebar
  sidebarTitle: string;
  sidebarText: string;
  sidebarProgressMaradi: string;
  sidebarProgressAgadez: string;
  sidebarReportBtn: string;
  
  // Key Indicators section
  indSubtitle: string;
  indTitle: string;
  indDesc: string;
  
  // Due Diligence Banner
  duePill: string;
  dueTitle: string;
  dueDesc: string;
  dueBtn: string;
  
  // Projects section
  projPill: string;
  projTitle: string;
  projDescription: string;
  projGrade: string;
  projReserves: string;
  projIrr: string;
  projProgressLabel: string;
  projAnalyzeBtn: string;
  
  // Trust banner
  trustLegal: string;
  trustLegalVal: string;
  trustSafety: string;
  trustSafetyVal: string;
  trustFinance: string;
  trustFinanceVal: string;
  
  // ESG section
  esgPill: string;
  esgTitle: string;
  esgDesc: string;
  esgPillarE: string;
  esgPillarS: string;
  esgPillarG: string;
  
  // ESG environment values
  envTitle: string;
  envDesc: string;
  envBullet1: string;
  envBullet2: string;
  envBullet3: string;
  envQuoteLabel: string;
  envQuote: string;
  
  // ESG social values
  socTitle: string;
  socDesc: string;
  socBullet1: string;
  socBullet2: string;
  socBullet3: string;
  socQuoteLabel: string;
  socQuote: string;
  
  // ESG governance values
  govTitle: string;
  govDesc: string;
  govBullet1: string;
  govBullet2: string;
  govBullet3: string;
  govQuoteLabel: string;
  govQuote: string;
  
  esgTeamBadge: string;
  esgTeamSub: string;
  
  // Testimonials
  testiPill: string;
  testiTitle: string;
  
  // FAQ Section
  faqPill: string;
  faqTitle: string;
  faqDesc: string;
  
  // Contact Section
  contactPill: string;
  contactTitle: string;
  contactDesc: string;
  contactEmail1Label: string;
  contactEmail2Label: string;
  contactAddressLabel: string;
  contactAddressValue: string;
  contactBtnWrite: string;
  contactBtnCopy: string;
  contactBtnCopied: string;
  
  // Footer
  footerDesc: string;
  footerPhone: string;
  footerRights: string;
  
  // Modal specific
  modalScope: string;
  modalReservesLabel: string;
  modalReservesSub: string;
  modalCapexLabel: string;
  modalCapexSub: string;
  modalIrrLabel: string;
  modalIrrSub: string;
  modalGradeLabel: string;
  modalGradeSub: string;
  modalTechTitle: string;
  modalGuaranteeLabel: string;
  modalGuaranteeText: string;
  modalProgressTitle: string;
  modalProgressSub: string;
  modalAtoutsTitle: string;
  modalMeetingBtn: string;
}

export const STATIC_TRANSLATIONS: Record<Language, StaticTranslation> = {
  fr: {
    navHome: "Accueil",
    navIntervention: "Domaines d'Intervention",
    navProjects: "Projets Actifs",
    navEthics: "Engagement Éthique",
    navFaq: "F.A.Q. Investisseurs",
    navContact: "Contact",
    btnContact: "Nous Contacter",
    
    heroSubtitle: "EXPLORATION & INGÉNIERIE MINIÈRE - MARADI & AGADEZ",
    heroTitle: "Présentation de ",
    heroTitleGradient: "SCI Mining",
    heroTitleEnd: " et de nos activités de prospection",
    heroDesc: "SCI Mining est un opérateur minier privé spécialisé dans l'exploration aurifère méthodique hautement technologique. Avec ses deux concessions d'exploration majeures situées dans les régions de Maradi et d'Agadez au Niger, notre entreprise valorise des permis exclusifs d'or au moyen de méthodes géophysiques de pointe et d'un traitement gravimétrique d'avant-garde, garantissant une séparation 100% physique sans mercure.",
    heroBtnDiscover: "Découvrir nos projets",
    heroBtnContact: "Prendre contact",
    
    badgeLocations: "Sites d'exploration",
    badgeLocationsVal: "Maradi & Agadez",
    badgeProcess: "Procédé de tri",
    badgeProcessVal: "100% Gravimétrique",
    badgeEquipment: "Moyen Technique",
    badgeEquipmentVal: "Foreuses et Géophysique",
    badgeImpact: "Impact Local",
    badgeImpactVal: "Infrastructures & RSE",
    
    sidebarTitle: "ACTUALITÉ DE NOTRE EXPLORATION",
    sidebarText: "\"Nos travaux d'exploration avancent activement au Niger. Grâce à des foreuses mobilisées en propre et des analyses géophysiques systématiques de haute précision, SCI Mining structure des réserves aurifères certifiées à long terme.\"",
    sidebarProgressMaradi: "Avancement SCI Mining Maradi",
    sidebarProgressAgadez: "Avancement SCI Mining Agadez",
    sidebarReportBtn: "Voir les rapports géologiques →",
    
    indSubtitle: "Notre Savoir-faire & Indicateurs Clés",
    indTitle: "SCI Mining : Une Capacité Industrielle Privée d'Excellence",
    indDesc: "À travers nos investissements géotechniques, nous structurons des opérations d'exploration de pointe à Maradi et à Agadez avec un engagement de protection environnementale rigoureux.",
    
    duePill: "DONNÉES TECHNIQUES",
    dueTitle: "Prêt pour les audits techniques et d'ingénierie (Due Diligence).",
    dueDesc: "Notre direction d'exploration met à la disposition des partenaires agréés l'intégralité des relevés géophysiques, les coordonnées de nos intercepts de forages et les rapports RSE vérifiés d'un commun accord avec les communes locales de Maradi et d'Agadez.",
    dueBtn: "Demander l'accès confidentiel",
    
    projPill: "ACTIVITÉS GÉOLOGIQUES EXCLUSIVES",
    projTitle: "Nos Projets Aurifères Actifs d'Exploration & de Développement",
    projDescription: "Deux concessions d'envergure menées en propre par nos équipes de géologie, associant tri exclusivement physique de haute technologie (zéro produit polluant) et retombées régionales d'excellence.",
    projGrade: "Teneur",
    projReserves: "Réserves d'Or",
    projIrr: "Taux IRR",
    projProgressLabel: "Maturité réglementaire et exploration",
    projAnalyzeBtn: "Analyser le gisement",
    
    trustLegal: "Validation Légale",
    trustLegalVal: "100% Titres et Arrêtés Accordés",
    trustSafety: "Sécurité au travail",
    trustSafetyVal: "Réglementation OHSAS 18001",
    trustFinance: "Garantie Financière",
    trustFinanceVal: "Protection de Rapatriement de Richesse",
    
    esgPill: "CHARTE DE RESPONSABILITÉ SOCIÉTALE (RSE)",
    esgTitle: "Pour une Valorisation de l'Or Propre et Concertée",
    esgDesc: "Pour SCI Mining, la rentabilité à long terme de nos activités d'exploration est indissociable du bien-être des populations de nos régions d'intervention (Maradi et Agadez).",
    esgPillarE: "Environnement (E)",
    esgPillarS: "Social (S)",
    esgPillarG: "Gouvernance (G)",
    
    envTitle: "Traitement 100% Physique (0% Mercure)",
    envDesc: "L'orpaillage ou l'extraction minière artisanale du Niger déverse fréquemment du mercure nocif dans les sols. Notre procédé breveté d'hydro-séparation par gravité nous permet de récupérer l'or physique par mouvement centrifuge hydraulique, éliminant totalement l'usage de produits chimiques toxiques.",
    envBullet1: "Restauration soignée des zones d'exploration après nos campagnes géologiques.",
    envBullet2: "Recyclage systématique à 98% de l'eau de traitement gravimétrique en circuit autonome fermé.",
    envBullet3: "Plantation de ceintures vertes d'acacias sur les sols libérés par l'exploration.",
    envQuoteLabel: "ÉCOLOGIE ACTIVE",
    envQuote: "\"Notre procédé 100% physique par hydro-séparation gravimétrique garantit une extraction de l'or libre d'un respect écologique exemplaire sans aucun produit pharmaceutique toxique.\"",
    
    socTitle: "Co-développement Local et Infrastructures Communes",
    socDesc: "SCI Mining s'assure d'impacter de manière concrète la vie des villages abritant nos chantiers. Les pompes hydrauliques et systèmes d'énergie solaire requis pour nos bases de vie et infrastructures d'exploration sont dimensionnés afin d'approvisionner également en eau potable les résidents des zones rurales de Maradi et d'Agadez.",
    socBullet1: "Emploi prioritaire et qualifiant : 90% d'ingénieurs et techniciens locaux de nos régions d'implantation.",
    socBullet2: "Financement de fournitures scolaires pour les écoles communales partenaires des secteurs de Maradi et d'Agadez.",
    socBullet3: "Bornes-fontaines publiques gratuites alimentées à l'énergie solaire.",
    socQuoteLabel: "RETOMBÉES SOCIALES",
    socQuote: "\"SCI Mining s'assure d'impacter concrètement le quotidien des populations rurales de Maradi et d'Agadez avec des infrastructures solaires partagées.\"",
    
    govTitle: "Normes ISO, Anti-Corruption et Transparence Institutionnelle",
    govDesc: "SCI Mining applique de manière absolue la charte fiscale du Code minier de 2018 et collabore de près avec l'Initiative de Transparence pour les Industries Extractives (ITIE Niger). Les audits administratifs indépendants valident la transparence totale de notre gestion financière.",
    govBullet1: "Publication annuelle ouverte de nos taux de prélèvements étatiques.",
    govBullet2: "Double sécurité de comptes de tutelle pour les mouvements d'actifs internationaux.",
    govBullet3: "Standards OHSAS sur l'intégrité sanitaire et physique de nos foreurs.",
    govQuoteLabel: "CONTRÔLE INTÈGRE",
    govQuote: "\"La rigueur administrative de nos équipes de géologie, de nos audits financiers indépendants et notre adhésion stricte au code minier certifient une gouvernance intègre.\"",
    
    esgTeamBadge: "150+ Collaborateurs directs",
    esgTeamSub: "Bases-vie et exploration actives au Niger",
    
    testiPill: "CONFIANCE INSTITUTIONNELLE",
    testiTitle: "Ils soutiennent l'extraction d'or responsable de SCI Mining",
    
    faqPill: "INFORMATIONS & CONFORMITÉ",
    faqTitle: "Questions Fréquentes sur les Investissements",
    faqDesc: "Retrouvez les réponses techniques et réglementaires aux préoccupations classiques des investisseurs institutionnels et partenaires miniers internationaux.",
    
    contactPill: "CONTACT & RELATIONS SCI MINING",
    contactTitle: "Prendre Contact avec l'Équipe SCI Mining",
    contactDesc: "Pour initier une collaboration, obtenir des informations géologiques complémentaires ou planifier une rencontre technique, écrivez-nous directement à nos adresses de contact officielles.",
    contactEmail1Label: "Adresse Principale",
    contactEmail2Label: "Canal Sécurisé Proton",
    contactAddressLabel: "Bureaux Administratifs",
    contactAddressValue: "Quartier Plateau, Niamey, Niger",
    contactBtnWrite: "Écrire",
    contactBtnCopy: "Copier",
    contactBtnCopied: "Copié !",
    
    footerDesc: "SCI Mining S.A.",
    footerPhone: "Siège : Quartier Plateau, Niamey • Base technique : Maradi, Niger",
    footerRights: "© 2026 SCI Mining Gold Concessions. Tous droits réservés.",
    
    modalScope: "Exploration Privée SCI Mining • Niger",
    modalReservesLabel: "Évaluation des réserves",
    modalReservesSub: "En once d'or d'équivalent",
    modalCapexLabel: "Capex d'installation",
    modalCapexSub: "Investissement prévisionnel",
    modalIrrLabel: "TRI Projeté (IRR)",
    modalIrrSub: "Modèle financier révisé",
    modalGradeLabel: "Teneur moyenne",
    modalGradeSub: "Par tonne de brut extrait",
    modalTechTitle: "Technologie & Caractéristiques du Gisement",
    modalGuaranteeLabel: "Garantie d'Exploitation Exclusive :",
    modalGuaranteeText: "SCI Mining détient l'ensemble des titres d'exploration exclusifs requis et mène ses opérations en pleine conformité avec les standards d'investissement minier. Ce cadre sécurisé garantit la libre exportabilité de la production d'or et l'importation de nos équipements géotechniques lourds.",
    modalProgressTitle: "Stadiomètre Technique d'Avancée",
    modalProgressSub: "Maturité du projet",
    modalAtoutsTitle: "Atouts Majeurs du Projet",
    modalMeetingBtn: "Rendez-vous confidentiel"
  },
  en: {
    navHome: "Home",
    navIntervention: "Key Domains",
    navProjects: "Active Projects",
    navEthics: "Ethical Commitment",
    navFaq: "Investor F.A.Q.",
    navContact: "Contact",
    btnContact: "Contact Us",
    
    heroSubtitle: "GOLD EXPLORATION & ENGINEERING - MARADI & AGADEZ",
    heroTitle: "Discover ",
    heroTitleGradient: "SCI Mining",
    heroTitleEnd: " and our gold exploration systems",
    heroDesc: "SCI Mining is a private minerals operator specialized in systematic high-tech gold exploration. Boasting two premier exploration license portfolios located in the Maradi and Agadez regions of Niger, our company evaluates premium targets using state-of-the-art geophysical methods and advanced physical gravity separation entirely free from chemical leaching.",
    heroBtnDiscover: "Explore our projects",
    heroBtnContact: "Get in touch",
    
    badgeLocations: "Prospect Sites",
    badgeLocationsVal: "Maradi & Agadez",
    badgeProcess: "Sorting Process",
    badgeProcessVal: "100% Gravity-Based",
    badgeEquipment: "Technical Assets",
    badgeEquipmentVal: "Drilling & Geophysics",
    badgeImpact: "Local Footprint",
    badgeImpactVal: "Infrastructure & CSR",
    
    sidebarTitle: "LATEST EXPLORATION UPDATES",
    sidebarText: "\"Our project campaigns are actively progressing across Niger. Powered by our owned drilling fleet and high-resolution geophysical mapping tools, SCI Mining is validating major geologic resource bases for the long run.\"",
    sidebarProgressMaradi: "SCI Mining Maradi Progress",
    sidebarProgressAgadez: "SCI Mining Agadez Progress",
    sidebarReportBtn: "View Geological Reports →",
    
    indSubtitle: "Our Expertise & Key Performance Indexes",
    indTitle: "SCI Mining: Private-Sector Operational Excellence",
    indDesc: "Through strategic geotechnical investments, we execute world-class exploration projects in Maradi and Agadez paired with unwavering environmental safeguards.",
    
    duePill: "TECHNICAL DATA ROOM",
    dueTitle: "Ready for Technical and Engineering Audits (Due Diligence).",
    dueDesc: "Our exploration department provides authorized partners with full access to geophysical logging, core intercept coordinates, and third-party verified ESG logs established directly with local municipalities.",
    dueBtn: "Request Confidential Access",
    
    projPill: "EXCLUSIVE GEOLOGICAL CONCESSIONS",
    projTitle: "Active Gold Exploration & Development Projects",
    projDescription: "Two large-scale concessions managed directly by our geology departments, combining high-tech 100% physical processing methods and targeted regional development impact.",
    projGrade: "Grade",
    projReserves: "Gold Reserves",
    projIrr: "Est. IRR",
    projProgressLabel: "Regulatory Maturity & Campaign Progress",
    projAnalyzeBtn: "Analyze deposit",
    
    trustLegal: "Legal Validation",
    trustLegalVal: "100% Validated Exploration Authorizations",
    trustSafety: "Workplace Safety",
    trustSafetyVal: "Compliant with OHSAS 18001 Rules",
    trustFinance: "Financial Integrity",
    trustFinanceVal: "Secure Asset and Profit Repatriation Protection",
    
    esgPill: "COMMUNITY CHARTE & RESPONSIBILITY (CSR)",
    esgTitle: "Committed to Ethical & Collaborative Gold Exploration",
    esgDesc: "At SCI Mining, the long-term rentability of our projects is structurally linked to the social prosperity of the local communities in Maradi and Agadez.",
    esgPillarE: "Environment (E)",
    esgPillarS: "Social (S)",
    esgPillarG: "Governance (G)",
    
    envTitle: "100% Physical Processing (0% Mercury)",
    envDesc: "Artisanal gold mining in regional basins often pollutes soil with toxic chemicals. Our patented gravitational hydro-separation allows us to collect gold via high-speed centrifugal systems, completely removing the need for toxic chemicals.",
    envBullet1: "Thorough reclamation of test pits and target zones following deep drill campaigns.",
    envBullet2: "Systematic 98% water recycling system leveraging an autonomous closed-loop model.",
    envBullet3: "Planting of protective acacia green belts on soil returned to local authorities.",
    envQuoteLabel: "ACTIVE ECOLOGY",
    envQuote: "\"Our 100% physical gravity hydro-separation guarantees an eco-friendly gold extraction cycle completely free from toxic treatment pharmaceuticals.\"",
    
    socTitle: "Community Growth & Shared Utility Systems",
    socDesc: "SCI Mining works hard to bring concrete improvements to regional villages. Solar generators and drinking water pipelines scaled for our camps are co-designed to provide accessible drinking water to nearby rural residents.",
    socBullet1: "Hiring priority: 90% of our geologists, drillers and engineering technicians are Nigerien citizens.",
    socBullet2: "Strategic funding of learning equipment for host municipality elementary schools in Maradi and Agadez.",
    socBullet3: "Free-to-access drinking water fountains operating on independent solar power grids.",
    socQuoteLabel: "SOCIAL VALUE",
    socQuote: "\"SCI Mining makes sure to yield concrete local dividends for families across Maradi and Agadez through shared solar utilities.\"",
    
    govTitle: "ISO Compliance, Anti-Corruption & Public Transparency",
    govDesc: "SCI Mining complies entirely with the 2018 Mining Code and reports updates directly to the Extractive Industries Transparency Initiative (EITI Niger). Third-party audit bureaus validate our clean book-keeping.",
    govBullet1: "Open annual registration of all government royalties, fees, and exploration charges.",
    govBullet2: "Escrow account operations backed by premier financial bodies to guarantee seamless fund transfers.",
    govBullet3: "Full adherence to OHSAS safety templates to secure health and dignity for our drilling crews.",
    govQuoteLabel: "RIGOROUS SYSTEM",
    govQuote: "\"Our geological accountability, independent fiscal audits, and strict alignment with regional mining laws certify premium corporate systems.\"",
    
    esgTeamBadge: "150+ Full-Time Employees",
    esgTeamSub: "Active field exploration and operational camp facilities in Niger",
    
    testiPill: "INSTITUTIONAL PARTNERSHIPS",
    testiTitle: "Advocating for Responsible Gold Exploration",
    
    faqPill: "INFORMATION & REGULATION",
    faqTitle: "Frequently Asked Questions for Global Investors",
    faqDesc: "Access authoritative regulatory and engineering answers to key challenges brought by international private equity and corporate mining partners.",
    
    contactPill: "CONTACT & INVESTOR INQUIRIES",
    contactTitle: "Reach Out to the SCI Mining Teams",
    contactDesc: "To discuss joint ventures, request geological reports, or plan a technical review session, send an email to our official relations desks.",
    contactEmail1Label: "Corporate Desk",
    contactEmail2Label: "Secure Proton Mailbox",
    contactAddressLabel: "Administrative HQ",
    contactAddressValue: "Quartier Plateau, Niamey, Niger",
    contactBtnWrite: "Write",
    contactBtnCopy: "Copy",
    contactBtnCopied: "Copied!",
    
    footerDesc: "SCI Mining S.A.",
    footerPhone: "HQ: Quartier Plateau, Niamey • Technical Base: Maradi, Niger",
    footerRights: "© 2026 SCI Mining Gold Concessions. All rights reserved.",
    
    modalScope: "SCI Mining Private Exploration • Niger",
    modalReservesLabel: "Asset Evaluation",
    modalReservesSub: "In equivalent gold ounces",
    modalCapexLabel: "Development Capex",
    modalCapexSub: "Projected capital investment",
    modalIrrLabel: "Projected IRR",
    modalIrrSub: "Updated financial assessment",
    modalGradeLabel: "Average Ore Grade",
    modalGradeSub: "Per metric ton of feed",
    modalTechTitle: "Technology & Geologic Gold Structure",
    modalGuaranteeLabel: "Exclusive Exploration Rights:",
    modalGuaranteeText: "SCI Mining holds verified exclusive exploration permits and conducts all field activities in compliance with transparency standards. This sound legal basis protects asset transfers and heavy machinery import lines.",
    modalProgressTitle: "Technical Development Progress",
    modalProgressSub: "Project Maturity",
    modalAtoutsTitle: "Concession Advantages",
    modalMeetingBtn: "Request Confidential Meeting"
  }
};

// Localized Gold Deposits
export const getLocalizedGoldDeposits = (lang: Language): GoldDeposit[] => [
  {
    id: "sci-maradi",
    name: lang === "fr" ? "Projet SCI Mining Maradi" : "Maradi SCI Mining Project",
    location: lang === "fr" ? "Région de Maradi, Niger" : "Maradi Region, Niger",
    coordinates: "13°48'N, 7°12'E",
    description: lang === "fr"
      ? "Exploration avancée de gisements aurifères filoniens et de couloirs de cisaillement à haut potentiel à Maradi."
      : "Advanced exploration of vein-hosted gold deposits and high-potential shear corridors in Maradi.",
    longDescription: lang === "fr"
      ? "Le Projet SCI Mining Maradi est notre site d'exploitation historique et d'exploration majeure. Couvrant un périmètre hautement prospectif, nos équipes y déploient des campagnes méticuleuses de forage carotté profond et d'analyses géophysiques au sol. Grâce à notre procédé breveté d'hydro-séparation gravimétrique 100% physique, nous garantissons l'extraction de l'or libre sans aucun recours aux produits chimiques nocifs (zéro mercure, zéro cyanure), tout en soutenant l'économie et le développement des communautés locales de Maradi."
      : "The Maradi SCI Mining Project is our historical operations site and major focus of exploration. Covering a highly prospective perimeter, our teams employ meticulous deep core drilling campaigns and ground-based geophysical analyses. Using our patented 100% physical gravity-based hydro-separation process, we guarantee the extraction of free gold without any use of harmful chemicals (zero mercury, zero cyanide), while actively supporting the local economy and community development in Maradi.",
    progress: 85,
    phase: lang === "fr" ? "Campagne de forage systématique et modélisation 3D" : "Systematic drilling campaign & 3D modeling",
    grade: lang === "fr" ? "5.1 g/t (Teneur moyenne certifiée)" : "5.1 g/t (Certified average grade)",
    estimatedReserves: lang === "fr" ? "1.38 Million d'Oz (Oz d'Or estimés)" : "1.38 Million Oz (Estimated Gold Oz)",
    capex: lang === "fr" ? "$28M USD (Capex d'aménagement)" : "$28M USD (Development Capex)",
    irr: lang === "fr" ? "29.8% TRI" : "29.8% IRR",
    highlights: lang === "fr" ? [
      "Concentration gravimétrique entièrement physique excluant l'usage de produits toxiques.",
      "Laboratoire géochimique de pointe installé sur notre base-vie de Maradi.",
      "Infrastructures d'eau potable et d'énergie solaire partagées avec les populations locales.",
      "90% de recrutement local qualifiant pour les chantiers et forages de Maradi."
    ] : [
      "Fully physical gravity concentration, entirely excluding the use of toxic chemicals.",
      "State-of-the-art geochemical laboratory setup at our Maradi exploration base camp.",
      "Clean drinking water and solar energy infrastructure shared with local communities.",
      "90% skilled local recruitment for Maradi work sites and exploration drilling."
    ],
    imageUrl: new URL("./assets/images/sci_maradi_project_1781619707289.jpg", import.meta.url).href
  },
  {
    id: "sci-agadez",
    name: lang === "fr" ? "Projet SCI Mining Agadez" : "Agadez SCI Mining Project",
    location: lang === "fr" ? "Région d'Agadez, Niger" : "Agadez Region, Niger",
    coordinates: "17°00'N, 8°00'E",
    description: lang === "fr"
      ? "Prospection aurifère systématique et évaluation géophysique du socle géologique de l'Aïr."
      : "Systematic gold prospecting and geophysical evaluation of the geological basement of the Aïr.",
    longDescription: lang === "fr"
      ? "Le Projet SCI Mining Agadez cible les formations aurifères prometteuses hébergées au sein des structures géologiques du Nord Niger. Fort de notre savoir-faire technologique, nous y menons des sondages géophysiques de haute précision et une cartographie structurale exhaustive. L'ingénierie appliquée y introduit des technologies d'extraction durables à faible consommation hydraulique en circuit fermé, spécifiquement adaptées au milieu saharien d'Agadez."
      : "The Agadez SCI Mining Project targets highly promising gold-bearing formations hosted within Northern Niger's geological structures. Equipped with leading technological expertise, we conduct high-precision geophysical surveys and exhaustive structural mapping here. The applied engineering introduces eco-friendly extraction techniques with low closed-loop water consumption, specifically adapted to the desert environment of Agadez.",
    progress: 55,
    phase: lang === "fr" ? "Prospection géophysique active & Forages de reconnaissance" : "Active geophysical prospecting & reconnaissance drilling",
    grade: lang === "fr" ? "4.7 g/t (Zones cibles)" : "4.7 g/t (Target zones)",
    estimatedReserves: lang === "fr" ? "920,000 Oz d'Or (Potentiel géologique)" : "920,000 Gold Oz (Geological potential)",
    capex: lang === "fr" ? "$19M USD (Investissement initial estimé)" : "$19M USD (Estimated initial Capex)",
    irr: lang === "fr" ? "25.2% TRI" : "25.2% IRR",
    highlights: lang === "fr" ? [
      "Système de traitement d'eau optimisé pour préserver les nappes phréatiques sahariennes.",
      "Analyses structurales numériques avancées guidées par drone.",
      "Méthode gravimétrique propre respectueuse des écosystèmes pastoraux ordinaires.",
      "Programmes de bourses d'études techniques dédiés aux jeunes d'Agadez."
    ] : [
      "Optimized water processing system to safeguard Saharan groundwater resources.",
      "Advanced digital structural analysis assisted by professional drone mapping.",
      "Clean gravity-based separation preserving fragile pastoral ecosystems.",
      "Scholarships and technical training programs dedicated to Agadez youths."
    ],
    imageUrl: new URL("./assets/images/sci_agadez_project_1781619722016.jpg", import.meta.url).href
  }
];

// Localized Performance Indicators
export const getLocalizedIndicators = (lang: Language): NigerIndicator[] => [
  {
    id: "concession-area",
    label: lang === "fr" ? "Superficie Totale" : "Total Area",
    value: lang === "fr" ? "1,550 km²" : "1,550 sq km",
    sub: lang === "fr" ? "Titres miniers exclusifs" : "Exclusive mining titles",
    description: lang === "fr"
      ? "Une assise géologique stratégique couvrant les zones clés d'exploration aurifère à Maradi et à Agadez."
      : "A strategic geological footprint covering key gold exploration areas in Maradi and Agadez."
  },
  {
    id: "national-jobs",
    label: lang === "fr" ? "Emplois Locaux" : "Local Employment",
    value: "90%",
    sub: lang === "fr" ? "Ingénieurs et techniciens du Niger" : "Engineers & technicians from Niger",
    description: lang === "fr"
      ? "SCI Mining valorise l'expertise nationale en formant et en recrutant au sein des communes de nos deux régions d'intervention."
      : "SCI Mining values national expertise by hiring and training directly from the local municipalities of our exploration zones."
  },
  {
    id: "processing-method",
    label: lang === "fr" ? "Zéro Produit Chimique" : "Zero Toxic Chemicals",
    value: lang === "fr" ? "100% Physique" : "100% Physical",
    sub: lang === "fr" ? "Gravimétrie sans mercure" : "Mercury-free gravity separation",
    description: lang === "fr"
      ? "Technologie d'hydro-séparation physique garantissant une production d'or propre d'une intégrité environnementale totale."
      : "Physical hydro-separation technology ensuring highly clean gold recovery with pristine environmental integrity."
  },
  {
    id: "capital-invested",
    label: lang === "fr" ? "Équipements Mobiles" : "Mobile Equipment",
    value: "$16.2M",
    sub: lang === "fr" ? "Flotte technique détenue en propre" : "Fully-owned exploration fleet",
    description: lang === "fr"
      ? "Foreuses de dernière génération, équipements de prospection et laboratoires mobiles détenus par SCI Mining."
      : "Latest-generation drilling rigs, high-precision prospecting gear, and mobile labs owned in-house by SCI Mining."
  }
];

// Localized Testimonials
export const getLocalizedTestimonials = (lang: Language): Testimonial[] => [
  {
    id: "partner-maradi",
    author: "Moussa Dan Kalla",
    role: lang === "fr" ? "Représentant Communautaire" : "Community Spokesperson",
    company: lang === "fr" ? "Comité Local des Communes (Maradi)" : "Local Communities Committee (Maradi)",
    text: lang === "fr"
      ? "En travaillant avec SCI Mining sur le site de Maradi, nous constatons un partenariat exemplaire : forages d'eau potable solaires opérationnels et création d'emplois durables pour nos jeunes."
      : "Working with SCI Mining at the Maradi site highlights an exemplary partnership: solar-powered drinking water boreholes are fully functional and sustainable jobs are being created for our youth."
  },
  {
    id: "partner-agadez",
    author: "Ibrahim Ag Alhadj",
    role: lang === "fr" ? "Superviseur des Operations Terrain" : "Field Operations Supervisor",
    company: lang === "fr" ? "Technologues du Nord (Agadez)" : "Northern Technologists (Agadez)",
    text: lang === "fr"
      ? "L'approche technique et le respect des normes environnementales de SCI Mining sur la concession d'Agadez redéfinissent l'exploration moderne dans la région de l'Aïr, avec un impact écologique exemplaire."
      : "The technical approach and compliance with strict environmental standards by SCI Mining on the Agadez concession redefine modern exploration in the Aïr region, with an exemplary eco-friendly impact."
  },
  {
    id: "client-esg",
    author: "Dr. Angela Merkel-Schulz",
    role: lang === "fr" ? "Responsable RSE Métaux Précieux" : "Head of Precious Metals CSR",
    company: "Valua-Gold ESG Europe",
    text: lang === "fr"
      ? "Le choix de la séparation physique gravimétrique par SCI Mining à Maradi et à Agadez assure un approvisionnement en or éthique et propre, sans mercure ni cyanure, répondant aux attentes sociétales mondiales."
      : "The choice of clean physical gravity separation by SCI Mining in Maradi and Agadez guarantees a supply of ethical green gold, free from mercury and cyanide, matching global societal expectations."
  }
];

// Localized FAQs
export interface FaqItem {
  question: string;
  answer: string;
}

export const getLocalizedFaqs = (lang: Language): FaqItem[] => [
  {
    question: lang === "fr"
      ? "Quels sont les mécanismes de rapatriement de capitaux pour les investisseurs internationaux au Niger ?"
      : "What are the capital repatriation mechanisms for international investors in Niger?",
    answer: lang === "fr"
      ? "Le Niger est membre de l'UEMOA (Union Économique et Monétaire Ouest Africaine) utilisant le Franc CFA (XOF), dont la parité est fixe par rapport à l'Euro. La réglementation des changes de la BCEAO (Banque Centrale) garantit le libre transfert des capitaux investis et le rapatriement des bénéfices, dividendes ou produits de cession d'actifs de manière fluide pour les investisseurs d'outre-mer."
      : "Niger is a member of the WAEMU (West African Economic and Monetary Union) utilizing the West African CFA Franc (XOF), pegged at a fixed parity to the Euro. Exchange controls regulated by the regional central bank (BCEAO) guarantee the free transfer of invested capital and seamless repatriation of profits, dividends, or asset sale proceeds for overseas investors."
  },
  {
    question: lang === "fr"
      ? "Quelle est la structure légale des permis d'exploration et la garantie de priorité d'exploitation ?"
      : "What is the legal structure of exploration permits and the exploitation priority guarantee?",
    answer: lang === "fr"
      ? "Conformément au Code Minier de la République du Niger, l'obtention d'un permis d'exploration exclusif confère au titulaire un droit prioritaire et garanti d'obtenir une concession d'exploitation commerciale en cas de découverte d'un gisement économiquement exploitable. SCI Mining détient l'ensemble de ses permis en parfaite régularité légale auprès du Ministère des Mines."
      : "Pursuant to the Mining Code of the Republic of Niger, obtaining an exclusive exploration permit grants the holder a legal priority and guaranteed right to gain a commercial exploitation concession should an economically viable deposit be discovered. SCI Mining operates all its license areas in perfect regulatory standing with the Ministry of Mines."
  },
  {
    question: lang === "fr"
      ? "Comment SCI Mining assure-t-elle l'intégrité de ses rapports géologiques (normes JORC/NI 43-101) ?"
      : "How does SCI Mining guarantee the integrity of geological reports (JORC/NI 43-101 standards)?",
    answer: lang === "fr"
      ? "L'intégralité de nos échantillons de forage fait l'objet de protocoles d'assurance-qualité et de contrôle-qualité (QA/QC) stricts. Les échantillons carottés sont préparés et numérotés avec des standards géologiques rigoureux intégrés, puis expédiés et analysés par des laboratoires certifiés indépendants (tels que ALS Global ou SGS). Nos estimations de ressources sont validées par des 'Persons Qualifiées' agréées."
      : "All our drill core samples undergo stringent Quality Assurance / Quality Control (QA/QC) protocols. Core samples are logged, processed, and tagged with integrated geology standards before being shipped for analysis to leading independent certified laboratories (such as ALS Global or SGS). Mineral resource estimates are validated and signed off by certified Qualified Persons."
  },
  {
    question: lang === "fr"
      ? "Quel est le traitement fiscal applicable aux sociétés d'exploration aurifère au Niger ?"
      : "What is the tax treatment applicable to gold exploration companies in Niger?",
    answer: lang === "fr"
      ? "Le Code Minier du Niger prévoit un régime fiscal de faveur très attractif pendant la phase d'exploration : exonération totale de droits de douane et de TVA sur l'intégralité de matériel géologique et les équipements lourds importés, ainsi qu'une exonération de l'impôt sur les bénéfices industriels et commerciaux (BIC), stimulant l'apport de capitaux étrangers."
      : "Niger's Mining Code provides a highly competitive and favorable tax regime during the exploration phase: total exemption from import customs duties and VAT on all geophysical supplies and heavy machinery, coupled with complete exemption from corporate income tax (BIC), actively encouraging foreign capital inflows."
  },
  {
    question: lang === "fr"
      ? "Comment la technologie 'Zéro Mercure, Zéro Cyanure' impacte-t-elle la valorisation finale de l'or de SCI Mining ?"
      : "How does the 'Zero Mercury, Zero Cyanide' technology impact the final valuation of SCI Mining's gold?",
    answer: lang === "fr"
      ? "L'or extrait par nos méthodes physiques d'hydro-séparation gravimétrique est hautement prisé par les raffineries européennes et suisses, qui appliquent une prime de valorisation sur l'or d'origine éthique et écologique ('Green Gold'). Cela renforce la rentabilité intrinsèque et la résilience réglementaire de l'ensemble de nos projets d'exploration."
      : "Gold recovered via our physical gravity-based hydro-separation methods is highly valued by European and Swiss refiners, who award a direct premium for ethical and eco-friendly gold supply chains ('Green Gold'). This enhances the baseline profitability and regulatory resilience of all our exploration ventures."
  },
  {
    question: lang === "fr"
      ? "Quelles sont les mesures concrètes de sécurité déployées pour sanctuariser les chantiers de Maradi et d'Agadez ?"
      : "What concrete security measures are in place to safeguard the Maradi and Agadez work sites?",
    answer: lang === "fr"
      ? "We work in continuous collaboration with Niger's Ministry of the Interior and local Armed Forces (FDS) to accommodate military detachments directly on our exploration camp perimeters, ensuring permanent area protection. In addition, our field trucks are equipped with redundant real-time satellite GPS tracking devices."
      : "We work in continuous collaboration with Niger's Ministry of the Interior and local Armed Forces (FDS) to accommodate military detachments directly on our exploration camp perimeters, ensuring permanent area protection. In addition, our field trucks are equipped with redundant real-time satellite GPS tracking devices."
  }
];
