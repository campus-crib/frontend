import { ShieldCheck } from 'lucide-react';

export default function ScoutAuthHeader() {
  return (
    <div className="auth-animate text-center mb-8">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-burnt-amber rounded-xl rotate-12 flex items-center justify-center">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <span className="font-header font-black text-3xl tracking-tighter text-cool-slate">
          CRIB <span className="text-burnt-amber">SCOUT</span>
        </span>
      </div>
      <p className="text-sm text-slate-500 font-body">
        Trust Engine for Student Housing
      </p>
    </div>
  );
}
