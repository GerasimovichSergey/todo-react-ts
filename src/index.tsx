import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';


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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage todos={todos} />}></Route>
                <Route path="/list/:id" element={<ItemDescription todos={todos} />}></Route>
                <Route path="/todo" element={<ToDoListPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);