import React, { useState } from 'react';
import { REAL_DROM_REVIEWS } from '../data/autoschoolData';
import { Star, MessageSquare, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews array to create seamless infinite loop
  const duplicatedReviews = [...REAL_DROM_REVIEWS, ...REAL_DROM_REVIEWS];

  return (
    <section id="reviews" className="py-12 sm:py-20 bg-[#080A0F] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 sm:mb-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-card border border-national-red/30 text-national-red text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Впечатления учеников
          </div>
          <h2 className="font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
            Отзывы наших выпускников
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-2">
            Реальные истории выпускников автошколы Мостовского отделения ВОА. Наведите курсор для паузы.
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Marquee Track from Right to Left */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#080A0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#080A0F] to-transparent z-10 pointer-events-none" />

        <div
          className={`flex gap-6 w-max ${
            isPaused ? 'animate-none' : 'animate-marquee'
          }`}
          style={{
            animation: isPaused ? 'none' : 'marquee 45s linear infinite',
          }}
        >
          {duplicatedReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="dashboard-card w-[320px] sm:w-[400px] rounded-xl p-5 sm:p-6 flex flex-col justify-between border-white/10 shrink-0 hover:border-national-red/60 transition-all select-none"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-surface-card border border-white/10 text-xs font-bold text-slate-300">
                    <CheckCircle className="w-3 h-3 text-national-red" />
                    <span>{rev.source}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-prestige-gold text-prestige-gold" />
                    ))}
                  </div>
                </div>

                <div className="tech-line mb-3" />

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4 italic">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white uppercase text-xs">{rev.author}</h4>
                  <div className="text-xs text-national-red font-semibold">{rev.category}</div>
                  {rev.instructor && (
                    <div className="text-xs text-slate-400 mt-0.5">Инструктор: {rev.instructor}</div>
                  )}
                </div>
                <div className="text-xs text-slate-500">{rev.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
