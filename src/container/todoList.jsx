import { useSelector } from 'react-redux';
import TodoList from '../components/todoList';

const TodoContainer = () => {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos}></TodoList>;
};

export default TodoContainer;
