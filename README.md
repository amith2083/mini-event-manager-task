Mini Event Manager 🎉

A stylish and modern event management application built with Next.js (App Router), TypeScript, TailwindCSS, Zustand, and React Hook Form. This app allows users to add, list, delete, and filter events by name, with data persisted to localStorage for a seamless experience. The interface is vibrant, mobile-friendly, and packed with smooth animations and a cohesive design.





✨ Features





📝 Add Events: Create events with a name and date using a clean, validated form.



📋 List Events: View all events in a beautifully styled list with formatted dates.



🗑️ Delete Events: Remove events with a single click.



🔍 Search Events: Filter events by name in real-time with a responsive search bar.



💾 Persistent Storage: Events are saved to localStorage, so they persist across page reloads.



🎨 Modern UI: Vibrant design with gradients, shadows, hover effects, and smooth transitions.



♿ Accessible: Includes ARIA attributes and keyboard navigation for inclusivity.



🛠️ Type-Safe: Built with TypeScript for robust, error-free code.



📱 Responsive: Mobile-friendly design that looks great on all devices.

🛠️ Tech Stack





Next.js (App Router): Server-side rendering and client-side interactivity.



TypeScript: Type-safe development.



TailwindCSS: Utility-first CSS for rapid, custom styling.



Zustand: Lightweight state management with localStorage persistence.



React Hook Form & Zod: Form handling with robust validation.



pnpm: Fast and efficient package management.

📋 Prerequisites





Node.js: Version >= 18.x



pnpm: Version >= 8.x

🚀 Getting Started

Follow these steps to run the Mini Event Manager locally:





Clone the Repository:

git clone repository url
cd mini-event-manager-task



Install Dependencies:

pnpm install



Start the Development Server:

pnpm dev



Open in Browser: Navigate to http://localhost:3000/events to see the app in action!

📂 Folder Structure

mini-event-manager/
├── app/
│   ├── events/
│   │   └── page.tsx           # Events page component
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Root page
│   └── globals.css            # TailwindCSS global styles
├── components/
│   ├── event/
│   │   ├── EventForm.tsx      # Form component with React Hook Form
│   │   ├── EventList.tsx      # Event list component
│   │   └── EventSearch.tsx    # Search bar component
│   └── ui/
│       ├── Button.tsx         # Reusable button component
│       └── Input.tsx          # Reusable input component
├── lib/
│   └── eventStore.ts          # Zustand store for events
├── public/                    # Static assets
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
└── README.md

🎨 Design Notes





Styling: TailwindCSS powers a vibrant, modern UI with gradients, shadows, and hover effects for a polished look.



Animations: Smooth transitions enhance user interactions.



Accessibility: ARIA attributes and keyboard navigation ensure the app is inclusive.



No Backend: Events are stored in-memory with Zustand and persisted to localStorage.