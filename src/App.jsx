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
    // console.log("checked", isDarkMode, checked);
    // yaha pass fasa tha
    setIsDarkMode(checked);

  }


  return (
    <div className={`${isDarkMode ? "dark" : ""} ${isDarkMode ? "bg-[#0b1a19]" : "bg-[#183c3a]"} h-[100vh]  overflow-hidden`}>


      <div className="w-full h-full relative top-0 z-10">

        <img src={Vartalab} alt="background_image" className="absolute -left-[29.4%] top-[38%] rotate-[270deg] scale-[0.7] z-0 pointer-events-none dark:brightness-[0.7] dark:grayscale prevent-select"  />

        <img src={Vartalab} alt="background_image" className="absolute -right-[29.4%] top-[38%] rotate-[270deg] scale-[0.7] z-0 pointer-events-none dark:brightness-[0.7] dark:grayscale prevent-select" />

        <Routes>
          <Route path="/" element={<p>Home</p>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<ChatScreen onChange={onCheckedChange} checked={isDarkMode} />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
