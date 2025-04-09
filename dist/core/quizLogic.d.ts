import { Answer, Question, QuizConfig, QuizResults } from "./types";
export declare class QuizEngine {
    private config;
    constructor(config: QuizConfig);
    getQuestions(): Question[];
    calculateResults(answers: Answer[]): QuizResults;
    private determineOutcome;
    processResults(answers: Answer[]): Promise<QuizResults>;
}
