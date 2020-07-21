import React, {useState, useEffect} from "react";
import DanceTeam from "./components/DanceTeam";
import Background from './images/legends.png';


/*
  {
    id: adfgsdfg,
    name: "TODO Item",
    checked: false,
  }
*/



function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
//Gives unique id, name, and startnig value of checked.
const createDanceTeam = (name) => {
  return {
    id: uuidv4(),
    name: name,
  };
};

const TeamsApp= () => 
{
  //Declaring State Variables
  //Adjusting team array
  const [teamNames, setTeamNames] = useState([]);

  //Setting new team name
  const [newTeamName, setNewTeamName] = useState([""]);

  //creates and adds createDanceTeam constant to the teamNames array
  const addNewTeam = () => {
    
    setTeamNames([...teamNames, createDanceTeam(newTeamName)]);
  };

  const STORAGE_KEY = "teams";

//Putting team name into local storage
useEffect(() => 
{
    if (teamNames.length > 0) 
    {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(teamNames));
    }
  }, [teamNames]);

  //Getting team names from local storage
  useEffect(() => 
  {
    const fetchedTeamNames = localStorage.getItem(STORAGE_KEY);
    setTeamNames(JSON.parse(fetchedTeamNames) || []);
  }, []);

  console.log(teamNames);

  //Style objects
  const textStyle = {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 40,
    color: 'purple',
  };

  const inputStyle = {
    textAlign: 'center', // <-- the magic
    fontSize: 18,
    color: 'purple',
  };

  return (
    <div style={{backgroundColor: "lightblue", textAlign: 'center', height: '100vh', backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <input
        style = {inputStyle}
        type="text"
        value={newTeamName}
        onChange={(event) => setNewTeamName(event.target.value)}
      />
      <button onClick={addNewTeam}>Submit Team</button>

      <h2 style = {textStyle}>Dance Teams:</h2>
      {teamNames.map((item) => {
        return (
          <DanceTeam
            id={item.id}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default TeamsApp;


