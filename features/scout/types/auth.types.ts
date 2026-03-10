export type AuthStep = 'email' | 'otp' | 'success';

export interface AuthState {
  step: AuthStep;
  email: string;
  otp: string[];
  isLoading: boolean;
  countdown: number;
  showResend: boolean;
}
