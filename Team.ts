import Engineer from "./Engineer.ts";

export default class Team {
    name: string;
    lead: Engineer;

    constructor(name: string, lead: Engineer){
        this.name = name
        this.lead = lead;
    }
}