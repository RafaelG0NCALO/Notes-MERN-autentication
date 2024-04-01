import { Link, useNavigate } from "react-router-dom";
import authStore from "../stores/authStore"

export default function SignupForm() {

  const store = authStore(); 
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    await store.signup();

    navigate('/login')
  }

  return (
    <form onSubmit={handleSignup} className="w-full gap-4 max-w-[488px] h-[411px] bg-[#2A2634] flex items-center justify-center rounded-lg">
          <div className="w-full flex flex-col gap-4 max-w-96 text-white">
            <h1 className="text-4xl font-black -translate-y-4">Realizar Cadastro</h1>

            <div>
              <label className="w-full text-start">E-mail</label>
              <input
              placeholder="E-mail"
              onChange={store.updateSignupForm} 
              value={store.signupForm.email}
              type="email"
              name="email"
               className="w-full h-14 p-4 rounded bg-[#18181B]"/>
            </div>

            <div>
              <label className="w-full text-start">Senha</label>
              <input
              placeholder="Senha"
              onChange={store.updateSignupForm} 
              value={store.signupForm.password}
              type="password" 
              name="password" 
               className="w-full h-14 p-4 rounded bg-[#18181B]"/>
            </div>
            <button className="bg-[#8B5CF6] mt-2 h-12 rounded w-full" type="submit">Cadastrar</button>
            <Link className="underline text-green-300 font-bold" to="/login">Realizar login</Link>
          </div>
      </form>
  )
}
