export function TrustBar() {
  return (
    <div className="py-12 border-y border-slate-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
        <div className="flex flex-col items-center">
          <span className="font-bold tracking-[0.5em] text-xl">HDFC BANK</span>
          <span className="text-[8px] uppercase tracking-widest mt-1">Ex-Manager</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold tracking-[0.5em] text-xl">ANZ BANK</span>
          <span className="text-[8px] uppercase tracking-widest mt-1">Ex-Associate Director</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold tracking-[0.5em] text-xl font-serif">KINTSUGII</span>
          <span className="text-[8px] uppercase tracking-widest mt-1">Wealth Advisory</span>
        </div>
      </div>
    </div>
  );
}
