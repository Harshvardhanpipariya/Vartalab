import React from 'react'
import './App.css'
import LoginPage from '../src/ownComponents/LoginPage.jsx';
import SignUpPage from '../src/ownComponents/SignUpPage.jsx';
import {Routes,  Route } from 'react-router';
import { Switch } from "@/components/ui/switch"
function App() {
const [isDarkMode, setIsDarkMode] = React.useState(false);

function onCheckedChange(checked) {
  // console.log("checked", isDarkMode, checked);
  // yaha pass fasa tha
  setIsDarkMode(checked);

}


  return (

    <div className={`${isDarkMode ? "dark" : ""} bg-background w-full h-full`}  >

      <Switch checked={isDarkMode} onCheckedChange={onCheckedChange}  />
      
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>


    </div>
  )
}

export default App
