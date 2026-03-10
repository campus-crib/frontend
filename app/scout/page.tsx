'use client';
import { useState } from 'react';
import { AuthStep } from '@/features/scout/types/auth.types';
import { useAuthAnimation } from '@/features/scout/hooks/useAuthAnimation';
import { useCountdown } from '@/features/scout/hooks/useCountdown';
import { useOtpInput } from '@/features/scout/hooks/useOtpInput';
import {
  ScoutAuthHeader,
  AuthCard,
  EmailStep,
  OtpStep,
  SuccessStep,
  AuthFooter,
} from '@/features/scout/components';

export default function ScoutAuthPage() {
  const [step, setStep] = useState<AuthStep>('email');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const containerRef = useAuthAnimation(step);
  const { countdown, showResend, resetCountdown } = useCountdown(300, step);
  const {
    otp,
    handleOtpChange,
    handleOtpKeyDown,
    setOtpInputRef,
    resetOtp,
  } = useOtpInput(step);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep('otp');
    resetCountdown(300);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length !== 6) return;

    setIsLoading(true);
    // Simulate API call - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep('success');
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    // Simulate API call - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    resetCountdown(300);
    resetOtp();
  };

  const handleEmailChange = () => {
    setStep('email');
    resetOtp();
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-soft-pearl flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-md">
        <ScoutAuthHeader />

        <AuthCard>
          {step === 'email' && (
            <EmailStep
              email={email}
              isLoading={isLoading}
              onEmailChange={setEmail}
              onSubmit={handleEmailSubmit}
            />
          )}

          {step === 'otp' && (
            <OtpStep
              email={email}
              otp={otp}
              isLoading={isLoading}
              countdown={countdown}
              showResend={showResend}
              onOtpChange={handleOtpChange}
              onOtpKeyDown={handleOtpKeyDown}
              setOtpInputRef={setOtpInputRef}
              onSubmit={handleOtpSubmit}
              onResend={handleResendOtp}
              onEmailChange={handleEmailChange}
            />
          )}

          {step === 'success' && <SuccessStep />}
        </AuthCard>

        <AuthFooter />
      </div>
    </div>
  );
}
