import { useState } from "react";
import Container from "../layout/Container.jsx";
import LoginPage from "./LoginPage.jsx";
import SignupPage from "./SignupPage.jsx";
import ForgotPasswordPage from "./ForgotPasswordPage.jsx";
import ResetPasswordPage from "./ResetPasswordPage.jsx";

export default function AuthenticationPage({ initialMode = "login", onNavigateToHome }) {
  const [mode, setMode] = useState(initialMode);

  return (
    <Container>
      <div className="w-full max-w-md flex flex-col items-center">
        {onNavigateToHome && (
          <button
            onClick={onNavigateToHome}
            className="mb-4 text-xs font-semibold text-slate-500 hover:text-[#1e204d] transition-colors cursor-pointer flex items-center gap-1"
          >
            ← Back to Home
          </button>
        )}

        {mode === "login" && (
          <LoginPage
            onSwitch={(targetMode) => setMode(targetMode || "signup")}
            onForgotPassword={() => setMode("forgot-password")}
          />
        )}

        {mode === "signup" && (
          <SignupPage onSwitch={(targetMode) => setMode(targetMode || "login")} />
        )}

        {mode === "forgot-password" && (
          <ForgotPasswordPage onSwitch={(targetMode) => setMode(targetMode || "login")} />
        )}

        {mode === "reset-password" && (
          <ResetPasswordPage onSwitch={(targetMode) => setMode(targetMode || "login")} />
        )}
      </div>
    </Container>
  );
}
