# Linus Wallin — Portfolio

A personal web site to showcase my skills, projects, education, and publications.

Built with React + Vite, deployed on Firebase Hosting.

## Development

```
npm install
npm run dev
```

## Build & preview

```
npm run build
npm run preview
```

## Deploy (Firebase Hosting)

```
firebase login
firebase init hosting   # public dir: dist, single-page app: yes
npm run build
firebase deploy --only hosting
```

## Content

All page content (profile, skills, projects, education, publications) lives in
`src/data/content.js`. Fields set to `null` are placeholders still to be filled in:

- LinkedIn / GitHub profile URLs
- Per-project links (website/GitHub/GitLab)
- Project screenshots — drop images into `src/assets/projects/` and set each
  project's `image` field in `content.js`
- Master's thesis link
- Firebase project ID in `.firebaserc`
