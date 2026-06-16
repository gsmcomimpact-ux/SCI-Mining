/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GoldDeposit {
  id: string;
  name: string;
  location: string;
  coordinates: string;
  description: string;
  longDescription: string;
  progress: number; // 0 to 100
  phase: string;
  grade: string; // Teneur en or (ex: 4.2 g/t)
  estimatedReserves: string;
  capex: string;
  irr: string; // Internal Rate of Return (ex: 26.4%)
  highlights: string[];
  imageUrl?: string;
}

export interface NigerIndicator {
  id: string;
  label: string;
  value: string;
  sub: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
}
