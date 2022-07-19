import initialEmails from './data/emails'
import Header from './components/Header.component'
import './styles/app.css'
import { useState, useEffect } from 'react'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false)
  const countStar = emails.reduce((acc, email) => email.starred ? acc+=1:acc,0)
  const countReadEmail = emails.reduce((acc, email) => email.read ? acc+=1:acc,0)

  const originalEmails = [...initialEmails];
  let filteredEmails = emails;
 
  useEffect(() => {
    console.log('hideread', hideRead);
    if (hideRead) {
      filteredEmails = emails.filter(email => !email.read);
    } else {
      filteredEmails = originalEmails;
    }
    setEmails(filteredEmails);
  }, [hideRead]);

  const toggleRead = (email) => {
    const updateEmail = emails.filter(element => {
      if (element.id === email.id) email.read = true;
      return email;
    })
    setEmails(updateEmail);
  }
  const toggleStar = (email) => {
    const updateEmail = emails.filter(element => {
      if (element.id === email.id) email.starred = true;
      return email;
    })
    setEmails(updateEmail);
  }


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{countReadEmail}</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{countStar}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              onClick={() => setHideRead(!hideRead)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map((email) => {
          return (
            <li className="email" key={email.id}>
              <div className="select">
                <input className="select-checkbox" type="checkbox"
                  onClick={() => toggleRead(email)}
                ></input>
              </div>

              <div className="star">
                <input className="star-checkbox" type="checkbox"
                  onClick={() => toggleStar(email)}
                ></input>
              </div>

              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          );
        })}
      </main>
    </div>
  );
}

export default App;