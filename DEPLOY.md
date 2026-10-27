# Deploy to your custom domain

This app is a static Vite build (`dist/`). **Vercel** is the easiest option (same style as [naveen-dharshini.vercel.app](https://naveen-dharshini.vercel.app/)).

## Option A — Vercel + GitHub (recommended)

### 1. Put the project on GitHub

```powershell
cd "c:\Users\PraneshSenthil\OneDrive - Just Udo Aviation Pvt. Ltd\Documents\wedding card"
git init
git add .
git commit -m "Wedding reception invitation site"
```

Create a new empty repo on GitHub, then:

```powershell
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. **Import** your repository.
3. Vercel should detect **Vite** automatically:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You will get a URL like `your-project.vercel.app`.

### 3. Connect your domain

1. In the Vercel project → **Settings** → **Domains**.
2. Add your domain, e.g. `www.yourdomain.com` and/or `yourdomain.com`.
3. Vercel shows the DNS records to add at your registrar (GoDaddy, Namecheap, Cloudflare, etc.).

**Typical records (Vercel will show the exact values):**

| Host | Type | Value |
|------|------|--------|
| `www` | CNAME | `cname.vercel-dns.com` |
| `@` (apex) | A | `76.76.21.21` |

If you use **Cloudflare**, proxy (orange cloud) is fine; SSL may take a few minutes.

4. Wait for DNS to propagate (often 5–30 minutes, sometimes up to 24h).
5. Vercel issues **HTTPS** automatically.

---

## Option B — Deploy from your PC (no GitHub)

```powershell
cd "c:\Users\PraneshSenthil\OneDrive - Just Udo Aviation Pvt. Ltd\Documents\wedding card"
npx vercel login
npx vercel --prod
```

Then add your domain under **Project → Settings → Domains** as in step 3 above.

---

## After deploy

- Share `https://www.yourdomain.com` (or your apex URL) with guests.
- To update the site: push to GitHub (Option A) or run `npx vercel --prod` again (Option B).

## Assets

Ensure these exist before deploy:

- `public/images/hero-bg.jpg`
- `public/images/couple-anime.jpg`

Optional: `public/images/couple-cartoon.jpg` for the closing avatar.
