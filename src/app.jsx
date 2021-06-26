import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/todoTemplate';
import TodoHead from './container/todoHead';
import TodoList from './components/todoList';
import TodoCreate from './components/todoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
};

export default App;
