import { useState } from 'react';
import { Clock, ShieldCheck } from 'lucide-react';

const TIMES = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '06:00 PM'];
const WEEKEND_DAYS = [0, 6, 7, 13, 14, 20, 21, 27, 28]; // Simplified weekend logic for March 2024

export function Booking() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !name) {
      alert('Please complete all fields to proceed.');
      return;
    }
    const mailto = `mailto:Kintsugiiwealth@gmail.com?subject=Meeting Request: ${name}&body=I would like to schedule a discovery call on March ${selectedDate}, 2024 at ${selectedTime}.`;
    window.location.href = mailto;
  };

  return (
    <section id="booking" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
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
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-2xl">
            <div className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-6">1. Select Date (March 2024)</h3>
              <div className="grid grid-cols-7 gap-2 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                  <div key={d} className="text-[10px] font-bold text-slate-400 py-2">
                    {d}
                  </div>
                ))}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isWeekend = WEEKEND_DAYS.includes(i);
                  return (
                    <button
                      key={i}
                      disabled={isWeekend}
                      onClick={() => setSelectedDate(day)}
                      className={`
                        aspect-square flex items-center justify-center text-xs font-medium transition-all duration-300
                        ${isWeekend ? 'text-slate-200 cursor-not-allowed' : 'hover:bg-gold/10 text-navy'}
                        ${selectedDate === day ? 'bg-navy text-white hover:bg-navy' : ''}
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

            <div className="space-y-6">
              <input
                type="text"
                placeholder="YOUR FULL NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 bg-slate-50 border-none text-[10px] font-bold tracking-widest uppercase focus:ring-1 focus:ring-gold outline-none"
              />
              <button
                onClick={handleBooking}
                className="w-full py-5 bg-navy text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 shadow-lg shadow-navy/10"
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
