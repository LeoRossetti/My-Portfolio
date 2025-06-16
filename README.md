# My Portfolio

A modern, responsive portfolio website built with **Next.js**, **React**, and **TypeScript**. This site showcases my skills, projects, and professional links with a clean, tech-inspired design.

## Features

- **About Me Section:** Profile photo, professional summary, and social links (GitHub, LinkedIn).
- **Project Showcase:** Responsive grid of project cards with images, descriptions, and links.
- **Modern UI:** Custom CSS for a sleek, professional look—no CSS frameworks required.
- **Responsive Design:** Looks great on desktop and mobile devices.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd My-Portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `pages/` — Next.js pages (main entry is `index.tsx`)
- `components/` — Reusable React components (AboutMe, ProjectsList, ProjectCard)
- `public/images/` — Profile and project images, as well as social icons
- `styles/globals.css` — Main global CSS for layout and design

## Customization

- **Profile & Socials:**
  - Update your info and links in `components/AboutMe.tsx`.
  - Replace `/public/images/me.jpg`, `github.png`, and `linkedin.png` with your own images/icons.
- **Projects:**
  - Add or edit projects in `components/ProjectsList.tsx`.
  - Add preview images to `/public/images/` and update the `image` path in each project object.
- **Styling:**
  - Tweak colors, fonts, and layout in `styles/globals.css`.

## Deployment

You can deploy this site for free using [Vercel](https://vercel.com/) (recommended for Next.js) or any platform that supports Node.js.

