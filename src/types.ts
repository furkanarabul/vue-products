export interface Products {
  id: number;
  name: string;
  price: number;
  variants: Variant[];
  details: Detail[]
}
export interface Variant {
    id: number;
    color: string;
    hexCode: string;
    images: string[];
    sizes: {
      name: string;
      stock: number
    }
}
export interface ColorVariant {
  id: number;
  color: string;
  hexCode: string;
  sizes: { name: string; inStock: boolean }[];
}
export interface Detail {
  title: string;
  text: string;
}