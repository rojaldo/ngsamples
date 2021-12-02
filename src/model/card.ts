export class Card {
    question = '';
    correctAnswer = '';
    answers: string[] = [];
    responded = false;
    rightAnswered!: boolean; 
    userAnswer: string = '';

    constructor (json?: any) {
        if (json) {
            this.question = json.question;
            this.answers = json.incorrect_answers;
            this.correctAnswer = json.correct_answer;
            this.answers.push(json.correct_answer);    
        }
    }

    toString(): string {
        return this.question + '\n' + this.answers.join('\n');
    }
}