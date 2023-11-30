import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import styled from 'styled-components';
import ContactList from './components/ContactList';
import Conversation from './components/Conversation';
import ChatSectionPlaceholder from './components/ChatSectionPlaceholder';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
  const [chatPlaceHolder, setChatPlaceHolder] = useState(true);
  const [selectedChat, setSelectedChat] = useState();
  const [userLogged, setUserLogged] = useState(false);

  const HomePage =()=>{
    if(userLogged){
      return(
        <div className='app'>
          <ContactList setChatPlaceHolder={setChatPlaceHolder} setSelectedChat={setSelectedChat} />
            {chatPlaceHolder ? (<ChatSectionPlaceholder />) : (<Conversation selectedChat={selectedChat} />)}
            {/* <Conversation /> */}
        </div>
      )
    }else {
      return <Login/>
    }
  }
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App;
