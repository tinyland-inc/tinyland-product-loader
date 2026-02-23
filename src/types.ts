










export type AuthorReference =
  | { name: string; handle?: string; avatar?: string }
  | string;




export interface ProductFrontmatter {
  name: string;
  slug: string;
  description: string;
  category: string;
  author?: AuthorReference;
  price?: number;
  currency?: string;
  license?: string;
  version?: string;
  featured?: boolean;
  image?: string;
  excerpt?: string;
  tagline?: string;
  tags?: string[];
  order?: number;
  published?: boolean;
  publishedAt?: string;
  
  [key: string]: unknown;
}




export interface Product {
  frontmatter: ProductFrontmatter;
  content: string;
  slug: string;
  filePath?: string;
}




export interface LoadedContent {
  metadata: Record<string, unknown>;
  content: string;
  slug: string;
  filePath: string;
  ownerHandle?: string;
}
