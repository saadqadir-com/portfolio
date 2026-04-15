# Saad Qadir - Portfolio & Mission Control

A high-performance personal portfolio website featuring a unique "Mission Control" theme, detailed case studies, and a technical blog. Built with modern web technologies to demonstrate engineering and design capabilities.

## 🚀 Key Features

- **Mission Control Theme**: An immersive, gamified contact experience that treats project inquiries as "missions", featuring a multi-step onboarding flow.
- **Case Studies Showcase**: Detailed breakdown of projects with problem/solution analysis and technical deep dives (`/case-studies`).
- **Technical Blog**: Integrated blog section for sharing insights and engineering thoughts (`/blogs`).
- **Responsive Design**: Fully responsive UI built with **Tailwind CSS** and **Shadcn UI**.
- **SEO Optimized**: Leverages **Next.js Metadata API** for dynamic SEO, Open Graph, and Twitter tags.
- **Performance**: Powered by **Next.js 16 (Turbopack)** for lightning-fast development and optimized production builds.
- **Type-Safe**: Written in **TypeScript** for robustness and maintainability.

## 🛠️ Tech Stack

### Frontend & Framework

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [Shadcn UI](https://ui.shadcn.com)
- **State Management**: [React Query (TanStack Query)](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Analytics**: Vercel Analytics & Speed Insights

### Backend / Infrastructure

- **Serverless**: Next.js API Routes (Route Handlers)
- **Email**: `nodemailer` with SMTP configuration
- **Hosting**: Vercel

## 📂 Project Structure

```
├── src/
│   ├── app/            # Next.js App Router (Pages & Layouts)
│   ├── components/     # Reusable UI components
│   │   ├── layout/     # Layout wrappers (Header, Footer)
│   │   └── ui/         # Shadcn UI primitives
│   ├── data/           # Static data (profile, projects, blog content)
│   ├── hooks/          # Custom React hooks (Queries & Logic)
│   ├── lib/            # Utilities and helper functions
│   ├── constants/      # Project-wide constants and config
│   └── views/          # Complex page-specific view components
├── public/             # Static assets (images, icons, robots.txt)
└── components.json     # Shadcn UI configuration
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
    Create a `.env` file in the root directory and configure your SMTP credentials and other settings:

    ```env
    # SMTP Configuration
    SMTP_USER=your-email@example.com
    SMTP_PASS=your-password
    SMTP_FROM=your-sender-email@example.com
    SMTP_HOST=smtp.your-provider.com
    SMTP_PORT=465

    # Public Variables
    NEXT_PUBLIC_URL=http://localhost:3000
    NEXT_PUBLIC_CAL_LINK=your-cal-link
    VITE_CAL_LINK=your-cal-link # For flexibility across different build tools
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📜 Scripts

- `npm run dev`: Start the development server with Turbopack.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run Next.js lint check.

## 🤝 Contributing

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
