import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainLayout from './components/Layout/Layout'
import MyHeader from './components/Header/Header'
import MyFooter from './components/Footer/Footer'

function App() {
  return <>
     <MainLayout>
        <MyHeader />
        <h1>Welcome to Rauma Mix Project</h1>
        <MyFooter />
     </MainLayout>
  </>
}

export default App
