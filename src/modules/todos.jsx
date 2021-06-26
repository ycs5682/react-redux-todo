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
    default:
      return state;
  }
}
