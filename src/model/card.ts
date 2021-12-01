export class Card {
    question = '';
    answers: string[] = [];
    constructor (json?: any) {
        if (json) {
            this.question = json.question;
            this.answers = json.incorrect_answers;
            this.answers.push(json.correct_answer);    
        }
    }

    toString(): string {
        return this.question + '\n' + this.answers.join('\n');
    }
}