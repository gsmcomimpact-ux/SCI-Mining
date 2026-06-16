/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoldDeposit, NigerIndicator, Testimonial } from "./types";

/// Gisements et projets d'exploration de SCI Mining au Niger (Régions de Maradi et Agadez)
export const GOLD_DEPOSITS: GoldDeposit[] = [
  {
    id: "sci-maradi",
    name: "Projet SCI Mining Maradi",
    location: "Région de Maradi, Niger",
    coordinates: "13°48'N, 7°12'E",
    description: "Exploration avancée de gisements aurifères filoniens et de couloirs de cisaillement à haut potentiel à Maradi.",
    longDescription: "Le Projet SCI Mining Maradi est notre site d'exploitation historique et d'exploration majeure. Couvrant un périmètre hautement prospectif, nos équipes y déploient des campagnes méticuleuses de forage carotté profond et d'analyses géophysiques au sol. Grâce à notre procédé breveté d'hydro-séparation gravimétrique 100% physique, nous garantissons l'extraction de l'or libre sans aucun recours aux produits chimiques nocifs (zéro mercure, zéro cyanure), tout en soutenant l'économie et le développement des communautés locales de Maradi.",
    progress: 85,
    phase: "Campagne de forage systématique et modélisation 3D",
    grade: "5.1 g/t (Teneur moyenne certifiée)",
    estimatedReserves: "1.38 Million d'Oz (Oz d'Or estimés)",
    capex: "$28M USD (Capex d'aménagement)",
    irr: "29.8% TRI",
    highlights: [
      "Concentration gravimétrique entièrement physique excluant l'usage de produits toxiques.",
      "Laboratoire géochimique de pointe installé sur notre base-vie de Maradi.",
      "Infrastructures d'eau potable et d'énergie solaire partagées avec les populations locales.",
      "90% de recrutement local qualifiant pour les chantiers et forages de Maradi."
    ],
    imageUrl: new URL("./assets/images/sci_maradi_project_1781619707289.jpg", import.meta.url).href
  },
  {
    id: "sci-agadez",
    name: "Projet SCI Mining Agadez",
    location: "Région d'Agadez, Niger",
    coordinates: "17°00'N, 8°00'E",
    description: "Prospection aurifère systématique et évaluation géophysique du socle géologique de l'Aïr.",
    longDescription: "Le Projet SCI Mining Agadez cible les formations aurifères prometteuses hébergées au sein des structures géologiques du Nord Niger. Fort de notre savoir-faire technologique, nous y menons des sondages géophysiques de haute précision et une cartographie structurale exhaustive. L'ingénierie appliquée y introduit des technologies d'extraction durables à faible consommation hydraulique en circuit fermé, spécifiquement adaptées au milieu saharien d'Agadez.",
    progress: 55,
    phase: "Prospection géophysique active & Forages de reconnaissance",
    grade: "4.7 g/t (Zones cibles)",
    estimatedReserves: "920,000 Oz d'Or (Potentiel géologique)",
    capex: "$19M USD (Investissement initial estimé)",
    irr: "25.2% TRI",
    highlights: [
      "Système de traitement d'eau optimisé pour préserver les nappes phréatiques sahariennes.",
      "Analyses structurales numériques avancées guidées par drone.",
      "Méthode gravimétrique propre respectueuse des écosystèmes pastoraux ordinaires.",
      "Programmes de bourses d'études techniques dédiés aux jeunes d'Agadez."
    ],
    imageUrl: new URL("./assets/images/sci_agadez_project_1781619722016.jpg", import.meta.url).href
  }
];

// Indicateurs de Performance de l'entreprise SCI Mining
export const SCI_INDICATORS: NigerIndicator[] = [
  {
    id: "concession-area",
    label: "Superficie Totale",
    value: "1,550 km²",
    sub: "Titres miniers exclusifs",
    description: "Une assise géologique stratégique couvrant les zones clés d'exploration aurifère à Maradi et à Agadez."
  },
  {
    id: "national-jobs",
    label: "Emplois Locaux",
    value: "90%",
    sub: "Ingénieurs et techniciens du Niger",
    description: "SCI Mining valorise l'expertise nationale en formant et en recrutant au sein des communes de nos deux régions d'intervention."
  },
  {
    id: "processing-method",
    label: "Zéro Produit Chimique",
    value: "100% Physique",
    sub: "Gravimétrie sans mercure",
    description: "Technologie d'hydro-séparation physique garantissant une production d'or propre d'une intégrité environnementale totale."
  },
  {
    id: "capital-invested",
    label: "Équipements Mobiles",
    value: "$16.2M",
    sub: "Flotte technique détenue en propre",
    description: "Foreuses de dernière génération, équipements de prospection et laboratoires mobiles détenus par SCI Mining."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "partner-maradi",
    author: "Moussa Dan Kalla",
    role: "Représentant Communautaire",
    company: "Comité Local des Communes (Maradi)",
    text: "En travaillant avec SCI Mining sur le site de Maradi, nous constatons un partenariat exemplaire : forages d'eau potable solaires opérationnels et création d'emplois durables pour nos jeunes."
  },
  {
    id: "partner-agadez",
    author: "Ibrahim Ag Alhadj",
    role: "Superviseur des Operations Terrain",
    company: "Technologues du Nord (Agadez)",
    text: "L'approche technique et le respect des normes environnementales de SCI Mining sur la concession d'Agadez redéfinissent l'exploration moderne dans la région de l'Aïr, avec un impact écologique exemplaire."
  },
  {
    id: "client-esg",
    author: "Dr. Angela Merkel-Schulz",
    role: "Responsable RSE Métaux Précieux",
    company: "Valua-Gold ESG Europe",
    text: "Le choix de la séparation physique gravimétrique par SCI Mining à Maradi et à Agadez assure un approvisionnement en or éthique et propre, sans mercure ni cyanure, répondant aux attentes sociétales mondiales."
  }
];

export const INVESTMENT_FAQS = [
  {
    question: "Quels sont les mécanismes de rapatriement de capitaux pour les investisseurs internationaux au Niger ?",
    answer: "Le Niger est membre de l'UEMOA (Union Économique et Monétaire Ouest Africaine) utilisant le Franc CFA (XOF), dont la parité est fixe par rapport à l'Euro. La réglementation des changes de la BCEAO (Banque Centrale) garantit le libre transfert des capitaux investis et le rapatriement des bénéfices, dividendes ou produits de cession d'actifs de manière fluide pour les investisseurs d'outre-mer."
  },
  {
    question: "Quelle est la structure légale des permis d'exploration et la garantie de priorité d'exploitation ?",
    answer: "Conformément au Code Minier de la République du Niger, l'obtention d'un permis d'exploration exclusif confère au titulaire un droit prioritaire et garanti d'obtenir une concession d'exploitation commerciale en cas de découverte d'un gisement économiquement exploitable. SCI Mining détient l'ensemble de ses permis en parfaite régularité légale auprès du Ministère des Mines."
  },
  {
    question: "Comment SCI Mining assure-t-elle l'intégrité de ses rapports géologiques (normes JORC/NI 43-101) ?",
    answer: "L'intégralité de nos échantillons de forage fait l'objet de protocoles d'assurance-qualité et de contrôle-qualité (QA/QC) stricts. Les échantillons carottés sont préparés et numérotés avec des standards géologiques rigoureux intégrés, puis expédiés et analysés par des laboratoires certifiés indépendants (tels que ALS Global ou SGS). Nos estimations de ressources sont validées par des 'Persons Qualifiées' agréées."
  },
  {
    question: "Quel est le traitement fiscal applicable aux sociétés d'exploration aurifère au Niger ?",
    answer: "Le Code Minier du Niger prévoit un régime fiscal de faveur très attractif pendant la phase d'exploration : exonération totale de droits de douane et de TVA sur l'intégralité du matériel géologique et des équipements lourds importés, ainsi qu'une exonération de l'impôt sur les bénéfices industriels et commerciaux (BIC), stimulant l'apport de capitaux étrangers."
  },
  {
    question: "Comment la technologie 'Zéro Mercure, Zéro Cyanure' impacte-t-elle la valorisation finale de l'or de SCI Mining ?",
    answer: "L'or extrait par nos méthodes physiques d'hydro-séparation gravimétrique est hautement prisé par les raffineries européennes et suisses, qui appliquent une prime de valorisation sur l'or d'origine éthique et écologique ('Green Gold'). Cela renforce la rentabilité intrinsèque et la résilience réglementaire de l'ensemble de nos projets d'exploration."
  },
  {
    question: "Quelles sont les mesures concrètes de sécurité déployées pour sanctuariser les chantiers de Maradi et d'Agadez ?",
    answer: "Nous collaborons de manière continue avec le Ministère de l'Intérieur du Niger et les Forces de Défense et de Sécurité (FDS) pour installer des détachements militaires logés directement sur nos camps d'exploration, assurant une protection périmétrique constante. De plus, nos véhicules d'exploration disposent de systèmes de géolocalisation par satellite redondants en temps réel."
  }
];


