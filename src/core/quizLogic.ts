import { Answer, Question, QuizConfig, QuizResults, Rule } from "./types";

export class QuizEngine {
  private config: QuizConfig;

  constructor(config: QuizConfig) {
    this.config = config;
  }

  public getQuestions(): Question[] {
    return this.config.questions;
  }

  calculateResults(answers: Answer[]): QuizResults {
    const totalYes = answers.filter((a) => a.value).length;
    const totalNo = answers.filter((a) => !a.value).length;
    const score = (totalYes / answers.length) * 100;

    const outcome = this.determineOutcome(answers);

    return {
      score,
      totalYes,
      totalNo,
      outcome,
    };
  }

  private determineOutcome(answers: Answer[]): string {
    for (const rule of this.config.rules) {
      if (rule.type === "threshold") {
        const { minYes = 0, maxYes = Infinity } = rule;
        const totalYes = answers.filter((a) => a.value).length;

        if (totalYes >= minYes && totalYes <= maxYes) {
          return rule.outcome;
        }
      } else if (rule.type === "conditional") {
        if (rule.condition(answers)) {
          return rule.outcome;
        }
      }
    }

    return "No matching outcome found";
  }

  async processResults(answers: Answer[]): Promise<QuizResults> {
    const results = this.calculateResults(answers);

    if (this.config.onComplete) {
      await this.config.onComplete(results);
    }

    return results;
  }
}
