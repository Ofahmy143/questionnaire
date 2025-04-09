import { Answer, QuizConfig, QuizResults } from "../../core/types";
export declare const useQuiz: (config: QuizConfig) => {
    answers: Answer[];
    results: QuizResults | null;
    isSubmitting: boolean;
    handleAnswer: (questionId: string, value: boolean) => void;
    submitQuiz: () => Promise<void>;
};
