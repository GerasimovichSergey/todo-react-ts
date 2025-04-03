import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/404';
import { ViewList } from './pages/ViewList';
import { ToDoListPage } from './pages/ToDoListPage';
import { ViewListItem } from './pages/ViewListItem';
import React from 'react';
import { ToDo } from './models/todo-item';


const todos: ToDo[] = [
    {
        id: 0,
        text: 'первая',
        isDone: false,
    },
    {
        id: 1,
        text: 'вторая',
        isDone: true,
    },
    {
        id: 2,
        text: 'третья',
        isDone: false,
    },
    {
        id: 3,
        text: 'четвёртая',
        isDone: true,
    }
];

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <ToDoListPage />,
            },
            {
                path: '/list',
                element: <ViewList todos={todos} />,
            },
            {
                path: '/list/:id',
                element: <ViewListItem todos={todos} />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);