import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserData from "./components/UserData";
import "./App.css";

const App = () => {
  // hook za varijable i funkcije 
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [userRepos, setRepos] = useState([]);

  // Asinkrona funckija koja dohvaća podatke o korisniku s GitHuba i reposa
  const fetchUserData = async (username) => {

  // prvo provjera unosa u input field i alert ako nije
    if (!username) {
    alert("Nešto nije u redu. Probajte ponovno upisati.");
    return;
    }
    
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const userJson = await userResponse.json();
    setUserData(userJson);

    const userReposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const userReposJson = await userReposResponse.json();
    setRepos(userReposJson);
  };

  // Funkcija koja resetira sve state varijable
  const handleReset = () => {
    setUsername("");
    setUserData(null);
    setRepos([]);
  };


  // Ternarnim operatorom provjeravamo userData uvijet. Ako postoji, prikazuje se userdata komponenta, ako ne postoji prikazuje se userform - input username. 
  return (
    <div className="container">
      <div className="app">
        {userData ? (
          <UserData userData={userData} userRepos={userRepos} onReset={handleReset} />
        ) : (
          <>
          <h2>GitHub korisničko ime:</h2>

          <UserForm
            onUserSubmit={fetchUserData}
            username={username}
            setUsername={setUsername}
          />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

