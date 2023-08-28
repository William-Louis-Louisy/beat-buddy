import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { IKitSelectorProps } from "../types/KitSelectorProps";

function KitSelector({ kit, setKit }: any) {
  // KITS
  const kits = [
    {
      name: "Kit 1",
      description: "Basic Hip-Hop drum kit",
      sounds: [
        { name: "Kick", url: "/kits/kit_1/kick_k1.wav", type: "kick" },
        { name: "Clap", url: "/kits/kit_1/clap_k1.wav", type: "clap" },
        { name: "Snare", url: "/kits/kit_1/snare_k1.wav", type: "snare" },
        { name: "Snare2", url: "/kits/kit_1/snare2_k1.wav", type: "snare" },
        { name: "HiHat", url: "/kits/kit_1/hihat_k1.wav", type: "hihat" },
      ],
    },
  ];

  // STATES
  const [selectedKit, setSelectedKit] = useState(kit);

  const handleKitChange = (event: any) => {
    const selected = kits.find((k) => k.name === event.target.value);
    setSelectedKit(selected);
  };

  const handleKitSelect = () => {
    setKit(selectedKit);
  };

  return (
    <div className="bg-element p-4 rounded-md">
      <div className="flex flex-col items-start justify-between gap-2 truncate">
        <label htmlFor="kit-selector">Choisissez un kit :</label>
        <select
          className="text-back rounded-md w-full text-sm"
          id="kit-selector"
          onChange={handleKitChange}
        >
          <option value="">Sélectionnez un kit</option>
          {kits.map((k, index) => (
            <option key={index} value={k.name}>
              {k.name}
            </option>
          ))}
        </select>
      </div>

      {selectedKit && (
        <>
          <div className="my-4">
            <h3 className="text-accent text-lg font-semibold">
              {selectedKit.name}
            </h3>
            <p className="italic">{selectedKit.description}</p>

            <div className="flex flex-wrap flex-row gap-2 mt-2">
              {selectedKit.sounds?.map((sound: any, index: any) => (
                <button
                  onClick={() => new Audio(sound.url).play()}
                  key={index}
                  className="bg-back rounded-md p-2 text-sm aspect-square w-16 flex flex-col items-center justify-between"
                >
                  <FaVolumeUp className="text-lg" /> {sound.name}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full flex flex-row items-center justify-end">
            <button
              className="bg-accent text-back rounded-md py-2 px-4"
              onClick={handleKitSelect}
            >
              Sélectionner ce kit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default KitSelector;
