/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { getLocalizedGoldDeposits, Language } from "../translations";
import { DollarSign, Percent, TrendingUp, Handshake, Landmark, ChevronRight, ShieldCheck } from "lucide-react";

interface FinanceSimulatorProps {
  lang: Language;
}

const simTranslations = {
  fr: {
    title: "Simulateur d'Investissement Aurifère",
    subtitle: "Évaluez l'efficacité opérationnelle et l'impact local de SCI Mining au Niger",
    labelParticipation: "Votre participation financière",
    labelExtraction: "Niveau d'extraction industrielle",
    secured: "Sécurisé (60%)",
    nominal: "Nominal (100%)",
    optimal: "Optimal (130%)",
    ethicalTitle: "Cadre Éthique & Conformité Commerciale",
    ethicalDesc: "SCI Mining garantit une traçabilité totale et le respect des normes internationales de protection des investissements.",
    projectionsTitle: "PROJECTIONS GÉOPHYSIQUES & FINANCIÈRES",
    annualRevenue: "Rendement Annuel Estimé",
    estimatedRate: "Taux d'intérêt estimé :",
    payoutPeriod: "Payout Period (Amortissement)",
    years: "ans",
    roiEst: "Retour sur investissement estimé",
    rseTitle: "Impact de Responsabilité Sociétale (RSE locale)",
    stateRoyalties: "Bons d'infrastructure et Taxes Locales (5.5%)",
    communityFund: "Fonds de Co-développement Communautaire (1.5%)",
    complianceNote: "*Note de conformité : Ce modèle technique de valorisation d'actifs aurifères est fourni uniquement à titre d'information d'études géologiques (SCI Mining 2026). La rentabilité effective dépend de l'évolution des cours de l'once d'or sur le London Bullion Market (LBMA).",
    selectedGisement: "GISEMENT SÉLECTIONNÉ",
    gradeLabel: "Teneur Estimée",
    capexLabel: "Capex Initial"
  },
  en: {
    title: "Gold Investment Simulator",
    subtitle: "Evaluate the operational efficiency and local footprint of SCI Mining in Niger",
    labelParticipation: "Your Investment Coverage",
    labelExtraction: "Industrial Extraction Performance",
    secured: "Conservative (60%)",
    nominal: "Nominal (100%)",
    optimal: "Optimized (130%)",
    ethicalTitle: "Compliance & Ethical Policy",
    ethicalDesc: "SCI Mining ensures end-to-end traceability and strict compliance with global investment safety regimes.",
    projectionsTitle: "FINANCIAL & GEOPHYSICAL PROJECTIONS",
    annualRevenue: "Estimated Annual Return",
    estimatedRate: "Estimated yield rate:",
    payoutPeriod: "Payback Period (Amortization)",
    years: "years",
    roiEst: "Projected return on capital",
    rseTitle: "Corporate Social Responsibility Impact (Local CSR)",
    stateRoyalties: "Infrastructure & Local Treasury Taxes (5.5%)",
    communityFund: "Community Co-development Fund (1.5%)",
    complianceNote: "*Compliance Notice: This technical valuation model is provided for geological context purposes only (SCI Mining 2026). Actual returns depend on gold spot price actions on the London Bullion Market (LBMA).",
    selectedGisement: "SELECTED DEPOSIT",
    gradeLabel: "Estimated Grade",
    capexLabel: "Initial Capex"
  }
};

export default function FinanceSimulator({ lang }: FinanceSimulatorProps) {
  const goldDeposits = getLocalizedGoldDeposits(lang);
  const [selectedDeposit, setSelectedDeposit] = useState(goldDeposits[0]);
  const [investmentAmount, setInvestmentAmount] = useState<number>(5000000); // 5 Millions USD par défaut
  const [productionFactor, setProductionFactor] = useState<number>(100); // 100% de la capacité cible par défaut

  const s = simTranslations[lang];

  // Recorrelate if language updates
  const activeDeposit = goldDeposits.find(d => d.id === selectedDeposit.id) || goldDeposits[0];

  // Calculs financiers dynamiques sur l'or
  // Taux de rendement de base basé sur le TRI réel indiqué dans notre data
  const baseROI = activeDeposit.id === "sci-maradi" ? 0.298 : 0.252;
  const currentROI = baseROI * (0.85 + (productionFactor / 100) * 0.15); // Ajusté à l'efficience d'extraction
  
  const annualRevenue = investmentAmount * currentROI;
  const paybackPeriod = 1 / currentROI;
  
  // Retombées de l'or de SCI Mining
  const stateRoyalties = annualRevenue * 0.055; // 5.5% estimé de taxes et prélèvements
  const localCommunityFund = annualRevenue * 0.015; // 1.5% réinvestis directement dans les projets locaux

  const handleDepositChange = (depositId: string) => {
    const deposit = goldDeposits.find(d => d.id === depositId);
    if (deposit) {
      setSelectedDeposit(deposit);
    }
  };

  return (
    <div id="finance-simulator-component" className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6 mb-8">
        <div>
          <h3 className="text-xl font-bold font-sans text-neutral-100 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-500" />
            {s.title}
          </h3>
          <p className="text-xs text-neutral-400 mt-1">{s.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {goldDeposits.map((deposit) => (
            <button
              key={deposit.id}
              onClick={() => handleDepositChange(deposit.id)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                activeDeposit.id === deposit.id
                  ? "bg-amber-500 border-amber-500 text-neutral-950 font-bold shadow"
                  : "bg-neutral-800 border-neutral-750 text-neutral-300 hover:bg-neutral-750"
              }`}
            >
              {deposit.name.replace("Projet ", "").replace("Project ", "")}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-[10px] text-amber-500/80 font-mono tracking-widest block mb-1">{s.selectedGisement}</span>
            <h4 className="text-base font-bold text-white mb-2">{activeDeposit.name}</h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">{activeDeposit.description}</p>
            
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-neutral-950/50 p-2.5 rounded border border-neutral-800">
                <span className="text-neutral-500 block mb-0.5">{s.gradeLabel}</span>
                <span className="text-neutral-200 font-semibold font-mono text-xs">{activeDeposit.grade}</span>
              </div>
              <div className="bg-neutral-950/50 p-2.5 rounded border border-neutral-800">
                <span className="text-neutral-500 block mb-0.5">{s.capexLabel}</span>
                <span className="text-amber-400 font-semibold font-mono text-xs">{activeDeposit.capex}</span>
              </div>
            </div>
          </div>

          {/* Investment Slider */}
          <div className="space-y-3 bg-neutral-950/40 p-5 rounded-xl border border-neutral-800">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-neutral-300">{s.labelParticipation}</label>
              <span className="text-amber-500 font-mono font-bold">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(investmentAmount)}
              </span>
            </div>
            <input
              type="range"
              min={500000}
              max={25000000}
              step={250000}
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="w-full h-1 bg-neutral-850 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
            />
            <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
              <span>$500K</span>
              <span>$10M</span>
              <span>$25M</span>
            </div>
          </div>

          {/* Production Slider */}
          <div className="space-y-3 bg-neutral-950/40 p-5 rounded-xl border border-neutral-800">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-neutral-300">{s.labelExtraction}</label>
              <span className="text-amber-500 font-mono font-bold">{productionFactor}%</span>
            </div>
            <input
              type="range"
              min={60}
              max={130}
              step={5}
              value={productionFactor}
              onChange={(e) => setProductionFactor(Number(e.target.value))}
              className="w-full h-1 bg-neutral-850 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
            />
            <div className="flex justify-between text-[9px] text-neutral-500 font-mono">
              <span>{s.secured}</span>
              <span>{s.nominal}</span>
              <span>{s.optimal}</span>
            </div>
          </div>

          <div className="bg-amber-500/5 rounded-xl p-4 border border-amber-500/10 flex gap-3 text-xs text-neutral-400">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-amber-400 font-semibold block mb-0.5">{s.ethicalTitle}</span>
              {s.ethicalDesc}
            </div>
          </div>
        </div>

        {/* Right column: Capital Return Metrics */}
        <div className="lg:col-span-7 bg-neutral-950 p-6 lg:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
          <div className="space-y-6">
            <span className="text-[10px] text-amber-500/80 font-mono tracking-widest block">{s.projectionsTitle}</span>
            
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-neutral-850">
              <div className="space-y-1">
                <span className="text-xs text-neutral-500 block">{s.annualRevenue}</span>
                <span className="text-xl lg:text-2xl font-bold text-emerald-400 font-mono block">
                  {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(annualRevenue)}
                </span>
                <span className="text-[9px] text-neutral-400 font-mono flex items-center gap-1">
                  <Percent className="w-3 h-3 text-amber-500" /> {s.estimatedRate} {(currentROI * 100).toFixed(1)}%
                </span>
              </div>

              <div className="space-y-1 border-l border-neutral-850 pl-6">
                <span className="text-xs text-neutral-500 block">{s.payoutPeriod}</span>
                <span className="text-xl lg:text-2xl font-bold text-white font-mono block">
                  {paybackPeriod.toFixed(1)} <span className="text-xs font-sans text-neutral-400">{s.years}</span>
                </span>
                <span className="text-[9px] text-neutral-400 font-mono">{s.roiEst}</span>
              </div>
            </div>

            {/* Contribution locale */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-neutral-300 flex items-center gap-2">
                <Handshake className="w-4 h-4 text-amber-500" />
                {s.rseTitle}
              </h5>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs bg-neutral-900/40 p-3 rounded-lg border border-neutral-850">
                  <span className="text-neutral-400 text-[11px] flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-amber-500/40 animate-pulse" />
                    {s.stateRoyalties}
                  </span>
                  <span className="font-mono text-white text-[11px] font-semibold">
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(stateRoyalties)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-neutral-900/40 p-3 rounded-lg border border-neutral-850">
                  <span className="text-neutral-400 text-[11px] flex items-center gap-1.5">
                    <Handshake className="w-3.5 h-3.5 text-amber-500/40" />
                    {s.communityFund}
                  </span>
                  <span className="font-mono text-amber-400 text-[11px] font-semibold">
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(localCommunityFund)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[9px] text-neutral-500 leading-relaxed border-t border-neutral-850 pt-4 mt-6">
            {s.complianceNote}
          </p>
        </div>
      </div>
    </div>
  );
}
