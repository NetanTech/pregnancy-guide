# What They Don't Tell You About Pregnancy
### A Nigerian Woman's Guide — Next.js + Paystack

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# → Open .env.local and paste your Paystack public key

# 3. Run locally
npm run dev
# → Visit http://localhost:3000
```

---

## 💳 Paystack Setup

1. Create a free account at [paystack.com](https://paystack.com)
2. Go to **Settings → API Keys & Webhooks**
3. Copy your **Public Key** (starts with `pk_test_` for test, `pk_live_` for production)
4. Paste it into `.env.local` as `NEXT_PUBLIC_PAYSTACK_KEY`

### Test Cards (for development)
| Card Number | Expiry | CVV |
|---|---|---|
| 4084 0840 8408 4081 | Any future date | Any 3 digits |
| 5060 6666 6666 6666 664 | Any future date | Any 3 digits |

---

## 📦 After Payment — Delivering the Ebook

Currently, the buyer is redirected to `/thank-you` after payment. You have a few options:

### Option A — Manual (simplest to start)
Keep the redirect as-is. Set up a Paystack webhook to email the buyer.
In your Paystack dashboard: **Settings → Webhooks → Add URL**

### Option B — Selar (recommended for Nigerian creators)
Upload your PDF to [selar.co](https://selar.co) — they handle delivery automatically.
Then replace the Paystack button with your Selar checkout link.

### Option C — Custom delivery
Create an API route (`app/api/verify/route.js`) that:
1. Receives the payment reference
2. Calls `https://api.paystack.co/transaction/verify/:reference`
3. On success → sends the buyer an email with the download link

---

## 🏗️ Project Structure

```
pregnancy-guide/
├── app/
│   ├── layout.js          # Root layout + fonts + metadata
│   ├── globals.css        # All styles + CSS variables
│   ├── page.js            # Main landing page
│   └── thank-you/
│       └── page.js        # Post-payment success page
├── components/
│   └── PaystackButton.js  # Payment component (reusable)
├── .env.local.example     # Environment variable template
└── next.config.js
```

---

## 🌐 Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
# Follow prompts — add NEXT_PUBLIC_PAYSTACK_KEY as an env variable
```

Or push to GitHub and import at [vercel.com/new](https://vercel.com/new).

---

## ✏️ Customisation

| What to change | Where |
|---|---|
| Price (currently ₦7,500) | `components/PaystackButton.js` → `AMOUNT_KOBO` |
| Original slashed price | `app/page.js` → search `15,000` |
| Download redirect URL | `components/PaystackButton.js` → `DOWNLOAD_URL` |
| Site metadata | `app/layout.js` → `metadata` export |
| Colors / fonts | `app/globals.css` → `:root` variables |
