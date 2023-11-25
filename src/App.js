import React, { useEffect, useState } from "react";

import "./App.css";
import Commands from "./components/Commands";
import Players from "./components/Players";
import Header from "./components/Header";

function App() {
  const [players, setPlayers] = useState([]);
  const [chosenPlayersPerMatch, setChosenPlayersPerMatch] = useState(0);
  const [currentPlayers, setCurrentPlayers] = useState([]);
  const [nextPlayers, setNextPlayers] = useState([]);
  const index = 0;

  const mock = [
    { index: 1, name: "Player 1" },
    { index: 2, name: "Player 2" },
    { index: 3, name: "Player 3" },
    { index: 4, name: "Player 4" },
    { index: 5, name: "Player 5" },
    { index: 6, name: "Player 6" },
    { index: 7, name: "Player 7" },
    { index: 8, name: "Player 8" },
    { index: 9, name: "Player 9" },
  ];

  // deletar
  useEffect(() => {
    setPlayers(mock);
  }, []);

  useEffect(() => {
    setCurrentPlayers(players.slice(index, index + chosenPlayersPerMatch));
    setNextPlayers(players.slice(index + chosenPlayersPerMatch));
  }, [chosenPlayersPerMatch, index, players]);

  const onPlayersPerMatch = (playersPerMatch) => {
    setChosenPlayersPerMatch(parseInt(playersPerMatch));
  };

  const handleNewMatch = () => {
    const newPlayers = [...players];

    const played = newPlayers.slice(index, chosenPlayersPerMatch + index);
    const notPlayed = newPlayers.slice(chosenPlayersPerMatch + index);

    setPlayers([...notPlayed, ...played]);
  };

  return (
    <>
      <Header />
      <div className="bg-stone-800 text-pink-50 w-full h-screen flex justify-center">
        <div className="w-3/4">
          <div className="flex w-full justify-center align-baseline">
            <Commands
              players={players}
              setPlayers={setPlayers}
              playersPerMatch={onPlayersPerMatch}
            />
            <div className="flex justify-center items-center">
              <button
                className="bg-pink-50 rounded text-stone-800 h-10 font-bold px-2"
                onClick={() => handleNewMatch()}
              >
                Nova partida
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Players
              nextPlayers={nextPlayers}
              currentPlayers={currentPlayers}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
