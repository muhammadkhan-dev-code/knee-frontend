import { useState } from "react";
import { Lock, ShieldCheck, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button, PasswordInput } from "../ui/resuedComponents.js";

export default function ResetPassword({ onSwitch }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#1e204d] tracking-tight">Set New Password</h1>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
          Please choose a strong password with at least 8 characters.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-4 space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={26} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#1e204d]">Password Updated</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              Your password has been successfully reset. You can now log in with your new credentials.
            </p>
          </div>
          <Button variant="primary" onClick={() => onSwitch && onSwitch("login")}>
            Go to Login
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <PasswordInput
            id="reset-password"
            label="NEW PASSWORD"
            placeholder="••••••••"
            icon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <PasswordInput
            id="reset-confirm-password"
            label="CONFIRM NEW PASSWORD"
            placeholder="••••••••"
            icon={ShieldCheck}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Button variant="primary" icon iconType="arrow" type="submit">
            Update Password
          </Button>
        </form>
      )}

      <div className="my-6 border-t border-slate-100" />

      <div className="text-center">
        <button
          type="button"
          onClick={() => onSwitch && onSwitch("login")}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1e204d] hover:underline cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back to Log In</span>
        </button>
      </div>
    </div>
  );
}
