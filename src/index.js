import './styles.css';
// import {Todo} from './classes/todo.class'
// import { TodoList } from './classes/todo-list.class';
import { Todo, TodoList} from './classes'; //Busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach( crearTodoHtml ); //Equivale a (element)=>crearTodoHtml(element)

console.log(todoList)