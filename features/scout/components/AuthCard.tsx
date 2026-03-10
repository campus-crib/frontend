import { ReactNode, useRef } from 'react';

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="auth-animate bg-white rounded-3xl shadow-2xl shadow-cool-slate/10 border border-warm-grey p-8 md:p-10"
    >
      {children}
    </div>
  );
}
