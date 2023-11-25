import React from "react";

export default function NextPlayers({ nextPlayers }) {
  return (
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
  );
}
