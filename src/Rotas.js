import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './rotas/home/Home';
import Cadastro from './rotas/cadastro/Cadastro';
import Login from './rotas/login/Login';
import Usuarios from './rotas/usuarios/Usuarios';
import ManagerProfile from './rotas/usuarios/Gerenciador';
import AppNet from './rotas/app/AppNet';

const PrivateRoute = ({ children, redirectTo }) => {
  let isAutenticated = localStorage.getItem("key");
  return isAutenticated ? children : <Navigate to={redirectTo}/>;
}

export default () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profiles" element={
        <PrivateRoute redirectTo="/login">
          <Usuarios/>
        </PrivateRoute>
      }/>
      <Route path="/profiles/manager-profile" element={
        <PrivateRoute redirectTo="/login">
          <ManagerProfile/>
        </PrivateRoute>
      }/>
      <Route path="/app" element={
        <PrivateRoute redirectTo="/login">
          <AppNet/>
        </PrivateRoute>
      }/>
    </Routes>
  );
}