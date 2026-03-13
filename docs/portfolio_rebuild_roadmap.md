# Portfolio Rebuild Roadmap

This document outlines the step-by-step development roadmap for
rebuilding the portfolio into a more recruiter-focused, technically
impressive showcase.

The goal is to transform the portfolio from a simple project gallery
into a curated engineering showcase that highlights strong full‑stack
projects and demonstrates thoughtful system design.

------------------------------------------------------------------------

# Phase 1 --- Project Setup

## Goals

Establish the core project environment and tooling.

## Tasks

-   Initialize project using **Next.js**
-   Enable **TypeScript**
-   Install **Tailwind CSS**
-   Set up **Prettier + ESLint**
-   Create initial folder structure

Example structure:

/portfolio /docs /components /sections /lib /data /pages or /app /public

## Outcome

Working development environment with base layout.

------------------------------------------------------------------------

# Phase 2 --- Core Layout

## Goals

Build the foundational layout used across the entire portfolio.

## Tasks

Create reusable components:

-   Navbar
-   Footer
-   Container layout
-   Section wrapper

Create main homepage layout:

Hero Section Featured Projects Skills / Tech Stack Currently Building
Other Projects Contact

## Outcome

Responsive layout skeleton for the portfolio.

------------------------------------------------------------------------

# Phase 3 --- Hero Section

## Goals

Create a strong first impression for recruiters.

## Tasks

Build hero component containing:

-   Name
-   Title
-   Short professional description
-   Profile image
-   Links:
    -   GitHub
    -   LinkedIn
    -   Resume
    -   Contact

Optional enhancements:

-   subtle animation
-   scroll indicator

## Outcome

Clear introduction that quickly communicates developer identity.

------------------------------------------------------------------------

# Phase 4 --- Featured Projects System

## Goals

Highlight only the strongest projects.

## Tasks

Create a **manual project list** in:

/data/featuredProjects.ts

Example structure:

{ title: "Chatty", description: "...", tech: \["React", "Node.js",
"MongoDB"\], github: "...", demo: "...", image: "..." }

Display projects in a **Featured Projects** section.

Limit to **3--5 high‑impact projects**.

## Outcome

Recruiters immediately see the most relevant engineering work.

------------------------------------------------------------------------

# Phase 5 --- Project Case Study Pages

## Goals

Provide deeper technical explanations of projects.

## Tasks

Create dynamic routes:

/projects/\[slug\]

Each project page includes:

Overview Tech stack Architecture explanation Feature list Screenshots
Challenges solved GitHub link

Optional:

Architecture diagrams.

## Outcome

Demonstrates deeper engineering thinking.

------------------------------------------------------------------------

# Phase 6 --- GitHub Integration

## Goals

Keep portfolio automatically updated with additional repositories.

## Tasks

Use the GitHub API to fetch:

https://api.github.com/users/{username}/repos

Display these repos under:

Other Projects

Filter out:

-   forks
-   archived repos

Optional sorting:

-   most recently updated
-   most starred

## Outcome

Portfolio stays automatically updated without cluttering the main
section.

------------------------------------------------------------------------

# Phase 7 --- Skills / Tech Stack Section

## Goals

Make technical skills easy for recruiters to scan.

## Tasks

Create categorized lists:

Frontend - React - Next.js - TypeScript - Tailwind

Backend - Node.js - Express

Databases - MongoDB - PostgreSQL

Tools - Docker - Git - Vercel

Optional:

Display as badges or cards.

## Outcome

Clear overview of technical capabilities.

------------------------------------------------------------------------

# Phase 8 --- Currently Building Section

## Goals

Show ongoing development work.

## Tasks

Add section highlighting:

Current project:

Realtor CRM

Include:

Description Tech stack Key features

Optional:

Link to repo.

## Outcome

Shows active learning and development.

------------------------------------------------------------------------

# Phase 9 --- UI Polish

## Goals

Elevate the portfolio visually.

## Tasks

Add:

-   smooth transitions
-   hover effects
-   subtle motion using Framer Motion
-   dark/light mode toggle

Optimize:

-   responsive layout
-   spacing and typography

## Outcome

Professional design quality.

------------------------------------------------------------------------

# Phase 10 --- Performance & SEO

## Goals

Ensure the portfolio loads quickly and is discoverable.

## Tasks

Optimize:

-   images
-   metadata
-   Open Graph previews
-   lighthouse performance

Add:

title description social preview images

## Outcome

Production‑ready deployment.

------------------------------------------------------------------------

# Phase 11 --- Deployment

## Goals

Deploy and maintain the portfolio.

## Tasks

Deploy using:

Vercel

Add:

custom domain

Example:

jasoncox.dev

## Outcome

Live production portfolio.

------------------------------------------------------------------------

# Future Improvements

Possible enhancements after launch:

-   GitHub contribution graph
-   blog posts / dev journal
-   project filtering
-   interactive architecture diagrams
-   animation polish

------------------------------------------------------------------------

# Success Criteria

The rebuilt portfolio should:

-   Highlight 3--5 strong projects
-   Demonstrate full‑stack capabilities
-   Provide deeper technical explanations
-   Remain automatically updated via GitHub
-   Present a polished, recruiter‑friendly interface
