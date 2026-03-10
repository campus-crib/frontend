export default function AuthFooter() {
  return (
    <div className="auth-animate mt-8 text-center">
      <p className="text-xs text-slate-400 font-body">
        By continuing, you agree to Campus Crib's{' '}
        <a href="#" className="text-burnt-amber hover:underline font-bold">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-burnt-amber hover:underline font-bold">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
