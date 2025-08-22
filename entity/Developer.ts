import Engineer from "./Engineer.js";
import Team from "./Team.js";
import Cola from "./Cola.js";

export default class Developer extends Engineer{
  idDeveloper: number;
  team: Team | undefined;
  cola: Cola;

  constructor(fullName: string, age: number, level: string, idDeveloper: number){
    super(fullName, age, level);

    this.idDeveloper = idDeveloper;
    this.cola = new Cola();
  }

  takeTask(task: string) {
    this.cola?.takeTask(task)
  }

  get task(): string | undefined{
    return this.cola?.task;
  }
}
