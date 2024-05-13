export type Category =
  | "식품(가공식품)"
  | "식품(유제품)"
  | "식품(소스류)"
  | "화장품"
  | "의약품";

export const categories: Category[] = [
  "식품(가공식품)",
  "식품(유제품)",
  "식품(소스류)",
  "화장품",
  "의약품",
];

export const categoryOptions = [
  { value: "식품(가공식품)", id: "processed" },
  { value: "식품(유제품)", id: "dairy" },
  { value: "식품(소스류)", id: "source" },
  { value: "화장품", id: "cosmetic" },
  { value: "의약품", id: "medicine" },
];
export type Item = {
  id?: string;
  name: string;
  category: Category;
  expirationDate: string;
  imageUrl?: string;
};

export type ItemEntity = {
  id: string;
  name: string;
  category: Category;
  expirationDate: string;
  imageUrl: string;
};
