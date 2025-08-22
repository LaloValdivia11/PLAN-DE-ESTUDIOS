export default class Cola {
  private tasks: string[] = [];

  constructor(tasks:string[] = []){
    this.tasks = tasks;
  }

  takeTask(task: string) {
    this.tasks[this.tasks.length] = task; 
  }

  get task(): string  | undefined {
    return this.tasks[0];
  }
}
