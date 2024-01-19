import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';


const Header = ({ onButtonClick }) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/Login');
  };

  const handleMainClick = () => {
    navigate('/');
  };

  const handleRegisterClick = () => {
    navigate('/Register');
  };


  return (
    <div className="header">
      <ul className='header-ul'>
        <li className='one'><Link to ="/" onClick={handleMainClick}>sportkeshen</Link></li>
        <li className='two'><a>Турниры</a></li>
        <li className='three'><a>О нас</a></li>
        <li className='four'><a>Сообщество</a></li>
        <li className='five'><Link to ="login" onClick={handleLoginClick}>Войти</Link></li>
        <li className='six'><Link to ="register" onClick={handleRegisterClick}>Зарегестрироваться</Link></li>
      </ul>
    </div>

  );
};

export default Header;