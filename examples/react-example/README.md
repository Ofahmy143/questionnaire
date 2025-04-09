# Quiz Logic Flow - React Example

This example demonstrates how to use the Quiz Logic Flow package with React.

## Setup

1. First, build the main package:

```bash
# From the root directory
npm install
npm run build
```

2. Then run this example:

```bash
# From this directory (examples/react-example)
npm install
npm run dev
```

3. Open http://localhost:5173 in your browser

## How it Works

The React implementation uses the `QuizComponent` which internally uses the `useQuiz` hook. The component:

1. Renders questions from your configuration
2. Handles yes/no answers
3. Processes the results based on your rules
4. Shows the outcome

You can customize the appearance using className props:

- `className`: Container styling
- `questionClassName`: Individual question styling
- `buttonClassName`: Answer button styling

## Configuration

The quiz configuration object defines:

- Questions: Array of questions with IDs and text
- Rules: Logic for determining outcomes
- onComplete: Optional callback for when quiz is finished

## Styling

The component comes with no default styling, giving you complete control over the appearance. You can style the component using the following className props:

- `className`: Styles the main quiz container
- `questionClassName`: Styles the question elements
- `buttonClassName`: Styles the answer buttons

Example usage:

```tsx
<QuizComponent
  config={quizConfig}
  className="quiz-container"
  questionClassName="question"
  buttonClassName="answer-button"
/>
```

You can define your own CSS classes in your stylesheet to customize the appearance.
