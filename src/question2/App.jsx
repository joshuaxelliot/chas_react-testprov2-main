import { useState } from "react";

function EmailEditor() {
  const [currentEmail, setCurrentEmail] = useState("jj@gmail.com");
  const [isEditing, setIsEditing] = useState(false);
  const [newEmailAddress, setNewEmailAddress] = useState("");

  const startEditing = () => {
    setIsEditing(true);
    setNewEmailAddress(currentEmail);
  };

  const handleEmailChange = (e) => {
    setNewEmailAddress(e.target.value);
  };

  const saveChanges = () => {
    setCurrentEmail(newEmailAddress);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="email"
            value={newEmailAddress}
            onChange={handleEmailChange}
          />
          <button onClick={saveChanges}>Spara</button>
        </div>
      ) : (
        <div>
          <p>Nuvarande mejladress: {currentEmail}</p>
          <button onClick={startEditing}>Redigera</button>
        </div>
      )}
    </div>
  );
}

export default EmailEditor;
