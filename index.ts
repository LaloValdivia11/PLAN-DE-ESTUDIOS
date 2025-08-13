import Engineer from "./Engineer.ts";
import Team from "./Team.ts";
import Developer from "./Developer.ts";

const eduardo = new Developer('Eduardo', 24, 'Junior');
const team = new Team('TBACO', eduardo);

const emmanuel = new Developer('Emmanuel', 30, 'Senior');

console.log(emmanuel.takeTask('TM-213'))
console.log(emmanuel.getTaskAssigned())


