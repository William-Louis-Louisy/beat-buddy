import React from "react";
import KitSelector from "./KitSelector";
import TempoControl from "./TempoControl";
import MeasureControl from "./MeasureControl";
import PlayingControls from "./PlayingControls";
import { IControlPanelProps } from "../types/ControlPanelProps";

function ControlPanel({
  kit,
  setKit,
  tempo,
  setTempo,
  measures,
  setMeasures,
  isPlaying,
  handlePlayPause,
  handleStop,
}: IControlPanelProps) {
  return (
    <div className="flex flex-row items-start gap-8 w-full justify-center">
      {/* KIT SELECTOR */}
      <KitSelector kit={kit} setKit={setKit} />
      {/* TEMPO CONTROL */}
      <TempoControl tempo={tempo} setTempo={setTempo} />
      {/* MEASURE CONTROL */}
      <MeasureControl measures={measures} setMeasures={setMeasures} />
      {/* PLAYING CONTROLS */}
      <PlayingControls
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleStop={handleStop}
      />
    </div>
  );
}

export default ControlPanel;
