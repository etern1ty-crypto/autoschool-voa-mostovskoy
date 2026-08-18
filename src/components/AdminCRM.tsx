import React, { useState } from 'react';
import { useCrm, Lead } from '../context/CrmContext';
import {
  X,
  Users,
  DollarSign,
  Star,
  CheckCircle,
  Phone,
  MessageCircle,
  Trash2,
  Plus,
  Save,
  RotateCcw,
  Shield,
  TrendingUp,
} from 'lucide-react';

interface AdminCRMProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminCRM: React.FC<AdminCRMProps> = ({ isOpen, onClose }) => {
  const {
    leads,
    updateLeadStatus,
    deleteLead,
    tariffs,
    updateTariffPrice,
    retraining,
    updateRetrainingPrice,
    practice,
    updatePracticePrice,
    reviews,
    addReview,
    deleteReview,
    resetAllToDefault,
  } = useCrm();

  const [activeTab, setActiveTab] = useState<'leads' | 'prices' | 'reviews'>('leads');

  // Review Form State
  const [revAuthor, setRevAuthor] = useState('');
  const [revText, setRevText] = useState('');
  const [revCategory, setRevCategory] = useState('Категория В');
  const [revInstructor, setRevInstructor] = useState('');
  const [revRating, setRevRating] = useState(5);
  const [revSaved, setRevSaved] = useState(false);

  // Price Edit Local State
  const [editingPrices, setEditingPrices] = useState<{ [key: string]: number }>({});
  const [priceSaved, setPriceSaved] = useState(false);

  if (!isOpen) return null;

  const handlePriceChange = (id: string, value: string) => {
    const num = parseInt(value, 10) || 0;
    setEditingPrices((prev) => ({ ...prev, [id]: num }));
  };

  const handleSavePrices = () => {
    tariffs.forEach((t) => {
      if (editingPrices[t.id] !== undefined) {
        updateTariffPrice(t.id, editingPrices[t.id]);
      }
    });
    retraining.forEach((r) => {
      if (editingPrices[r.id] !== undefined) {
        updateRetrainingPrice(r.id, editingPrices[r.id]);
      }
    });
    practice.forEach((p) => {
      if (editingPrices[p.id] !== undefined) {
        updatePracticePrice(p.id, editingPrices[p.id]);
      }
    });
    setPriceSaved(true);
    setTimeout(() => setPriceSaved(false), 2500);
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revAuthor || !revText) return;

    addReview({
      author: revAuthor,
      text: revText,
      category: revCategory,
      instructor: revInstructor || undefined,
      rating: revRating,
      source: 'Drom.ru',
      date: new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    });

    setRevAuthor('');
    setRevText('');
    setRevInstructor('');
    setRevSaved(true);
    setTimeout(() => setRevSaved(false), 2500);
  };

  const statusLabels: { [key in Lead['status']]: { label: string; bg: string } } = {
    new: { label: 'Новая', bg: 'bg-national-red/20 text-national-red border-national-red/40' },
    in_progress: { label: 'В обработке', bg: 'bg-amber-500/20 text-amber-400 border-amber-500/40' },
    enrolled: { label: 'Обучается', bg: 'bg-blue-500/20 text-blue-400 border-blue-500/40' },
    completed: { label: 'Сдал экзамен', bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c0f0f] border border-national-red/40 rounded-2xl shadow-2xl flex flex-col text-white overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-surface-card/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-national-red/10 border border-national-red flex items-center justify-center text-national-red">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-lg uppercase tracking-tight flex items-center gap-2">
                Панель управления <span className="text-national-red">ВОА CRM</span>
              </div>
              <div className="text-xs text-slate-400">Управление заявками с сайта, ценами и отзывами</div>
            </div>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-surface-card border border-white/10">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase transition ${
                activeTab === 'leads'
                  ? 'bg-national-red text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Заявки ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab('prices')}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase transition ${
                activeTab === 'prices'
                  ? 'bg-national-red text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Цены
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase transition ${
                activeTab === 'reviews'
                  ? 'bg-national-red text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Отзывы ({reviews.length})
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded bg-surface-card text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* TAB 1: Leads */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="dashboard-card p-4 rounded-xl border-white/10">
                  <div className="text-xs text-slate-400 uppercase font-bold">Всего заявок:</div>
                  <div className="font-extrabold text-2xl text-white mt-1">{leads.length}</div>
                </div>
                <div className="dashboard-card p-4 rounded-xl border-white/10">
                  <div className="text-xs text-slate-400 uppercase font-bold">Новых заявок:</div>
                  <div className="font-extrabold text-2xl text-national-red mt-1">
                    {leads.filter((l) => l.status === 'new').length}
                  </div>
                </div>
                <div className="dashboard-card p-4 rounded-xl border-white/10">
                  <div className="text-xs text-slate-400 uppercase font-bold">В обучении:</div>
                  <div className="font-extrabold text-2xl text-emerald-400 mt-1">
                    {leads.filter((l) => l.status === 'enrolled').length}
                  </div>
                </div>
              </div>

              {/* Leads List */}
              {leads.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  Заявок пока нет. Новые заявки с форм сайта появятся здесь автоматически.
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="dashboard-card p-4 rounded-xl border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h4 className="font-extrabold text-white text-base">{lead.name}</h4>
                          <span
                            className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase border ${
                              statusLabels[lead.status].bg
                            }`}
                          >
                            {statusLabels[lead.status].label}
                          </span>
                        </div>
                        <div className="text-xs text-national-red font-semibold">{lead.category}</div>
                        <div className="text-[11px] text-slate-400">Дата: {lead.date}</div>
                        {lead.notes && (
                          <div className="text-[11px] text-amber-300/90 italic">Примечание: {lead.notes}</div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {/* Status dropdown */}
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            updateLeadStatus(lead.id, e.target.value as Lead['status'])
                          }
                          className="px-2.5 py-1.5 rounded bg-surface-card border border-white/10 text-xs text-white focus:outline-none focus:border-national-red"
                        >
                          <option value="new">Новая</option>
                          <option value="in_progress">В обработке</option>
                          <option value="enrolled">Обучается</option>
                          <option value="completed">Сдал экзамен</option>
                        </select>

                        {/* Call */}
                        <a
                          href={`tel:${lead.phone.replace(/\D/g, '')}`}
                          className="p-2 rounded bg-surface-card hover:bg-national-red hover:text-white border border-white/10 text-slate-300 transition"
                          title="Позвонить"
                        >
                          <Phone className="w-4 h-4" />
                        </a>

                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded bg-surface-card hover:bg-emerald-600 hover:text-white border border-white/10 text-emerald-400 transition"
                          title="Написать в WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>

                        {/* Delete */}
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-2 rounded bg-surface-card hover:bg-rose-600 hover:text-white border border-white/10 text-slate-400 transition"
                          title="Удалить заявку"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Prices Editor */}
          {activeTab === 'prices' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-base uppercase text-white">Редактор цен автошколы</h3>
                  <p className="text-xs text-slate-400">Изменения сразу вступают в силу на сайте и в калькуляторе</p>
                </div>
                <button
                  onClick={handleSavePrices}
                  className="px-5 py-2 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition flex items-center gap-2 shadow-lg shadow-national-red/30"
                >
                  <Save className="w-4 h-4" />
                  <span>Сохранить цены</span>
                </button>
              </div>

              {priceSaved && (
                <div className="p-3 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Цены успешно обновлены и сохранены на сайте!</span>
                </div>
              )}

              {/* Group 1: Подготовка */}
              <div className="space-y-3">
                <div className="text-xs uppercase font-extrabold text-national-red tracking-wider">
                  1. Подготовка водителей
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tariffs.map((t) => (
                    <div
                      key={t.id}
                      className="p-4 rounded-xl bg-surface-card border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-bold text-white text-xs">{t.title}</div>
                        <div className="text-[10px] text-slate-400">{t.transmission} • {t.duration}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          defaultValue={t.price}
                          onChange={(e) => handlePriceChange(t.id, e.target.value)}
                          className="w-24 px-2.5 py-1.5 rounded bg-[#080A0F] border border-white/10 text-white font-extrabold text-xs text-right focus:outline-none focus:border-national-red"
                        />
                        <span className="text-xs text-slate-400">₽</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 2: Переподготовка */}
              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase font-extrabold text-national-red tracking-wider">
                  2. Переподготовка водителей
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {retraining.map((r) => (
                    <div
                      key={r.id}
                      className="p-4 rounded-xl bg-surface-card border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-bold text-white text-xs">{r.title}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          defaultValue={r.price}
                          onChange={(e) => handlePriceChange(r.id, e.target.value)}
                          className="w-24 px-2.5 py-1.5 rounded bg-[#080A0F] border border-white/10 text-white font-extrabold text-xs text-right focus:outline-none focus:border-national-red"
                        />
                        <span className="text-xs text-slate-400">₽</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Group 3: Доп. вождение */}
              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase font-extrabold text-national-red tracking-wider">
                  3. Дополнительные часы вождения (за 1 час)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {practice.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-xl bg-surface-card border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-bold text-white text-xs">{p.title}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="number"
                          defaultValue={p.pricePerHour}
                          onChange={(e) => handlePriceChange(p.id, e.target.value)}
                          className="w-24 px-2.5 py-1.5 rounded bg-[#080A0F] border border-white/10 text-white font-extrabold text-xs text-right focus:outline-none focus:border-national-red"
                        />
                        <span className="text-xs text-slate-400">₽/ч</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {/* Add review form */}
              <form onSubmit={handleAddReviewSubmit} className="dashboard-card p-5 rounded-xl border-white/10 space-y-4">
                <div className="font-extrabold text-sm uppercase text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-national-red" />
                  <span>Добавить новый отзыв</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Имя автора:</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Петров"
                      value={revAuthor}
                      onChange={(e) => setRevAuthor(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-surface-card border border-white/10 text-white text-xs focus:outline-none focus:border-national-red"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Категория:</label>
                    <input
                      type="text"
                      placeholder="Категория В (70 000 ₽)"
                      value={revCategory}
                      onChange={(e) => setRevCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-surface-card border border-white/10 text-white text-xs focus:outline-none focus:border-national-red"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Инструктор (опционально):</label>
                    <input
                      type="text"
                      placeholder="Александр Иванович"
                      value={revInstructor}
                      onChange={(e) => setRevInstructor(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-surface-card border border-white/10 text-white text-xs focus:outline-none focus:border-national-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Текст отзыва:</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Напишите текст отзыва..."
                    value={revText}
                    onChange={(e) => setRevText(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-surface-card border border-white/10 text-white text-xs focus:outline-none focus:border-national-red"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-400 mr-2">Оценка:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRevRating(star)}
                        className="p-1 text-prestige-gold"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            star <= revRating ? 'fill-prestige-gold' : 'text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-sm bg-national-red text-white font-extrabold text-xs uppercase tracking-wider hover:bg-red-700 transition"
                  >
                    Опубликовать отзыв
                  </button>
                </div>

                {revSaved && (
                  <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Отзыв добавлен и сразу отображается в бегущей строке на сайте!
                  </div>
                )}
              </form>

              {/* Reviews list */}
              <div className="space-y-3">
                <div className="font-extrabold text-xs uppercase text-slate-400">Список активных отзывов ({reviews.length}):</div>
                {reviews.map((r) => (
                  <div
                    key={r.id}
                    className="dashboard-card p-4 rounded-xl border-white/10 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 font-bold text-white">
                        <span>{r.author}</span>
                        <span className="text-national-red">({r.category})</span>
                        <span className="text-[10px] text-slate-500">• {r.date}</span>
                      </div>
                      <p className="text-slate-300 italic">«{r.text}»</p>
                      {r.instructor && (
                        <div className="text-[10px] text-slate-400">Инструктор: {r.instructor}</div>
                      )}
                    </div>
                    <button
                      onClick={() => deleteReview(r.id)}
                      className="p-2 rounded bg-surface-card hover:bg-rose-600 hover:text-white text-slate-400 transition shrink-0"
                      title="Удалить отзыв"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#080A0F] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Все данные сохраняются автоматически.</span>
          </div>
          <button
            onClick={resetAllToDefault}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-rose-400 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Сбросить данные до заводских</span>
          </button>
        </div>
      </div>
    </div>
  );
};
