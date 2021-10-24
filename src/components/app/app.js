import TodoHeader from '../todo/todo-header';
import SearchPanel from '../todo/search-panel';
import TodoList from '../todo/todo-list';
import ItemStatusFilter from '../todo/item-status-filter';

import './app.css';

const App = () => {
  // этот массив должен подтягиваться с сервера со своими key ключами
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a great day', important: false, id: 3 },
  ]

  return (
    <div className="todo-app">
      <TodoHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
}

export default App;