import { useState } from "react";
import { Mail } from "lucide-react";
import { Button, Input, PasswordInput } from "../resuable_comp/resuedComponents.js";

export default function LoginForm({ onSwitch, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess({ email, remember });
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-7">
        <h1 className="text-2xl font-bold text-[#1e204d] tracking-tight">Welcome Back</h1>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
          Sign in to your KOA-AI account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="login-email"
          label="EMAIL ADDRESS"
          icon={Mail}
          placeholder="doctor@hospital.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="space-y-1.5">
          <div className="flex justify-between items-center px-0.5">
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              PASSWORD
            </span>
          </div>

          <PasswordInput
            id="login-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center gap-2 pt-1 pb-1">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#1e204d] focus:ring-[#1e204d]/20 cursor-pointer"
          />
          <label htmlFor="remember" className="text-xs sm:text-sm font-medium text-slate-600 cursor-pointer select-none">
            Remember this device
          </label>
        </div>

        <Button variant="primary" icon iconType="login" type="submit">
          Log In
        </Button>
      </form>

      <div className="my-6 border-t border-slate-100" />

      <p className="text-center text-xs sm:text-sm text-slate-500">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={() => onSwitch && onSwitch("signup")}
          className="font-bold text-[#1e204d] hover:underline cursor-pointer"
        >
          Sign Up
        </button>
      </p>

      <div className="mt-8 pt-2 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-400">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>System Operational</span>
        <span>•</span>
        <span>v2.4.0-clinical</span>
      </div>
    </div>
  );
}

