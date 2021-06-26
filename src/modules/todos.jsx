const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

export const toggleTODO = (id) => ({ type: TOGGLE_TODO, id });
export const removeTODO = (id) => ({ type: REMOVE_TODO, id });

const initialState = [
  {
    id: 1,
    text: 'プロジェクト作成',
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

export default function todos(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
