export type featureProp = {
  img: string;
  title: string;
  description: string;
  dir?: "left" | "right";
};

export type productType = {
  id: number;
  imageURL: string;
  title: string;
  description: string;
  count: number;
  price: number;
};
