import { Person } from "./person.model";

export interface Staff extends Person {
    permission: string;
}