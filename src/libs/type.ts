export type featureProp = {
  img: string;
  title: string;
  description: string;
  dir?: "left" | "right";
};

export type productType = {
  _id: number;
  imageURL: string;
  title: string;
  description: string;
  quantity: number;
  sells: number;
  price: number;
};
