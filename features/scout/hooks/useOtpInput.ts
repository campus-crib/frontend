import { useState, useEffect, useRef } from 'react';
import { AuthStep } from '../types/auth.types';

export const useOtpInput = (step: AuthStep) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (step === 'otp' && otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }
  }, [step]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5 && otpInputRefs.current[index + 1]) {
      otpInputRefs?.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0 && otpInputRefs.current[index - 1]) {
      otpInputRefs?.current[index - 1]?.focus();
    }
  };

  const setOtpInputRef = (index: number, el: HTMLInputElement | null) => {
    otpInputRefs.current[index] = el;
  };

  const resetOtp = () => {
    setOtp(['', '', '', '', '', '']);
    if (otpInputRefs.current[0]) {
      otpInputRefs.current[0].focus();
    }
  };

  return {
    otp,
    handleOtpChange,
    handleOtpKeyDown,
    setOtpInputRef,
    resetOtp,
  };
};
