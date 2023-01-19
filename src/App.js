import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import contacts from "../src/contacts.json";

function App() {
  const [contact, setContacts] = useState(contacts.splice(0, 5));

  function addRandomContact() {
    const randomID = Math.floor(Math.random() * contacts.length)
    setContacts([...contact, contacts[randomID]])
  }
  function sortByName() {
    const copy = [...contact]
    const sortedContacts = copy.sort((a, b) => a.name > b.name ? 1 : -1)
    setContacts(sortedContacts)
  }

  function sortByPopularity() {
    const copy = [...contact];
    const sortedContacts = copy.sort((a, b) => a.popularity < b.popularity ? 1 : -1)
    setContacts(sortedContacts)
  }

  function handleDeleteContact(contactID) {
    const filteredContacts = contact.filter((contact) => {
      return contact.id !== contactID;
    });
    setContacts(filteredContacts);
  }
  return (
    <div className="App">
      <h1>Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      {contact.map((contact) => {
        return (
          <div key={contact.id}>
            <table>
              <thead>
                <tr style={{ fontWeight: "bold" }}>IronContacts</tr>
              </thead>
              <tbody>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Picture</td>
                  <td>Name</td>
                  <td>Popularity</td>
                  <td>Won an Oscar</td>
                  <td>Won an Emmy</td>
                  <td>
                    <button onClick={() => handleDeleteContact(contact.id)}>Remove Contact</button>
                  </td>
                </tr>
                <tr>
                  <td><img className="contactPicture" src={contact.pictureUrl} alt="contact"></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  {contact.wonOscar && <td>🏆</td>}
                  {contact.wonEmmy && <td></td>}
                </tr>
              </tbody>
            </table>
          </div>
        )
      })}
    </div>
  );
}

export default App;
