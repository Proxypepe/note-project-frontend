import React from "react";
import Login from "../pages/Login";


export interface IRoute {
    path: string;
    element: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = "/login",
    PUBLIC_REDIRECT = LOGIN
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login, exact: true},
];

export const privateRoutes: IRoute[] = [];