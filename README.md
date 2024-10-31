# GitHub Directory

A Next.js application for exploring GitHub users and managing favorites.

## Features

- User Search: Find GitHub users by username with autocomplete functionality.
- User Details: View detailed information about a specific GitHub user.
- Favorites: Add and remove users from your favorites list.
- BFF (Backend for Frontend) API: Internal API for handling GitHub data requests.
- Dark Mode: Toggle between light and dark themes.

## Technology Stack

- Next.js (Page Router)
- TypeScript
- Axios for API requests
- React Query for data fetching and caching
- Tailwind CSS for styling
- Vitest for testing

## Development Setup

1. Clone the repository
2. Install dependencies:
    ```
    pnpm install
    ```
3. Set up environment variables:
- Create a `.env.local` file in the root directory
- Add the following variables:
  ```
  NEXT_PUBLIC_API_URL=your_api_url
  NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
  ```
4. Run the development server:


## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the production application
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint
- `npm run test`: Run tests with Vitest
- `npm run commit`: Use Commitizen for conventional commits

