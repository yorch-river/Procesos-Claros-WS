
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}

export interface Service {
  title: string;
  problem: string;
  includes: string[];
  result: string;
}
