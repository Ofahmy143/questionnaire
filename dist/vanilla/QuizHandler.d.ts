import type { QuizConfig } from "../core/types";
export declare class QuizHandler {
    private engine;
    private container;
    private answers;
    constructor(config: QuizConfig, containerElement: HTMLElement);
    handleAnswer(questionId: string, value: boolean): void;
    submitQuiz(): Promise<void>;
    private render;
    private updateUI;
    private renderResults;
}
