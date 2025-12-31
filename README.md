# Joke Generator

A fun web-based joke generator that fetches jokes from the JokeAPI with customizable categories and content filters.

## Features

- Multiple joke categories: Any, Programming, Misc, Dark, Pun, Spooky, Christmas
- Content filtering modes: Clean (filtered) and Dark (unfiltered)
- Real-time joke fetching from JokeAPI
- Smooth animations and loading states
- Responsive design with holographic UI theme

## How to Use

1. Open `index.html` in your web browser.
2. Select your preferred joke category from the dropdown.
3. Choose between "Clean" or "Dark" mode for content filtering.
4. Click the "⚡ GENERATE" button to fetch a random joke.
5. Enjoy the joke and generate more as needed!

## Technologies Used

- HTML5
- CSS3 (with custom animations)
- JavaScript (ES6+ with async/await)
- JokeAPI (https://v2.jokeapi.dev/)

## Project Structure

```
JokeApi/
├── index.html    # Main HTML file with UI
├── style.css     # Styling and animations
└── java.js       # JavaScript logic for API calls and interactions
```

## API Usage

This app uses the JokeAPI v2 with the following features:
- Safe mode enabled
- Blacklist flags for clean mode (nsfw, religious, political, racist, sexist, explicit)
- Support for both single-line and two-part jokes

## License

This project is open source and available under the [MIT License](LICENSE).