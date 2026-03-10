import { useState, useEffect } from 'react';
import { AuthStep } from '../types/auth.types';

export const useCountdown = (initialSeconds: number, step: AuthStep) => {
  const [countdown, setCountdown] = useState(initialSeconds);
  const [showResend, setShowResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && step === 'otp') {
      setShowResend(true);
    }
  }, [countdown, step]);

  const resetCountdown = (seconds: number) => {
    setCountdown(seconds);
    setShowResend(false);
  };

  return { countdown, showResend, resetCountdown };
};
