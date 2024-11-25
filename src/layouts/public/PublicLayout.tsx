import React, { FC } from 'react';
import { usePublicLayoutStyles } from './styles';

interface PublicLayoutProps {
    children: JSX.Element;
}

export const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    const styles = usePublicLayoutStyles();
    return <div className={styles.container}>{children}</div>;
};
