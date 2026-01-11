# 🎩 Magic-Oid - COMPLETE & READY

**Identify magic tricks + Roast magicians + Dealer signups**

Built by Chris P Tee

---

## ✅ WHAT'S INSIDE

- Main Magic-Oid page (identify + roast modes)
- Dealer signup (3 tiers with Stripe)
- Success page
- All APIs working (Gemini + Stripe)
- All configs ready

---

## 🚀 DEPLOY TO VERCEL (5 MINS)

### 1. Get Gemini API Key (1 min)
https://makersuite.google.com/app/apikey

### 2. Setup Stripe (3 mins)
Go to https://dashboard.stripe.com/test/products

Create 3 products:
- Tier 1: £97/year (copy Price ID)
- Tier 2: £174/year (copy Price ID)
- Regular: £295/year (copy Price ID)

Get Secret Key: https://dashboard.stripe.com/test/apikeys

### 3. Push to GitHub (1 min)
```bash
git init
git add .
git commit -m "Magic-Oid complete"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/magic-oid.git
git push -u origin main
```

### 4. Deploy on Vercel
1. Go to vercel.com/new
2. Import your GitHub repo
3. Add Environment Variables:
```
GEMINI_API_KEY=your-key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_TIER1_PRICE_ID=price_...
STRIPE_TIER2_PRICE_ID=price_...
STRIPE_REGULAR_PRICE_ID=price_...
NEXT_PUBLIC_BASE_URL=https://magic-oid.co.uk
```
4. Click Deploy

**DONE!**

---

## 📁 FILE STRUCTURE

```
app/
  page.tsx                          # Main Magic-Oid
  dealers/page.tsx                  # Dealer signup
  dealers/success/page.tsx          # Success page
  api/analyze/route.ts              # Identify API
  api/roast/route.ts                # Roast API
  api/dealers/checkout/route.ts     # Stripe checkout
  layout.tsx                        # Root layout
  globals.css                       # Styles
package.json                        # Dependencies
tsconfig.json                       # TypeScript
tailwind.config.js                  # Tailwind
next.config.js                      # Next.js
.env.example                        # Env template
.gitignore                          # Git ignore
```

---

## 🧪 TEST IT

1. Go to your-site.vercel.app
2. Try identify mode with magic trick photo
3. Try roast mode with magician photo
4. Go to /dealers
5. Click a tier
6. Fill form
7. Use test card: 4242 4242 4242 4242

---

## 💰 GO LIVE

Switch Stripe to LIVE mode:
1. Create LIVE products
2. Get LIVE secret key (sk_live_...)
3. Update Vercel env vars
4. Redeploy

---

YOU'RE DONE. NO MORE FUCKING ABOUT. 🎩
"# magic-oid" 
