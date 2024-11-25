import { createDynamicStyles, StyleClass } from '../../utils/styles/styles';

interface PrivateLayoutStylesClassNames {
    container: string;
}

const usePrivateLayoutStaticStyles = (): StyleClass<keyof PrivateLayoutStylesClassNames> => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
});

export const usePrivateLayoutStyles = (): PrivateLayoutStylesClassNames => {
    const staticStyles = usePrivateLayoutStaticStyles();
    return createDynamicStyles(staticStyles, 'private-layout');
};
