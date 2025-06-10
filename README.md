My Personal Portfolio - Carlos Fernández

Welcome to my personal portfolio! This is a space where I showcase my projects, skills, and professional experience. It has been designed to be visually appealing, responsive, and easy to navigate.
🚀 Technologies Used

This project has been built using the following key technologies:

    React.js: A JavaScript library for building interactive user interfaces.

    Vite: A next-generation frontend development environment that offers an extremely fast development experience.

    Framer Motion: A React animation library that provides smooth transitions and attractive visual effects.

    CSS3: For custom styling, animations, and responsive design.

    HTML5: The fundamental structure of the page.

    Git & GitHub: For version control and code hosting.

    GitHub Pages: For deploying the portfolio online.

    Formspree: For managing form submissions easily.

    Gotham Font: Custom typography for a modern and professional aesthetic.

✨ Features

    Responsive Design: Adapted to different screen sizes (desktop, tablet, mobile).

    Smooth Navigation: Seamless scrolling between sections and a fixed navigation bar.

    Clear Sections: Home, About Me, Projects, and Contact for an intuitive user experience.

    Interactive Animations: Scroll and hover effects that enhance the visual experience.

    Functional Contact Form: Integrated with Formspree to facilitate communication.

    GitHub Integration: Direct links to project repositories.

    Custom Favicon: A distinctive icon in the browser tab.

    Loading Page (Preloader): Improves the perceived initial loading of the page.

📁 Project Structure

The project follows a standard React application structure, organized for clarity and scalability:

my-portfolio/
├── public/                 # Static assets (favicons, background image)
├── src/                    # All React source code
│   ├── assets/             # Images, PDFs, and fonts imported by components
│   │   ├── images/         # Profile photo, Navbar logo, project images
│   │   └── pdfs/           # CV PDF
│   ├── components/         # Reusable React components (Navbar, Footer, LoadingPage, ProjectCard, etc.)
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MainContentScroller.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/              # Main page components (Home, About, Projects, Contact)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.css             # Main stylesheet for global styles and component-specific styles
│   ├── App.jsx             # Main application component, sets up routing
│   ├── index.css           # Basic CSS reset and global styles
│   └── main.jsx            # Entry point for the React application
├── .eslint.config.js           # ESLint configuration
├── .gitignore              # Files/folders to be ignored by Git
├── package.json            # Project dependencies and scripts
├── package-lock.json
├──index.html
├── vite.config.js          # Vite build tool configuration
└── README.md               # This README file

📦 Local Setup and Execution

To run this project on your local machine, follow these steps:

    Clone the repository:

    git clone https://github.com/cfdiaz7/my-portfolio.git
    cd my-portfolio

    Install dependencies:

    npm install

    Start the development server:

    npm run dev

    This will open the portfolio in your browser at http://localhost:5173 (or a similar port).

🌐 Deployment on GitHub Pages

This portfolio is configured to deploy automatically on GitHub Pages.

    Ensure that the homepage property in package.json is correctly configured with your GitHub Pages URL:

    "homepage": "https://cfdiaz7.github.io/my-portfolio",

    Ensure that the base property in vite.config.js is correctly configured:

    base: '/my-portfolio/',

    To deploy, run:

    npm run deploy

    This command will build your application and publish it to the gh-pages branch of your repository.

✉️ Contact

Feel free to contact me!

    Email: carlos.fdiaz.97@gmail.com