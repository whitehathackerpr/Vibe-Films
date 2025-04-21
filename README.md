# Vibe Films Website

A modern, visually stunning website for Vibe Films, a Kampala-based Ugandan production company delivering high-quality African storytelling with striking visuals and innovative design.

## Features

- Responsive design with mobile-first approach
- Modern UI with animations and transitions
- Rich media integration for video trailers and portfolio showcase
- Optimized performance with Next.js

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Video Player:** [React Player](https://github.com/cookpete/react-player)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vibe-films.git
   cd vibe-films
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with your environment variables:
   ```
   # Example environment variables
   NEXT_PUBLIC_MAILCHIMP_API_KEY=your_mailchimp_api_key
   NEXT_PUBLIC_MAILCHIMP_SERVER=your_mailchimp_server
   NEXT_PUBLIC_MAILCHIMP_LIST_ID=your_mailchimp_list_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
vibe-films/
├── public/              # Static assets
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
├── tailwind.config.js   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Deployment

To deploy the application, follow these steps:

1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

### Deployment Platforms

The site can be deployed to various platforms:

- [Vercel](https://vercel.com/) (recommended for Next.js)
- [Netlify](https://netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Future Improvements

- Integration with a headless CMS (Contentful, Strapi)
- E-commerce functionality for the shop
- User authentication for comments and reviews
- Analytics integration

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact [info@vibefilms.ug](mailto:info@vibefilms.ug). 