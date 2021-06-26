import { useSelector } from 'react-redux';
import TodoHead from '../components/todoHead';

const TodoHeadContainer = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return <TodoHead todos={todos} />;
};

export default TodoHeadContainer;
