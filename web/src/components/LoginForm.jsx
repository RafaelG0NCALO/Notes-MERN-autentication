import authStore from "../stores/authStore"
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm() {

  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate('/')
  };

  return (
    <form onSubmit={handleLogin} className="w-full gap-4 max-w-[488px] h-[411px] bg-[#2A2634] flex items-center justify-center rounded-lg">
        <div className="w-full flex flex-col gap-4 max-w-96 text-white">
            <h1 className="text-4xl font-black -translate-y-4">Realizar Login</h1>
            
            <div>
              <label className="w-full text-start">E-mail</label>
              <input
              placeholder="E-mail"
              onChange={store.updateLoginForm} 
              value={store.loginForm.email}
              type="email"
              name="email"
              className="w-full h-14 p-4 rounded bg-[#18181B]"/>
            </div>

            <div>
              <label className="w-full text-start">Senha</label>
              <input
              placeholder="Senha"
              onChange={store.updateLoginForm} 
              value={store.loginForm.password}
              type="password" 
              name="password" 
              className="w-full h-14 p-4 rounded bg-[#18181B]"/>
            </div>

           <button className="bg-[#8B5CF6] mt-2 h-12 rounded w-full" type="submit">Entrar</button>
           <Link className="underline text-green-300 font-bold" to="/signup">Cadastrar</Link>
           
        </div>
    </form>
  )
}
