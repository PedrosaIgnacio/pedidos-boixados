import { createDynamicStyles, StyleClass } from '../../utils/styles/styles';

interface PublicLayoutStylesClassNames {
    container: string;
}

const usePublicLayoutStaticStyles = (): StyleClass<keyof PublicLayoutStylesClassNames> => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#f8fafb',
    },
});

export const usePublicLayoutStyles = (): PublicLayoutStylesClassNames => {
    const staticStyles = usePublicLayoutStaticStyles();
    return createDynamicStyles(staticStyles, 'public-layout');
};
