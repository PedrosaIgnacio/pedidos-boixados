import React, { FC, ReactElement, ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Clients } from '../../pages/clients/Clients';
import { PrivateLayout } from '../../layouts/private/PrivateLayout';

const getRouteWithLayout = (children: ReactElement): ReactNode => {
    return <PrivateLayout>{children}</PrivateLayout>;
};

export const PrivateRouter: FC = () => {
    return (
        <Routes>
            <Route path="/clients" element={getRouteWithLayout(<Clients />)} />
            <Route path="*" element={<Navigate to={'/clients'} />} />
        </Routes>
    );
};
