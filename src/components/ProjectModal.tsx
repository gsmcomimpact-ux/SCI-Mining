/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GoldDeposit } from "../types";
import { X, Globe, MapPin, Award, CheckCircle2, Briefcase } from "lucide-react";
import { Language, STATIC_TRANSLATIONS } from "../translations";

interface ProjectModalProps {
  deposit: GoldDeposit | null;
  onClose: () => void;
  onContactRequest: (projectName: string) => void;
  lang: Language;
}

export default function ProjectModal({ deposit, onClose, onContactRequest, lang }: ProjectModalProps) {
  if (!deposit) return null;

  const t = STATIC_TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Content Container */}
      <div
        className="relative bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 transition-all duration-300 scale-100 translate-y-0"
      >
        {/* Banner/Header Block */}
        <div className="relative p-6 md:p-8 border-b border-neutral-800 overflow-hidden min-h-[220px] flex flex-col justify-end">
          {deposit.imageUrl && (
            <div className="absolute inset-x-0 top-0 bottom-0 z-0">
              <img 
                src={deposit.imageUrl}
                alt={deposit.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/55 to-transparent"></div>
            </div>
          )}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-white bg-neutral-850 hover:bg-neutral-800 p-2.5 rounded-full transition-all cursor-pointer border border-neutral-800 z-20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10">
            <span className="text-[10px] font-mono text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-widest font-semibold inline-block mb-3">
              {t.modalScope}
            </span>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{deposit.name}</h3>
            
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-neutral-350">
              <span className="flex items-center gap-1.5 font-sans">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {deposit.location}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                {deposit.coordinates}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Description Text */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest border-b border-neutral-800 pb-2">
                {t.modalTechTitle}
              </h4>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans font-light">
                {deposit.longDescription}
              </p>
              
              <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-850 space-y-2 text-xs">
                <span className="text-amber-550 font-semibold block">{t.modalGuaranteeLabel}</span>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  {t.modalGuaranteeText}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest border-b border-neutral-800 pb-2">
                  {t.modalAtoutsTitle}
                </h4>
                <ul className="space-y-2.5">
                  {deposit.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2.5 text-xs text-neutral-350 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="border-t border-neutral-850 pt-8 flex items-center justify-center">
            <button
              onClick={() => {
                onContactRequest(deposit.name);
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              {t.modalMeetingBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
