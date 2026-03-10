import { CheckCircle2 } from 'lucide-react';

export default function SuccessStep() {
  return (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 className="text-green-500" size={40} />
      </div>
      <div>
        <h2 className="font-header font-black text-2xl text-cool-slate mb-2">
          Authentication Successful!
        </h2>
        <p className="text-sm text-slate-500 font-body">
          Your identity has been verified. Redirecting to your Scout dashboard...
        </p>
      </div>
      <div className="pt-4">
        <div className="inline-flex items-center gap-2 bg-soft-pearl px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-burnt-amber rounded-full animate-pulse" />
          <span className="text-xs font-bold text-cool-slate font-body">
            Setting up your profile
          </span>
        </div>
      </div>
    </div>
  );
}
