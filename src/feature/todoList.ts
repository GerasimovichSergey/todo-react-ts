import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ToDo } from '../models/todo-item';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';


export interface TodoState {
    todos: ToDo[];
}

const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {
            const newTodo: ToDo = {
                id: uuid(),
                text: action.payload,
                isDone: false,
            };

            state.todos = [...state.todos, newTodo];

            const notify = () => {
                return toast(`Добавил новую задачу: "${action.payload}"`);
            };

            notify();
        },

        updateAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone;

                    const notify = () => {
                        return toast(`Изменил статус задачи: "${action.payload.text}" на "${todo.isDone ? 'Выполнена' : 'Не выполнена'}"`);
                    }

                    notify();
                }

                return todo;
            });

            state.todos = newTodos;
        },

        deleteAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.filter((todo) => {
                if (action.payload.id === todo.id) {
                    const notify = () => {
                        return toast(`Удалил задачу: "${action.payload.text}"`);
                    }

                    notify();
                }

                return todo.id !== action.payload.id;
            });

            state.todos = newTodos;
        },
    },
});


export const { createAction, updateAction, deleteAction } = todoSlice.actions;

export default todoSlice.reducer;