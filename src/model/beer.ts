export class Beer {
    constructor(private name: string, private tagline: string, private description: string, private abv: number, private imageUrl: string) { }

    getName(): string {
        return this.name;
    }
    
    getTagline(): string {
        return this.tagline;
    }

    getDescription(): string {
        return this.description;
    }

    getAbv(): number {
        return this.abv;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }
    
}