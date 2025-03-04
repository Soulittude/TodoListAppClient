import axios from 'axios';

const API = axios.create({
  baseURL: '/api/todos',
});

export const fetchTodos = async () => {
  const { data } = await API.get('/');
  return data;
};

// Add createTodo, updateTodo, deleteTodo