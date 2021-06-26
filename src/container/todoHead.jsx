import { useSelector } from 'react-redux';
import TodoHead from '../components/todoHead';

const TodoHeadContainer = () => {
  const todos = useSelector((state) => state.todos);
  return <TodoHead todos={todos} />;
};

export default TodoHeadContainer;
