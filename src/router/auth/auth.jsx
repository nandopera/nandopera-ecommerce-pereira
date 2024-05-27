import { SignIn } from "../../components/sign-in/sign-in.jsx";
import { SignUp } from "../../components/sign-up/sign-up.jsx";
import './auth.scss'

export function Auth() {
  return (
    <div className="container-auth">
      <SignIn />
      <SignUp />
    </div>
  )
}