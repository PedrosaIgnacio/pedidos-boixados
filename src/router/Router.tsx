import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRouter } from './private/PrivateRouter';
import { PublicRouter } from './public/PublicRouter';

export const Router = () => {
    const authenticated = false;
    return <BrowserRouter>{authenticated ? <PrivateRouter /> : <PublicRouter />}</BrowserRouter>;
};
