import { useDispatch } from 'react-redux';
import { addTodo } from '../modules/todos';
import TodoCreate from '../components/todoCreate';

const TodoCreateContainer = () => {
  const dispatch = useDispatch();
  const onCreate = (value) => dispatch(addTodo(value));
  return <TodoCreate onCreate={onCreate} />;
};

export default TodoCreateContainer;
