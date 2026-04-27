let currentConfig = {};
export function configure(config) {
    currentConfig = { ...config };
}
export function getConfig() {
    return { ...currentConfig };
}
export function resetConfig() {
    currentConfig = {};
}
export function getContentLoader() {
    if (!currentConfig.loadContent) {
        throw new Error('tinyland-product-loader: No content loader configured. ' +
            'Call configure({ loadContent }) before using any loader function.');
    }
    return currentConfig.loadContent;
}
