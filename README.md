# quiz-logic-flow 📝

A flexible and lightweight questionnaire package that supports both React and vanilla JavaScript implementations. Create yes/no questionnaires with customizable logic for determining outcomes.

## Features ✨

- 🔄 Support for both React and vanilla JavaScript
- ⚛️ Ready-to-use React component and hooks
- 🎯 Simple and complex conditional logic for outcomes
- 🔌 Async support for API integration
- 🎨 Customizable styling
- 📦 Tree-shakeable and lightweight
- 📱 TypeScript support out of the box

## Installation 🚀

```bash
npm install quiz-logic-flow
# or
yarn add quiz-logic-flow
```

## Quick Start 🏃‍♂️

### React Component Usage

```tsx
import { QuizComponent, QuizConfig } from "quiz-logic-flow";

const config: QuizConfig = {
  questions: [
    { id: "1", text: "Do you enjoy coding?" },
    { id: "2", text: "Do you prefer frontend development?" },
  ],
  rules: [
    {
      type: "threshold",
      minYes: 2,
      outcome: "You love development!",
    },
  ],
};

function App() {
  return <QuizComponent config={config} />;
}
```

### React Hook Usage

```tsx
import { useQuiz } from "quiz-logic-flow";

function CustomQuiz({ config }) {
  const { answers, results, isSubmitting, handleAnswer, submitQuiz } =
    useQuiz(config);

  // Build your custom UI
  return <div>{/* Your custom implementation */}</div>;
}
```

### Vanilla JavaScript Usage

```javascript
import { QuizHandler } from "quiz-logic-flow";

const config = {
  questions: [
    /* your questions */
  ],
  rules: [
    /* your rules */
  ],
};

const container = document.getElementById("quiz-container");
const quiz = new QuizHandler(config, container);
```

## Configuration 🛠️

### Quiz Config Options

```typescript
interface QuizConfig {
  questions: Question[]; // Array of questions
  rules: Rule[]; // Array of outcome rules
  onComplete?: (results: QuizResults) => void | Promise<void>;
}

interface Question {
  id: string;
  text: string;
}
```

### Rules Types

1. Threshold Rules:

```typescript
{
  type: 'threshold',
  minYes?: number,
  maxYes?: number,
  outcome: string
}
```

2. Conditional Rules:

```typescript
{
  type: 'conditional',
  condition: (answers: Answer[]) => boolean,
  outcome: string
}
```

## Styling 🎨

The React component accepts className props for customization:

```tsx
<QuizComponent
  config={config}
  className="quiz-container"
  questionClassName="question-box"
  buttonClassName="answer-button"
/>
```

## Styling Guide

### Default Styling

The library comes with a default theme that provides a clean, modern look. The default styles are automatically applied when you use the React components.

### Customization Options

#### 1. CSS Custom Properties

The easiest way to customize the appearance is by overriding CSS custom properties:

```css
.quiz-container {
  --quiz-primary-color: #ff5722;
  --quiz-secondary-color: #4caf50;
  --quiz-danger-color: #f44336;
  --quiz-text-color: #333;
  --quiz-border-radius: 4px;
  --quiz-spacing: 20px;
}
```

#### 2. Class Override

You can override specific classes with your own styles:

```css
/* Custom question styling */
.quiz-container .question {
  background: #f5f5f5;
  border: 2px solid #ddd;
}

/* Custom button styling */
.quiz-container .answer-button {
  background: #fff;
  border-radius: 25px;
}

/* Custom results styling */
.quiz-container .results {
  background: #e8f5e9;
}
```

#### 3. Theme Classes

Add theme classes to change the entire look:

```jsx
<QuizComponent 
  config={quizConfig}
  className="quiz-container theme-dark"
/>
```

```css
/* Dark theme example */
.quiz-container.theme-dark {
  --quiz-primary-color: #bb86fc;
  --quiz-secondary-color: #03dac6;
  --quiz-text-color: #fff;
  background: #121212;
}
```

## API Reference ��

### QuizComponent Props

```typescript
interface QuizComponentProps {
  config: QuizConfig;
  className?: string;
  questionClassName?: string;
  buttonClassName?: string;
}
```

### useQuiz Hook Return Values

```typescript
{
  answers: Answer[];
  results: QuizResults | null;
  isSubmitting: boolean;
  handleAnswer: (questionId: string, value: boolean) => void;
  submitQuiz: () => Promise<void>;
}
```

## Examples 📝

Check out the [examples](./examples) directory for more detailed usage examples.

## Development 🔧

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build package
npm run build

# Run tests
npm run test
```
