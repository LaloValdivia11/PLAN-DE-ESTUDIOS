import Engineer from "./Engineer.ts";
import Team from "./Team.ts";

const eduardo = new Engineer('Eduardo', 24, 'Junior');
const team = new Team('TBACO', eduardo);

console.log(eduardo.team)
