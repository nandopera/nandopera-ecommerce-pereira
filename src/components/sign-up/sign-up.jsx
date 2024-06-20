import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import { createAuthUserWithEmailPassword } from "../../utils/firebase";

const defaultFormFields = {
  nome: "",
  email: "",
  senha: "",
  confirmeSenha: ""
}

export function SignUp() {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const {nome, email, senha, confirmeSenha} = formFields
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (senha !== confirmeSenha) {
      alert("As senhas não são iguais.")
      return
    }

    try {
      //Processo de criação de conta
      const { } = await createAuthUserWithEmailPassword(email, senha)
      console.log(user)
    } catch (erro) {
      console.log("erro", erro)
    }

    console.log(formFields)
    setFormFields(defaultFormFields)
  }

  return (
    <div>
      <h2>Não possui conta?</h2>
      <form className="form-container" onSubmit={handleSubmit}>
         <FormInput 
          label="Nome"
          type="text"
          requeried
          name="nome"
          placeholder="Digite seu nome"
          autoComplete="off"
          onChange={handleChange}
          value={nome}
        />
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
        <FormInput 
          label="Confirme sua senha"
          type="password"
          requeried
          name="confirmeSenha"
          placeholder="Digite seu senha novamente"
          onChange={handleChange}
          value={confirmeSenha}
        />
        <Button type="submit">
          Criar conta
        </Button>
      </form>
    </div>
  )
}