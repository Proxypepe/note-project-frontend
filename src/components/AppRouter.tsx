import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";


const AppRouter = () => {

    const isAuth = false

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.PUBLIC_REDIRECT} replace/>}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.PUBLIC_REDIRECT} replace/>}
                />
            </Routes>
    );
};

export default AppRouter;