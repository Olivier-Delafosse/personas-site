---
title: editava Year 0 — retrospective + roadmap
description: Six months in. What worked. What didn't. What we're building next.
date: 2026-11-15
author: editava
slug: editava-year-0-retrospective
---

## What we shipped

Six months ago we started editava. The brief was small: four editorial AI personas, each one ground on a verified knowledge base, each one with a stated voice and explicit boundaries. We wanted to see whether the editorial-persona niche could exist as a category, or whether it was just a vibes claim wearing a niche's clothes.

What we shipped:

- **Four persona packs** on OpenPersona: Ada (AI engineering pedagogue), Marek (AI hype dismantler), Jules (tech industry pattern reader), Sven (crypto cycles).
- **Distribution split** between two publishers: `editava` (branded, Ada + Jules) and `ed-pulse` (independent-flavor, Marek + Sven). The split was a deliberate A/B test of branding vs. anonymity.
- **A shared backend** — the `editorial-feed` skill, which queries a verified KB of AI / tech / crypto news with sources and dates, served by [CoreProse Editorial Intelligence](https://www.coreprose.com).
- **An open evaluation proposal** — Editorial Authority Rating, complementary to OpenPersona's persona-evaluator (cf. our [October post](/blog/editorial-authority-rating-proposal)).
- **This blog** — bi-monthly, six posts in six months, which is the pace we said we'd hold and the pace we held.

## What worked

**Posture over style.** The biggest insight from the first six months — the one that we'd put first if we were starting over — is that immutable traits framed as **postures toward the topic** survive long-form interaction better than immutable traits framed as **stylistic choices**. Sven was the most boring persona to design and ended up with the highest editorial fidelity, because his rails are all about how he treats the subject, not how he speaks.

**Boundaries as the load-bearing element.** The personas that get reviewed positively are the ones that refuse cleanly. Users notice when an AI declines to give medical advice without losing its voice. They notice less when an AI gives a slightly better answer than the model average.

**Branded vs. anonymous: inconclusive.** The A/B test between `editava` and `ed-pulse` did not produce a clear signal. Both got modest install counts. Reviews were similar. We can't honestly tell which approach worked better, partly because the install counts are low enough that the noise drowns out the signal.

## What didn't work

**Position coherence at scale.** We knew at the 100-interaction test (cf. [August post](/blog/editorial-fidelity-100-generations)) that the personas were drifting in their positions over time. We proposed building a **position ledger** as a fix. We did build a prototype. It works for short conversations and fails on longer ones because the ledger gets too large to inject as context. We'll write a separate post about this when we know more.

**Distribution.** ClawHub install counts for editorial personas grew slowly. Some of that is fine — editorial-AI is a smaller niche than companion-AI or skill-AI by an order of magnitude. Some of it is because we did not invest enough in writing for the OpenClaw Discord community. The blog and the persona packs have to do their own marketing in 2026; presence in the developer communities matters as much as the artifacts themselves.

**Monetization signal.** Six months in, the revenue from ClawHub 90/10 splits is in the low hundreds of dollars per month. That is a real signal — small but not zero. It tells us the niche exists. It does not tell us the niche scales.

## What we're building next year

Three things, in order:

**1. Position ledger v2.** The structural answer to position drift. A compact, persona-scoped memory of positions stated, with formulation and topic. The persona reads its own ledger before responding to a related topic. The hard part is making it small enough to stay in context.

**2. Editorial Authority Rating, computed and published.** We proposed EAR in October. We'll publish actual scores for our four personas, recomputed weekly, on the site. If we can't do well on our own metric, the metric needs to change or the personas need to. Either is fine — what we won't do is propose a metric we can't pass.

**3. A fifth persona — covering a non-Western perspective.** All four of our current personas are written from a broadly Anglo-Western frame. That's a real limitation for tech and crypto especially, where major actors are non-Western. We're not going to fake it with a persona that "represents" a region. We are going to build one whose **immutable traits** include explicit non-Western framing, name what that means, and admit what it doesn't include. Probably an East Asia tech persona. Probably mid-2027.

## What we're not doing

We are not building a fifth, sixth, twentieth persona to grow the catalog. The market does not need more weakly-designed editorial personas. It needs a small number of well-designed ones.

We are not pivoting to companion AI. We are not building a "chat with Ada in your browser" feature on the editava site — at least not until ClawHub traction tells us the demand is there. If demand stays small, the chat-on-site move would be wasted product effort.

We are not opening source of the CoreProse Editorial Intelligence backend. The backend is the differentiator. Open-sourcing it would commoditize it without adding distribution that we can't already get through OpenPersona.

## Closing note

If you've made it this far: thank you. Six months is a small amount of time, and the niche we're trying to define may not exist. We'll write again in another six months, and we'll know more.

If you're building editorial personas — or want to — we'd be glad to compare notes. The shared category is more interesting than the individual brands.

— editava
