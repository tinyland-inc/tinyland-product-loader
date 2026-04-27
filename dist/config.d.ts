import type { LoadedContent } from './types.js';
export interface ProductLoaderConfig {
    loadContent?: (contentType: string) => LoadedContent[];
}
export declare function configure(config: ProductLoaderConfig): void;
export declare function getConfig(): ProductLoaderConfig;
export declare function resetConfig(): void;
export declare function getContentLoader(): (contentType: string) => LoadedContent[];
//# sourceMappingURL=config.d.ts.map