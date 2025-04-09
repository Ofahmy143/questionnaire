# Quiz Logic Flow - Vanilla JS (CDN) Example

This example demonstrates how to use Quiz Logic Flow directly in the browser using CDN links.

## Running the Example

Simply open the `index.html` file in a web browser. No build steps required!

You can use a local server if you prefer:

```bash
# Using Python
python -m http.server

# Using Node.js
npx serve
```

Then open http://localhost:8000 (Python) or http://localhost:3000 (Node.js)

## How it Works

1. Include the library via CDN:

```html
<!-- Using unpkg (always latest version) -->
<script src="https://unpkg.com/quiz-logic-flow"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/quiz-logic-flow/dist/style.css"
/>

<!-- OR using jsDelivr (always latest version) -->
<script src="https://cdn.jsdelivr.net/npm/quiz-logic-flow"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/quiz-logic-flow/dist/style.css"
/>

<!-- For a specific version, add @ -->
<script src="https://unpkg.com/quiz-logic-flow@1.0.0"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/quiz-logic-flow@1.0.0/dist/style.css"
/>
```

2. Create a container element:

```html
<div id="quiz-container"></div>
```

3. Initialize the quiz:

```javascript
const quiz = new QuizLogicFlow.QuizHandler(config, container);
```

This approach has several benefits:

1. Always serves the latest version from npm
2. Automatically falls back to the most recent stable version
3. Provides better caching and reliability
4. Works as soon as you publish to npm without additional setup

Would you like me to:

1. Add version-specific examples?
2. Add CDN fallback handling?
3. Add loading

## Available Versions

- v0.1.0 - Initial release
  - Basic questionnaire functionality
  - Default styling
  - React and Vanilla JS support

Check the [releases page](https://github.com/[your-username]/quiz-logic-flow/releases) for the latest versions.
