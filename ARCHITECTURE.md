# Joyfulness — current architecture

## Experience

- A single Hebrew RTL questionnaire starts immediately, with no introduction screen.
- Eleven multiple-choice questions map age range, relationship status, contexts, consent, desire, boundaries, cost and a desired next edge.
- After question four, a short Joyfulness reflection explains that boundaries are contextual and that the goal is not simply to say more “no”.
- Visitors may skip, go back, or stop early. A partial answer set can still produce a report.
- The final report is rendered by a fixed server-owned template and can be printed or saved as PDF.

## Report generation

- `POST /api/report` validates and limits the submitted answer set.
- The current safe local generator creates a personalized report without sending questionnaire data to a third party.
- A model-backed generator can be enabled after explicit approval to transmit questionnaire answers to the selected model provider.
- Report language prohibits diagnosis, invented trauma or childhood narratives, stereotyping and fabricated difficulty. It frames protective patterns as adaptations rather than defects.

## Data and launch decisions

- Answers are processed in memory and are not written to a database by this site.
- Before public launch, connect the real contact or booking destination and add final privacy and legal copy.
- If model generation is enabled, keep the API key in a protected server environment variable; never place it in client code or source control.
