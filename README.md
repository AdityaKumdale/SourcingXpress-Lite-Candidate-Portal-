# SourcingXpress Lite - Candidate Portal

Re-engineered the SourcingXpress candidate platform using **Next.js 15** and **tRPC**. Developed a full-stack candidate management system featuring advanced multi-parameter search logic, duplicate-preventative job application workflows, and a real-time status tracking dashboard to optimize recruitment efficiency.

## 🚀 Key Features

### 1. Advanced Multi-Parameter Search
- High-performance, server-side filtering logic allowing users to search jobs by title, company, location, and skills simultaneously.
- Implemented debouncing to optimize API calls, providing a fast and responsive user experience without overloading the server.

### 2. Candidate Lifecycle Management
- Robust application system that handles duplicate-preventative job application workflows. 
- Integrated a real-time status tracking dashboard (Pending, Reviewed, Rejected) so candidates can track their applications easily.

### 3. Type-Safe Full-Stack Architecture
- Built with **tRPC** and **Zod** for end-to-end type safety between the frontend components and the backend server routes.
- This ensures schema-driven data integrity and minimizes runtime errors, accelerating development and improving reliability.

### 4. Modern UX & Animations
- Leveraged **Framer Motion** for a premium, interactive UI (including the animated Radar Section).
- Used **Tailwind CSS** to build a responsive, mobile-first, and highly polished visual layout.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Frontend Library**: React 19
- **API / Networking**: [tRPC](https://trpc.io/) + React Query
- **Validation**: Zod
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 🏁 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AdityaKumdale/SourcingXpress-Lite-Candidate-Portal-.git
   cd "Sourcingxpress V2 Next Clone Project"
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 💡 Architecture Notes

This project demonstrates a centralized data layer utilizing file-system persistence (`lib/db.ts`). The architecture is database-agnostic, meaning the current JSON data store can be effortlessly swapped out for a production database (like PostgreSQL or MongoDB) without needing to rewrite frontend fetching logic, thanks to the tRPC implementation.

## 📜 Legal & Licensing
This project is a personal re-engineering of the SourcingXpress([https://www.sourcingxpress.com/search](https://www.sourcingxpress.com/search)) candidate portal. The code and architecture are my own work, intended for portfolio and performance-demonstration purposes.

All brand names and logos belong to SourcingXpress. This project is not intended for commercial redistribution.