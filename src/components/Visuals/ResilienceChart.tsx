import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'Global Correction', generic: -18, kintsugii: -6 },
  { name: 'Nifty Volatility', generic: -12, kintsugii: -4 },
  { name: 'Systemic Crisis', generic: -25, kintsugii: -11 },
];

export function ResilienceChart() {
  return (
    <div className="w-full bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-xl">
      <div className="mb-10">
         <h4 className="text-navy font-bold text-xl mb-2">Portfolio Resilience Analysis</h4>
         <p className="text-slate-500 text-sm">Drawdown Comparison: Fragmented vs. Architected Portfolios during Market Stress (%)</p>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 12 }}
              unit="%"
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="generic" name="Fragmented Portfolio" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill="#CBD5E1" />
              ))}
            </Bar>
            <Bar dataKey="kintsugii" name="Kintsugii Architecture" radius={[4, 4, 0, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill="#A87F4A" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-8 flex justify-center gap-8">
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
           <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Unmanaged</span>
        </div>
        <div className="flex items-center gap-2">
           <div className="w-3 h-3 bg-gold rounded-full"></div>
           <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Kintsugii-Architected</span>
        </div>
      </div>
      <p className="mt-6 text-[10px] text-slate-400 italic text-center">Data is illustrative and based on historical risk-management strategy models.</p>
    </div>
  );
}
