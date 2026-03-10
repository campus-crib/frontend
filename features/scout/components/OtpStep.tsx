import { CheckCircle2, ArrowRight } from 'lucide-react';
import { formatTime } from '../utils/format';

interface OtpStepProps {
  email: string;
  otp: string[];
  isLoading: boolean;
  countdown: number;
  showResend: boolean;
  onOtpChange: (index: number, value: string) => void;
  onOtpKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
  setOtpInputRef: (index: number, el: HTMLInputElement | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResend: () => void;
  onEmailChange: () => void;
}

export default function OtpStep({
  email,
  otp,
  isLoading,
  countdown,
  showResend,
  onOtpChange,
  onOtpKeyDown,
  setOtpInputRef,
  onSubmit,
  onResend,
  onEmailChange,
}: OtpStepProps) {
  const isOtpComplete = otp.join('').length === 6;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-green-500" size={32} />
        </div>
        <h2 className="font-header font-black text-2xl text-cool-slate mb-2">
          Verify Your Code
        </h2>
        <p className="text-sm text-slate-500 font-body">
          Enter the 6-digit code sent to <span className="font-bold text-cool-slate">{email}</span>
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-3 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => setOtpInputRef(index, el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => onOtpChange(index, e.target.value.replace(/\D/g, ''))}
              onKeyDown={(e) => onOtpKeyDown(index, e)}
              className="w-14 h-16 text-center text-2xl font-header font-black bg-soft-pearl border-2 border-warm-grey rounded-xl focus:border-burnt-amber focus:ring-2 focus:ring-burnt-amber/20 outline-none transition-all"
            />
          ))}
        </div>

        <div className="flex items-center justify-between text-sm">
          {countdown > 0 ? (
            <span className="text-slate-400 font-body">
              Resend code in <span className="font-bold text-cool-slate">{formatTime(countdown)}</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={onResend}
              disabled={isLoading}
              className="text-burnt-amber font-bold hover:underline disabled:opacity-50 font-body"
            >
              Resend OTP
            </button>
          )}
          <button
            type="button"
            onClick={onEmailChange}
            className="text-slate-400 hover:text-cool-slate font-body"
          >
            Change email
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading || !isOtpComplete}
          className="w-full h-14 bg-burnt-amber text-white font-header font-black rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-burnt-amber/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              Verify & Continue <ArrowRight size={18} strokeWidth={3} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
