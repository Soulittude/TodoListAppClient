import { useEffect, useState } from 'react';
import { Todo } from '../types/todo';
import { fetchTodos } from '../utils/api';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default TodoList;