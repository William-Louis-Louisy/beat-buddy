import { useState, useEffect } from "react";
import { IKit } from "../types/Kit";

export const useSoundLoader = (kit: IKit | null) => {
  const [loadedSounds, setLoadedSounds] = useState<{
    [key: string]: AudioBuffer;
  } | null>(null);

  const audioContext = new (window.AudioContext || window.AudioContext)();

  const loadSound = (url: string): Promise<AudioBuffer> => {
    return fetch(url)
      .then((response) => response.arrayBuffer())
      .then(
        (arrayBuffer) =>
          new Promise<AudioBuffer>((resolve, reject) => {
            audioContext.decodeAudioData(arrayBuffer, resolve, reject);
          })
      );
  };

  const loadKitSounds = async (kit: IKit) => {
    const sounds: { [key: string]: AudioBuffer } = {};
    const promises = kit.sounds.map((sound) => loadSound(sound.url));
    const loaded = await Promise.all(promises);
    kit.sounds.forEach((sound, index) => {
      sounds[sound.name] = loaded[index];
    });
    return sounds;
  };

  useEffect(() => {
    if (kit) {
      loadKitSounds(kit).then((sounds) => {
        setLoadedSounds(sounds);
      });
    }
  }, [kit]);

  return { loadedSounds, audioContext };
};
