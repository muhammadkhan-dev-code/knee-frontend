import Card from "../ui/Card.jsx";
import { ForgotPassword } from "../auth/forms.js";

export default function ForgotPasswordPage({ onSwitch }) {
  return (
    <Card maxWidth="max-w-md">
      <ForgotPassword onSwitch={onSwitch} />
    </Card>
  );
}
