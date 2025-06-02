import React from 'react'
import './App.css'
import LoginPage from '../src/ownComponents/LoginPage.jsx';
import SignUpPage from '../src/ownComponents/SignUpPage.jsx';
import { Routes, Route } from 'react-router';
import { Switch } from "@/components/ui/switch"
import ChatScreen from './ownComponents/ChatScreen';
import Vartalab from './assets/vartalab.png';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  function onCheckedChange(checked) {
    setIsDarkMode(checked);
  }

  return (
    <div className={`${isDarkMode ? "dark" : ""} ${isDarkMode ? "bg-[#0b1a19]" : "bg-[#183c3a]"} h-[100vh] w-full relative overflow-hidden`}>
      {/* Left background image */}
      <img
        src={Vartalab}
        alt="left background"
        className="absolute top-0 left-0 h-full object-cover z-0"
        style={{ width: "auto", maxWidth: "40vw" }}
      />

      {/* Right background image */}
      <img
        src={Vartalab}
        alt="right background"
        className="absolute top-0 right-0 h-full object-cover z-0"
        style={{ width: "auto", maxWidth: "40vw" }}
      />

      {/* Main content (Routes) */}
      <div className="relative z-10 w-full h-full flex flex-col">
        <Routes>
          <Route path="/" element={<p className='text-red-500'>Home</p>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<ChatScreen onChange={onCheckedChange} checked={isDarkMode} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
