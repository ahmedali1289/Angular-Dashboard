import * as data from '../../shared/data/tasks/task';
export class TasksService {
  
  public Tasks: any[] = data.tasks;

  constructor() { }

  addTasks(task) {
    this.Tasks.push(task);
  }
  
}
