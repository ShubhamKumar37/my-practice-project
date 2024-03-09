import logo from './logo.svg';
import './App.css';
import NewNav from './Components/NewNav';
import TextArea from './Components/TextArea';
import Alert from './Components/Alert';
import NewsComp from './Components/NewsComp';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  const [DarkMode, StateDarkMode] = useState('gray-200 text-black');
  const [DarkWhiteText, StateDarkWhiteText] = useState('Enable Dark Mode');
  const [AlertMessage, SetAlertMessage] = useState('', 100);

  const Set_Alert = (Message, Type) => {
    SetAlertMessage(
      {
        MSG: Message,
        TYP: Type
      }
    )
    setTimeout(() => {
      SetAlertMessage(null);
    }, 1200);
  }

  const ToggleDisplay = () => {
    if (DarkMode === 'gray-200 text-black') {
      StateDarkMode('black text-white');
      document.body.style.backgroundColor = '#18101F';
      Set_Alert('Now you are in dark mode', 'Success');
    }
    else {
      document.body.style.backgroundColor = '#E6CAFF';
      StateDarkMode('gray-200 text-black');
      Set_Alert('Now you are in light mode', 'Success');
    }
    ChangeText();
  }

  const ChangeText = () => {
    if (DarkWhiteText === 'Enable Dark Mode') {
      StateDarkWhiteText('Enable Light Mode');
    }
    else {
      StateDarkWhiteText('Enable Dark Mode');
    }
  }

  return (
    <div>
      <NewNav Mode={DarkMode} ToggleMode={ToggleDisplay} Text={DarkWhiteText} className='relative' Message={AlertMessage}></NewNav>
      <Alert Message={AlertMessage}></Alert>
      <BrowserRouter>
        <Routes>
          <Route path='./Components/NewsComp' element={<NewsComp/>}></Route>
          <Route path='./Components/TextArea' element={<TextArea/>}></Route>
          
        </Routes>
      </BrowserRouter>
      {/* <NewsComp></NewsComp> */}
    </div>
  );
}

export default App;
