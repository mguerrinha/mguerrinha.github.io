# Miguel Guerrinha · personal website

Single-page personal site built with React, Vite and Tailwind CSS. English and Portuguese, light and dark themes.

## Run it

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
```

## Edit the content

Everything written on the site (both languages), plus the project list, skills and links, lives in
[`src/data/content.js`](src/data/content.js). Components in `src/components/` only handle layout.

- **Add a project:** append an entry to `projects` with `en` and `pt` text. Remove `grade` to hide it on a card.
- **Change the photo:** replace `public/me.jpg` (a square image of about 960×960 works best).
- **Colours and fonts:** theme tokens are at the top of [`src/index.css`](src/index.css).

## Structure

```
index.html              entry page (sets the theme before first paint)
src/
  main.jsx              app bootstrap, fonts
  App.jsx               page composition
  index.css             Tailwind + theme tokens + animations
  data/content.js       all text and data (EN + PT)
  context/              theme and language providers
  components/           Navbar, Hero, About, Journey, Projects, Beyond, Contact, Footer
```

## Deploy

`npm run build` outputs a static site in `dist/` that works on any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages). Asset paths are relative, so it
also works from a sub-path such as `https://mguerrinha.github.io/my-website/`.
