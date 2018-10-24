import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
	toDoListArray: any[];
	constructor(private toDoService: TodoService) { }

	ngOnInit() {
		this.toDoService.getToDoList().snapshotChanges()
		.subscribe();
	}

	onAdd(itemTitle){
		this.toDoService.addTitle(itemTitle.value);
		itemTitle.value = null;
	}


	alterCheck($key: string,isChecked){
		this.toDoService.checkOrUnCheckTitle($key,!isChecked);
	}

	onDelete($key : string){
		this.toDoService.removeTitle($key);
	}
}






