export type productType = {
  id: number;
  title: string;
  image: string;
  stockCount: number;
};

export type FeatureProps = {
  img: string;
  title: string;
  description: string;
  dir?: "left" | "right";
};
