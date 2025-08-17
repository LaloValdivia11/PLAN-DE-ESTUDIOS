import type Developer from "./entity/Developer.ts";

export default class Team {
  name: string;
  lead: Developer;

  constructor(name: string, lead: Developer){
    this.name = name
    this.lead = lead;
  }
}