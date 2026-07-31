import { useState } from "react";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button, Input } from "../ui/resuedComponents.js";

export default function ForgotPassword({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#1e204d] tracking-tight">Reset Your Password</h1>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
          Enter your registered email address to receive recovery instructions.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-4 space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 size={26} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#1e204d]">Instructions Sent</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              We&apos;ve sent a password reset link to <strong className="text-slate-700">{email}</strong>.
            </p>
          </div>
          <Button variant="primary" onClick={() => onSwitch && onSwitch("login")}>
            Return to Login
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="forgot-email"
            label="REGISTERED EMAIL ADDRESS"
            icon={Mail}
            placeholder="doctor@hospital.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button variant="primary" icon iconType="send" type="submit">
            Send Reset Link
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
