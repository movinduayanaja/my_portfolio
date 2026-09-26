# Movindu Ayanaja — Portfolio

A Next.js + Tailwind CSS portfolio with an About, Skills, Projects, and Contact page. No backend required — the contact form uses Formspree's free tier.

## 1. Install and run locally

You need [Node.js](https://nodejs.org) (v18+) installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

## 2. Add your real profile photo

Replace `public/profile.jpg` with your own photo (same filename, any square-ish image works best).

## 3. Set up the contact form (free, no backend)

1. Go to https://formspree.io and create a free account (50 submissions/month free).
2. Create a new form. Formspree will give you an endpoint like `https://formspree.io/f/xxxxabcd`.
3. Open `components/ContactForm.tsx` and replace this line near the top:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
   ```
   with your real endpoint.
4. That's it — messages submitted on `/contact` will land in your email inbox.

## 4. Edit your content

- `data/projects.ts` — replace the sample projects with your real ones.
- `data/skills.ts` — adjust skill categories/items.
- `app/page.tsx` — edit the hero and about text.
- `components/Footer.tsx` — update your social links if they change.

## 5. Deploy for free

1. Push this project to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub.
3. Click **Add New → Project**, import your repo, click **Deploy**.
4. Vercel gives you a free live URL (e.g. `your-portfolio.vercel.app`), and redeploys automatically every time you push to GitHub.

No paid plan is required at any step.
