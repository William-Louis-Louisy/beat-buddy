import { IKit } from "./Kit";

export interface IControlPanelProps {
  kit: IKit | null;
  setKit: (kit: IKit) => void;
  tempo: number;
  setTempo: (tempo: number) => void;
  measures: number;
  setMeasures: (measures: number) => void;
  isPlaying: boolean;
  handlePlayPause: () => void;
  handleStop: () => void;
}
