'/'/* eslint-disable no-unused-vars */
import WelcomeMessage from './WelcomeMessage.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
 
import UserProfile from './components/UserProfile.jsx'; 
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// src/App.jsx

function App() {
  const [count, setCount] = useState(0);

  const UserProfile = {
    name: "Alice",
    age: 25,
    bio:"Loves hiking and photography"
  };

  return (
    <>
      <WelcomeMessage /> {/* Make sure this component is defined correctly */}
      <MainContent/>
      <Footer/>
      <Header/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <name/>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography"></UserProfile>
    </>
  );
}

export default App;
