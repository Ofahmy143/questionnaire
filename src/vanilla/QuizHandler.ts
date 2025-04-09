import { QuizEngine } from "../core/quizLogic";
import type { QuizConfig, Answer, QuizResults } from "../core/types";

export class QuizHandler {
  private engine: QuizEngine;
  private container: HTMLElement;
  private answers: Answer[];

  constructor(config: QuizConfig, containerElement: HTMLElement) {
    this.engine = new QuizEngine(config);
    this.container = containerElement;
    this.answers = [];
    this.render();
  }

  handleAnswer(questionId: string, value: boolean): void {
    const existingIndex = this.answers.findIndex(
      (a) => a.questionId === questionId
    );
    if (existingIndex !== -1) {
      this.answers[existingIndex].value = value;
    } else {
      this.answers.push({ questionId, value });
    }
    this.updateUI();
  }

  async submitQuiz(): Promise<void> {
    const results = await this.engine.processResults(this.answers);
    this.renderResults(results);
  }

  private render(): void {
    // Use the getter method instead of accessing config directly
    const questions = this.engine.getQuestions();

    questions.forEach((question) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";

      const questionText = document.createElement("p");
      questionText.textContent = question.text;

      const buttonGroup = document.createElement("div");
      buttonGroup.className = "button-group";

      const yesButton = document.createElement("button");
      yesButton.textContent = "Yes";
      yesButton.onclick = () => this.handleAnswer(question.id, true);

      const noButton = document.createElement("button");
      noButton.textContent = "No";
      noButton.onclick = () => this.handleAnswer(question.id, false);

      buttonGroup.appendChild(yesButton);
      buttonGroup.appendChild(noButton);
      questionDiv.appendChild(questionText);
      questionDiv.appendChild(buttonGroup);

      this.container.appendChild(questionDiv);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.onclick = () => this.submitQuiz();
    this.container.appendChild(submitButton);
  }

  private updateUI(): void {
    const questions = this.engine.getQuestions();
    const buttons = this.container.querySelectorAll("button");

    buttons.forEach((button) => {
      const questionDiv = button.closest(".question");
      if (!questionDiv) return;

      const questionId = questions.find(
        (q) => q.text === questionDiv.querySelector("p")?.textContent
      )?.id;

      if (!questionId) return;

      const answer = this.answers.find((a) => a.questionId === questionId);
      if (!answer) return;

      const isYes = button.textContent === "Yes";
      button.classList.toggle("active", isYes === answer.value);
    });
  }

  private renderResults(results: QuizResults): void {
    const resultsDiv = document.createElement("div");
    resultsDiv.className = "results";

    const scoreText = document.createElement("p");
    scoreText.textContent = `Score: ${results.score}%`;

    const outcomeText = document.createElement("p");
    outcomeText.textContent = `Outcome: ${results.outcome}`;

    resultsDiv.appendChild(scoreText);
    resultsDiv.appendChild(outcomeText);

    // Remove any existing results
    const existingResults = this.container.querySelector(".results");
    if (existingResults) {
      existingResults.remove();
    }

    this.container.appendChild(resultsDiv);
  }
}
