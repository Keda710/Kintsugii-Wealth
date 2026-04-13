import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const data = [
  { region: 'India (Projected)', gdp: 6.8, corporate: 14.2 },
  { region: 'Emerging Markets', gdp: 4.1, corporate: 8.5 },
  { region: 'Developed Markets', gdp: 1.8, corporate: 5.2 },
];

export function PerformanceChart() {
  return (
    <div className="w-full bg-navy p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="mb-10 relative z-10">
         <h4 className="text-gold font-bold text-xl mb-2">The Global Growth Differential</h4>
         <p className="text-white/40 text-sm">Comparison of Projected GDP and Corporate Earnings Growth (2025 - 2030)</p>
      </div>
      
      <div className="h-[350px] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            layout="vertical"
            margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              type="number"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} 
              unit="%"
            />
            <YAxis 
              dataKey="region" 
              type="category"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#FFFFFF', fontSize: 11, fontWeight: 'bold' }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.02)' }}
              contentStyle={{ backgroundColor: '#0A1A2F', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }} 
            />
            <Bar dataKey="gdp" name="GDP Growth" fill="#A87F4A" radius={[0, 4, 4, 0]} />
            <Bar dataKey="corporate" name="Corporate Earnings" fill="#FFFFFF" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-6 text-[10px] text-white/20 italic text-center">Sources: IMF World Economic Outlook, Bloomberg Projections. Data is illustrative.</p>
    </div>
  );
}
