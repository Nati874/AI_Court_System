# Fird AI Court Management System

This is a React-based front-end application for a court management system, featuring a dashboard, case management, AI assistants, and user authentication.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:
- Node.js (version 18 or higher)
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository (if applicable) or extract the zip file:**
   If you received a zip file, extract it to your desired directory.

2. **Navigate to the project directory:**
   ```bash
   cd fird-ai
   ```

3. **Install dependencies:**
   Using pnpm (recommended):
   ```bash
   pnpm install
   ```
   Or using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

### Running the Application

To start the development server, run:

```bash
pnpm run dev
# or npm run dev
# or yarn dev
```

The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build, run:

```bash
pnpm run build
# or npm run build
# or yarn build
```

The built files will be located in the `dist` directory.

## Project Structure

- `src/`: Contains the main source code.
  - `assets/`: Images and other static assets.
  - `components/`: Reusable React components.
  - `pages/`: Individual page components (e.g., Dashboard, Login, AIAssistant).
  - `App.jsx`: Main application component and routing setup.
  - `App.css`: Global styles and animations.
- `public/`: Public assets.
- `index.html`: Main HTML file.

## Features

- **Dashboard**: Overview of cases, statistics, and recent activity.
- **Case Management**: Create, view, and manage court cases.
- **AI Assistant**: AI-powered chat interface for legal queries.
- **Judge Decision Bot**: AI-driven decision support for judges.
- **Authentication**: User login and signup.
- **Responsive Design**: Optimized for various screen sizes.
- **Animations**: Smooth transitions and background animations.

## Demo Credentials

For testing the login functionality, use the following credentials:
- **Email**: `demo@firdai.com`
- **Password**: `demo123`

Enjoy using Fird AI!

