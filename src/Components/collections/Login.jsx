import React, { useState } from 'react';
import LocalStorageService from '../../Services/LocalStorage';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes realizar las validaciones necesarias contra el almacenamiento local
    const isValidCredentials = LocalStorageService.validateUserCredentials(
      username,
      password
    );
    if (isValidCredentials) {
      onLogin(username);
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;