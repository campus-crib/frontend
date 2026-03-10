import { Mail, ArrowRight, Lock } from 'lucide-react';
import { validateEmail } from '../utils/validation';

interface EmailStepProps {
  email: string;
  isLoading: boolean;
  onEmailChange: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function EmailStep({
  email,
  isLoading,
  onEmailChange,
  onSubmit,
}: EmailStepProps) {
  const isEmailValid = validateEmail(email);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-burnt-amber/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Mail className="text-burnt-amber" size={32} />
        </div>
        <h2 className="font-header font-black text-2xl text-cool-slate mb-2">
          Email Authentication
        </h2>
        <p className="text-sm text-slate-500 font-body">
          Enter your email address to receive a verification code
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-cool-slate mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full h-14 px-4 bg-soft-pearl rounded-xl border-2 border-warm-grey focus:border-burnt-amber focus:ring-2 focus:ring-burnt-amber/20 outline-none transition-all font-body text-lg"
            required
          />
          <p className="text-xs text-slate-400 mt-2 font-body">
            We'll send a verification code to this email address
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading || !isEmailValid}
          className="w-full h-14 bg-burnt-amber text-white font-header font-black rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-burnt-amber/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending OTP...
            </>
          ) : (
            <>
              Send OTP <ArrowRight size={18} strokeWidth={3} />
            </>
          )}
        </button>
      </div>

      <div className="pt-4 border-t border-warm-grey">
        <div className="flex items-start gap-3 text-xs text-slate-500">
          <Lock size={14} className="mt-0.5 flex-shrink-0" />
          <p className="font-body">
            Your email is used for secure authentication and will be verified. We never share your data.
          </p>
        </div>
      </div>
    </form>
  );
}
