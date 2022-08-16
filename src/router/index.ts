import React from "react";
import Login from "../pages/Login";
import Note from "../pages/Notes";


export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = "/login",
    PUBLIC_REDIRECT = LOGIN,

    NOTE = "/notes",
    PRIVATE_REDIRECT = NOTE,

}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login},
];

export const privateRoutes: IRoute[] = [
    {path: RouteNames.NOTE, element: Note},

];