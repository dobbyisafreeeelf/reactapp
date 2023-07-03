import React from "react";
import PropTypes from "prop-types";
import UserRepos from "./UserRepos";



//funkcijska komponenta s tri parametra
const UserData = ({ userData, userRepos, onReset }) => {

  //Reset 
  const handleReset = () => {
    onReset();
  };

  if (!userData) {
    return null;
  }
//Prikazuje sliku korisnika, ime, lokaciju, bio + repos
  return (
    <div className="user-data-container">
      <img
        src={userData.avatar_url}
        alt="Profilna slika"
        width="120px"
        height="120px"
      />
      <h2>Podaci o korisniku</h2>
      <p> <span className="bold"> Ime: </span>{userData.name || "Nije poznato ime."}
      </p>
      <p> <span className="bold"> Lokacija: </span> {userData.location || "Nije poznata lokacija."}
      </p>
      <p> <span className="bold"> Bio: </span> {userData.bio || "Nema dostupne biografije."}
      </p>
      <h2>Repozitoriji</h2>
      <UserRepos userRepos={userRepos} />
      <button type="button" className="button" onClick={handleReset}>
        Reset
      </button>{" "}

    </div>
  );
};

//definiranje propsa
UserData.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string,
  }),
  onReset: PropTypes.func.isRequired, //provjera da je prop tip obavezno funkcija
};

export default UserData;
