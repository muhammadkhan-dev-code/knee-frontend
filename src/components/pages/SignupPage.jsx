import Card from "../ui/Card.jsx";
import { SignupForm } from "../auth/forms.js";

export default function SignupPage({ onSwitch, onSignupSuccess }) {
  return (
    <Card maxWidth="max-w-md">
      <SignupForm onSwitch={onSwitch} onSignupSuccess={onSignupSuccess} />
    </Card>
  );
}
