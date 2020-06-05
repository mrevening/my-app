// App.js
import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
    { name: "Amy McDonald", email: "amy@email.com", age: 33 }
  ];

  return (
    <>
      {contacts.map(contact => (
        <ContactCard
        avatar="https://via.placeholder.com/150"
        name={contact.name}
        email={contact.email}
        age={contact.age}
      />
    ))}
    </>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age 
        </button>
        {showAge && <p>Age: {props.age}</p> }
      </div>
    </div>
  );
};

export default App;