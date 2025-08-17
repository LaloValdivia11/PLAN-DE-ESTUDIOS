import Engineer from "./Engineer.ts";
import Team from "../Team.ts";
import Cola from "./Cola.ts";

export default class Developer extends Engineer{
  team: Team | undefined;
  task: Cola | undefined;

  constructor(fullName: string, age: number, level: string){
    super(fullName, age, level);
  }

  takeTask() {
    return 'Tomaste la tarea: ' + this.task?._putFirstTask;
  }

  getTaskAssigned() {
    return this.task;
  }
}
