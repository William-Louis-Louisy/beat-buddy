import React from "react";
import { ISequencerGridProps } from "../types/SequencerGridProps";

function SequencerGrid({
  kit,
  sequence,
  setSequence,
  measures,
  beatsPerMeasure,
}: ISequencerGridProps) {
  const handleBeatToggle = (row: number, col: number) => {
    const newSequence = sequence.map((r, i) =>
      r.map((beat, j) => (i === row && j === col ? !beat : beat))
    );
    setSequence(newSequence);
  };
  return (
    <div className="flex w-full bg-element rounded-md">
      {kit && (
        <>
          {" "}
          <div className="w-20 flex flex-col justify-start">
            <div className="h-10 text-sm px-3"></div>
            {kit.sounds.map((sound) => (
              <div className="h-10 text-sm px-3 flex items-center justify-center">
                <span>{sound.name}</span>
              </div>
            ))}
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {Array.from({ length: measures }).map((_, measureIndex) => (
                    <td
                      colSpan={beatsPerMeasure}
                      className="text-center h-10 border-l-2 border-orange-500"
                    >
                      {measureIndex + 1}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody className="w-full bg-element">
                {kit.sounds.map((sound, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className=" w-full border border-back h-10"
                  >
                    {sequence[rowIndex].map((beat, beatIndex) => (
                      <td
                        key={beatIndex}
                        className={`p-0 ${
                          beatIndex % beatsPerMeasure === 0
                            ? "border-l-2 border-orange-500"
                            : "border-0"
                        }`}
                        onClick={() => handleBeatToggle(rowIndex, beatIndex)}
                      >
                        <div
                          className={`h-10 w-6 flex flex-col items-center justify-start rounded-t-sm rounded-b-lg pt-2 ${
                            beat
                              ? "bg-accent border-x border-back"
                              : beatIndex % 8 < 4
                              ? "bg-gray-300"
                              : "bg-gray-200"
                          } ${
                            beatIndex % beatsPerMeasure === 0
                              ? "ml-0"
                              : " ml-px"
                          }`}
                        >
                          <span
                            className={`w-4 h-0.5 ${
                              beat
                                ? "bg-back"
                                : beatIndex % 8 < 4
                                ? "bg-gray-400"
                                : "bg-gray-400"
                            }`}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default SequencerGrid;
