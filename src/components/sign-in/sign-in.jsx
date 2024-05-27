import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import './sign-in.scss'

export function SignIn() {
  return (
    <div>
      <h2>Voce ja possui conta?</h2>
      <form className="form-container">
        <FormInput 
          label="E-mail"
          type="email"
          requeried
          name="email"
          placeholder="Digite seu e-mail"
          autocomplete="off"
        />
        <FormInput 
          label="Senha"
          type="password"
          requeried
          name="senha"
          placeholder="Digite seu senha"
        />
        <Button type="submit">
          Login
        </Button>
        <Button type="button" typeButton="google">
          Login com Google
        </Button>
      </form>
    </div>
  )
}