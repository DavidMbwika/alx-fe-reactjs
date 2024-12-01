/* eslint-disable no-unused-vars */
import { useState } from 'react'
import UserProfile from "./components/UserProfile";
import './App.css'

function App() {

  return (
    <>
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind!
        THIS IS MY PROJECT
      </h1>
    </div>
    <div>
      <UserProfile />
    </div>
    </>
  )
}

export default App
