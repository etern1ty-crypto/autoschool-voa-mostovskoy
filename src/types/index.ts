export type CategoryId = 'A' | 'B' | 'C' | 'AB';

export interface TariffItem {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  duration: string;
  theoryHours: string;
  practiceHours: string;
  transmission: string;
  features: string[];
  popular?: boolean;
}

export interface RetrainingItem {
  id: string;
  title: string;
  fromCategory?: string;
  toCategory?: string;
  price: number;
  duration: string;
  hours: string;
  features: string[];
}

export interface PracticeServiceItem {
  id: string;
  title: string;
  vehicleType: string;
  pricePerHour: number;
  features: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  transmission: 'МКПП' | 'АКПП';
  image: string;
  year?: string;
  engine: string;
  description: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  category: string;
  date: string;
  rating: number;
  source: string;
  sourceUrl?: string;
  text: string;
  instructor?: string;
}
