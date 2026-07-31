import Card from "../ui/Card.jsx";
import { ResetPassword } from "../auth/forms.js";

export default function ResetPasswordPage({ onSwitch }) {
  return (
    <Card maxWidth="max-w-md">
      <ResetPassword onSwitch={onSwitch} />
    </Card>
  );
}
