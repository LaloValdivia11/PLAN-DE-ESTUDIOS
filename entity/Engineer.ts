import Team from "../Team.ts";

export default class Engineer {
  fullName: string;
  age: number;
  level: string;

  constructor(fullName: string, age: number, level: string) {
    this.fullName = fullName;
    this.age = age;
    this.level = level;
  }
}
