import styles from './Login.css'
import React from 'react'

const Login = () => {
  return (
    <div className='loginpage'>
      <div className="logpas">
        <h1 className='welcome'>Добро пожаловать</h1>
        <input className="login" placeholder='Логин' />
        <input className="password" placeholder='Пароль' />
        <button className='submit_log'>Войти</button>
      </div>



    </div>
  );
};

export default Login;