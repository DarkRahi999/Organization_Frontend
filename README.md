# Frontend Documentation

## System Architecture Diagram

![Organization Diagram](./Organization_Diagram.drawio.svg)

## Technology Stack

- **Framework**: Next.js
- **State Management**: Redux Toolkit
- **UI Library**: Tailwind CSS
- **Charting**: Chart.js
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file based on the `.env.example` template.

3. Run the development server:
   ```bash
   npm run dev
   ```
   
   Or from the root directory, you can run both frontend and backend simultaneously:
   ```bash
   npm run dev
   ```

   The application will be available at http://localhost:3000

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions and helpers
├── hooks/               # Custom React hooks
├── store/               # Redux store configuration
├── services/            # API service definitions
├── types/               # TypeScript type definitions
├── constants/           # Application constants
└── styles/              # Global styles and Tailwind configuration
```

## Development Guidelines

1. All new features should follow the established component structure
2. Use TypeScript for all new components and functions
3. Implement proper error handling
4. Write unit tests for complex logic
5. Follow the existing code style and conventions
6. Use Tailwind CSS for styling rather than plain CSS
7. Implement responsive design for all components

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code issues
- `npm run test` - Runs the test suite

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_API_URL` - The base URL for the backend API
- `NEXT_PUBLIC_APP_NAME` - The name of the application

## Deployment

The application can be deployed to Vercel with a single click. For other platforms, you can use the build output from `npm run build`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request