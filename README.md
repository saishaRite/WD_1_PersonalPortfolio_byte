# Saisha Rite — Personal Portfolio

A responsive personal portfolio built with HTML, CSS, and vanilla JavaScript. The home section uses a clean white-and-purple split layout inspired by the provided reference; the rest of the portfolio retains About, Skills, Projects, Education, Resume, and Contact sections.

## Run locally

1. Open this folder in VS Code.
2. Open `index.html` with Live Server, or serve the folder with any static HTTP server.
3. Keep the folder structure intact so `style.css`, `script.js`, and `assets/` load correctly.

## Personalize before publishing

- **Portrait:** Replace `assets/profile-placeholder.svg` with your photo, or update the image path in `index.html` to point to a photo file. Use a clear, professional portrait with the subject centered.
- **Social profiles and email:** Search `index.html` for `YOUR-GITHUB-USERNAME`, `YOUR-LINKEDIN-PROFILE`, and `YOUR_EMAIL@example.com`, then replace each placeholder with your own profile/contact details. These are placeholders, not working profile links.
- **Resume:** Add your PDF at `assets/Resume.pdf`; the download button expects that path.
- **Contact form:** The template retains the source Formspree form ID. Before deployment, confirm it belongs to you or replace it with your own Formspree form ID. Submit a test message from the deployed site.
- **Project links:** Replace placeholder GitHub URLs with actual repository URLs. Keep BorrowHub labelled as in development unless it is complete.
- **Accuracy:** Update project descriptions, skills, and education details to reflect your actual experience.

## Deploy to Vercel

This is a static site; no build step is required. Import the repository in Vercel, choose the `Other` framework preset, and leave the build command empty. Ensure `index.html`, `style.css`, `script.js`, and `assets/` are in the deployed root.
