import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import NotesPage from './pages/NotesPage';
import SignupPage from './pages/SignupPage';
import authStore from './stores/authStore';
import { useEffect, useState } from 'react';
import logo from './assets/logo.png'

const App = () => {

  const store = authStore();
  const [hidden, setHidden] = useState(!store.loggedIn);

  useEffect(() => {
    setHidden(!store.loggedIn);
  }, [store.loggedIn]);

  return (
    <div className='bg-[#0C0C0C]'>
      <BrowserRouter>

      <header className='w-full max-w-5xl m-auto flex justify-between h-16 items-center'>
        <div className='w-full flex justify-center'>
          <img src={logo} className='w-40' />
        </div>
        <div className='flex gap-5 text-white'>
          <Link className={`${!hidden ? 'flex' : 'hidden' } bg-red-400 text-red-950 rounded px-3 py-1`} to="/logout">Logout</Link>
        </div>
      </header>

        <Routes>
          <Route index element={
            <RequireAuth>
              <NotesPage/>
            </RequireAuth>
            } 
          />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/logout' element={<LogoutPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App