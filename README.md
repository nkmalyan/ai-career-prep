# PREPO — AI-Powered Career Preparation

PREPO is a full-stack career preparation platform that uses AI to help users build resumes, generate tailored cover letters, understand industry trends, and practice for interviews — all in one place.

## Features

- **Onboarding** — Users provide their industry, experience, skills, and bio to personalize every AI feature.
- **Industry Insights Dashboard** — AI-generated salary ranges, growth rate, demand level, and market trends for the user's industry, refreshed automatically every week via a background job.
- **AI Resume Builder** — Build a structured resume (summary, skills, experience, education, projects) with AI-improved bullet points, live Markdown preview, and one-click PDF export.
- **AI Cover Letter Generator** — Paste a job description and get a tailored cover letter generated instantly, with a saved history of past letters.
- **Mock Interview / Quiz** — AI-generated multiple-choice quizzes based on the user's industry and skills, with score tracking, performance charts, and AI-written improvement tips.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, Server Actions) |
| Authentication | [Clerk](https://clerk.com/) |
| Database | PostgreSQL + [Prisma ORM](https://www.prisma.io/) |
| AI | [Google Gemini](https://ai.google.dev/) |
| Background Jobs | [Inngest](https://www.inngest.com/) (weekly cron for industry insights) |
| Forms & Validation | react-hook-form + Zod |
| UI | Tailwind CSS + shadcn/ui (Radix primitives) |
| Charts | Recharts |
| PDF Export | html2pdf.js |

## Project Structure

```
├── actions/          # Server Actions — application backend logic
├── app/              # Next.js App Router pages and layouts
├── components/       # Shared UI components (header, footer, shadcn/ui primitives)
├── hooks/            # Custom React hooks (e.g. useFetch)
├── lib/              # Server-side utilities (Prisma client, Inngest, auth sync)
├── prisma/           # Database schema and migrations
└── Data/             # Static content (industries list, landing page copy)
```

## Getting Started

### Prerequisites
- Node.js 18+
- A PostgreSQL database (e.g. [Neon](https://neon.tech) or [Supabase](https://supabase.com))
- A [Clerk](https://clerk.com/) account
- A [Google Gemini API key](https://aistudio.google.com/apikey)

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/nkmalyan/ai-career-prep.git
   cd ai-career-prep
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory (see `.env.example` for the full list of required variables):
   ```env
   DATABASE_URL=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   GEMINI_API_KEY=
   ```

4. Set up the database
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Run the development server
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is designed to deploy on [Vercel](https://vercel.com), which has first-class support for Next.js Server Actions and Middleware. Steps:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add all environment variables from `.env.example` in the Vercel project settings.
4. Run `npx prisma migrate deploy` against your production database before or during the first deploy.
5. Deploy.

The PostgreSQL database itself should be hosted separately (e.g. on Neon or Supabase), since Vercel does not host databases directly.

## License

This project is for educational and portfolio purposes.
