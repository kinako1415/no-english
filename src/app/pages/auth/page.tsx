import LogIn from "./login";
import SignUp from "./signup";
import "@radix-ui/themes/styles.css";
export default function Auth() {
  return (
    <div>
      <SignUp />
      <LogIn />
    </div>
  );
}
