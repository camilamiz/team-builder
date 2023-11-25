import React, { useState } from "react";

export default function Commands({ players, setPlayers, playersPerMatch }) {
  const [newPlayersPerMatch, setNewPlayersPerMatch] = useState(0);
  const [newPlayer, setNewPlayer] = useState("");

  const handleNewPlayerChange = (e) => {
    setNewPlayer(e.target.value);
  };

  const onAddPlayer = (newPlayer) => {
    const newPlayers = [...players];

    newPlayers.push({ index: players.length + 1, name: newPlayer });

    setPlayers(newPlayers);
    setNewPlayer("");
  };

  const handleNewPlayersPerMatchChange = (e) => {
    setNewPlayersPerMatch(e.target.value);
  };

  const onPlayersPerMatch = (newPlayersPerMatch) => {
    playersPerMatch(newPlayersPerMatch);
  };

  return (
    <div className="mb-4">
      <div className="mb-2 mt-4 flex justify-between gap-6">
        <div>
          <label>Novo jogador</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="new-player"
              onChange={(e) => handleNewPlayerChange(e)}
              value={newPlayer}
              className=" text-stone-800 px-4 py-2 rounded-lg flex justify-center "
            />
            <button
              className="rounded-lg bg-pink-50 text-stone-800 py-2 px-4"
              onClick={() => onAddPlayer(newPlayer)}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label>Jogadores por partida</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="players-per-match"
              onChange={(e) => handleNewPlayersPerMatchChange(e)}
              value={newPlayersPerMatch}
              className=" text-stone-800 w-20 p-2 rounded-lg flex justify-center"
            />
            <button
              className="rounded-lg bg-pink-50 text-stone-800 py-2 px-4"
              onClick={() => onPlayersPerMatch(newPlayersPerMatch)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
