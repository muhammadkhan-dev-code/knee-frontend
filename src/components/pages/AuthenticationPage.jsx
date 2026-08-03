import { useState } from "react";
import Container from "../layout/Container.jsx";
import LoginPage from "./LoginPage.jsx";
import SignupPage from "./SignupPage.jsx";

export default function AuthenticationPage({ initialMode = "login", onNavigateToHome, onLoginSuccess }) {
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
            onLoginSuccess={onLoginSuccess}
          />
        )}

        {mode === "signup" && (
          <SignupPage onSwitch={(targetMode) => setMode(targetMode || "login")} />
        )}
      </div>
    </Container>
  );
}
