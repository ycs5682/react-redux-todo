import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../modules/todos';
import TodoList from '../components/todoList';

const TodoContainer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onToggle = (id) => dispatch(toggleTodo(id));
  const onRemove = (id) => dispatch(removeTodo(id));

  return <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}></TodoList>;
};

export default TodoContainer;
