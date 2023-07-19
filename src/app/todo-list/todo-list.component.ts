import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  taskArray : { taskName: string, isCompleted: boolean }[] = [];
  newTask: string ='';

onSubmit(form: NgForm){
  this.taskArray.push({
    taskName: form.controls['task'].value,
    isCompleted:false
  })
 form.reset()
}
onCheck(index:number){
  this.taskArray[index].isCompleted =!this.taskArray[index].isCompleted;
}


onDelete(index: number){
  this.taskArray.splice(index,1);
}
resetForm(form: NgForm){
  this.newTask = '';
  form.resetForm()
}
} 
