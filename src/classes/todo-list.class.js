import { ToDo } from "./index";

export class ToDoList {
    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const i of this.todos) {
            if (i.id == id) {
                i.completado = !i.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }


    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

        // this.todos = this.todos.map(obj => ToDo.fromJson(obj));
        this.todos = this.todos.map(ToDo.fromJson); //semi pro tip

    }


}