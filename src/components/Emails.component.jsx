import '../styles/app.css'
import { useState } from 'react';
function Emails (props){
  
    const{emails,setEmails}=props;
  
    const [readList,setReadList] = useState(emails);
    const [starredList,setStarredList] = useState(emails);
  
const setReadListHandler=(email)=>{
  const newReadList = emails.filter(element => {
    if (element.id === email.id) {
      element.read = true;
    } 
    return element.read === true;
  })
  
  setReadList(newReadList);
  console.log('current read list',readList);
}
const setStarredListHandler=(email)=>{
  const newStarredList = emails.filter(element => {
    if (element.id === email.id) {
      element.starred = true;
    } 
    return element.starred === true;
  })
  
  setStarredList(newStarredList);
  console.log('current read list',starredList);
}
 
return(
    <main className="emails">
        {emails.map(email => {
          
            return (
              <li className="email">
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox" onClick={()=>{setReadListHandler(email)}}/>
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  onClick={()=>{setStarredListHandler(email)}}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
             )
                   
        })}
      </main>
)
}
export default Emails;
