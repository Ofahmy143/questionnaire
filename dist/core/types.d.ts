export interface Question {
    id: string;
    text: string;
}
export interface Answer {
    questionId: string;
    value: boolean;
}
export type QuizResults = {
    score: number;
    totalYes: number;
    totalNo: number;
    outcome: string;
};
export interface ThresholdRule {
    type: "threshold";
    minYes?: number;
    maxYes?: number;
    outcome: string;
}
export interface ConditionalRule {
    type: "conditional";
    condition: (answers: Answer[]) => boolean;
    outcome: string;
}
export type Rule = ThresholdRule | ConditionalRule;
export interface QuizConfig {
    questions: Question[];
    rules: Rule[];
    onComplete?: (results: QuizResults) => void | Promise<void>;
}
