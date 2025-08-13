import type Developer from "./Developer.ts";
import Engineer from "./Engineer.ts";

export default class Team {
    name: string;
    lead: Developer;

    constructor(name: string, lead: Developer){
        this.name = name
        this.lead = lead;
    }
}