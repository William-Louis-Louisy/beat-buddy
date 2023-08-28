import { useEffect, useState, useRef } from "react";
import SequencerGrid from "../components/SequencerGrid";
import { IKit } from "../types/Kit";
import { useSoundLoader } from "../utils/useSoundLoader";
import { useMetronomeControl } from "../utils/useMetronomeControl";
import ControlPanel from "../components/ControlPanel";

function BeatBuddy() {
  const initialSequence = Array(8)
    .fill(null)
    .map(() => Array(16).fill(false));

  /* States */
  const [kit, setKit] = useState<IKit | null>(null);
  const [tempo, setTempo] = useState(140);
  const [measures, setMeasures] = useState(4);
  const [sequence, setSequence] = useState<boolean[][]>(initialSequence);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentBeatRef = useRef(0);
  const sequenceRef = useRef(sequence);
  const beatsPerMeasure = 16;

  useEffect(() => {
    if (kit) {
      const newSequence = kit.sounds.map(() =>
        Array(measures * beatsPerMeasure).fill(false)
      );
      setSequence(newSequence);
    }
  }, [kit, measures, beatsPerMeasure]);

  useEffect(() => {
    sequenceRef.current = sequence;
  }, [sequence]);

  const playSound = (buffer: AudioBuffer) => {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start();
  };

  const handleBeat = () => {
    const currentSequence = sequenceRef.current;
    if (currentSequence && loadedSounds && kit) {
      for (let i = 0; i < currentSequence.length; i++) {
        if (currentSequence[i][currentBeatRef.current]) {
          const soundName = kit.sounds[i].name;
          playSound(loadedSounds[soundName]);
        }
      }
      currentBeatRef.current =
        (currentBeatRef.current + 1) % (measures * beatsPerMeasure);
    }
  };

  const { loadedSounds, audioContext } = useSoundLoader(kit);
  const { handlePlayPause, handleStop } = useMetronomeControl(
    tempo,
    loadedSounds,
    isPlaying,
    setIsPlaying,
    handleBeat
  );

  return (
    <div className="flex flex-col items-center w-4/5 gap-12 pb-12">
      {/* CONTROLS */}
      <ControlPanel
        kit={kit}
        setKit={setKit}
        tempo={tempo}
        setTempo={setTempo}
        measures={measures}
        setMeasures={setMeasures}
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleStop={handleStop}
      />

      <SequencerGrid
        kit={kit}
        sequence={sequence}
        measures={measures}
        setSequence={setSequence}
        beatsPerMeasure={beatsPerMeasure}
      />
    </div>
  );
}

export default BeatBuddy;
