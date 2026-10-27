# Connect your GoDaddy domain to the wedding site

Your code lives on GitHub: [Pranesh101/wedding_card](https://github.com/Pranesh101/wedding_card).

Hosting is on **Vercel** (free HTTPS, works like [naveen-dharshini.vercel.app](https://naveen-dharshini.vercel.app/)).

---

## Step 1 — Deploy on Vercel (one time)

1. Open [vercel.com/new](https://vercel.com/new) and sign in with **GitHub**.
2. Import **`Pranesh101/wedding_card`**.
3. Leave defaults (Framework: **Vite**, Build: `npm run build`, Output: `dist`).
4. Click **Deploy**. Wait until you see “Congratulations” and a `*.vercel.app` URL.

Test that URL on your phone before changing DNS.

---

## Step 2 — Add your domain in Vercel

1. Open your project on Vercel → **Settings** → **Domains**.
2. Add:
   - `www.praneshs.in`
   - `praneshs.in`
3. Vercel will show **Invalid configuration** until DNS is set — that is normal.

---

## Step 3 — DNS in GoDaddy

1. Go to [GoDaddy Domain Portfolio](https://dcc.godaddy.com/domains) → your domain → **DNS** (or **Manage DNS**).
2. **Remove or edit** old records that conflict:
   - Delete **A** record on `@` pointing to GoDaddy parking if present.
   - Delete **CNAME** on `www` pointing to `parked` / GoDaddy if present.

3. **Add these records** (replace `yourdomain.com` mentally — in GoDaddy you only type the **host**, not the full domain):

| Type  | Name | Value                 | TTL  |
|-------|------|------------------------|------|
| **A** | `@`  | `76.76.21.21`          | 600  |
| **CNAME** | `www` | `cname.vercel-dns.com` | 600  |

4. Save. Propagation can take **5 minutes to 48 hours** (often under 30 minutes).

5. Back in Vercel → **Domains**, wait until both show **Valid**.

---

## Step 4 — Choose what guests open

In Vercel **Domains**, set one as **primary** (recommended: `www.yourdomain.com`). Vercel will redirect the other to it.

Share the primary URL on your invitation.

---

## Troubleshooting (GoDaddy)

- **Still shows GoDaddy parking page:** `@` A record must be `76.76.21.21`, not GoDaddy’s IP.
- **www works, root does not:** check the **A** record on `@`.
- **SSL pending:** wait 10–30 minutes after DNS turns green in Vercel.
- **Two www records:** only one CNAME for `www` → `cname.vercel-dns.com`.

---

## Updates after guests have the link

Push to GitHub `main` — Vercel redeploys automatically:

```bash
git add .
git commit -m "Update invitation"
git push
```
