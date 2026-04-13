import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: 0, balance: 1000000 },
  { year: 5, balance: 1610510 },
  { year: 10, balance: 2593742 },
  { year: 15, balance: 4177248 },
  { year: 20, balance: 6727500 },
  { year: 25, balance: 10834706 },
];

export function CompoundingChart() {
  return (
    <div className="w-full bg-slate-50 p-6 md:p-10 rounded-2xl border border-slate-200 shadow-inner">
      <div className="mb-10">
         <h4 className="text-navy font-bold text-xl mb-2">The Architecture of Compounding</h4>
         <p className="text-slate-500 text-sm">Projected Growth of ₹10,00,000 Portfolio over 25 Years at a 10% CAGR</p>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 40, bottom: 0 }}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A87F4A" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#A87F4A" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#CBD5E1" />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 11 }}
              unit="y"
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 11 }}
              tickFormatter={(value) => `₹${value / 100000}L`}
            />
            <Tooltip 
              formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Portfolio Balance']}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="balance" 
              stroke="#A87F4A" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBalance)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-6 text-[10px] text-slate-400 italic text-center">Hypothetical illustration assuming consistent reinvestment. Market returns are subject to volatility.</p>
    </div>
  );
}
