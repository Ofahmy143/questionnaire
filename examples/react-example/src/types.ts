import type { QuizConfig } from "quiz-logic-flow";

export interface AppProps {
  className?: string;
}

export interface QuizConfigExample extends QuizConfig {
  title: string;
}
