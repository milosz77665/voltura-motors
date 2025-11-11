import type { IImage } from "./IImage";

export interface IProduct {
  id: number;
  name: string;
  image: IImage;
  galleryImagePaths: IImage[];
  price: string;
  currency: string;
  type: string;
  drive: string;
  details: string;
  keyFeatures: { name: string; value: string }[];
}
