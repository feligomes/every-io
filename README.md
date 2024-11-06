# Task Management Application

A simple and intuitive task management application built with React that allows users to track tasks across different stages of completion.

## Live Demo
The application is deployed and can be accessed at: [https://feligomes.github.io/every-io/](https://feligomes.github.io/every-io/)

## Features

- Three-column Kanban-style board layout:
  - Todo
  - In Progress
  - Done
- Task movement controls:
  - Move tasks forward (Todo → In Progress → Done)
  - Move tasks backward (Done → In Progress → Todo)
- Add new tasks through a simple input form
- Responsive design
- Intuitive user interface

## Possible Improvements

### Component Management
- Implement a component library (like Material-UI or Shadcn)
- Create a custom component library for consistent styling and reusability
- Add a design system with standardized tokens for colors, spacing, and typography

### State Management
- Implement Redux or similar state management library for better state control
- Implement undo/redo functionality for task movements

### Backend Integration
- Connect to a real REST API or GraphQL endpoint
- Implement real-time updates using WebSockets
- Add user authentication and personal task lists
- Implement data persistence with a backend database

### Features
- Add task categories/labels
- Implement drag-and-drop functionality
- Add due dates and priority levels
- Include task descriptions and attachments
- Add search and filter capabilities
- Implement task archiving system

### Testing & Quality
- Add comprehensive unit tests using Jest and React Testing Library
- Implement end-to-end testing with Cypress or Playwright
- Add error boundaries for better error handling
- Implement loading states and better error feedback

### Performance
- Implement virtualization for large task lists
- Add pagination or infinite scroll
- Optimize bundle size with code splitting
- Implement service workers for offline functionality

### UX Improvements
- Add keyboard shortcuts for common actions
- Implement task reordering within columns
- Add animations for task movements
- Implement dark mode toggle
- Add accessibility improvements (ARIA labels, keyboard navigation)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/feligomes/every-io.git
```

2. Navigate to the project directory:
```bash
cd every-io
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── TaskItem.tsx    # Individual task component
│   └── TaskColumn.tsx  # Column component for task states
├── types.tsx          # TypeScript interfaces and types
└── App.tsx            # Main application component
```

## Usage

1. **Adding Tasks**
   - Use the input form at the bottom to add new tasks
   - New tasks automatically appear in the "Todo" column

2. **Moving Tasks**
   - Use the right arrow to move tasks forward
   - Use the left arrow to move tasks backward
   - Arrows are disabled when tasks reach the first or last column

## Testing

The application includes several types of tests:

### Unit Tests
Located in `src/App.test.tsx`, these tests verify core functionality:
- Column rendering and task movement
- Task addition and state management
- Keyboard navigation functionality

To run the tests:
```bash
# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```




