import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";

export function SignUp() {
  return (
    <div>
      <h2>Não possui conta?</h2>
      <form className="form-container">
         <FormInput 
          label="Nome"
          type="text"
          requeried
          name="nome"
          placeholder="Digite seu nome"
          autocomplete="off"
        />
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
        <FormInput 
          label="Confirme sua senha"
          type="password"
          requeried
          name="confirmeSenha"
          placeholder="Digite seu senha novamente"
        />
        <Button type="submit">
          Criar conta
        </Button>
      </form>
    </div>
  )
}