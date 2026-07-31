import { useState } from "react";
import LandingPage from "./components/pages/LandingPage.jsx";
import AuthenticationPage from "./components/pages/AuthenticationPage.jsx";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [authMode, setAuthMode] = useState("login");

  const navigateToAuth = (mode = "login") => {
    setAuthMode(mode);
    setCurrentPage("auth");
  };

  const navigateToLanding = () => {
    setCurrentPage("landing");
  };

  return (
    <div className="w-full min-h-screen font-sans">
      {currentPage === "landing" ? (
        <LandingPage onNavigateToAuth={navigateToAuth} />
      ) : (
        <AuthenticationPage
          initialMode={authMode}
          onNavigateToHome={navigateToLanding}
        />
      )}
    </div>
  );
}