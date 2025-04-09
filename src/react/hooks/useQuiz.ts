import { useState, useCallback } from "react";
import { QuizEngine } from "../../core/quizLogic";
import { Answer, QuizConfig, QuizResults } from "../../core/types";

export const useQuiz = (config: QuizConfig) => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quizEngine = new QuizEngine(config);

  const handleAnswer = useCallback((questionId: string, value: boolean) => {
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === questionId);
      if (existing !== -1) {
        return prev.map((a) =>
          a.questionId === questionId ? { ...a, value } : a
        );
      }
      return [...prev, { questionId, value }];
    });
  }, []);

  const submitQuiz = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const results = await quizEngine.processResults(answers);
      setResults(results);
    } finally {
      setIsSubmitting(false);
    }
  }, [answers, quizEngine]);

  return {
    answers,
    results,
    isSubmitting,
    handleAnswer,
    submitQuiz,
  };
};
