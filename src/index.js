import './styles.css';

import {ToDo, ToDoList} from './classes'
import { crearToDoHtml } from './js/componentes';

export const toDoList = new ToDoList();


// toDoList.todos.forEach(i => crearToDoHtml(i));
toDoList.todos.forEach(crearToDoHtml); //semi pro tip

console.log('toDo: ', toDoList.todos);





// ------------------------------------------------------------- //
/** LocalStorage  y  SessionStorage: Solo en el navegador.
 * No en backend, en backend utilizamos DB.
 * LocalStora no tiene limite de tiempo, SessionStorage se elimina cuando cerramos el navegador.
 */

// localStorage.setItem('mi-key', 'ABC1234');


// //Elimina la key en 1.5 segundos:
// setTimeout( () => {
//     localStorage.removeItem('mi-key');

// },1500)


