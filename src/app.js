import { useState } from 'react'
import Header from './components/Header.component.jsx'
import Nav from './components/Nav.component.jsx'
import initialEmails from './data/emails'
import Emails from './components/Emails.component.jsx'

import './styles/app.css'

function App() {

  console.log(initialEmails)
  const [emails, setEmails] = useState([...initialEmails]);
  

  return (
    <div className="app">
      <Header />
      <Nav emails={emails} setEmails={setEmails}/>
      <Emails emails={emails} setEmails={setEmails}/>
      
    </div>
  )
}

export default App
