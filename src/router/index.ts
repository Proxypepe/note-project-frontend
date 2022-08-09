import React from "react";
import Login from "../pages/Login";
import Note from "../pages/Note";


export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = "/login",
    PUBLIC_REDIRECT = LOGIN,

    NOTE = "/note",
    PRIVATE_REDIRECT = NOTE,

}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login},
];

export const privateRoutes: IRoute[] = [
    {path: RouteNames.NOTE, element: Note},

];