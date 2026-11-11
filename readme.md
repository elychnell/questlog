# Questlog

Questlog is a personal game library where you can keep track of your games, manage your backlog, and record your gaming experiences.

Organize your collection by status, keep track of playtime, rate your games, and add personal notes.

## Features

- Browse your personal game library.
- Filter games by status: Want to Play, Playing, Completed, and Dropped.
- Add, edit, and delete games.
- Add cover images, platforms, ratings, and personal notes.
- Track playtime, with support for imported Steam playtime data.
- Responsive design for mobile and desktop.

## Tech Stack

- **React** – UI library
- **TypeScript** – Type-safe JavaScript
- **Vite** – Development server and build tool
- **React Router** – Client-side routing
- **Tailwind CSS** – Styling
- **Lucide React** – Icons
- **REST API** – Game data storage and CRUD operations
- **Local Storage** – Persistent client-side preferences and Steam playtime data

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/elychnell/questlog.git
   ```

2. Navigate to the project directory:

   ```bash
   cd questlog
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The application will be available at the local URL provided by Vite.

## Live Demo

[Open Questlog](https://questlog-two-chi.vercel.app/)

## GitHub Repository

[View the source code](https://github.com/elychnell/questlog)

## API

Questlog uses the Questlog REST API to manage game data.

**API endpoint:**

`https://questlog-api.vercel.app/api/emil-l/games`

The application uses the API to fetch, create, update, and delete games.

## Custom Hooks and Architecture

Questlog uses custom React hooks to separate data handling and application logic from the UI components.

- **useGames:** Fetches the game collection from the API and supports filtering by game status.
- **useGame:** Fetches an individual game using its ID.
- **useSaveGame, useUpdateGame and useDeleteGame:** Handle creating, updating, and deleting games through the API.
- **useLocalStorage:** Provides a reusable way to read and persist values in the browser's local storage.
- **useSteamData:** Matches games against an imported local Steam library and provides playtime information, including manually adjusted playtime.

The API-related hooks handle loading states and errors, allowing page components to focus on displaying data and handling user interactions.

This architecture separates data fetching and API operations from the UI components. By keeping this logic in custom hooks, the page components do not need to manage API requests themselves.

This reduces duplicated code, makes the logic reusable, and keeps the application easier to maintain and extend. Each hook has a clear responsibility, making the code more organized and easier to work with.

## Grade Target

The target grade for this assignment is **VG (Pass with Distinction)**.