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

  useEffect(() => {
    const players = JSON.parse(localStorage.getItem("players"));
    const playersPerMatch = localStorage.getItem("playersPerMatch");

    if (players) {
      setPlayers(players);
    }

    if (playersPerMatch) {
      setChosenPlayersPerMatch(parseInt(playersPerMatch));
    }
  }, []);

  useEffect(() => {
    setCurrentPlayers(players.slice(index, index + chosenPlayersPerMatch));
    setNextPlayers(players.slice(index + chosenPlayersPerMatch));
  }, [chosenPlayersPerMatch, index, players, nextPlayers]);

  const onPlayersPerMatch = (playersPerMatch) => {
    setChosenPlayersPerMatch(parseInt(playersPerMatch));
    localStorage.setItem("playersPerMatch", playersPerMatch);
  };

  const handleNewMatch = () => {
    const newPlayers = [...players];

    const played = newPlayers.slice(index, chosenPlayersPerMatch + index);
    const notPlayed = newPlayers.slice(chosenPlayersPerMatch + index);

    setPlayers([...notPlayed, ...played]);
    localStorage.setItem("players", JSON.stringify(players));
  };

  const handleReset = () => {
    localStorage.removeItem("players");
    localStorage.removeItem("playersPerMatch");
    setPlayers([]);
  };

  const onDestroyPlayerIndex = (destroyPlayerIndex) => {
    const newPlayers = [...players];

    const filteredPlayers = newPlayers.filter((player) => {
      return player.index !== destroyPlayerIndex;
    });

    setPlayers(filteredPlayers);
    localStorage.setItem("players", JSON.stringify(filteredPlayers));
  };

  return (
    <>
      <Header />
      <div className="bg-stone-800 text-pink-50 w-full h-screen inline-block justify-center">
        <div className="m-auto">
          <div className="flex w-full justify-center align-baseline">
            <Commands
              players={players}
              setPlayers={setPlayers}
              playersPerMatch={onPlayersPerMatch}
            />
          </div>
          <div className="flex w-full justify-center">
            <Players
              nextPlayers={nextPlayers}
              currentPlayers={currentPlayers}
              destroyPlayerIndex={onDestroyPlayerIndex}
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-7 bg-stone-800 gap-6">
          <button
            className="bg-pink-50 rounded text-stone-800 h-12 font-bold px-4 text-lg hover:bg-pink-200"
            onClick={() => handleNewMatch()}
          >
            Nova partida
          </button>
          <button
            className="bg-pink-50 rounded text-stone-800 h-12 font-bold px-4 text-lg hover:bg-pink-200"
            onClick={() => handleReset()}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
