import { PhantomProvider } from './types';

/**
 * Retrieves the Phantom Provider from the window object
 * @returns {PhantomProvider | undefined} a Phantom provider if one exists in the window
 */
const getProvider = (): PhantomProvider | undefined => {

    // If the window is undefined, we're not in a browser environment
    if (typeof window === 'undefined') {
        return undefined;
    }

    if ('phantom' in window) {
        const anyWindow: any = window;
        const provider = anyWindow.phantom?.solana;

        if (provider?.isPhantom) {
            return provider;
        }
    }

    window.open('https://phantom.app/', '_blank');
};

export default getProvider;