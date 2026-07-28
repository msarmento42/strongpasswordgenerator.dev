# SPG URL Decision Manifest

> Proposed classifications only. Production mutation requires a separate approved issue.

Generated deterministically by `npm run audit:urls` from the sitemap and article inventory.

## Summary

- Total URLs: **90** (12 static and 78 articles)
- Keep: **12**
- Rewrite: **30**
- Consolidate: **28**
- Remove: **20**

## Consolidation clusters

### business password managers

Destination: /blog/best-password-manager-for-business-2026

Sources: /blog/password-manager-for-business

### authenticators and 2FA

Destination: /blog/two-factor-authentication-guide

Sources: /blog/google-authenticator-vs-authy, /blog/mfa-fatigue-attack-explained, /blog/microsoft-authenticator-guide, /blog/sim-swapping-protection, /blog/yubikey-setup-guide

### breach and identity response

Destination: /blog/data-breach-what-to-do

Sources: /blog/dark-web-monitoring-explained, /blog/data-broker-opt-out-guide, /blog/how-to-check-if-youve-been-hacked, /blog/how-to-freeze-your-credit, /blog/how-to-recover-from-identity-theft, /blog/identity-theft-protection-guide, /blog/identity-theft-statistics-2026

### VPN and public Wi-Fi

Destination: /blog/public-wifi-security-tips

Sources: /blog/how-to-use-a-vpn-for-privacy, /blog/vpn-for-remote-work, /blog/wifi-password-best-practices

### account-specific security

Destination: multiple retained account guides

Sources: /blog/email-security-best-practices-2026, /blog/microsoft-account-security-guide, /blog/securing-facebook-account, /blog/securing-google-account, /blog/securing-linkedin-account, /blog/securing-venmo-cashapp-paypal

### network and browser security

Destination: /blog/browser-security-settings

Sources: /blog/securing-home-network

## 30/60/90-day stop-loss

| Checkpoint | Search threshold | Affiliate threshold |
|---|---|---|
| Day 30 | At least 50 organic impressions across retained editorial URLs. | At least 3 tracked outbound affiliate clicks. |
| Day 60 | At least 150 organic impressions and 2 organic clicks across retained editorial URLs. | At least 10 tracked outbound affiliate clicks. |
| Day 90 | At least 300 organic impressions and 5 organic clicks across retained editorial URLs. | At least 20 tracked outbound affiliate clicks or 1 attributed conversion. |

If a checkpoint misses both thresholds, stop publishing, diagnose indexing and intent fit, and consolidate or exit the underperforming cluster before investing further.

## URL inventory

| URL | Kind | Title | Date | Category | Words | Internal | Sources | Affiliate | Sitemap | Flags | Decision | Destination |
|---|---|---|---|---|---:|---:|---:|---:|---|---|---|---|
| / | utility | Strong Password Generator | — | — | — | — | — | — | yes | none | keep | — |
| /about | trust | About | — | — | — | — | — | — | yes | none | keep | — |
| /blog | hub | Blog | — | — | — | — | — | — | yes | none | keep | — |
| /blog/ai-voice-cloning-scams | article | AI Voice Cloning Scams: How to Protect Yourself and Your Family | 2026-07-17 | Best Practices | 1363 | 6 | 0 | 3 | yes | missing-description; no-credible-external-sources; off-topic-reviewed-removal | remove | — |
| /blog/android-password-tips | article | Android Password Security Tips: How to Lock Down Your Phone and Accounts | 2026-05-17 | Best Practices | 1522 | 3 | 3 | 3 | yes | missing-description | consolidate-to | /blog/how-to-create-strong-password |
| /blog/antivirus-software-guide | article | Antivirus Software Guide 2026: Do You Need It, Which to Choose, and How to Configure It | 2026-06-16 | Best Practices | 1413 | 3 | 5 | 6 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/best-antivirus-software-2026 | article | Best Antivirus Software of 2026: How to Choose the Right Protection | 2026-05-24 | Best Practices | 1473 | 2 | 5 | 2 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/best-identity-theft-protection-2026 | article | Best Identity Theft Protection Services (2026): Compared and Reviewed | 2026-06-12 | Best Practices | 1232 | 5 | 0 | 4 | yes | missing-description; no-credible-external-sources | remove | — |
| /blog/best-password-manager-for-business-2026 | article | Best Password Manager for Small Business and Teams (2026) | 2026-06-12 | Password Managers | 1296 | 6 | 3 | 3 | yes | missing-description | rewrite | — |
| /blog/best-password-manager-for-families-2026 | article | Best Password Manager for Families in 2026: Shared Vaults, Emergency Access, and Kid-Safe Setup | 2026-07-03 | Password Managers | 1220 | 6 | 4 | 5 | yes | missing-description | rewrite | — |
| /blog/best-password-manager-iphone-ios-2026 | article | Best Password Manager for iPhone and iOS (2026): Top 5 Compared | 2026-06-16 | Password Managers | 1217 | 5 | 3 | 3 | yes | missing-description | rewrite | — |
| /blog/bitwarden-setup-guide | article | Bitwarden Setup Guide: How to Get Started with the Best Free Password Manager | 2026-04-15 | Password Managers | 1616 | 2 | 2 | 2 | yes | none | rewrite | — |
| /blog/bitwarden-vs-1password-2026 | article | Bitwarden vs 1Password (2026): Which Password Manager Should You Use? | 2026-06-10 | Password Managers | 1310 | 5 | 6 | 2 | yes | missing-description | rewrite | — |
| /blog/browser-security-settings | article | Browser Security Settings: The Complete Hardening Guide for Chrome, Firefox, and Safari | 2026-05-21 | Best Practices | 1297 | 5 | 1 | 2 | yes | missing-description | rewrite | — |
| /blog/credential-stuffing-explained | article | Credential Stuffing Explained: What It Is and How to Stop It | 2026-06-23 | Password Security | 1534 | 6 | 1 | 4 | yes | missing-description | rewrite | — |
| /blog/dark-web-monitoring-explained | article | Dark Web Monitoring Explained: What It Is, How It Works, and Do You Need It? | 2026-05-27 | Best Practices | 1362 | 3 | 0 | 5 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/data-breach-what-to-do |
| /blog/data-breach-what-to-do | article | Data Breach: What to Do Immediately if Your Information Is Exposed | 2026-05-17 | Data Breaches | 1765 | 3 | 4 | 6 | yes | none | rewrite | — |
| /blog/data-broker-opt-out-guide | article | How to Remove Your Personal Information From Data Broker Sites | 2026-07-16 | Data Breaches | 1447 | 4 | 0 | 3 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/data-breach-what-to-do |
| /blog/email-security-best-practices-2026 | article | Email Security Best Practices 2026: Protect Your Inbox from Hackers and Phishing | 2026-06-20 | Best Practices | 1677 | 5 | 2 | 4 | yes | missing-description | consolidate-to | /blog/securing-your-email-account |
| /blog/encrypted-messaging-apps-guide | article | Encrypted Messaging Apps Compared: Signal vs. WhatsApp vs. iMessage vs. Telegram | 2026-07-02 | Best Practices | 1023 | 4 | 0 | 2 | yes | missing-description; no-credible-external-sources; off-topic-reviewed-removal | remove | — |
| /blog/free-vs-paid-password-managers-2026 | article | Free vs Paid Password Managers in 2026: What You Actually Get for Your Money | 2026-06-19 | Password Managers | 1364 | 5 | 3 | 4 | yes | missing-description | rewrite | — |
| /blog/github-security-best-practices | article | GitHub Security Best Practices: Protect Your Code and Account | 2026-04-28 | Best Practices | 1869 | 6 | 2 | 3 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/google-authenticator-vs-authy | article | Google Authenticator vs. Authy: Which 2FA App Should You Use in 2026? | 2026-06-21 | 2FA | 1473 | 5 | 3 | 3 | yes | missing-description | consolidate-to | /blog/two-factor-authentication-guide |
| /blog/google-password-manager-review | article | Google Password Manager Review 2026: Is It Good Enough for Your Security? | 2026-04-28 | Password Managers | 1660 | 6 | 4 | 7 | yes | missing-description | rewrite | — |
| /blog/how-to-check-if-youve-been-hacked | article | How to Check If You've Been Hacked: Warning Signs and What to Do Next | 2026-06-17 | Best Practices | 1653 | 10 | 0 | 4 | yes | no-credible-external-sources | consolidate-to | /blog/data-breach-what-to-do |
| /blog/how-to-create-strong-password | article | How to Create a Strong Password: The Complete Guide for 2026 | 2026-06-18 | Password Security | 1421 | 7 | 2 | 2 | yes | none | rewrite | — |
| /blog/how-to-freeze-your-credit | article | How to Freeze Your Credit: The Complete Step-by-Step Guide | 2026-05-28 | Best Practices | 2079 | 5 | 0 | 4 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/data-breach-what-to-do |
| /blog/how-to-recover-from-identity-theft | article | How to Recover from Identity Theft: A Complete Step-by-Step Action Plan | 2026-06-22 | Data Breaches | 1877 | 8 | 4 | 4 | yes | missing-description | consolidate-to | /blog/data-breach-what-to-do |
| /blog/how-to-share-passwords-safely | article | How to Share Passwords Safely (Without Texting or Emailing Them) | 2026-07-16 | Password Managers | 1380 | 10 | 1 | 2 | yes | missing-description | rewrite | — |
| /blog/how-to-spot-fake-websites | article | How to Spot Fake Websites: A Practical Guide to Avoiding Phishing and Scam Sites | 2026-05-25 | Best Practices | 1462 | 2 | 2 | 2 | yes | missing-description | rewrite | — |
| /blog/how-to-use-a-vpn-for-privacy | article | How to Use a VPN for Privacy: A Practical Guide (2026) | 2026-06-12 | Best Practices | 1833 | 8 | 0 | 7 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/public-wifi-security-tips |
| /blog/identity-theft-protection-guide | article | Identity Theft Protection Guide: How to Secure Your Personal Data in 2026 | 2026-05-23 | Best Practices | 1473 | 4 | 4 | 2 | yes | none | consolidate-to | /blog/data-breach-what-to-do |
| /blog/identity-theft-statistics-2026 | article | Identity Theft Statistics 2026: What the Data Actually Shows | 2026-06-02 | Data Breaches | 1891 | 6 | 2 | 5 | yes | missing-description | consolidate-to | /blog/data-breach-what-to-do |
| /blog/iphone-password-security | article | Complete iPhone Password Security Guide: Protecting Your Apple ID & Accounts | 2026-04-30 | Best Practices | 2018 | 3 | 3 | 4 | yes | missing-description | consolidate-to | /blog/securing-apple-id |
| /blog/lastpass-alternatives | article | The Best LastPass Alternatives in 2026: Safer, Cheaper, Better Options | 2026-05-05 | Password Managers | 1247 | 6 | 2 | 2 | yes | missing-description | rewrite | — |
| /blog/mfa-fatigue-attack-explained | article | MFA Fatigue Attacks: How Push Notification Abuse Bypasses Two-Factor Authentication | 2026-06-23 | 2FA | 1505 | 7 | 0 | 6 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/two-factor-authentication-guide |
| /blog/microsoft-account-security-guide | article | How to Secure Your Microsoft Account: Passwords, 2FA, and Recovery Options | 2026-06-19 | Best Practices | 1534 | 6 | 2 | 5 | yes | missing-description | consolidate-to | /blog/securing-your-email-account |
| /blog/microsoft-authenticator-guide | article | Microsoft Authenticator Guide: Set Up Strong 2FA on Every Account | 2026-05-12 | 2FA | 1924 | 4 | 2 | 2 | yes | missing-description | consolidate-to | /blog/two-factor-authentication-guide |
| /blog/nordpass-review-2026 | article | NordPass Review 2026: Is This Password Manager Worth It? | 2026-06-29 | Password Managers | 1461 | 10 | 1 | 3 | yes | none | rewrite | — |
| /blog/nordpass-vs-dashlane-2026 | article | NordPass vs Dashlane (2026): Which Password Manager Is Better? | 2026-06-11 | Password Managers | 1458 | 8 | 1 | 7 | yes | none | rewrite | — |
| /blog/nordprotect-review-2026 | article | NordProtect Review 2026: Is This Identity Protection Service Worth It? | 2026-06-11 | Data Breaches | 1758 | 4 | 0 | 11 | yes | missing-description; no-credible-external-sources | remove | — |
| /blog/nordvpn-review-2026 | article | NordVPN Review 2026: Is It Still the Best VPN for Privacy and Security? | 2026-06-14 | Password Security | 1245 | 6 | 1 | 4 | yes | missing-description | remove | — |
| /blog/nordvpn-vs-expressvpn | article | NordVPN vs ExpressVPN (2026): Which VPN Is Worth Your Money? | 2026-06-15 | Best Practices | 1537 | 4 | 1 | 7 | yes | missing-description | remove | — |
| /blog/passkeys-explained | article | Passkeys Explained: The Future of Passwordless Login and How to Use Them | 2026-05-17 | Best Practices | 2024 | 6 | 5 | 4 | yes | missing-description | rewrite | — |
| /blog/passkeys-vs-passwords-2026 | article | Are Passkeys Replacing Passwords in 2026? The Complete Guide | 2026-06-14 | Security Trends | 1804 | 6 | 5 | 6 | yes | missing-description | rewrite | — |
| /blog/password-hygiene-for-families | article | Password Hygiene for Families: How to Keep Every Household Account Secure | 2026-05-08 | Best Practices | 2438 | 6 | 4 | 2 | yes | missing-description | rewrite | — |
| /blog/password-manager-for-business | article | Password Manager for Business: How to Secure Your Team's Credentials in 2026 | 2026-06-17 | Password Managers | 1483 | 4 | 2 | 2 | yes | missing-description | consolidate-to | /blog/best-password-manager-for-business-2026 |
| /blog/password-manager-for-college-students | article | Best Password Manager Setup for College Students (Free Options Included) | 2026-07-17 | Password Managers | 1306 | 8 | 0 | 3 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/free-vs-paid-password-managers-2026 |
| /blog/password-manager-vs-browser-autofill | article | Password Manager vs. Browser Autofill: Which Is Actually More Secure? | 2026-06-18 | Password Managers | 1338 | 4 | 3 | 5 | yes | missing-description | rewrite | — |
| /blog/password-managers | hub | Blog/Password Managers | — | — | — | — | — | — | yes | none | keep | — |
| /blog/password-reuse-risks | article | The Dangers of Password Reuse: Why Using the Same Password Everywhere Is a Security Disaster | 2026-06-22 | Password Security | 1869 | 8 | 3 | 5 | yes | missing-description | rewrite | — |
| /blog/password-security | hub | Blog/Password Security | — | — | — | — | — | — | yes | none | keep | — |
| /blog/password-security-audit-checklist | article | Password Security Audit Checklist: 20 Steps to Harden Every Account You Own | 2026-05-12 | Best Practices | 1582 | 6 | 3 | 2 | yes | missing-description | consolidate-to | /blog/how-to-create-strong-password |
| /blog/password-security-for-remote-workers | article | Password Security for Remote Workers: How to Stay Safe Outside the Office | 2026-04-16 | Best Practices | 2064 | 2 | 2 | 4 | yes | missing-description | rewrite | — |
| /blog/password-security-for-seniors | article | Password Security for Seniors: A Simple, Step-by-Step Guide | 2026-05-05 | Best Practices | 2472 | 6 | 0 | 6 | yes | missing-description; no-credible-external-sources | rewrite | — |
| /blog/phishing | hub | Blog/Phishing | — | — | — | — | — | — | yes | none | keep | — |
| /blog/protecting-kids-online | article | Protecting Kids Online: A Parent's Complete Guide to Account Security | 2026-05-25 | Best Practices | 1620 | 4 | 4 | 2 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/public-wifi-security-tips | article | Public Wi-Fi Security: How to Stay Safe on Unsecured Networks | 2026-06-29 | Best Practices | 1520 | 6 | 0 | 5 | yes | missing-description; no-credible-external-sources | rewrite | — |
| /blog/qr-code-scam-quishing-guide | article | QR Code Scams ("Quishing"): How They Work and How to Spot One | 2026-07-19 | Best Practices | 1003 | 3 | 0 | 2 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/what-is-phishing-and-how-to-avoid-it |
| /blog/securing-apple-id | article | How to Secure Your Apple ID: The Complete Protection Guide | 2026-05-18 | Best Practices | 1857 | 4 | 2 | 3 | yes | missing-description | rewrite | — |
| /blog/securing-cloud-storage | article | How to Secure Your Cloud Storage: Google Drive, iCloud, Dropbox, and OneDrive | 2026-06-15 | Best Practices | 1295 | 5 | 4 | 6 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/securing-crypto-wallets | article | How to Secure Your Crypto Wallet: Passwords, Seed Phrases, and Account Protection | 2026-05-17 | Best Practices | 1827 | 7 | 2 | 3 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/securing-facebook-account | article | How to Secure Your Facebook Account: The Complete 2026 Guide | 2026-06-21 | Best Practices | 1534 | 5 | 1 | 8 | yes | missing-description | consolidate-to | /blog/securing-social-media-accounts |
| /blog/securing-google-account | article | How to Secure Your Google Account: A Complete Checklist | 2026-07-19 | Best Practices | 1008 | 6 | 0 | 2 | yes | missing-description; no-credible-external-sources | consolidate-to | /blog/securing-your-email-account |
| /blog/securing-home-network | article | How to Secure Your Home Network: A Step-by-Step Guide to Router and Wi-Fi Security | 2026-05-17 | Best Practices | 1568 | 3 | 2 | 6 | yes | missing-description | consolidate-to | /blog/browser-security-settings |
| /blog/securing-linkedin-account | article | How to Secure Your LinkedIn Account: Passwords, 2FA, and Privacy Settings | 2026-05-23 | Best Practices | 1665 | 6 | 3 | 6 | yes | missing-description | consolidate-to | /blog/securing-social-media-accounts |
| /blog/securing-online-banking | article | Secure Online Banking: How to Protect Your Bank Account from Hacking | 2026-04-30 | Best Practices | 1500 | 9 | 2 | 6 | yes | missing-description | rewrite | — |
| /blog/securing-remote-desktop-rdp | article | How to Secure Remote Desktop Access: RDP, VPNs, and Remote Work Security in 2026 | 2026-06-20 | Best Practices | 1734 | 6 | 3 | 5 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/securing-smart-home-devices | article | How to Secure Your Smart Home Devices in 2026 | 2026-06-11 | Best Practices | 1333 | 4 | 1 | 4 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/securing-social-media-accounts | article | How to Secure Your Social Media Accounts: A Practical Guide | 2026-04-16 | Best Practices | 1963 | 3 | 2 | 4 | yes | missing-description | rewrite | — |
| /blog/securing-venmo-cashapp-paypal | article | How to Secure Your Venmo, Cash App, and PayPal Accounts | 2026-07-02 | Best Practices | 1258 | 8 | 1 | 2 | yes | missing-description | consolidate-to | /blog/securing-online-banking |
| /blog/securing-your-amazon-account | article | How to Secure Your Amazon Account: A Complete Security Guide | 2026-05-22 | Best Practices | 1691 | 9 | 2 | 2 | yes | missing-description | remove | — |
| /blog/securing-your-email-account | article | How to Secure Your Email Account: The Complete Guide | 2026-04-15 | Best Practices | 1752 | 3 | 4 | 2 | yes | missing-description | rewrite | — |
| /blog/sim-swapping-protection | article | SIM Swapping Protection: How to Stop Attackers From Hijacking Your Phone Number | 2026-05-22 | Best Practices | 1691 | 6 | 2 | 7 | yes | missing-description | consolidate-to | /blog/two-factor-authentication-guide |
| /blog/two-factor-authentication-guide | article | Two-Factor Authentication Guide: How to Enable 2FA on Every Important Account | 2026-05-17 | 2FA | 1339 | 7 | 3 | 5 | yes | missing-description | rewrite | — |
| /blog/vpn-for-remote-work | article | VPN for Remote Work: How to Stay Secure Working Outside the Office | 2026-05-18 | Best Practices | 1921 | 6 | 2 | 8 | yes | missing-description | consolidate-to | /blog/public-wifi-security-tips |
| /blog/vpn-vs-password-manager | article | VPN vs Password Manager: Do You Need Both? | 2026-06-11 | Best Practices | 1180 | 6 | 3 | 8 | yes | missing-description | remove | — |
| /blog/vpn-worth-it-2026 | article | Is a VPN Worth It in 2026? An Honest Look at What VPNs Do and Don't Protect | 2026-06-11 | Best Practices | 1839 | 6 | 0 | 7 | yes | missing-description; no-credible-external-sources | remove | — |
| /blog/what-is-nordprotect | article | What Is NordProtect? Identity Theft Protection Explained | 2026-06-14 | Password Security | 1252 | 6 | 0 | 7 | yes | missing-description; no-credible-external-sources | remove | — |
| /blog/what-is-phishing-and-how-to-avoid-it | article | What Is Phishing and How to Avoid It: A Practical Guide | 2026-04-21 | Best Practices | 2177 | 6 | 3 | 5 | yes | missing-description | rewrite | — |
| /blog/wifi-password-best-practices | article | Wi-Fi Password Best Practices: How to Secure Your Home and Office Network | 2026-04-21 | Best Practices | 1885 | 1 | 3 | 4 | yes | missing-description; few-internal-links | consolidate-to | /blog/public-wifi-security-tips |
| /blog/wordpress-security-passwords | article | WordPress Security: How to Lock Down Passwords, Logins, and Admin Access | 2026-06-16 | Best Practices | 1561 | 4 | 2 | 3 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /blog/yubikey-setup-guide | article | YubiKey Setup Guide: How to Use a Hardware Security Key for Maximum Protection | 2026-05-08 | 2FA | 1752 | 2 | 2 | 2 | yes | missing-description | consolidate-to | /blog/two-factor-authentication-guide |
| /blog/zero-trust-security-basics | article | Zero Trust Security Explained: A Practical Guide for Individuals and Small Businesses | 2026-05-24 | Best Practices | 1749 | 8 | 3 | 6 | yes | missing-description; off-topic-reviewed-removal | remove | — |
| /contact | trust | Contact | — | — | — | — | — | — | yes | none | keep | — |
| /editorial-policy | trust | Editorial Policy | — | — | — | — | — | — | yes | none | keep | — |
| /password-safety-checklist | hub | Password Safety Checklist | — | — | — | — | — | — | yes | none | keep | — |
| /privacy | trust | Privacy | — | — | — | — | — | — | yes | none | keep | — |
| /recommended-tools | hub | Recommended Tools | — | — | — | — | — | — | yes | none | keep | — |
| /terms | trust | Terms | — | — | — | — | — | — | yes | none | keep | — |
