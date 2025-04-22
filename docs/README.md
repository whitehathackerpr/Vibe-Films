# Vibe Films Documentation

Welcome to the Vibe Films project documentation. This documentation is designed to help developers understand the project structure, coding conventions, and best practices.

## Table of Contents

- [Style Guide](./style-guide.md) - Design language and styling conventions
- [Component Guide](./component-guide.md) - Overview of key components and guidelines
- [Utilities](./utilities.md) - Utility functions and how to use them

## Project Overview

Vibe Films is a modern website for a Kampala-based Ugandan production company. The site is built with:

- Next.js for server-rendered React
- Tailwind CSS for styling
- TypeScript for type safety
- Various supporting libraries for animations, form handling, etc.

The site aims to showcase the company's portfolio, provide information about their services, and allow users to explore their films and series.

## Getting Started

Please refer to the main [README.md](../README.md) for installation and setup instructions.

## Project Structure

The project follows a standard Next.js structure with additional organization:

```
vibe-films/
├── public/              # Static assets
│   └── images/          # Images including logo and favicon
├── src/
│   ├── app/             # Next.js App Router
│   ├── components/      # React components
│   │   ├── forms/       # Form components
│   │   ├── home/        # Homepage sections
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── ...          # Other directories
│   ├── lib/             # Library code, utilities
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── docs/                # Documentation
├── create-logo.js       # Utility to generate logo assets
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Development Workflow

1. **Understanding the Code**: Start by reading the documentation and exploring the codebase.
2. **Making Changes**: Follow the coding conventions outlined in the documentation.
3. **Testing**: Manually test changes on different devices and browsers.
4. **Deployment**: The site can be deployed to platforms like Vercel, Netlify, or AWS Amplify.

## Branding Guidelines

The Vibe Films branding uses text-only representation:

- **Header**: "VIBE FILMS" in uppercase, with "VIBE" in white and "FILMS" in the primary orange color
- **Footer**: "Vibe Films" in title case, with the same color scheme

If you need image assets for external use, run the `create-logo.js` script to generate them.

## Contributing

When contributing to this project, please:

1. Follow the coding conventions
2. Write clear, descriptive commit messages
3. Comment complex code sections
4. Update documentation as needed

## Contact

For questions or support, contact the development team or refer to the contact information in the main README. 