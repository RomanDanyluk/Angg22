import { Component } from '@angular/core';

const todos = [
    {
       title: 'Вивчити JavaScript',
       completed: true
    },
    {
        title: 'Вивчити Angular2',
        copmpleted: false
    },
    {
        title: 'Написати додаток',
        completed: false
    }
];
 
@Component({
   moduleId: module.id, 
   selector: 'app',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular2Do';
    todos = todos;

    toggle(todo : any) {
        todo.completed = !todo.completed;
    }

    delete( todo: any) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1)
        }
    }
}