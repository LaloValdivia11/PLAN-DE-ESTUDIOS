import Team from "./Team.ts";

export default class Engineer {
    fullName: string;
    age: number;
    level: string;
    task: string;
    team: Team | undefined;

    constructor(fullName: string, age: number, level: string,) {
        this.fullName = fullName;
        this.age = age;
        this.level = level;

        this.task = 'TM-1232';
    }



    takeTask(task: string) {
        console.log('Tomaste la tarea: ' + task);
    }

}
