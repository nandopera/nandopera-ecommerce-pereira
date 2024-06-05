import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import './sign-in.scss'

const defaultFormFilds = {
  email: "",
  senha: ""
}

export function SignIn() {

  const [formFilds, setFormFilds] = useState(defaultFormFilds)
  const { email, senha } = formFilds

  const handleChange = (event) => {
    const { name , value } = event.target
    setFormFilds({...formFilds, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formFilds)
    setFormFilds(defaultFormFilds)
  }

  return (
    <div>
      <h2>Voce ja possui conta?</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <FormInput 
          label="E-mail"
          type="email"
          requeried
          name="email"
          placeholder="Digite seu e-mail"
          autoComplete="off"
          onChange={handleChange}
          value={email}
        />
        <FormInput 
          label="Senha"
          type="password"
          requeried
          name="senha"
          placeholder="Digite seu senha"
          onChange={handleChange}
          value={senha}
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