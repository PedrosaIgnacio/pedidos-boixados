import React, { FC } from 'react';
import { usePrivateLayoutStyles } from './styles';

interface PrivateLayoutProps {
    children: JSX.Element;
}

export const PrivateLayout: FC<PrivateLayoutProps> = ({ children }) => {
    const styles = usePrivateLayoutStyles();
    return <div className={styles.container}>{children}</div>;
};
