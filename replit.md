# PromptRater

## Overview

PromptRater is a single-page web application that analyzes AI prompts and provides instant feedback on their quality. Users enter text prompts and receive scored ratings across multiple dimensions (clarity, creativity, specificity) along with actionable suggestions for improvement. The application features a clean, ChatGPT-inspired interface with dark/light theme support and animated visual feedback.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR (Hot Module Replacement)
- React Router (wouter) for lightweight client-side routing
- Single-page application (SPA) architecture with component-based UI

**UI Component Library**
- shadcn/ui components built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- CSS custom properties for theme variables enabling seamless dark/light mode switching
- Framer Motion for declarative animations (circular scores, metric bars, loading states)

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- React Context API for theme management (ThemeProvider)
- Local component state for form inputs and UI interactions
- No global state management library needed due to simple data flow

**Design System**
- Custom color palette inspired by ChatGPT with teal-green primary (#10A37F)
- Systematic spacing using Tailwind units (2, 3, 4, 6, 8, 12, 16, 20)
- Typography hierarchy using Inter/Poppins fonts with defined sizes and weights
- Maximum container width of 800px for optimal readability
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for REST API endpoints
- ESM (ES Modules) throughout the codebase
- Custom middleware for request logging and JSON parsing
- Vite integration for development mode with SSR capabilities

**API Design**
- RESTful endpoint: `POST /api/rate` accepts prompt text and returns analysis results
- Request validation using Zod schemas for type-safe input handling
- Structured JSON responses with consistent error handling
- Stateless API design - no session or authentication required

**Prompt Analysis Engine**
- Rule-based algorithm (server/promptAnalyzer.ts) that evaluates prompts across three dimensions:
  - **Clarity**: Assesses length optimization, sentence structure, and specificity
  - **Creativity**: Evaluates descriptive language and unique word usage
  - **Specificity**: Measures detail level through numbers, examples, and constraints
- Weighted scoring system (40% clarity, 30% creativity, 30% specificity)
- Dynamic feedback generation based on score thresholds and prompt characteristics

### External Dependencies

**Database**
- Drizzle ORM configured for PostgreSQL (via @neondatabase/serverless)
- Schema defines a users table with UUID primary keys
- Database currently set up but not actively used in the prompt rating workflow
- In-memory storage implementation (MemStorage) available as fallback

**Third-Party Services**
- Google Fonts CDN for Inter and Poppins font families
- No external AI/ML APIs - analysis runs entirely server-side with custom logic
- No authentication providers integrated

**Development Tools**
- Replit-specific plugins for runtime error overlay and dev banner
- TypeScript for compile-time type checking across client/server/shared code
- Path aliases configured (@/, @shared/, @assets/) for clean imports
- PostCSS with Tailwind and Autoprefixer for CSS processing

**Key Libraries**
- @radix-ui/* packages for accessible UI primitives (dialogs, dropdowns, tooltips, etc.)
- react-hook-form with @hookform/resolvers for form validation
- class-variance-authority and clsx for conditional className management
- date-fns for date manipulation utilities
- nanoid for generating unique IDs