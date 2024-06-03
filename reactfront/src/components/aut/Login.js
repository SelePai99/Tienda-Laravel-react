import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      setToken(response.data.token);
      setMessage('Login successful');
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  const handleFocus = () => {
    // Eliminado el acceso a parentNode
  };

  const handleBlur = () => {
    // Eliminado el acceso a parentNode
  };

  return (
    <div className='center'>
      <div className='signUp'>
        <form onSubmit={handleLogin}>
          <div className='field'>
            <h1>Iniciar Sesión</h1>
          </div>
          <div className='field'>
            <div className='input-bordered'>
              <input
                type='email'
                id='emailaddress'
                className='first'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                placeholder=' '
              />
              <label htmlFor='emailaddress'>Email Address</label>
            </div>
          </div>
          <div className='field'>
            <div className='input-bordered'>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                placeholder=' '
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='field'>
            <input type='submit' value='Ingresar' />
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;