export type AlbumType = {
  id: string;
  name: string;
  image: string;
  artist: string;
  type: "Album";
  value: string[];
};

export type SingleType = {
  id: string;
  name: string;
  image: string;
  artist: string;
  type: "Single";
  value: string;
};

export type ItemProps = AlbumType | SingleType;
