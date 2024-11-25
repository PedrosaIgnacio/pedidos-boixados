import { CSSProperties } from 'react';

/**
 * Tipo para definir claves de estilo y sus reglas CSS.
 */
export type StyleClass<T extends string> = Record<T, CSSProperties>;

/**
 * Inserta estilos dinámicamente en el DOM y devuelve un objeto con nombres de clases.
 * @param styles - Un objeto que define estilos CSS asociados a nombres de clase.
 * @param prefix - Prefijo opcional para los nombres de clase generados.
 */
export const createDynamicStyles = <T extends string>(
    styles: StyleClass<T>,
    prefix: string = 'dynamic'
): Record<T, string> => {
    const styleSheet =
        document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet;

    const classNames: Record<T, string> = {} as Record<T, string>;

    Object.keys(styles).forEach((key) => {
        const className = `${prefix}-${key}`;
        const styleRules = styles[key as T];

        // Generar la regla CSS
        const cssString = Object.entries(styleRules)
            .map(
                ([property, value]) =>
                    `${property.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`
            )
            .join(' ');

        // Insertar regla en el stylesheet
        if (styleSheet?.insertRule) {
            styleSheet.insertRule(`.${className} { ${cssString} }`, styleSheet.cssRules.length);
        }

        classNames[key as T] = className;
    });

    return classNames;
};
