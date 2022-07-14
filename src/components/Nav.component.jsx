import '../styles/app.css'
import { useState, useEffect } from 'react';
function Nav(props) {

  const { emails, setEmails } = props;
  const [orginalList, setOriginalList] = useState(emails);
  const [filteredList, setFilteredList] = useState(emails);

  const filteredHandler = () => {

    const filteredList = emails.filter(element => {
   
        return element.read === true;
      
    })
    console.log('filteredList', filteredList);
    setFilteredList(filteredList);
    setEmails(filteredList);

  }
  const countStarHandler = () => {

    const filteredList = emails.reduce((element,sum)=>{
      if(element.starred){
        sum++;
      }
      return sum;
    },0)
   
  }
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className="item active"
        >
          <span className="label">Inbox</span>
          <span className="count">?</span>
        </li>
        <li
          className="item"
        >
          <span className="label">Starred</span>
          <span className="count">{countStarHandler}</span>
        </li>

        <li className="item toggle">
          <label for="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            onChange={() => { filteredHandler() }}
          />
        </li>
      </ul>
    </nav>
  )
}
export default Nav;
