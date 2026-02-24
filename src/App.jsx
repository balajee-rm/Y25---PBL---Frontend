import { createContext, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

const CounterContext = createContext();

function App() {
  
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div className="App">
      <CounterContext.Provider value={{ userInfo, setUserInfo }}>
        <BrowserRouter>
          <Header />
          <MainContent />
        </BrowserRouter>
      </CounterContext.Provider>
      <Footer />
    </div>
  )
}

export { App, CounterContext };