import React from "react";
import { QuizComponent } from "quiz-logic-flow";

const quizConfig = {
  questions: [
    { id: "1", text: "Do you enjoy coding?" },
    { id: "2", text: "Are you familiar with React?" },
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
        const react = answers.find((a) => a.questionId === "2")?.value;
        return coding && react;
      },
      outcome: "You are a React developer!",
    },
  ],
  onComplete: async (results) => {
    console.log("Quiz completed:", results);
  },
};

function App() {
  return (
    <div className="app">
      <h1>Developer Quiz</h1>
      <QuizComponent
        config={quizConfig}
        className="quiz-container"
        questionClassName="question"
        buttonClassName="answer-button"
      />
    </div>
  );
}

export default App;
