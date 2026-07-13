# AdSense Readiness Checklist

Use this checklist before requesting or re-requesting AdSense review for strongpasswordgenerator.dev.

## Required Site Checks

- `https://strongpasswordgenerator.dev/ads.txt` returns HTTP 200.
- `ads.txt` contains `google.com, pub-6175161566333696, DIRECT, f08c47fec0942fa0`.
- `https://strongpasswordgenerator.dev/sitemap.xml` returns HTTP 200.
- The sitemap includes `/password-safety-checklist`.
- The homepage links to `/password-safety-checklist`.
- Core trust pages are present: `/about`, `/contact`, `/privacy`, `/editorial-policy`.
- Optional next trust-page improvement: add `/terms` and include it in this checklist after it is merged.
- A production build passes with `npm run build`.
- The post-deploy smoke check passes with `npm run check:adsense`.

## AdSense Console Flow

1. In AdSense, open **Sites**.
2. Click `strongpasswordgenerator.dev`.
3. If `Ads.txt status` is `Not found`, click **Check for updates**.
4. Do not request review until `Ads.txt status` is `Authorized`.
5. After `Authorized`, confirm the sitemap and checklist page are live, then request review.

## Vercel Deployment Notes

- Vercel project: `strongpasswordgenerator`.
- Production domain: `strongpasswordgenerator.dev`.
- Manual production deploy fallback:

```bash
npx vercel@latest --prod --yes --token "$VERCEL_TOKEN" --name strongpasswordgenerator
```

If a Vercel deploy reports `UNKNOWN`, run `npm run build` and `npm run check:adsense` against the production domain before retrying. Keep Vercel tokens and pulled environment files out of git.
