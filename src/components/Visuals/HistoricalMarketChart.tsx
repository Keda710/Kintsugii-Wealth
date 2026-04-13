import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Defs, LinearGradient, Stop } from 'recharts';

const data = [
  { year: 1990, sensex: 750, gdp: 320 },
  { year: 1992, sensex: 2400, gdp: 350 },
  { year: 1995, sensex: 3500, gdp: 360 },
  { year: 1998, sensex: 3200, gdp: 415 },
  { year: 2000, sensex: 4500, gdp: 460 },
  { year: 2003, sensex: 3500, gdp: 600 },
  { year: 2005, sensex: 7500, gdp: 835 },
  { year: 2008, sensex: 20000, gdp: 1200 },
  { year: 2009, sensex: 9500, gdp: 1320 },
  { year: 2011, sensex: 18000, gdp: 1820 },
  { year: 2015, sensex: 27000, gdp: 2100 },
  { year: 2018, sensex: 35000, gdp: 2700 },
  { year: 2020, sensex: 42000, gdp: 2650 },
  { year: 2022, sensex: 60000, gdp: 3400 },
  { year: 2024, sensex: 75000, gdp: 3950 },
];

export function HistoricalMarketChart() {
  return (
    <div className="w-full bg-white p-6 md:p-12 rounded-2xl border border-slate-100 shadow-2xl relative">
      <div className="mb-12">
         <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-3">Long-Term Performance</h4>
         <h3 className="font-serif text-2xl md:text-3xl text-navy mb-4">The Bharat Growth Story (1990 - 2024)</h3>
         <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
           A visualized correlation between Indian Equity markets and National GDP, demonstrating the structural resilience of the economy.
         </p>
      </div>
      
      <div className="h-[450px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSensex" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A87F4A" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#A87F4A" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0A1A2F" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#0A1A2F" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 11 }}
            />
            {/* Left Axis - Sensex */}
            <YAxis 
              yAxisId="left"
              domain={['auto', 'auto']}
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#A87F4A', fontSize: 11, fontWeight: 'bold' }}
              tickFormatter={(value) => `${value}`}
            />
            {/* Right Axis - GDP */}
            <YAxis 
              yAxisId="right"
              orientation="right"
              domain={['auto', 'auto']}
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#0A1A2F', fontSize: 11, fontWeight: 'bold' }}
              tickFormatter={(value) => `$${value/1000}T`}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', backgroundColor: '#fff' }}
              formatter={(value: any, name: string) => [
                name === "Sensex Points" ? Math.round(value).toLocaleString() : `$${value} Billion`,
                name
              ]}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ paddingBottom: '30px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }} 
            />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="sensex" 
              name="Sensex Points" 
              stroke="#A87F4A" 
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorSensex)"
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Area 
              yAxisId="right"
              type="monotone" 
              dataKey="gdp" 
              name="India GDP (USD Billions)" 
              stroke="#0A1A2F" 
              strokeWidth={3}
              strokeDasharray="5 5"
              fillOpacity={1}
              fill="url(#colorGdp)"
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12 bg-slate-50 p-8 rounded-xl border border-slate-100">
         <div>
            <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-2">Equity Market</span>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sensex has demonstrated profound resilience, growing <span className="text-navy font-bold">100x</span> desde 1990.
            </p>
         </div>
         <div>
            <span className="text-[10px] font-bold text-navy uppercase tracking-widest block mb-2">Expanding Economy</span>
            <p className="text-sm text-slate-600 leading-relaxed">
              The national GDP has expanded <span className="text-navy font-bold">12x</span>, establishing India as the world's most resilient growth engine.
            </p>
         </div>
      </div>
      
      <p className="mt-8 text-[10px] text-slate-400 italic text-center uppercase tracking-widest">
        Sources: World Bank, BSE India. Updated to Current 2024 Market Levels.
      </p>
    </div>
  );
}
