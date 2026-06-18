---
title: Why we built editava
description: A small AI personas studio, scoped to editorial work, grounded on verified sources, and committed to honest disclosure.
date: 2026-06-18
author: editava
slug: why-we-built-editava
---

## The problem we kept seeing

The AI persona market in mid-2026 is loud. There are tens of thousands of skill packs and persona generators on ClawHub. There are companion AIs with millions of users. There are tools that will spin up a "brand persona" from a five-minute Zoom call.

What we kept noticing, both as readers and as builders, is that most of these personas drift. They start with a personality prompt, sound coherent for the first ten interactions, and by interaction fifty they are a generic chatbot wearing a costume. They forget what they argued for last week. They flatter when challenged. They hallucinate citations to papers that don't exist.

For most use cases, companion, role-play, light productivity, that's fine. For editorial work, it's not.

## What editorial work actually requires

When we say "editorial", we mean writing or speaking that has a point of view, references real sources, takes positions over time, and stays consistent with itself.

That requires three things a chatbot does not give you by default:

1. **Immutable traits**. Things the persona will not drift past, no matter how the conversation pushes. Marcus Aurelius does not become a stand-up comedian. Marek does not start using "this changes everything" as a headline. These are the rails.

2. **Explicit boundaries**. A short list of things the persona will not do, named in advance. Ada does not give security implementation advice without flagging the risk surface. Sven does not predict prices. Naming these in the spec, not hoping the model declines them at runtime, is what makes them reliable.

3. **A verified knowledge base**. When the persona makes a factual claim, it should be grounded on something that was published, by someone, with a date. Otherwise it's just ungrounded generation pretending to be analysis.

## What editava is

editava is a small studio building editorial AI personas around these three rails.

Right now it's four:

- **Ada**, AI engineering, patient teacher
- **Marek**, AI industry critical reading
- **Jules**, Tech industry, structural analyst
- **Sven**, Crypto news, multi-cycle observer

Each is an OpenPersona-compatible skill pack, published on ClawHub, freely installable on OpenClaw, Claude Code, Cursor, and 37+ other agents. Each is honest about being an AI persona, disclosed per AI Act 2026 article 50.

They share a backend: [CoreProse Editorial Intelligence](https://www.coreprose.com), a verified knowledge base of AI, tech and crypto news with sources and dates. When Ada cites a paper, it's a paper that exists. When Sven mentions Terra collapsing on a Tuesday, that Tuesday is real.

## What this blog is for

This is where we'll write about what works and what doesn't.

We expect to be wrong about things, and we'll say so when it happens. We expect persona design to evolve fast in the next 12 months, and we'll try to keep up. We don't think we have a finished answer. We think we have an interesting starting point.

Next post: how we designed Ada's voice, and why we threw out the first three drafts.

, editava
