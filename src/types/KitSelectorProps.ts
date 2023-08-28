import { IKit } from "./Kit";

export interface IKitSelectorProps {
  kit: IKit | null;
  setKit: (kit: IKit | null) => void;
}
