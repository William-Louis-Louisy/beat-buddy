import React from "react";
import { IMeasureControlProps } from "../types/MeasureControlProps";

function MeasureControl({ measures, setMeasures }: IMeasureControlProps) {
  const handleMeasureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMeasures = parseInt(event.target.value, 10);
    setMeasures(newMeasures);
  };

  return (
    <div className="bg-element max-w-[140px] p-4 rounded-md flex flex-col items-start justify-between gap-2 truncate">
      <label htmlFor="measure-control">Mesures : </label>
      <select
        className="text-back rounded-md w-full text-sm"
        id="measure-control"
        value={measures}
        onChange={handleMeasureChange}
      >
        {[1, 2, 4, 8, 16, 32].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MeasureControl;
