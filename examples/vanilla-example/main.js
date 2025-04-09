import { QuizHandler } from "quiz-logic-flow";

const quizConfig = {
  questions: [
    { id: "1", text: "Do you enjoy coding?" },
    { id: "2", text: "Are you familiar with JavaScript?" },
    { id: "3", text: "Have you built web applications before?" },
  ],
  rules: [
    {
      type: "threshold",
      minYes: 2,
      outcome: "You seem to be an experienced developer!",
    },
    {
      type: "conditional",
      condition: (answers) => {
        const coding = answers.find((a) => a.questionId === "1")?.value;
        const js = answers.find((a) => a.questionId === "2")?.value;
        return coding && js;
      },
      outcome: "You are a JavaScript developer!",
    },
  ],
  onComplete: async (results) => {
    console.log("Quiz completed:", results);
  },
};

const container = document.getElementById("quiz-container");
const quiz = new QuizHandler(quizConfig, container);
