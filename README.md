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
