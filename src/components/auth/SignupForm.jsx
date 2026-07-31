import { useState } from "react";
import { Mail, User, Building2, ShieldCheck, Lock } from "lucide-react";
import { Input, PasswordInput, Button } from "../ui/resuedComponents.js";

export default function SignupForm({ onSwitch, onSignupSuccess }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [hospital, setHospital] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignupSuccess) {
      onSignupSuccess({ fullName, email, hospital });
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#1e204d] tracking-tight">Create Your Account</h1>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
          Join KOA-AI to start diagnosing smarter
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <Input
          id="signup-name"
          label="FULL NAME"
          icon={User}
          placeholder="Dr. Jane Smith"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <Input
          id="signup-email"
          label="EMAIL ADDRESS"
          icon={Mail}
          placeholder="jane.smith@hospital.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          id="signup-hospital"
          label="HOSPITAL/CLINIC NAME"
          icon={Building2}
          placeholder="Central Orthopedics Unit"
          value={hospital}
          onChange={(e) => setHospital(e.target.value)}
          required
        />

        <PasswordInput
          id="signup-password"
          label="PASSWORD"
          placeholder="••••••••"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <PasswordInput
          id="signup-confirm-password"
          label="CONFIRM PASSWORD"
          placeholder="••••••••"
          icon={ShieldCheck}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className="flex items-start gap-2 pt-1 pb-1">
          <input
            type="checkbox"
            id="agree"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            required
            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#1e204d] focus:ring-[#1e204d]/20 cursor-pointer"
          />
          <label htmlFor="agree" className="text-xs text-slate-600 font-medium leading-tight cursor-pointer select-none">
            I agree to the{" "}
            <span className="font-semibold text-[#1e204d] hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#1e204d] hover:underline">
              Privacy Policy
            </span>
          </label>
        </div>

        <Button variant="primary" icon iconType="user-plus" type="submit">
          Sign Up
        </Button>
      </form>

      <div className="my-5 border-t border-slate-100" />

      <p className="text-center text-xs sm:text-sm text-slate-500">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => onSwitch && onSwitch("login")}
          className="font-bold text-[#1e204d] hover:underline cursor-pointer"
        >
          Log In
        </button>
      </p>

      <div className="mt-6 pt-2 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-400">
        <ShieldCheck size={14} className="text-slate-400" />
        <span>Your account will be reviewed before activation</span>
      </div>
    </div>
  );
}

