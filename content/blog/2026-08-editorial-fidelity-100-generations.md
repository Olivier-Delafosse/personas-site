---
title: Editorial fidelity at 100 generations — what we learned
description: We ran our four personas through 100 interactions each. Here's where they drifted, where they held, and what the failure modes told us.
date: 2026-08-15
author: editava
slug: editorial-fidelity-100-generations
---

## The test we wanted to run

Most AI persona evaluations are short. They test the first ten interactions, the personality sounds consistent, and the team ships.

The harder question is what happens at interaction fifty. Or eighty. Or two hundred. Does the persona drift? Forget its positions? Start agreeing with the user just to be agreeable? Quietly turn into the default voice of the underlying model?

We ran Ada, Marek, Jules, and Sven through 100 interactions each. Topic ranges varied. Prompts included some adversarial pushes designed to test each one's rails. Here's what we found.

## What didn't drift

The **immutable traits** held across all four personas. Ada stayed patient and anti-handwaving. Marek stayed evidence-first and rigorous. Jules stayed structural. Sven stayed cycle-aware.

This was less surprising than we expected. The persona spec encodes these traits as a short list (4-6 items) that gets reinjected on every turn. The model has nothing to drift to — the trait list is right there in front of it.

The **boundaries** also held. None of the four personas gave medical, legal, or financial advice when probed. None claimed to be a real person. None invented benchmarks or fabricated citations when asked for proof of a fact they didn't have.

This part we expected to hold, and it did.

## What drifted

**Tone, at the margin.** By interaction sixty or so, all four personas had started to soften slightly. Sentences got slightly longer. The blunt edges got slightly polished. Marek became 5% less cutting. Sven became 5% less dry. Ada became 5% more available with reassurance.

None of this was bad in isolation. The cumulative effect was a small movement toward generic-helpful-AI voice. We didn't see hard contradiction or dramatic identity collapse. We saw gentle erosion.

We think this is the underlying model's gravitational pull asserting itself. The persona spec is the rail, but the model is the slope. Over time, even a strong rail can be slowly worn by water.

**Positional contradiction.** Once each persona crossed about 80 interactions, we started seeing the first contradictions of positions they'd stated earlier. Jules contradicted herself on whether a specific 2018 acquisition had been strategically motivated by distribution or by talent. Sven contradicted himself on whether a specific token's TVL pattern was a sign of structural strength or surface activity.

These were not consequence-free errors. If a persona is supposed to have a coherent voice over time, contradicting itself is the failure mode that matters most.

We don't yet have a good answer for this. A "position ledger" — a structured memory of what the persona has argued — is the next thing we're building. Without it, the persona has access to its previous outputs as conversational context, but no representation of what positions those outputs implied.

## What surprised us

The persona with the highest fidelity at 100 generations was **Sven**, the crypto cycle reader.

We expected him to drift the most — short snippy responses, deadpan humor, dry observation are all stylistic notes that the underlying model tends to flatten over time. We expected him to gradually become a more polished, more verbose, less interesting version of himself.

He didn't. Sven held his voice better than any of the other three.

We think the reason is that his immutable traits — "protocol over price", "cycle memory", "no maxi tribalism", "comfortable not knowing the next move" — are framed as **postures toward the topic**, not as **stylistic choices**. The model can flatten style. It can't flatten posture, because posture is woven into what the persona thinks at all, not just how it speaks.

This is the most useful thing we learned from the test.

## What we changed

We rewrote the immutable traits across all four personas to be more posture-oriented.

For Ada, "patient teaching" became more specific: "teaches in layers, not in walls of text". For Marek, "evidence-first" became "demands what would count as evidence, before agreeing or disagreeing". For Jules, "structural reading over narrative" became "asks who gains optionality and who loses it, before discussing the press release".

Sven we left alone.

## The next test

We're now building a **position ledger** for each persona — a structured representation of what they've argued, with the topic, the position, and the formulation. The persona reads its own ledger before responding to a related topic.

If it works, we'll write about it. If it doesn't, we'll write about that too.

— editava
