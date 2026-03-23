export type ProductCategory = "charolas" | "bebidas" | "fresas";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // en centavos MXN (ej: 23900 = $239)
  category: ProductCategory;
  imagePath: string;
  isFeatured: boolean;
  isAvailable: boolean;
  rappiUrl?: string;
}

export interface Sucursal {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  instagramHandle?: string;
  schedule: { days: string; hours: string }[];
  imagePath: string;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  validDays: string[];
  isActive: boolean;
  badgeText: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  product?: string;
  source: "google" | "instagram" | "manual";
}
