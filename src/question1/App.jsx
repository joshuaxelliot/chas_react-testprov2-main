// 1. Kommentarslista 3p
// Skapa en React-komponent för att hantera och visa en lista
// med kommentarer. Användare ska kunna lägga till och ta bort kommentarer.
// Listan är tom från början.

// Skapa Ett inputfält och en "Lägg till"-knapp för nya kommentarer.
// och en "Ta bort"-knapp bredvid varje kommentar för att ta bort den från listan.

import { useState } from "react";

function App() {
  let [commentList, setCommentList] = useState([]);
  let [inputText, setInputText] = useState("");

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleAdd = () => {
    if (inputText.trim() !== "") {
      setCommentList([...commentList, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    setCommentList(commentList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        placeholder="Skriv en kommentar..."
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Lägg till</button>
      <ul>
        {commentList.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleDelete(index)}>Radera</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

