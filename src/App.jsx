import styles from './App.css'
import Header from './components/Header'
import Create_event from './components/Create_event'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


export default function Home() {
  return (
    // <div className='all'>
    //   {/* <Header/>
    //   <Create_event/> */}
    // </div>



    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/"
    //       element={
    //         <>
    //         <div className='all'>
    //           <Header />
    //           <Create_event />
    //           </div>
    //         </>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>

    

    <Router>
      <div className="all">
        <Header />
        <Outlet />
      </div>

      <Routes>
        <Route path='/' element={<Create_event />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>

  )
} 
