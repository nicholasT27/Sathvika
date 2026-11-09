# Sathvika – creative agency website

A bright, playful one-page website for the Sathvika creative agency, built from the client's brief.
Frontend only for now (no backend). Built with Next.js (App Router), React, Tailwind CSS and JavaScript.

## Sections
Founder photos (hero) · Founder intro · Our ideology · Remote (door) · Creative Criminals (marketing-tool mugshots) ·
Creative Licence · Our very official, unofficial rules · Services (postage stamps) · Contact (postcard)

## Run it
```bash
npm install
npm run dev      # open http://localhost:3000
npm run build    # production build
npm run lint     # code checks
```

## Adding the real content
- **Founder photo:** replace `public/founder/founder.svg` with the real photo (or change `FOUNDER_PHOTO` at the top of `src/app/page.js`). The current picture is a fake stand-in.
  Until then, the frames show a placeholder.
- **Wording:** all text is draft copy written to match the brief. Edit it in `src/components/*.jsx`.
- **Colours:** change them at the top of `src/app/globals.css` (pink is kept to tiny accents on purpose).
- **Mascot:** the old pen mascot is no longer used on the site (`src/components/Mascot.jsx` is kept only by the alternative designs under `/designs`).
- **Contact form:** only plays the "postcard sent" animation. Nothing is sent until a backend is added.

## Photos
The photos in `public/images/` are free-to-use stock images from Unsplash, used as stand-ins:
`founder.jpg` (replace with the real founder photo), `team.jpg`, `analytics.jpg`.
