import Card from "../ui/Card.jsx";
import { LoginForm } from "../auth/forms.js";

export default function LoginPage({ onSwitch, onForgotPassword, onLoginSuccess }) {
  return (
    <Card maxWidth="max-w-md">
      <LoginForm
        onSwitch={onSwitch}
        onForgotPassword={onForgotPassword}
        onLoginSuccess={onLoginSuccess}
      />
    </Card>
  );
}