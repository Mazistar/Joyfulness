# Joyfulness — production architecture

## Prototype today

- Static, mobile-first RTL experience.
- Three short journeys: visibility and gratitude, boundaries and desire, and a pleasure map.
- Five guided questions per journey, one at a time, with two reflection pauses.
- A persistent respectful-stop action that leads to a celebration screen and a partial report.
- Deterministic reflection logic that returns an existing strength, an emerging need, the visitor's own words, and a gentle invitation.
- In-memory session state only; no personal data leaves the device and refresh clears the answers.
- Printable/PDF reports are available for full and partial journeys.
- AI reflection, durable storage, and booking are not connected. The booking button is a visual placeholder.

## Recommended production stack

1. **Frontend:** Next.js or an equivalent React framework, with the current design system and question flow kept as reusable components.
2. **Application API:** server-side endpoints for creating an optional questionnaire session, accepting answers, generating the reflection, and recording consent only when data is retained or sent.
3. **AI reflection:** call the OpenAI Responses API from the server only. Use structured JSON output with fixed fields for three patterns, need, desire, first practice, and safety note. Never expose an API key in the browser.
4. **Data:** encrypted managed Postgres or Supabase. Store contact details separately from answers, record the exact consent text/version and timestamp, and define deletion and retention rules.
5. **Booking:** link or embed Calendly, Cal.com, Google Calendar appointment schedules, or a clinic-management booking provider. Pass only the minimum required details.
6. **Email:** a transactional provider such as Brevo or Resend for the reflection copy and booking follow-up, only after explicit consent.
7. **Safety:** prompt and output guardrails, non-diagnostic language, crisis-response routing, rate limits, abuse protection, audit logs, and human review for flagged content.

## AI contract

The model should return validated structured data, not free-form HTML. A server template renders the result. The prompt should require tentative language ("ייתכן", "אולי"), prohibit diagnosis and treatment claims, avoid prescriptive advice, and base every observation only on the visitor's supplied answers.

## Decisions needed before launch

- Final clinic/business name, logo, practitioner copy, contact details, privacy policy, and legal terms.
- Preferred booking system and destination URL.
- Whether the full answer set is retained, anonymized, or deleted after the reflection.
- Who may access leads and how long they are retained.
- Hosting region and applicable privacy/compliance review.
