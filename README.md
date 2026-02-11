# Saad Qadir - Portfolio & Mission Control

A high-performance personal portfolio website featuring a unique "Mission Control" theme, detailed case studies, and a technical blog. Built with modern web technologies to demonstrate engineering and design capabilities.

## 🚀 Key Features

- **Mission Control Theme**: An immersive, gamified contact experience that treats project inquiries as "missions", featuring a multi-step onboarding flow.
- **Case Studies Showcase**: Detailed breakdown of projects with problem/solution analysis and technical deep dives (`/case-studies`).
- **Technical Blog**: Integrated blog section for sharing insights and engineering thoughts (`/blog`).
- **Responsive Design**: Fully responsive UI built with **Tailwind CSS** and **Shadcn UI**.
- **Serverless Backend**: Custom API routes for email handling hosted on **Vercel Serverless Functions**.
- **SEO Optimized**: Implements **React Helmet** for dynamic metadata management.
- **Type-Safe**: Written in **TypeScript** for robustness and maintainability.

## 🛠️ Tech Stack

### Frontend

- **Framework**: [React](https://react.dev) + [Vite](https://vitejs.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [Shadcn UI](https://ui.shadcn.com)
- **State Management**: [React Query (TanStack Query)](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev)

### Backend / Infrastructure

- **Serverless**: Vercel Functions (Node.js)
- **Email**: `nodemailer` (via serverless API)
- **Hosting**: Vercel

## 📂 Project Structure

```
├── api/                # Vercel Serverless Functions
│   └── send-email.ts   # Email handling logic
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── layout/     # Layout wrappers (Header, Footer)
│   │   ├── seo/        # SEO/Helmet components
│   │   └── ui/         # Shadcn UI primitives
│   ├── data/           # Static data (profile, projects)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers (emailjs, utils)
│   ├── pages/          # Route components (HomePage, ContactPage, etc.)
│   └── App.tsx         # Main application entry and routing
└── public/             # Static assets
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/saadqadir-com/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory (copy from `.env.example` if available) and configure your environment variables:

    ```env
    # Example variables (adjust based on your actual .env requirements)
    VITE_APP_URL=http://localhost:5173
    EMAIL_USER=your-email@example.com
    EMAIL_PASS=your-email-password
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:8080](http://localhost:8080) (or the port shown in terminal) to view it in the browser.

## 📜 Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint to check for code quality issues.
- `npm test`: Run tests with Vitest.

## 🤝 Contributing

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
