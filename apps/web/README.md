# Healthcare Web Application

Frontend application for the Healthcare SaaS platform built with Next.js 14, React 18, and Tailwind CSS.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality
- ✅ Prettier for code formatting
- ✅ Responsive design
- ✅ Production-ready setup

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Install dependencies from workspace root
pnpm install

# Navigate to web app
cd apps/web
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Building

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint and fix issues
- `pnpm lint:check` - Check ESLint without fixing
- `pnpm type-check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check Prettier formatting

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable React components
├── lib/                 # Utility functions
├── types/              # TypeScript type definitions
└── middleware.ts       # Next.js middleware

public/                 # Static assets
```

## Configuration

- **next.config.js** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration
- **tsconfig.json** - TypeScript configuration
- **.eslintrc.json** - ESLint configuration
- **.prettierrc.json** - Prettier configuration

## Environment Variables

Create a `.env.local` file in this directory (see `.env.example`):

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Development Guidelines

- Use TypeScript for all new code
- Follow the project structure
- Use Tailwind CSS utility classes for styling
- Use the provided components for common UI elements
- Run linting and formatting before committing

## Performance

The application is optimized for production with:
- SWC minification
- Optimized package imports from shared packages
- TypeScript strict mode
- Tree-shaking friendly imports

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See LICENSE in the workspace root.
