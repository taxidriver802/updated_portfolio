export type ProjectSnapshotItem = {
  label: string;
  value: string;
};

export type ProjectMeta = {
  key: string;
  title?: string;
  slug?: string;
  summary?: string;
  featured?: boolean;
  hidden?: boolean;
  status?: 'live' | 'mobile' | 'in-progress' | 'archived';
  order?: number;
  category?: 'featured' | 'other' | 'current' | 'experiment';
  repoNames?: string[];
  repoLabels?: string[];

  tech?: string[];
  github?: string;
  demo?: string;
  image?: string;

  overview?: string;
  architecture?: string[];
  features?: string[];
  challenges?: { title: string; problem: string; solution: string }[];
  screenshots?: { src: string; alt: string }[];
  snapshot?: ProjectSnapshotItem[];
};

export const projectMeta: Record<string, ProjectMeta> = {
  chatty: {
    key: 'chatty',
    title: 'Chatty',
    slug: 'chatty',
    featured: true,
    category: 'featured',
    order: 1,
    status: 'live',
    repoNames: ['my-chat-frontend', 'my-chat-backend'],
    repoLabels: ['Frontend', 'Backend'],
    summary:
      'Real-time messaging web application with authentication, WebSocket messaging, media uploads, and group chat support.',
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Zustand',
      'Cloudinary',
      'Tailwind CSS',
    ],
    github: 'https://github.com/taxidriver802/my-chat-frontend',
    demo: 'https://fullstack-chat-app-1x3z.onrender.com',
    overview:
      'Chatty is a full-stack real-time messaging application designed to explore WebSocket communication, persistent messaging systems, and responsive UI architecture. The application supports private and group conversations, media sharing, typing indicators, and unread message tracking while maintaining real-time updates between connected users.',
    architecture: [
      'React + Vite frontend handles chat UI, routing, and state management.',
      'Zustand manages global chat state such as conversations, unread counts, and typing indicators.',
      'Node.js + Express backend exposes REST APIs for authentication, conversations, and message persistence.',
      'MongoDB stores users, conversations, and message history.',
      'Socket.IO handles real-time message broadcasting and typing indicators.',
      'Cloudinary manages image uploads and media hosting.',
    ],
    features: [
      'User authentication with JWT',
      'Real-time messaging via WebSockets',
      'One-on-one and group chat support',
      'Typing indicators for active conversations',
      'Unread message badge tracking',
      'Image uploads with Cloudinary',
      'Emoji picker and message reactions',
      'Responsive chat UI',
    ],
    challenges: [
      {
        title: 'Maintaining real-time UI consistency',
        problem:
          'Real-time chat requires UI updates to appear instantly while still syncing with persisted backend data.',
        solution:
          'Socket.IO events update the client immediately while messages are simultaneously stored in MongoDB to ensure conversation history remains consistent after refresh or reconnect.',
      },
      {
        title: 'Handling media uploads within a chat workflow',
        problem:
          'Uploading media during message creation introduces asynchronous processing that can disrupt the chat experience.',
        solution:
          'Integrated Multer with Cloudinary so images upload first, then the resulting URL is attached to the message payload and broadcast to connected users.',
      },
      {
        title: 'Managing complex chat state',
        problem:
          'Chat applications require multiple UI states such as active conversations, unread counts, typing indicators, and message history.',
        solution:
          'Used Zustand for centralized state management, allowing chat components to subscribe to only the state they need.',
      },
    ],

    snapshot: [
      { label: 'Type', value: 'Real-Time Full-Stack App' },
      { label: 'Architecture', value: 'React • Express • MongoDB • Socket.io' },
      { label: 'Focus', value: 'Messaging UX, live updates, state sync' },
      { label: 'Role', value: 'Product design & full-stack development' },
    ],

    screenshots: [
      { src: '/images/chatty/dash.png', alt: 'Chatty Dashboard' },
      { src: '/images/chatty/message.png', alt: 'Chatty messaging interface' },
      { src: '/images/chatty/profile.png', alt: 'Chatty user profile' },
      { src: '/images/chatty/group.png', alt: 'Chatty group conversations' },
    ],
  },

  realtorCrm: {
    key: 'realtorCrm',
    title: 'Realtor CRM',
    slug: 'realtor-crm',
    featured: true,
    category: 'current',
    order: 2,
    status: 'in-progress',
    repoNames: ['crm_frontend', 'crm_backend'],
    repoLabels: ['Frontend', 'Backend'],
    summary:
      'Full-stack CRM application for managing real estate leads, tasks, and follow-ups using a relational database architecture.',
    tech: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'SQL',
      'Tailwind CSS',
      'Docker',
    ],
    github: 'https://github.com/taxidriver802/crm_frontend',
    overview:
      'Realtor CRM is a full-stack business application designed to help manage client leads, follow-up tasks, and ongoing customer relationships in a structured workflow. The project emphasizes relational database design, dashboard-style interfaces, and real-world business data relationships while demonstrating how backend APIs and SQL queries power a production-style application.',
    architecture: [
      'Next.js frontend provides dashboard pages, lead management interfaces, and task creation flows.',
      'React components handle client-side rendering, filtering, and form management.',
      'Node.js + Express backend exposes REST APIs for leads, tasks, and related workflows.',
      'PostgreSQL stores normalized relational data including users, leads, and tasks.',
      'Docker runs the PostgreSQL container to simplify local development and environment setup.',
      'SQL queries support joins, filtering, and dashboard summaries.',
    ],
    features: [
      'Lead creation and management system',
      'Task management tied to specific leads',
      'Dashboard overview of active tasks and upcoming work',
      'Filtering system for tasks and lead activity',
      'Detailed lead profile pages with associated tasks',
      'Relational database schema connecting leads and tasks',
      'REST API architecture for backend data operations',
    ],
    challenges: [
      {
        title: 'Designing a relational data model',
        problem:
          'CRM systems rely on relationships between entities such as leads, tasks, and users. Without a properly structured schema, querying and managing these relationships becomes difficult.',
        solution:
          'Designed a relational schema in PostgreSQL using foreign keys to connect tasks to specific leads, allowing efficient joins and reliable data integrity.',
      },
      {
        title: 'Connecting frontend workflows to backend persistence',
        problem:
          'Creating leads and tasks requires coordinating form state, API requests, and database updates while keeping the UI synchronized with the latest data.',
        solution:
          'Implemented REST endpoints for lead and task creation and connected them to Next.js forms so new records are immediately reflected in the dashboard and detail pages.',
      },
      {
        title: 'Building a realistic business workflow',
        problem:
          'Many portfolio apps demonstrate simple CRUD operations but do not reflect real business workflows or relational data usage.',
        solution:
          'Structured the project around a real estate CRM workflow where leads generate tasks, allowing the application to demonstrate practical database design and multi-page application architecture.',
      },
    ],

    snapshot: [
      { label: 'Type', value: 'Full-Stack Business Application' },
      { label: 'Architecture', value: 'Next.js • Express • PostgreSQL' },
      {
        label: 'Focus',
        value: 'Relational data modeling, workflows, dashboards',
      },
      { label: 'Status', value: 'Currently in active development' },
    ],

    screenshots: [
      { src: '/images/crm/dashboard.png', alt: 'CRM dashboard overview' },
      { src: '/images/crm/leads.png', alt: 'Lead management page' },
      { src: '/images/crm/tasks.png', alt: 'Lead detail page with tasks' },
    ],
  },

  goaly: {
    key: 'goaly',
    title: 'Goaly',
    slug: 'goaly',
    featured: true,
    category: 'featured',
    order: 3,
    status: 'mobile',
    repoNames: ['mobileGoalsJs', 'mobileBackend'],
    repoLabels: ['Mobile App', 'Backend'],
    summary:
      'Mobile goal and habit tracking app with streak logic, recurring schedules, analytics dashboards, and social features.',
    tech: [
      'React Native',
      'Expo',
      'Expo Router',
      'Node.js',
      'Express',
      'MongoDB',
      'React Native Paper',
      'React Native Chart Kit',
    ],
    github: 'https://github.com/taxidriver802/mobileGoalsJs',
    overview:
      'Goaly is a mobile-first goal and habit tracking application focused on consistency, progress visualization, and engaging user experience. The app includes flexible scheduling for recurring goals, a custom-built streak engine, analytics dashboards, and social features that allow users to compare progress with friends.',
    architecture: [
      'React Native + Expo powers the mobile UI and navigation.',
      'Context providers manage application domains including goals, streaks, users, themes, and UI state.',
      'Express backend exposes REST APIs for authentication, goals, streak tracking, and social relationships.',
      'MongoDB stores user data, goals, completion history, and friend relationships.',
      'Custom helper utilities calculate goal schedules and streak logic.',
    ],
    features: [
      'Daily, weekly, and monthly recurring goals',
      'Custom streak tracking system',
      'Weekly progress tracker',
      '30-day completion analytics chart',
      'Dynamic home dashboard with motivational messaging',
      'Friends system with requests and profile viewing',
      'Searchable user directory with pagination',
      'Custom theme engine with 11+ themes',
      'Animated slide-up sheet UI system',
    ],
    challenges: [
      {
        title: 'Implementing reliable streak tracking',
        problem:
          'Streak systems can easily produce incorrect results if daily completion states are calculated incorrectly or evaluated multiple times per day.',
        solution:
          "Created a streak engine that evaluates 'live' goals per date using helper logic like isLiveForDate(), ensuring streak updates occur only when all daily goals are completed.",
      },
      {
        title: 'Supporting flexible goal scheduling',
        problem:
          'Users may want goals that repeat daily, weekly, or monthly with optional active days, which introduces complex scheduling logic.',
        solution:
          'Built scheduling utilities that dynamically calculate next-due dates and filter goals based on recurrence rules and active days.',
      },
      {
        title: 'Maintaining clean architecture in a complex mobile app',
        problem:
          'As features expanded (goals, streaks, friends, themes, analytics), placing logic directly in screens would have caused maintainability issues.',
        solution:
          'Split the application into modular context providers and reusable components so business logic, UI state, and data fetching remain separated.',
      },
    ],

    snapshot: [
      { label: 'Type', value: 'Mobile Full-Stack Application' },
      { label: 'Architecture', value: 'React Native • Express • MongoDB' },
      { label: 'Focus', value: 'Goal scheduling, streak logic, analytics' },
      { label: 'Platform', value: 'iOS / Android via Expo' },
    ],
    screenshots: [
      { src: '/images/goaly/Goals.PNG', alt: 'Goaly goals screen' },
      { src: '/images/goaly/Home.PNG', alt: 'Goaly home dashboard' },
      { src: '/images/goaly/Profile.PNG', alt: 'Goaly profile and analytics' },
    ],
  },

  newsExplorer: {
    key: 'newsExplorer',
    title: 'News Explorer',
    featured: false,
    hidden: false,
    category: 'other',
    repoNames: ['news-explorer'],
    summary: 'News discovery app...',
    tech: ['React', 'API', 'CSS'],
  },

  randomLearningRepo: {
    key: 'randomLearningRepo',
    hidden: true,
    repoNames: ['some-practice-repo'],
  },
};
