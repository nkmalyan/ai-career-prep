PREPO — AI-Powered Career Preparation

PREPO is a full-stack career preparation platform that uses AI to help users build resumes, generate tailored cover letters, understand industry trends, and practice for interviews — all in one place.

Features
Onboarding — Users provide their industry, experience, skills, and bio to personalize every AI feature.
Industry Insights Dashboard — AI-generated salary ranges, growth rate, demand level, and market trends for the user's industry, refreshed automatically every week via a background job.
AI Resume Builder — Build a structured resume with AI-improved bullet points, live Markdown preview, and one-click PDF export.
AI Cover Letter Generator — Paste a job description and get a tailored cover letter generated instantly, with a saved history of past letters.
Mock Interview / Quiz — AI-generated multiple-choice quizzes based on the user's industry and skills, with score tracking, performance charts, and AI-written improvement tips.
Tech Stack
Layer	Technology
Framework	Next.js 15 (App Router, Server Actions)
Authentication	Clerk
Database	PostgreSQL + Prisma ORM
AI	Google Gemini
Background Jobs	Inngest (weekly cron for industry insights)
Forms & Validation	react-hook-form + Zod
UI	Tailwind CSS + shadcn/ui (Radix primitives)
Charts	Recharts
PDF Export	html2pdf.js
Project Structure
actions/       Server Actions - application backend logic
app/           Next.js App Router pages and layouts
components/    Shared UI components
hooks/         Custom React hooks (e.g. useFetch)
lib/           Server-side utilities (Prisma client, Inngest, auth sync)
prisma/        Database schema and migrations
Data/          Static content (industries list, landing page copy)
Getting Started
Prerequisites
Node.js 18+
A PostgreSQL database (e.g. Neon or Supabase)
A Clerk account
A Google Gemini API key
Setup
Clone the repository:
git clone https://github.com/nkmalyan/ai-career-prep.git
cd ai-career-prep
Install dependencies:
npm install
Create a .env file in the root directory (see .env.example for the full list of required variables).
Set up the database:
npx prisma generate
npx prisma migrate dev
Run the development server:
npm run dev
Open http://localhost:3000 in your browser.
Deployment

This project is designed to deploy on Vercel, which has first-class support for Next.js Server Actions and Middleware.

Push the repository to GitHub.
Import the project into Vercel.
Add all environment variables from .env.example in the Vercel project settings.
Run npx prisma migrate deploy against your production database.
Deploy.

The PostgreSQL database itself should be hosted separately (e.g. on Neon or Supabase), since Vercel does not host databases directly.

License

This project is for educational and portfolio purposes.
