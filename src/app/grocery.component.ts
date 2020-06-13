import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: [
      '../assets/css/bootstrap.min.css'
  ]
})

export class GroceryComponent {
  task = {
    name: '',
    id: 0
  };
  tasks = [];

  onClick(){
    if(this.task.id == 0){
      this.tasks.push({id: (new Date()).getTime(),name: this.task.name});

      this.task = {
        name: '',
        id: 0
      };
    }
}
    onEdit(item){
      this.task = item;
  }
}
