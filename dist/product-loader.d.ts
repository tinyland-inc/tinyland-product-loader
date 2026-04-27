import type { Product } from './types.js';
export declare function loadProductsServer(): Product[];
export declare function getPublishedProductsServer(): Product[];
export declare function getFeaturedProductsServer(limit?: number): Product[];
export declare function getProductBySlugServer(slug: string): Product | null;
export declare function getProductsByCategoryServer(category: string): Product[];
export declare function getAllCategoriesServer(): string[];
export declare function getAllProductTagsServer(): string[];
export declare function searchProductsServer(query: string): Product[];
export declare function getRelatedProductsServer(currentSlug: string, limit?: number): Product[];
//# sourceMappingURL=product-loader.d.ts.map