# Task Management Application

A simple and intuitive task management application built with React that allows users to track tasks across different stages of completion.

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


