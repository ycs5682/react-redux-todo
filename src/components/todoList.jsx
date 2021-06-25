import React from 'react';
import styled from 'styled-components';
import TodoItem from './todoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text='プロジェクト作成' done={true} />
      <TodoItem text='コンポーネント作成' done={true} />
      <TodoItem text='Rudux作成' done={false} />
      <TodoItem text='機能実装' done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
