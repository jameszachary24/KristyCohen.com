# Kristy Cohen - Funnel Strategist & Digital Entrepreneur Website

A high-performance, premium digital portfolio and client management platform built for a top-tier funnel strategist. This application combines a conversion-focused public website with a functional client portal and onboarding system.

## 🚀 Project Overview

This project is a modern Single Page Application (SPA) designed to:
1.  **Showcase Authority:** Display case studies, testimonials, and service offerings with high-end animations.
2.  **Capture Leads:** Integrated lead magnets and multi-step onboarding forms.
3.  **Manage Clients:** A dedicated client portal for project tracking and communication.
4.  **Automate Booking:** Seamless integration with scheduling software.

## 🛠 Tech Stack

-   **Frontend:** React 18, Vite
-   **Styling:** Tailwind CSS
-   **Animations:** Framer Motion
-   **Routing:** React Router DOM (HashRouter)
-   **Backend/Database:** Supabase (PostgreSQL)
-   **Icons:** React Icons (Feather Icons/Fi)

## ✨ Key Features

### 1. Public Marketing Site
-   **Dynamic Hero Section:** engaging animations and clear value proposition.
-   **Lead Magnet Integration:** Email capture form connected to Supabase `leads` table.
-   **Case Study Showcase:** Interactive displays of client success stories with revenue metrics.
-   **Service Packages:** detailed pricing tables and service breakdowns.
-   **Filterable Portfolio:** Categorized project gallery (E-commerce, SaaS, Coaching).

### 2. Client Acquisition Engine
-   **Multi-Step Onboarding Flow:**
    -   Interactive 5-step wizard (`OnboardingFlow.jsx`).
    -   Captures Business Type, Revenue, Goals, and Contact Info.
    -   Data persistence to Supabase `onboarding_submissions`.
-   **Booking Integration:** Embedded scheduling iframe for seamless consultation booking.

### 3. Client Portal (Dashboard)
-   **Project Tracker:** Visual roadmap of the client's project status (e.g., "Strategy Session", "Build Phase").
-   **Notification Center:** Real-time alerts system fetching from Supabase `notifications` table.
-   **Resource Hub:** Downloadable assets (Strategy Blueprints, Contracts).
-   **Status Indicators:** Visual cues for project health and upcoming milestones.

## 📂 Project Structure

```
src/
├── common/             # Reusable generic components (e.g., SafeIcon)
├── components/         # Feature-specific components
│   ├── OnboardingFlow.jsx  # Complex form logic
│   ├── ProjectTracker.jsx  # Visual progress component
│   ├── NotificationCenter.jsx # Dropdown with DB integration
│   └── ...
├── pages/              # Main route views
│   ├── HomePage.jsx
│   ├── ClientPortalPage.jsx
│   ├── BookingPage.jsx
│   └── ...
├── supabase/           # Database configuration
│   ├── migrations/     # SQL files for schema setup
│   └── supabase.js     # Client initialization
├── App.jsx             # Route definitions
└── main.jsx            # Entry point
```

## 🗄️ Database Schema (Supabase)

The application uses three core tables secured with Row Level Security (RLS):

### `onboarding_submissions`
Stores detailed applications from potential clients.
- `id` (uuid)
- `business_type` (text)
- `revenue` (text)
- `goals` (text array)
- `contact_info` (name, email, website)

### `leads`
Stores emails captured via the homepage lead magnet.
- `id` (uuid)
- `email` (text)
- `source` (text)

### `notifications`
Powers the notification center in the Client Portal.
- `id` (uuid)
- `title` (text)
- `message` (text)
- `type` (enum: success, warning, info)
- `is_read` (boolean)

## 🎨 Design System

-   **Color Palette:**
    -   **Primary Background:** Slate 950 (`bg-slate-950`)
    -   **Accents:** Gradients of Purple (`from-purple-500`) to Pink (`to-pink-500`)
    -   **Text:** Slate 300 for body, White for headings.
-   **Typography:** System fonts optimized for readability and performance.
-   **Effects:** Extensive use of `backdrop-blur`, `gradients`, and `glow` effects for a premium feel.

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Setup:**
    Ensure `src/supabase/supabase.js` contains valid Supabase credentials (URL and Anon Key).

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

4.  **Build for Production:**
    ```bash
    npm run build
    ```

## 🔒 Security

-   **SafeIcon:** Custom wrapper component to prevent app crashes from missing icon imports.
-   **Input Validation:** Form fields in onboarding and lead magnet are validated before submission.
-   **RLS Policies:** Database tables are protected via Supabase Row Level Security policies.

---
© 2024 Kristy Cohen. All Rights Reserved.