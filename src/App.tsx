/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Building2, 
  MapPin, 
  LineChart, 
  Award, 
  ChevronRight, 
  ChevronDown,
  HelpCircle,
  CheckCircle2, 
  Mail, 
  Lock, 
  Calendar, 
  Briefcase, 
  Bookmark, 
  ArrowUpRight,
  Phone,
  FileSpreadsheet,
  Globe2,
  Users2,
  HardHat,
  Leaf
} from "lucide-react";
import { GoldDeposit } from "./types";
import FinanceSimulator from "./components/FinanceSimulator";
import ProjectModal from "./components/ProjectModal";
import { 
  Language, 
  STATIC_TRANSLATIONS, 
  getLocalizedGoldDeposits, 
  getLocalizedIndicators, 
  getLocalizedTestimonials, 
  getLocalizedFaqs 
} from "./translations";

export default function App() {
  const [lang, setLang] = useState<Language>("fr");
  const [selectedDeposit, setSelectedDeposit] = useState<GoldDeposit | null>(null);
  const [activeESGPillar, setActiveESGPillar] = useState<"env" | "soc" | "gov">("env");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Localized data lists
  const goldDeposits = getLocalizedGoldDeposits(lang);
  const sciIndicators = getLocalizedIndicators(lang);
  const testimonials = getLocalizedTestimonials(lang);
  const investmentFaqs = getLocalizedFaqs(lang);
  const t = STATIC_TRANSLATIONS[lang];

  // Generated premium African representation imagery paths
  const heroImgUrl = new URL("./assets/images/sci_mining_hero_1781619805773.jpg", import.meta.url).href;
  const boardroomImgUrl = new URL("./assets/images/sci_mining_boardroom_1781619820404.jpg", import.meta.url).href;
  const esgEnvImgUrl = new URL("./assets/images/sci_esg_env_1781619737986.jpg", import.meta.url).href;
  const esgSocImgUrl = new URL("./assets/images/sci_esg_soc_1781619754042.jpg", import.meta.url).href;
  const esgGovImgUrl = new URL("./assets/images/sci_esg_gov_1781619769149.jpg", import.meta.url).href;

  const activeEsgImg = activeESGPillar === "env" 
    ? esgEnvImgUrl 
    : activeESGPillar === "soc" 
    ? esgSocImgUrl 
    : esgGovImgUrl;

  const activeEsgAlt = activeESGPillar === "env" 
    ? (lang === "fr" ? "Traitement gravimétrique physique et ceintures d'acacias" : "Physical gravity separation and acacia belts")
    : activeESGPillar === "soc" 
    ? (lang === "fr" ? "Adduction d'eau potable et bornes solaires pour les communautés" : "Drinking water pipe and solar fountains for communities")
    : (lang === "fr" ? "Conseil d'administration et audits de transparence de l'exploration" : "Board of directors and exploration transparency audits");

  const handleOpenDepositDetails = (deposit: GoldDeposit) => {
    // Make sure we pass the correct localized deposit object to the modal
    const reSyncDeposit = goldDeposits.find(d => d.id === deposit.id) || deposit;
    setSelectedDeposit(reSyncDeposit);
  };

  const handleCloseProjectModal = () => {
    setSelectedDeposit(null);
  };

  const copyToClipboard = (email: string) => {
    if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleModalContactRequest = (projectName: string) => {
    setSelectedDeposit(null);
    const contactSec = document.getElementById("contact-section");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-neutral-300 font-sans bg-neutral-950 overflow-x-hidden selection:bg-amber-500/20 selection:text-white animate-fade-in">
      
      {/* HEADER / BARRE DE NAVIGATION */}
      <header className="sticky top-0 z-40 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group text-neutral-100 shrink-0">
            <div className="relative w-10 h-10 bg-gradient-to-tr from-amber-600 to-yellow-500 rounded-xl flex items-center justify-center text-black font-extrabold text-lg shadow-lg group-hover:scale-105 transition-all">
              G
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neutral-900 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              </div>
            </div>
            <div>
              <span className="font-sans font-extrabold text-lg tracking-tight text-white block uppercase leading-none">
                SCI Mining
              </span>
              <span className="text-[9px] tracking-wider text-amber-500 font-mono font-semibold uppercase block mt-1">
                {lang === "fr" ? "Exploration Aurifère Maradi & Agadez" : "Gold Exploration Maradi & Agadez"}
              </span>
            </div>
          </a>

          {/* Navigation Simple Desktop */}
          <nav className="hidden xl:flex items-center gap-6 lg:gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            <a href="#" className="hover:text-amber-500 transition-colors">{t.navHome}</a>
            <a href="#projects-section" className="hover:text-amber-500 transition-colors">{t.navProjects}</a>
            <a href="#esg-section" className="hover:text-amber-500 transition-colors">{t.navEthics}</a>
            <a href="#faq-section" className="hover:text-amber-500 transition-colors">{t.navFaq}</a>
            <a href="#contact-section" className="hover:text-amber-500 transition-colors">{t.navContact}</a>
          </nav>

          {/* Language Toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center bg-neutral-900/90 border border-neutral-800 p-0.5 rounded-lg">
              <button
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md transition-all cursor-pointer ${
                  lang === "fr" 
                    ? "bg-amber-500 text-neutral-950 shadow" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md transition-all cursor-pointer ${
                  lang === "en" 
                    ? "bg-amber-500 text-neutral-950 shadow" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a 
              href="#contact-section" 
              className="hidden sm:flex bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold font-sans uppercase px-5 py-2.5 rounded-xl transition-all shadow-md items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.btnContact}</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION CHIC */}
      <section className="relative min-h-[85vh] flex items-center py-20 lg:py-28 px-6 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          <img 
            src={heroImgUrl}
            alt={lang === "fr" ? "Exploration aurifère de SCI Mining au Niger" : "SCI Mining gold exploration in Niger"}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-35 scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-neutral-950/40"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-950/90 to-transparent pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono rounded-full font-semibold uppercase tracking-widest">
              <span>{t.heroSubtitle}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold text-white tracking-tight leading-tight">
              {t.heroTitle}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600">{t.heroTitleGradient}</span>{t.heroTitleEnd}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-neutral-300 font-sans font-light leading-relaxed max-w-3xl">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects-section" 
                className="bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-all font-bold text-xs uppercase px-7 py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 tracking-wider cursor-pointer font-sans"
              >
                <span>{t.heroBtnDiscover}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a 
                href="#contact-section" 
                className="bg-neutral-900 hover:bg-neutral-850/80 text-neutral-200 border border-neutral-800 transition-all font-semibold text-xs uppercase px-7 py-4 rounded-xl flex items-center justify-center gap-2 tracking-wider cursor-pointer font-sans"
              >
                <span>{t.heroBtnContact}</span>
                <Mail className="w-4 h-4 text-amber-500" />
              </a>
            </div>

            {/* Credential items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-12 border-t border-neutral-900 font-mono text-[10px]">
              <div className="space-y-1 bg-neutral-955 p-3 rounded-lg border border-neutral-900">
                <span className="text-neutral-500 block uppercase font-medium">{t.badgeLocations}</span>
                <span className="text-amber-550 font-semibold block uppercase">{t.badgeLocationsVal}</span>
              </div>
              <div className="space-y-1 bg-neutral-955 p-3 rounded-lg border border-neutral-900">
                <span className="text-neutral-500 block uppercase font-medium">{t.badgeProcess}</span>
                <span className="text-amber-550 font-semibold block">{t.badgeProcessVal}</span>
              </div>
              <div className="space-y-1 bg-neutral-955 p-3 rounded-lg border border-neutral-900">
                <span className="text-neutral-500 block uppercase font-medium">{t.badgeEquipment}</span>
                <span className="text-amber-550 font-semibold block">{t.badgeEquipmentVal}</span>
              </div>
              <div className="space-y-1 bg-neutral-955 p-3 rounded-lg border border-neutral-900">
                <span className="text-neutral-500 block uppercase font-medium">{t.badgeImpact}</span>
                <span className="text-amber-550 font-semibold block">{t.badgeImpactVal}</span>
              </div>
            </div>
          </div>

          {/* Hero right panel: latest updates */}
          <div className="lg:col-span-4 hidden lg:block bg-neutral-900/60 border border-neutral-850 p-6 rounded-2xl shadow-xl relative">
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-tr from-amber-600 to-yellow-500 rounded-full flex items-center justify-center text-black shadow-md">
              <Award className="w-5 h-5" />
            </div>
            
            <h4 className="text-xs font-bold text-amber-500 font-mono tracking-widest block mb-4 uppercase">
              {t.sidebarTitle}
            </h4>
            
            <p className="text-[11px] text-neutral-350 leading-relaxed mb-6 font-light font-sans">
              {t.sidebarText}
            </p>

            <div className="border-t border-neutral-800 pt-4 space-y-3 font-sans">
              <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-wider block">
                {lang === "fr" ? "Méthodologie Propre" : "Clean Methodology"}
              </span>
              <ul className="space-y-2 text-[11px] text-neutral-350">
                <li className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span>{lang === "fr" ? "Séparation gravimétrique 100% physique" : "100% physical gravity separation"}</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span>{lang === "fr" ? "Respect de l'environnement au Sahel" : "Environmental protection in the Sahel"}</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                  <span>{lang === "fr" ? "Eau potable de forage partagée aux populations" : "Drilling drinking water shared with populations"}</span>
                </li>
              </ul>
            </div>

            <a 
              href="#projects-section" 
              className="mt-6 w-full text-center text-xs text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-850 py-2.5 rounded-xl border border-neutral-800 block transition-all font-semibold font-sans"
            >
              {t.sidebarReportBtn}
            </a>
          </div>
        </div>
      </section>

      {/* PROJETS D'EXPLORATION ET DE DÉVELOPPEMENT */}
      <section id="projects-section" className="py-24 px-6 bg-neutral-950 border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] text-amber-500 font-mono tracking-widest font-semibold uppercase px-3 py-1 bg-amber-500/5 border border-amber-500/10 rounded-full inline-block">
              {t.projPill}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sans max-w-3xl mx-auto tracking-tight">
              {t.projTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 max-w-xl mx-auto font-sans font-light leading-relaxed">
              {t.projDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
            {goldDeposits.map((deposit) => (
              <div 
                key={deposit.id}
                className="bg-neutral-900/30 border border-neutral-850 hover:border-amber-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => handleOpenDepositDetails(deposit)}
              >
                {/* Project Image */}
                {deposit.imageUrl && (
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={deposit.imageUrl}
                      alt={deposit.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
                  </div>
                )}

                {/* Main Header visual */}
                <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 border-b border-neutral-900 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-colors pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] text-neutral-400 font-mono flex items-center gap-1 bg-neutral-950 p-1 px-2.5 rounded border border-neutral-850">
                      <MapPin className="w-3  h-3 text-amber-500" />
                      {deposit.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                    {deposit.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1">
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                    {deposit.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-neutral-900">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-500 block">
                      {lang === "fr" ? "Objectifs & Engagements" : "Key Concession Commitments"}
                    </span>
                    <ul className="space-y-1.5">
                      {deposit.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-neutral-350 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 bg-neutral-900/15 border-t border-neutral-900 flex items-center justify-between text-xs text-amber-500 font-semibold uppercase tracking-wider">
                  <span>{t.projAnalyzeBtn}</span>
                  <div className="w-7 h-7 bg-amber-500/10 rounded-lg group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RSE Trust badge line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-900/20 p-6 border border-neutral-900 rounded-2xl text-[11px] font-mono">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4.5 h-4.5 text-amber-500" />
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[9px]">{t.trustLegal}</span>
                <span className="text-neutral-200 font-semibold">{t.trustLegalVal}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Users2 className="w-4.5 h-4.5 text-amber-500" />
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[9px]">{t.trustSafety}</span>
                <span className="text-neutral-200 font-semibold">{t.trustSafetyVal}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Lock className="w-4.5 h-4.5 text-amber-500" />
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[9px]">{t.trustFinance}</span>
                <span className="text-neutral-200 font-semibold">{t.trustFinanceVal}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATÉGIE RSE / EXPLOITATION VERTUEUSE */}
      <section id="esg-section" className="py-24 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[10px] text-amber-500 font-mono tracking-widest font-semibold uppercase bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full inline-block">
              {t.esgPill}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-white max-w-2xl mx-auto leading-tight tracking-tight">
              {t.esgTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 max-w-xl mx-auto font-sans font-light leading-relaxed">
              {t.esgDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: ESG Toggles */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex border-b border-neutral-850">
                <button
                  onClick={() => setActiveESGPillar("env")}
                  className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                    activeESGPillar === "env" 
                      ? "text-amber-500 border-amber-500" 
                      : "text-neutral-400 border-transparent hover:text-neutral-200"
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5" /> {t.esgPillarE}
                  </span>
                </button>
                <button
                  onClick={() => setActiveESGPillar("soc")}
                  className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                    activeESGPillar === "soc" 
                      ? "text-amber-500 border-amber-500" 
                      : "text-neutral-400 border-transparent hover:text-neutral-200"
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Users2 className="w-3.5 h-3.5" /> {t.esgPillarS}
                  </span>
                </button>
                <button
                  onClick={() => setActiveESGPillar("gov")}
                  className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                    activeESGPillar === "gov" 
                      ? "text-amber-500 border-amber-500" 
                      : "text-neutral-400 border-transparent hover:text-neutral-200"
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <HardHat className="w-3.5 h-3.5" /> {t.esgPillarG}
                  </span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="space-y-6">
                {activeESGPillar === "env" && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Leaf className="w-4.5 h-4.5 text-amber-500" />
                      {t.envTitle}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans font-light">
                      {t.envDesc}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-400 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.envBullet1}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.envBullet2}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.envBullet3}
                      </li>
                    </ul>
                  </div>
                )}

                {activeESGPillar === "soc" && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Users2 className="w-4.5 h-4.5 text-amber-500" />
                      {t.socTitle}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans font-light">
                      {t.socDesc}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-400 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.socBullet1}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.socBullet2}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.socBullet3}
                      </li>
                    </ul>
                  </div>
                )}

                {activeESGPillar === "gov" && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <HardHat className="w-4.5 h-4.5 text-amber-500" />
                      {t.govTitle}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans font-light">
                      {t.govDesc}
                    </p>
                    <ul className="space-y-2 text-xs text-neutral-400 font-sans">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.govBullet1}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.govBullet2}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {t.govBullet3}
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Technical Team Image */}
            <div className="lg:col-span-1 hidden lg:block border-none"></div>
            <div className="lg:col-span-4 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-amber-950 rounded-2xl blur opacity-25 -z-10 animate-pulse"></div>
              <div className="bg-neutral-905 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl space-y-4">
                <img 
                  src={activeEsgImg}
                  alt={activeEsgAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-52 object-cover transition-all duration-500"
                />
                <div className="p-5 space-y-3">
                  <h4 className="text-xs font-bold font-mono text-amber-500 tracking-widest uppercase">
                    {activeESGPillar === "env" ? t.envQuoteLabel : activeESGPillar === "soc" ? t.socQuoteLabel : t.govQuoteLabel}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light">
                    {activeESGPillar === "env" 
                      ? t.envQuote
                      : activeESGPillar === "soc" 
                      ? t.socQuote
                      : t.govQuote}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-2 text-xs border-t border-neutral-850">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      <Users2 className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-neutral-200 font-semibold block text-xs">{t.esgTeamBadge}</span>
                      <span className="text-neutral-500 block text-[9px] font-mono">{t.esgTeamSub}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSURANCE & TÉMOIGNAGES */}
      <section className="py-20 px-6 bg-neutral-900/40 border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <span className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase block mb-2">{t.testiPill}</span>
            <h3 className="text-xl md:text-2xl font-bold text-white font-sans">{t.testiTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((tItem) => (
              <div 
                key={tItem.id}
                className="bg-neutral-955 p-6 rounded-2xl border border-neutral-850 space-y-4 flex flex-col justify-between hover:border-neutral-800 transition-all duration-300"
              >
                <p className="text-xs text-neutral-300 leading-relaxed font-serif italic">
                  "{tItem.text}"
                </p>
                
                <div className="border-t border-neutral-900 pt-4 flex items-center justify-between text-xs font-sans">
                  <div>
                    <span className="text-neutral-250 font-bold block">{tItem.author}</span>
                    <span className="text-neutral-500 block text-[9px] mt-0.5">{tItem.role}</span>
                  </div>
                  <span className="text-amber-550 font-mono font-medium tracking-tight text-[10px] uppercase bg-amber-500/5 px-2 py-1 rounded border border-amber-500/10">
                    {tItem.company.split(" ")[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION: QUESTIONS FRÉQUENTES SUR LES INVESTISSEMENTS */}
      <section id="faq-section" className="py-24 px-6 bg-neutral-900/20 border-t border-neutral-900 relative">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] text-amber-500 font-mono tracking-widest font-semibold uppercase bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full inline-block">
              {t.faqPill}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-sans tracking-tight">
              {t.faqTitle}
            </h2>
            <p className="text-xs text-neutral-400 max-w-xl mx-auto leading-relaxed">
              {t.faqDesc}
            </p>
          </div>

          <div className="space-y-4">
            {investmentFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-neutral-950/40 border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? "border-amber-500/40 shadow-lg shadow-amber-500/5" 
                      : "border-neutral-850 hover:border-neutral-800"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-xs md:text-sm font-semibold text-neutral-150 font-sans tracking-tight flex items-center gap-3">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? "text-amber-500" : "text-neutral-500"}`} />
                      {faq.question}
                    </span>
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 ${
                      isOpen 
                        ? "bg-amber-500/10 border-amber-500/30 text-amber-500 rotate-180" 
                        : "bg-neutral-900 border-neutral-800 text-neutral-500"
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[350px] border-t border-neutral-850/60 animate-fade-in" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 text-xs text-neutral-350 leading-relaxed font-sans font-light">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION DU CONTACT SIMPLIFIÉ */}
      <section id="contact-section" className="py-24 px-6 bg-neutral-955 border-t border-neutral-900 relative">
        <div className="max-w-4xl mx-auto bg-neutral-905 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 text-center">
          <div className="space-y-4">
            <span className="text-[10px] text-amber-500 font-mono tracking-widest font-semibold uppercase bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full inline-block">
              {t.contactPill}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
              {t.contactTitle}
            </h2>
            <p className="text-xs text-neutral-400 max-w-lg mx-auto leading-relaxed font-sans font-light">
              {t.contactDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 max-w-2xl mx-auto">
            {/* Email 1 */}
            <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-2xl flex flex-col items-center justify-between space-y-4 group hover:border-amber-500/20 transition-all duration-300 animate-fade-in">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 w-full overflow-hidden">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block">{t.contactEmail1Label}</span>
                <span className="text-sm font-semibold text-white block truncate select-all">contact@scimining.com</span>
              </div>
              <div className="flex gap-2 w-full pt-2">
                <a 
                  href="mailto:contact@scimining.com"
                  className="flex-1 py-1.5 px-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-[10px] uppercase rounded-lg text-center transition-all font-sans"
                >
                  {t.contactBtnWrite}
                </a>
                <button 
                  onClick={() => copyToClipboard("contact@scimining.com")}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-[10px] uppercase rounded-lg transition-all border border-neutral-800 font-sans cursor-pointer"
                >
                  {copiedEmail === "contact@scimining.com" ? t.contactBtnCopied : t.contactBtnCopy}
                </button>
              </div>
            </div>

            {/* Email 2 */}
            <div className="bg-neutral-950 border border-neutral-850 p-6 rounded-2xl flex flex-col items-center justify-between space-y-4 group hover:border-amber-500/20 transition-all duration-300 animate-fade-in">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-yellow-500 flex items-center justify-center text-neutral-950">
                <Lock className="w-5 h-5" />
              </div>
              <div className="space-y-1 w-full overflow-hidden">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block">{t.contactEmail2Label}</span>
                <span className="text-sm font-semibold text-white block truncate select-all">sciprotonmaol.com@protonmail.com</span>
              </div>
              <div className="flex gap-2 w-full pt-2">
                <a 
                  href="mailto:sciprotonmaol.com@protonmail.com"
                  className="flex-1 py-1.5 px-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-[10px] uppercase rounded-lg text-center transition-all font-sans"
                >
                  {t.contactBtnWrite}
                </a>
                <button 
                  onClick={() => copyToClipboard("sciprotonmaol.com@protonmail.com")}
                  className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-semibold text-[10px] uppercase rounded-lg transition-all border border-neutral-800 font-sans cursor-pointer"
                >
                  {copiedEmail === "sciprotonmaol.com@protonmail.com" ? t.contactBtnCopied : t.contactBtnCopy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SIMPLE & CHIC */}
      <footer className="bg-neutral-955 border-t border-neutral-900 px-6 py-12 text-xs text-neutral-500 font-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-amber-550 font-extrabold text-xs">
              M
            </div>
            <div>
              <span className="font-bold text-neutral-400 block tracking-wider uppercase font-sans">{t.footerDesc}</span>
              <span className="text-[9px] text-neutral-600 block mt-0.5 font-mono">{t.footerPhone}</span>
            </div>
          </div>

          <div className="flex gap-4 md:gap-6 font-mono text-[10px]">
            <span>Email: contact@scimining.com</span>
            <span>Tel: +227 20 73 45 XX</span>
          </div>

          <div className="text-right text-[10px] text-neutral-600">
            {t.footerRights}
          </div>
        </div>
      </footer>

      {/* POPUP DE RECHERCHE GÉOLOGIQUE SPÉCIFIQUE */}
      <ProjectModal
        deposit={selectedDeposit}
        onClose={handleCloseProjectModal}
        onContactRequest={handleModalContactRequest}
        lang={lang}
      />
    </div>
  );
}
