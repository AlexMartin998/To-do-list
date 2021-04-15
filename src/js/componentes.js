import { ToDo } from "../classes";

import {toDoList} from '../index'



// Referencias en el HTML:
const divToDoList = document.querySelector('.todo-list');
const txtInputNewToDo = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const ancorFiltros = document.querySelectorAll('.filtro');


export const crearToDoHtml = (toDo) => {
    const htmlToDo = `
    <li class="${(toDo.completado) ? 'completed' : ''}" data-id="${toDo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(toDo.completado) ? 'checked' : ''}>
            <label>${toDo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlToDo;

    divToDoList.append(div.firstElementChild);

    return div.firstElementChild;
    
};


// Eventos:
txtInputNewToDo.addEventListener('keyup', (e) => {

    if (e.keyCode === 13 && txtInputNewToDo.value.length > 0) {
        console.log(txtInputNewToDo.value);
        const nuevoTodo = new ToDo(txtInputNewToDo.value);

        toDoList.nuevoTodo(nuevoTodo);

        crearToDoHtml(nuevoTodo);

        txtInputNewToDo.value = '';

    }

})


divToDoList.addEventListener('click', (e) => {
    const nombreElemento = e.target.localName;
    const todoElemento = e.target.parentElement.parentElement;

    const toDoId = todoElemento.getAttribute('data-id')


    if (nombreElemento.includes('input')) {  //click en el chek
        toDoList.marcarCompletado(toDoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {  //hay que borrar el todo
        toDoList.eliminarTodo(toDoId);
        divToDoList.removeChild(todoElemento);
    }


})


btnBorrar.addEventListener('click', () => {
    toDoList.eliminarCompletados();

    for (let i = divToDoList.children.length-1; i >= 0; i--) {

        const elemento = divToDoList.children[i];
        
        if (elemento.classList.contains('completed')) {
            divToDoList.removeChild(elemento);
        }
    }

})


ulFiltros.addEventListener('click', e => {
    const filtro = e.target.text;
    if (!filtro) return;

    ancorFiltros.forEach(e => e.classList.remove('selected'));
    e.target.classList.add('selected');
    

    for (const e of divToDoList.children) {
        e.classList.remove('hidden');
        const completado = e.classList.contains('completed');

        switch(filtro) {
            case 'Pendientes':
                if(completado) e.classList.add('hidden');
                break;
            case 'Completados':
                if(!completado) e.classList.add('hidden');
                break;
        }

    }

})


