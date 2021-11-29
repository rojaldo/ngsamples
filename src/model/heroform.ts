import { Hero } from "./hero";

export class HeroForm {
    name: string = ''
    description?: string = ''
    alterEgo: string = ''

    constructor(hero?: Hero) {
        if (hero) {
            this.name = hero.getName();
            this.description = hero.getDescription();
            this.alterEgo = hero.getAlterEgo();
        }


    }
}