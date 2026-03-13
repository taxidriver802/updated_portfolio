# Portfolio Rebuild Planning Notes

## Context

The current portfolio (hosted on GitHub Pages) displays projects by
automatically fetching all public repositories from the GitHub API. This
ensures the portfolio stays up to date whenever new repositories are
created. However, this approach also surfaces experimental or learning
projects alongside more substantial full-stack work.

While technically interesting, the current portfolio behaves more like a
**project gallery** than a **curated developer portfolio**, which may
weaken its impact for recruiters and hiring managers who typically scan
a portfolio very quickly.

The goal of the rebuild is to create a **more concise, recruiter-focused
portfolio that highlights stronger engineering work while still allowing
additional projects to be accessible.**

------------------------------------------------------------------------

# Objectives for the Portfolio Rebuild

## 1. Curate Projects Instead of Showing Everything

The current portfolio shows many repositories (\~14 projects). Instead,
the new version should prioritize **3--5 strong projects** that best
demonstrate full-stack development ability.

These should emphasize: - Full-stack architecture - Authentication
systems - API design - Database work - Deployment - Real-world problem
solving

Suggested featured projects:

-   Chatty -- Real Time Chat Application
-   Realtor CRM
-   Wear With Weather
-   News Explorer

All other repositories should move to a secondary section such as: -
Other Projects - Experiments - Learning Projects

This allows GitHub auto-fetch to remain useful without diluting the
strongest work.

------------------------------------------------------------------------

# 2. Two-Tier Project System

The portfolio should have two distinct project sections.

### Featured Projects (Manually Curated)

Hand-selected projects that best represent engineering ability.

### Other Projects (Auto-Fetched from GitHub)

Automatically display additional repositories for transparency and
completeness.

This preserves automation while allowing control over presentation.

------------------------------------------------------------------------

# 3. Improve Project Descriptions

Current project cards are too brief and do not communicate technical
depth.

Instead of simple summaries, each project should include: - Technology
stack - Key features - Architectural highlights

Example structure:

Project Title

Tech Stack: React • Node.js • Express • MongoDB • Socket.io • Cloudinary

Key Features: - Real-time messaging using WebSockets - JWT
authentication with protected routes - Image uploads via Cloudinary -
Persistent message storage in MongoDB - Responsive UI with custom
theming

------------------------------------------------------------------------

# 4. Add a Dedicated Tech Stack Section

Recruiters often scan portfolios for technology keywords.

Example:

Frontend - React - Next.js - JavaScript / TypeScript - Tailwind - CSS

Backend - Node.js - Express - REST APIs

Databases - MongoDB - PostgreSQL

Tools - Docker - Git - Vercel - Cloudinary

------------------------------------------------------------------------

# 5. Simplify the Hero Section

Example:

Jason Cox\
Full-Stack Web Developer

I build full-stack applications using React, Node.js, and modern web
technologies.

I enjoy designing systems end-to-end --- from database architecture to
responsive UI.

Currently building a Realtor CRM and expanding backend architecture
skills.

------------------------------------------------------------------------

# 6. Add Project Deep-Dive Pages

Each featured project should ideally include: - Architecture overview -
Technology stack - Screenshots - Feature list - Challenges encountered -
Solutions implemented - GitHub link

Example:

Challenge: Handling multiple pending chat messages while maintaining
correct ordering.

Solution: Implemented per-chat pending message queues using a map
structure instead of a single global pending message state.

------------------------------------------------------------------------

# 7. Include Architecture Diagrams

Example architecture:

React Client\
↓\
Node / Express API\
↓\
Database

For real-time apps:

React Client\
↓\
Socket.io\
↓\
Node Server\
↓\
MongoDB

------------------------------------------------------------------------

# 8. Add a "Currently Building" Section

Currently Building

Realtor CRM

Features: - Lead tracking - Task reminders - SQL relational data model -
Dashboard analytics

------------------------------------------------------------------------

# 9. Consider Rebuilding the Portfolio with a Stronger Stack

Suggested stack:

-   Next.js
-   TypeScript
-   Tailwind
-   Framer Motion

Potential features: - Smooth UI transitions - Project filtering -
Dark/light mode - Case study pages - GitHub statistics - Dynamic project
routing

------------------------------------------------------------------------

# 10. Suggested Portfolio Structure

Hero Section\
Introduction + quick summary

Featured Projects\
3--5 curated projects

Tech Stack / Skills

Project Case Studies

Currently Building

Other Projects (GitHub auto-fetched)

About

Contact

------------------------------------------------------------------------

# Key Takeaway

The goal of the rebuild is to shift the portfolio from a **project
gallery** to a **curated engineering showcase**.

Rather than displaying every project equally, the portfolio should
highlight the strongest work while still allowing access to the full
GitHub repository list.
