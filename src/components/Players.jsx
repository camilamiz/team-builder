import React from "react";

export default function Players({ nextPlayers, currentPlayers }) {
  return (
    <>
      <div className="bg-neutral-200 m-3 p-4 rounded-lg text-stone-800">
        <h1 className="flex justify-center text-3xl p-4 mb-4">Próximos</h1>
        <ul>
          {nextPlayers.map((player) => (
            <li className="flex justify-center mb-2" key={player.index}>
              {player.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2">
        <div className="bg-teal-400 text-stone-800 p-4 rounded-lg">
          <h1 className="flex justify-center text-3xl p-4 mb-4">
            Quem joga agora
          </h1>
          <div className="flex justify-center p-2">
            <ul>
              {currentPlayers.map((player) => (
                <li
                  className="bg-stone-800 py-4 px-8 mb-2 text-pink-50 rounded-lg"
                  key={player.index}
                >
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
