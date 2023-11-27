import React, { useState } from 'react';
import './App.css';
// import styled from 'styled-components';
import ContactList from './components/ContactList';
import Conversation from './components/Conversation';
import ChatSectionPlaceholder from './components/ChatSectionPlaceholder';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [chatPlaceHolder, setChatPlaceHolder] = useState(true);
  const [selectedChat, setSelectedChat] = useState();

  return (
    <>
      <Routes>
        <Route path='/' element={
          <div className='app'>
            <ContactList setChatPlaceHolder={setChatPlaceHolder} setSelectedChat={setSelectedChat} />
            {chatPlaceHolder ? (<ChatSectionPlaceholder />) : (<Conversation selectedChat={selectedChat} />)}
            {/* <Conversation /> */}
          </div>
        } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>

  )
}

export default App;
