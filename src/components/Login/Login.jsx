import styles from './Login.css'
import React, { useState } from 'react'

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
  })
      .then((response) => response.json())
      .then((data) => {
          console.log('User logged successfully:', data);
          // You can handle success here, e.g., redirect to another page
      })
      .catch((error) => {
          console.error('Invalid email or password', error);
          // Handle the error, e.g., display an error message to the user
      });
  }
  
  
  return (
    <div className='loginpage'>
      <div className="logpas">
        <h1 className='welcome'>Добро пожаловать</h1>
        <input onChange ={handleEmail} className="login" placeholder='Логин' />
        <input onChange={handlePassword} className="password" placeholder='Пароль' />
        <button onClick={handleLogin} className='submit_log'>Войти</button>
      </div>



    </div>
  );
};

export default Login;