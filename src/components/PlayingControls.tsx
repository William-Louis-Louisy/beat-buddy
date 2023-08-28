import React from "react";
import { FaPlay, FaStop, FaPause } from "react-icons/fa";
import { IPlayingControlsProps } from "../types/PlayingControlsProps";

function PlayingControls({
  isPlaying,
  handlePlayPause,
  handleStop,
}: IPlayingControlsProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-2 bg-element p-4 rounded-md">
      <label htmlFor="playing-control">Contrôles de lecture : </label>
      <div className="flex flex-row items-center gap-4" id="playing-control">
        <button
          onClick={handlePlayPause}
          className="bg-accent text-back text-sm rounded-md py-2 px-4 flex flex-row items-center gap-2"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={handleStop}
          className="bg-accent text-back text-sm rounded-md py-2 px-4 flex flex-row items-center gap-2"
        >
          <FaStop />
          Stop
        </button>
      </div>
    </div>
  );
}

export default PlayingControls;
