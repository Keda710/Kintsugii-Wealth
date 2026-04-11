import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, ChevronLeft, ChevronRight, Target, Coffee, ChevronDown } from 'lucide-react';

const TIMES = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '06:00 PM'];
const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function formatDateForEmail(d: Date) {
  return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export function Booking() {
  const now = new Date();
  const [viewedMonth, setViewedMonth] = useState(now.getMonth());
  const [viewedYear, setViewedYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [contactNo, setContactNo] = useState('');

  const startOfTomorrow = useMemo(() => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const daysInMonth = getDaysInMonth(viewedYear, viewedMonth);
  const firstDay = getFirstDayOfWeek(viewedYear, viewedMonth);
  const leadingBlanks = firstDay;
  const totalCells = leadingBlanks + daysInMonth;

  const goPrevMonth = () => {
    if (viewedMonth === 0) {
      setViewedMonth(11);
      setViewedYear((y) => y - 1);
    } else {
      setViewedMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (viewedMonth === 11) {
      setViewedMonth(0);
      setViewedYear((y) => y + 1);
    } else {
      setViewedMonth((m) => m + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const date = new Date(viewedYear, viewedMonth, day);
    if (date < startOfTomorrow) return;
    setSelectedDate(date);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !name || !contactNo) {
      alert('Please complete all fields to proceed.');
      return;
    }
    if (!/^\d{10}$/.test(contactNo)) {
      alert('Please enter a valid 10-digit contact number.');
      return;
    }
    const dateStr = formatDateForEmail(selectedDate);
    const mailto = `mailto:Kintsugiiwealth@gmail.com?subject=Meeting Request: ${name}&body=I would like to schedule a discovery call on ${dateStr} at ${selectedTime}.%0A%0AContact Number: ${countryCode} ${contactNo}`;
    window.location.href = mailto;
  };

  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < leadingBlanks; i++) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);

  return (
    <section id="booking" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Corner Element */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-10%] -left-20 w-80 h-80 border-[8px] border-gold/40 rounded-full pointer-events-none opacity-80" 
      />
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[5%] -right-16 w-56 h-56 bg-gold/20 rounded-full blur-2xl pointer-events-none opacity-70" 
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="heading-md text-navy mb-6">Schedule a Discovery Call</h2>
            <p className="text-muted mb-12">
              Choose a convenient time for a confidential review of your financial portfolio. Our principal advisor
              will personally lead the session.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest mb-1">Duration</h4>
                  <p className="text-muted text-sm">45-minute strategic overview</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest mb-1">Confidentiality</h4>
                  <p className="text-muted text-sm">Strict non-disclosure protocols followed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest mb-1">Agenda</h4>
                  <p className="text-muted text-sm">Comprehensive portfolio analysis and identifying wealth gaps</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 text-gold rounded-full">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm uppercase tracking-widest mb-1">Preparation</h4>
                  <p className="text-muted text-sm">No prior documents required. Just bring your financial goals.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden">
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" 
              />
              <p className="font-serif text-lg text-navy leading-relaxed mb-6 relative z-10 italic">
                “The foundation of lasting wealth lies in timely decisions. Schedule a call with us to start architecting your financial legacy.”
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full border border-gold/20 p-1">
                  <div className="w-full h-full bg-navy rounded-full flex items-center justify-center text-gold font-serif text-sm">
                    PV
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-navy text-sm uppercase tracking-widest">Priyank Vora</h5>
                  <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Founder, Kintsugii Wealth</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-2xl">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gold">1. Select Date</h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrevMonth}
                    className="p-2 text-navy/70 hover:text-gold hover:bg-gold/10 rounded transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm font-bold text-navy min-w-[120px] text-center">
                    {MONTH_NAMES[viewedMonth]} {viewedYear}
                  </span>
                  <button
                    type="button"
                    onClick={goNextMonth}
                    className="p-2 text-navy/70 hover:text-gold hover:bg-gold/10 rounded transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {WEEKDAY_LABELS.map((d) => (
                  <div key={d} className="text-[10px] font-bold text-slate-400 py-2">
                    {d}
                  </div>
                ))}
                {calendarCells.map((day, i) => {
                  if (day === null) {
                    return <div key={`empty-${i}`} className="aspect-square" />;
                  }
                  const date = new Date(viewedYear, viewedMonth, day);
                  const isWeekend = date.getDay() === 0;
                  const isDisabled = date < startOfTomorrow || isWeekend;
                  const isSelected = selectedDate !== null && isSameDay(date, selectedDate);
                  return (
                    <button
                      key={`${viewedYear}-${viewedMonth}-${day}`}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => handleSelectDay(day)}
                      className={`
                        aspect-square flex items-center justify-center text-xs font-medium transition-all duration-300
                        ${isDisabled ? 'text-slate-200 cursor-not-allowed' : 'hover:bg-gold/10 text-navy'}
                        ${isSelected ? 'bg-navy text-white hover:bg-navy' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-6">2. Select Time</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`
                      py-3 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300
                      ${selectedTime === t ? 'bg-gold border-gold text-white' : 'border-slate-200 text-navy hover:border-gold'}
                    `}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="YOUR FULL NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border-none text-[10px] font-bold tracking-widest uppercase focus:ring-1 focus:ring-gold outline-none"
              />
              <div className="flex gap-2">
                <div className="relative w-32 shrink-0">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full pl-5 pr-8 py-4 bg-slate-50 border-none text-[10px] font-bold tracking-widest uppercase focus:ring-1 focus:ring-gold outline-none cursor-pointer appearance-none"
                  >
                    <option value="+91">IN (+91)</option>
                    <option value="+1">US (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+61">AU (+61)</option>
                    <option value="+971">AE (+971)</option>
                    <option value="+65">SG (+65)</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-navy">
                    <ChevronDown className="w-3 h-3 opacity-50" />
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="YOUR CONTACT NUMBER"
                  value={contactNo}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setContactNo(val.slice(0, 10));
                  }}
                  className="flex-1 px-6 py-4 bg-slate-50 border-none text-[10px] font-bold tracking-widest uppercase focus:ring-1 focus:ring-gold outline-none"
                />
              </div>
              <button
                type="button"
                onClick={handleBooking}
                className="w-full py-5 !mt-8 bg-navy text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 shadow-lg shadow-navy/10"
              >
                Confirm Invitation Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
