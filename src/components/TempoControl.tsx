import React from "react";
import { ITempoControlProps } from "../types/TempoControlProps";

function TempoControl({ tempo, setTempo }: ITempoControlProps) {
  // HANDLE TEMPO CHANGE
  const handleTempoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTempo = parseInt(event.target.value, 10);
    if (newTempo >= 40 && newTempo <= 240) {
      setTempo(newTempo);
    }
  };

  return (
    <div className="bg-element max-w-[140px] p-4 rounded-md flex flex-col items-start justify-between gap-2 truncate">
      <label htmlFor="tempo-control">Tempo (BPM): </label>
      <input
        className="text-back rounded-md w-full text-sm"
        id="tempo-control"
        type="number"
        value={tempo}
        onChange={handleTempoChange}
        min="40"
        max="240"
      />
    </div>
  );
}

export default TempoControl;
