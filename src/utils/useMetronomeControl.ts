import { useState, useEffect } from "react";

export const useMetronomeControl = (
  tempo: number,
  loadedSounds: { [key: string]: AudioBuffer } | null,
  isPlaying: boolean,
  setIsPlaying: (isPlaying: boolean) => void,
  handleBeat: () => void
) => {
  const [metronome, setMetronome] = useState<number | undefined>(undefined);

  const startMetronome = (tempo: number, beatCallback: () => void) => {
    if (loadedSounds) {
      const interval = window.setInterval(beatCallback, 60000 / tempo / 4);
      return interval;
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      clearInterval(metronome);
    } else {
      const interval = startMetronome(tempo, handleBeat);
      setMetronome(interval);
    }
  };

  const handleStop = () => {
    clearInterval(metronome);
    setIsPlaying(false);
    setMetronome(undefined);
  };

  useEffect(() => {
    if (isPlaying) {
      // Clear the existing metronome interval
      clearInterval(metronome);
      // Start a new metronome interval with the updated tempo
      const interval = startMetronome(tempo, handleBeat);
      setMetronome(interval);
    }
  }, [tempo]);

  return { handlePlayPause, handleStop };
};
