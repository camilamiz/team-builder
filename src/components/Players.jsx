import React from "react";
import { FiX } from "react-icons/fi";

export default function Players({
  nextPlayers,
  currentPlayers,
  destroyPlayerIndex
}) {
  const handleDestroyPlayer = (index) => {
    destroyPlayerIndex(index);
  };

  return (
    <>
      <div className="bg-neutral-200 m-3 p-4 rounded-lg text-stone-800">
        <h2 className="flex text-2xl p-4 mb-4">Próximos</h2>
        <ul>
          {nextPlayers.map((player) => (
            <li
              className="flex justify-center mb-2 gap-2 items-center"
              key={player.index}
            >
              <div className="flex bg-stone-100 p-2 rounded-lg items-center gap-1">
                <FiX
                  className="pt-1"
                  onClick={() => handleDestroyPlayer(player.index)}
                />
                <div className="mx-2">{player.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2">
        <div className="bg-purple-700 text-stone-800 p-4 rounded-lg">
          <h2 className="flex justify-center text-2xl p-4 mb-4 text-slate-50">
            Quem joga agora
          </h2>
          <div className="flex justify-center p-2">
            <ul>
              {currentPlayers.map((player) => (
                <li
                  className="bg-stone-800 py-4 px-8 mb-2 text-pink-50 rounded-lg flex gap-2 items-center"
                  key={player.index}
                >
                  <FiX
                    className="pt-1"
                    onClick={() => handleDestroyPlayer(player.index)}
                  />
                  <div>{player.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
