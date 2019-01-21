import { Field } from "sparkson";

export class User {
    constructor(
        @Field("name") public name: string,
    ) {}
}
