# Quiz Logic Flow - Vanilla JS Example

This example demonstrates how to use the Quiz Logic Flow package with vanilla JavaScript.

## Setup

1. First, build the main package:

```bash
# From the root directory
npm install
npm run build
```

2. Then run this example:

```bash
# From this directory (examples/vanilla-example)
npm install
npm run dev
```

3. Open http://localhost:5173 in your browser

## How it Works

The vanilla JS implementation uses the `QuizHandler` class which:

1. Takes a configuration object and a container element
2. Renders the quiz UI in the container
3. Handles user interactions
4. Processes results based on your rules

The QuizHandler handles:

- DOM manipulation
- State management
- Event handling
- Results rendering

## Configuration

The quiz configuration object defines:

- Questions: Array of questions with IDs and text
- Rules: Logic for determining outcomes
- onComplete: Optional callback for when quiz is finished
