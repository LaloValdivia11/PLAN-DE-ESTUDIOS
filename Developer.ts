import Engineer from "./Engineer.ts";
import Team from "./Team.ts";
import Cola from "./Cola.ts";

export default class Developer extends Engineer{
    team: Team | undefined;
    task: Cola;

    constructor(fullName: string, age: number, level: string){
        super(fullName, age, level);
    }

    takeTask() {
        this.task.
        return 'Tomaste la tarea: ' + this.task;
    }

    getTaskAssigned() {
        return this.task;
    }
    
}
