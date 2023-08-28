export interface ISound {
  name: string;
  url: string;
}

export interface IKit {
  name: string;
  description: string;
  sounds: ISound[];
}
