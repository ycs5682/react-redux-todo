import { createSlice } from '@reduxjs/toolkit';
let nextId = 5;

const initialState = [
  {
    id: 1,
    text: 'プロジェクト作成11',
    done: true
  },
  {
    id: 2,
    text: 'コンポネート作成',
    done: true
  },
  {
    id: 3,
    text: 'Redux作成',
    done: false
  },
  {
    id: 4,
    text: '機能実装',
    done: false
  }
];

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      return state.concat({ id: nextId++, text: action.payload, done: action.done });
    },
    toggleTodo(state, action) {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, removeTodo } = todos.actions;
export default todos.reducer;
