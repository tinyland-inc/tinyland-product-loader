







import type { LoadedContent } from './types.js';




export interface ProductLoaderConfig {
  




  loadContent?: (contentType: string) => LoadedContent[];
}

let currentConfig: ProductLoaderConfig = {};






export function configure(config: ProductLoaderConfig): void {
  currentConfig = { ...config };
}




export function getConfig(): ProductLoaderConfig {
  return { ...currentConfig };
}




export function resetConfig(): void {
  currentConfig = {};
}




export function getContentLoader(): (contentType: string) => LoadedContent[] {
  if (!currentConfig.loadContent) {
    throw new Error(
      'tinyland-product-loader: No content loader configured. ' +
        'Call configure({ loadContent }) before using any loader function.'
    );
  }
  return currentConfig.loadContent;
}
