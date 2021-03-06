export class Hero {
    constructor(private name: string = '', private description: string = '', private alterEgo?: string) { 
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getAlterEgo(): string {
        if (this.alterEgo) {
            return this.alterEgo;
        }
        return '';
    }

    emptyDescription(): boolean {
        return this.description.length === 0;
    }

    emptyName(): boolean {
        return this.name.length === 0;
    }

}