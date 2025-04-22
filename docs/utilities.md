# Utility Functions

This document describes the utility functions available in the Vibe Films project and how to use them.

## Overview

Utility functions are located in the `src/utils/` directory. These are reusable, pure functions that can be imported across the application to maintain consistency and reduce code duplication.

## Available Utilities

### Class Name Utility (`cn.ts`)

This utility is used for conditionally joining class names together, making it easier to apply dynamic styling.

```tsx
import { cn } from '@/utils/cn'

// Usage example
<div className={cn(
  "base-class",
  isActive && "active-class",
  variant === "primary" ? "primary-class" : "secondary-class"
)}>
  Content
</div>
```

Source code:
```tsx
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Image Source Utility (`imageUtils.ts`)

This utility provides a consistent way to handle image sources with fallbacks.

```tsx
import { getImageSrc } from '@/utils/imageUtils'
import DEFAULT_IMAGE from '...'

// Usage example
<Image
  src={getImageSrc(project.image, DEFAULT_IMAGE)}
  alt={project.title}
  fill
  className="object-cover"
/>
```

Source code:
```tsx
import { StaticImageData } from "next/image";

/**
 * Returns a valid image source or the provided default image if src is undefined
 */
export const getImageSrc = (
  src: string | undefined, 
  defaultImage: string | StaticImageData
): string | StaticImageData => {
  return src || defaultImage;
};
```

## Creating New Utilities

When creating new utility functions, follow these guidelines:

1. **Single Responsibility**: Each utility function should do one thing well.

2. **Pure Functions**: Utilities should be pure functions when possible, with no side effects.

3. **Type Safety**: Always include TypeScript type definitions.

4. **Documentation**: Include JSDoc comments to explain what the function does.

5. **Testability**: Write functions that are easy to test.

6. **File Organization**:
   - If the utility is related to existing functionality, add it to the appropriate file.
   - If it's a new category, create a new file with a descriptive name.

## Example of Creating a New Utility

Let's say we need a utility to format dates consistently across the application:

1. Create a new file `src/utils/dateUtils.ts`:

```tsx
/**
 * Formats a date into a human-readable string
 * @param date - The date to format
 * @param format - The format to use (default: 'medium')
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string | number,
  format: 'short' | 'medium' | 'long' = 'medium'
): string => {
  const dateObj = new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }
  
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString('en-US', { 
        month: 'numeric', 
        day: 'numeric', 
        year: '2-digit' 
      });
    case 'long':
      return dateObj.toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      });
    case 'medium':
    default:
      return dateObj.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
  }
};
```

2. Import and use it in your components:

```tsx
import { formatDate } from '@/utils/dateUtils'

// Usage
<span className="text-gray-500">
  {formatDate(article.publishedAt, 'long')}
</span>
```

## Best Practices

- **DRY (Don't Repeat Yourself)**: If you find yourself writing the same code in multiple places, consider creating a utility function.

- **Keep it Simple**: Utility functions should be simple and focused. Complex logic should be broken down into multiple utilities.

- **Naming**: Use clear, descriptive names that indicate what the function does.

- **Testing**: Write tests for your utility functions to ensure they work as expected.

- **Export/Import**: Always use named exports for utility functions to make imports more explicit. 