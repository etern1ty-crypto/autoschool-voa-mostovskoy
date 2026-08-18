import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  DRIVER_PREPARATION_TARIFFS as defaultTariffs,
  RETRAINING_PROGRAMS as defaultRetraining,
  PRACTICE_SERVICES as defaultPractice,
  REAL_DROM_REVIEWS as defaultReviews,
} from '../data/autoschoolData';
import { TariffItem, RetrainingItem, PracticeServiceItem, Review } from '../types';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  category: string;
  date: string;
  status: 'new' | 'in_progress' | 'enrolled' | 'completed';
  notes?: string;
}

interface CrmContextType {
  leads: Lead[];
  addLead: (name: string, phone: string, category: string) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  deleteLead: (id: string) => void;

  tariffs: TariffItem[];
  retraining: RetrainingItem[];
  practice: PracticeServiceItem[];
  updateTariffPrice: (id: string, newPrice: number) => void;
  updateRetrainingPrice: (id: string, newPrice: number) => void;
  updatePracticePrice: (id: string, newPrice: number) => void;

  reviews: Review[];
  addReview: (review: Omit<Review, 'id'>) => void;
  deleteReview: (id: string) => void;

  resetAllToDefault: () => void;
}

const initialLeads: Lead[] = [
  {
    id: 'lead-1',
    name: 'Михаил Сорокин',
    phone: '+7 (918) 456-78-90',
    category: 'Категория «В» (Легковые)',
    date: '18.08.2026, 14:20',
    status: 'new',
    notes: 'Интересуется рассрочкой на 3 месяца',
  },
  {
    id: 'lead-2',
    name: 'Анна Кузнецова',
    phone: '+7 (928) 112-33-44',
    category: 'Категория «А» (Мотоцикл)',
    date: '18.08.2026, 11:05',
    status: 'in_progress',
    notes: 'Хочет начать с сентября',
  },
];

const CrmContext = createContext<CrmContextType | undefined>(undefined);

export const CrmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Leads
  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = localStorage.getItem('voa_crm_leads');
    return saved ? JSON.parse(saved) : initialLeads;
  });

  // Tariffs
  const [tariffs, setTariffs] = useState<TariffItem[]>(() => {
    const saved = localStorage.getItem('voa_crm_tariffs');
    return saved ? JSON.parse(saved) : defaultTariffs;
  });

  const [retraining, setRetraining] = useState<RetrainingItem[]>(() => {
    const saved = localStorage.getItem('voa_crm_retraining');
    return saved ? JSON.parse(saved) : defaultRetraining;
  });

  const [practice, setPractice] = useState<PracticeServiceItem[]>(() => {
    const saved = localStorage.getItem('voa_crm_practice');
    return saved ? JSON.parse(saved) : defaultPractice;
  });

  // Reviews
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('voa_crm_reviews');
    return saved ? JSON.parse(saved) : defaultReviews;
  });

  useEffect(() => {
    localStorage.setItem('voa_crm_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('voa_crm_tariffs', JSON.stringify(tariffs));
  }, [tariffs]);

  useEffect(() => {
    localStorage.setItem('voa_crm_retraining', JSON.stringify(retraining));
  }, [retraining]);

  useEffect(() => {
    localStorage.setItem('voa_crm_practice', JSON.stringify(practice));
  }, [practice]);

  useEffect(() => {
    localStorage.setItem('voa_crm_reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Lead actions
  const addLead = (name: string, phone: string, category: string) => {
    const newLead: Lead = {
      id: 'lead-' + Date.now(),
      name,
      phone,
      category,
      date: new Date().toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'new',
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  // Price actions
  const updateTariffPrice = (id: string, newPrice: number) => {
    setTariffs((prev) =>
      prev.map((t) => (t.id === id ? { ...t, price: newPrice } : t))
    );
  };

  const updateRetrainingPrice = (id: string, newPrice: number) => {
    setRetraining((prev) =>
      prev.map((r) => (r.id === id ? { ...r, price: newPrice } : r))
    );
  };

  const updatePracticePrice = (id: string, newPrice: number) => {
    setPractice((prev) =>
      prev.map((p) => (p.id === id ? { ...p, pricePerHour: newPrice } : p))
    );
  };

  // Review actions
  const addReview = (review: Omit<Review, 'id'>) => {
    const newRev: Review = {
      ...review,
      id: 'rev-' + Date.now(),
    };
    setReviews((prev) => [newRev, ...prev]);
  };

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const resetAllToDefault = () => {
    setLeads(initialLeads);
    setTariffs(defaultTariffs);
    setRetraining(defaultRetraining);
    setPractice(defaultPractice);
    setReviews(defaultReviews);
    localStorage.removeItem('voa_crm_leads');
    localStorage.removeItem('voa_crm_tariffs');
    localStorage.removeItem('voa_crm_retraining');
    localStorage.removeItem('voa_crm_practice');
    localStorage.removeItem('voa_crm_reviews');
  };

  return (
    <CrmContext.Provider
      value={{
        leads,
        addLead,
        updateLeadStatus,
        deleteLead,
        tariffs,
        retraining,
        practice,
        updateTariffPrice,
        updateRetrainingPrice,
        updatePracticePrice,
        reviews,
        addReview,
        deleteReview,
        resetAllToDefault,
      }}
    >
      {children}
    </CrmContext.Provider>
  );
};

export const useCrm = () => {
  const context = useContext(CrmContext);
  if (!context) {
    throw new Error('useCrm must be used within a CrmProvider');
  }
  return context;
};
