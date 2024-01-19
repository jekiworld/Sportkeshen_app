import styles from './Register.css'
import React from 'react'

const Register = () => {
    return (
        <div className='regpage'>
            <div className="registerpage">
                <div className="fullname">

                    <div className="firstname_box">
                        <a>Имя</a>
                        <input type="text" className="firstname" />
                    </div>

                    <div className="secondname_box">
                        <a>Фамилия</a>
                        <input type="text" className="secondname" />
                    </div>

                </div>

                <div className="emailpage">

                    <div className="email">
                        <a>Почта</a>
                        <input type="text" className="email_in" />
                    </div>

                    <div className="regpassword">
                        <a>Пароль</a>
                        <input type="text" className="regpas_in" />
                    </div>


                    <div className="confrimpassword">
                        <a>Повторите пароль</a>
                        <input type="text" className="confirmpas_in" />
                    </div>
                </div>

                <button className='regbut'> Зарегестрироваться</button>
            </div>
        </div>
    );
};

export default Register;