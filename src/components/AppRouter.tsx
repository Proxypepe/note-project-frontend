import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";


const AppRouter: FC = () => {

    const {isAuth} = useTypedSelector(state => state.auth)

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
                    element={<Navigate to={RouteNames.PRIVATE_REDIRECT} replace/>}
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