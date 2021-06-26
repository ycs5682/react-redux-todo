import React from 'react';
import styled from 'styled-components';
import TodoItem from './todoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = ({ todos }) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}></TodoItem>
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
