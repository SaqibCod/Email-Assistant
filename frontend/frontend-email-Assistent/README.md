# AI Email Writer (Frontend)

A modern, AI-powered email assistant frontend built with React and Vite. This application helps users generate intelligent email replies based on the original email content and desired tone.

## Features

- **AI-Powered Replies**: Generate contextually appropriate email responses using advanced AI
- **Tone Selection**: Choose from multiple tones including Friendly, Professional, Casual, Formal, and Sympathetic
- **Modern UI**: Sleek dark theme with Material-UI components and gradient effects
- **Real-time Generation**: Fast response generation with loading indicators
- **Copy to Clipboard**: Easily copy generated replies to your clipboard
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) with Emotion styling
- **HTTP Client**: Axios
- **Icons**: Material-UI Icons
- **Linting**: ESLint

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend-email-assistant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Input Email Content**: Paste or type the original email content you want to reply to
2. **Select Tone** (Optional): Choose the desired tone for your reply from the dropdown menu
3. **Generate Reply**: Click the "Generate Reply" button
4. **Copy Response**: Once generated, use the "Copy to Clipboard" button to copy the AI-generated reply

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## API Integration

This frontend communicates with a backend API hosted at:
`https://email-writer-v4.onrender.com/api/email/generate`

The API expects a POST request with:
```json
{
  "emailContent": "Original email text",
  "tone": "Selected tone (optional)"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.
