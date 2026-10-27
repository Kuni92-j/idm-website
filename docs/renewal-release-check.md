# IDM homepage release candidate — 2026-10-27

Status: Owner clarified attribution and hypothetical cases on 2026-10-27; awaiting final deployment verification.

## Scope
- Approved DESIGN REVIEW 06 HTML preserved as public/idm-home.html.
- Next.js beforeFiles rewrite serves the new home at / without an iframe. Existing /contact, /privacy, /company and service routes remain available; their design has not been renewed in this change.
- Canonical and Open Graph metadata added. Review banner/footer removed. Contact link is same-site; privacy link added.
- Contact page still opens a mailto draft, not a server-delivered message. Removed false delivery confirmation, explained sending step, and provided return to input.
- No new email provider or storage of personal submissions.

## Validation
- npm ci completed; npm run build completed (Next 14.2.35). No dependency changes.
- Chrome static preview of exact new homepage: 375/390/430 iframe widths show no horizontal overflow. Cashflow title spans and representative message spans stay single-line as intended.
- 20 / 50 people: expense-only balance 2,000,000 / 5,000,000 yen.
- 10 people, 4,000,000 yen borrowing, 180 days, hypothetical 15% APR/365 simple interest: interest 295,890; repayment 4,295,890; balance including interest 1,295,890; with separate wage aid 1,175,890 yen.
- Invalid zero people shows validation message. Mobile menu opens and closes after FAQ navigation.
- Native iPhone Safari not available; browser viewport checks are not a Safari-device test.
- Next preview was unavailable because managed daemon passes Vite --host/--strictPort options to next dev. Used the supported static preview for HTML only. Contact route and root rewrite still require deployed-preview integration verification.
- Motion toggle click hit a browser input timeout; no new claim of complete animation verification.

## Owner clarification and public wording
- Owner confirmed counters include partner results; explicitly attributed at the counter and FAQ. Independently audited counts/denominators are not claimed.
- Owner confirmed case amounts are hypothetical estimates, not realized outcomes. Changed section to 支援プラン例 and each outcome to 参考試算（実績ではありません）. Removed statements of actual full award and achieved outcomes.
- Finance remains a hypothetical comparison; no new contractual offer is made. 12-hour curriculum and monthly 1.25% converted to 15% APR/365 are labeled assumptions. Wage aid remains separate. Actual lender terms and program eligibility must be verified for each proposal.
- Existing-page home links use full document navigation to the static home. Legacy #service bookmark remains supported, new links use #services.

## Deployment and rollback
Production main unchanged at 273ec63923812584e8f1fe8ca04167a0ce9abe89.
Backup branch: backup/pre-renewal-20261027.
After resolving blockers, replace remaining draft caveats with verified public wording, verify production-domain mapping and preview routes, then merge and verify Vercel deployment and idminc.jp.
If rollback required, revert the release commit; avoid force-pushing main.
