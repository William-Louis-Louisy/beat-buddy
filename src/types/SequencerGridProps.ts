import { IKit } from "./Kit";

export interface ISequencerGridProps {
  kit: IKit | null;
  measures: number;
  beatsPerMeasure: number;
  sequence: boolean[][];
  setSequence: (sequence: boolean[][]) => void;
}
