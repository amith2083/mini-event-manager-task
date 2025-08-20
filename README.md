Mini Event Manager
A stylish and modern event management application built with Next.js (App Router), TypeScript, TailwindCSS, Zustand for state management, and React Hook Form for form handling. Features include adding events, listing them, deleting events, filtering by name, and persisting data to localStorage, all wrapped in an attractive, user-friendly interface.
Prerequisites

Node.js (>=18.x)
pnpm (>=8.x)

How to Run

Clone the repository:
git clone <repository-url>
cd mini-event


Install dependencies:
pnpm install


Start the development server:
pnpm dev


Open your browser and navigate to:
http://localhost:3000/events



Path of the Page
The event management page is located at:
http://localhost:3000/events

Folder Structure
mini-event-manager/
├── app/
│   ├── events/
│   │   └── page.tsx          # Events page component
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Root page
│   └── globals.css           # TailwindCSS global styles
├── components/
│   ├── event/
│   │   ├── EventForm.tsx     # Form component with React Hook Form
│   │   ├── EventList.tsx     # Event list component
│   │   └── EventSearch.tsx   # Search bar component
│   └── ui/
│       ├── Button.tsx        # Reusable button component
│       └── Input.tsx        # Reusable input component
├── lib/
│   └── eventStore.ts         # Zustand store for events
├── public/                   # Static assets
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
└── README.md

Notes/Assumptions

Setup: Standard Next.js setup with create-next-app and pnpm for package management.
State Management: Zustand with localStorage persistence for event data.
Form Handling: React Hook Form with Zod for robust validation.
Styling: TailwindCSS with custom styles for a vibrant, modern, mobile-friendly design, including animations and a cohesive color scheme.
Search Functionality: Client-side search filters events by name in real-time.
No Backend: Data is stored in-memory (Zustand) and persisted to localStorage.
Type Safety: TypeScript ensures type-safe code.
Accessibility: Includes ARIA attributes and keyboard navigation.
Design Enhancements: Added gradients, shadows, hover effects, and smooth transitions for a polished, attractive UI.


