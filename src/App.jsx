import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider'
import {AppRouter} from './routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export const App = () => {
  return (
    <AuthProvider>

       <AppRouter/>

    </AuthProvider>
  )
}


/*import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'

function App() {
  const user = {
    isLogged: true,
    username: 'zeus'
  }

  const tasks = [
    {
      id: 1,
      title: 'Completar prácticos',
      description: 'Completar el práctico de useContext'
    }
  ];

  return (
    <AuthContext.Provider value={{
      user,
      tasks
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App*/
