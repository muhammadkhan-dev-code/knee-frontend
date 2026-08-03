import Card from "../resuable_comp/Card.jsx";
import { LoginForm } from "../auth/forms.js";

export default function LoginPage({ onSwitch, onLoginSuccess }) {
  return (
    <Card maxWidth="max-w-md">
      <LoginForm
        onSwitch={onSwitch}
        onLoginSuccess={onLoginSuccess}
      />
    </Card>
  );
}