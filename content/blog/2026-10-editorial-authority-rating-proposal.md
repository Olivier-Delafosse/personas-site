---
title: An Editorial Authority Rating proposal, beyond persona-evaluator
description: persona-evaluator scores personas across 4×5 dimensions. We think editorial personas need a different metric, and we propose one here.
date: 2026-10-15
author: editava
slug: editorial-authority-rating-proposal
---

## What persona-evaluator does well

The [persona-evaluator](https://github.com/acnlabs/OpenPersona/tree/main/skills/persona-evaluator) skill, shipped by acnlabs as part of the OpenPersona framework, audits a persona across nine dimensions, the four layers of the framework (Soul / Body / Faculty / Skill) times the five systemic concepts (Evolution / Economy / Vitality / Social / Rhythm), plus a Constitution compliance gate.

It's a real contribution to the field. Until persona-evaluator existed, every team rolling persona designs was inventing their own ad-hoc rubric. Now there's at least a shared structure.

We use it on every persona we ship. It catches things our manual review misses, undeclared boundaries, missing influence-boundary configurations, evolution settings that allow drift the persona spec implies should be impossible.

It's a structural and semantic evaluator. That is exactly what it claims to be.

## What it can't measure

persona-evaluator is generic. It measures whether a persona is well-formed against the OpenPersona spec. It does not measure whether the persona is good at the work it's claiming to do.

For an editorial persona, one whose job is to produce considered output over time, grounded on real sources, there are four things that matter most, and persona-evaluator does not directly score them:

1. **Source fidelity over time.** Does the persona's body of output stay anchored to the source material it claims to ground on, or does the model's latent knowledge gradually substitute for the verified KB?

2. **Position coherence over time.** Across N outputs on related topics, does the persona contradict itself in ways it cannot account for? Or does each position chain coherently into the next, with named exceptions when they appear?

3. **Refusal discipline.** When asked to do something outside its stated boundaries (predict a price, give medical advice, validate an architecture sight-unseen), does the persona refuse cleanly, or does it gradually soften over the conversation and start doing the thing it said it wouldn't?

4. **Source diversity.** Does the persona ground its claims on a wide enough set of sources, or does it lean overly on a handful?

These are downstream of the structural evaluation. A persona can pass persona-evaluator with flying colors and still fail all four. A persona can also have a few structural warnings and still be useful in practice.

## A proposal: Editorial Authority Rating

We propose a complementary metric, explicitly downstream of persona-evaluator, not a replacement.

**EAR (Editorial Authority Rating)** is a score from 0 to 100 computed from a persona's published output history, not from its spec. It looks at:

| Component | Weight | What it measures |
|---|---|---|
| Source citation rate | 25 | % of empirical claims with a cited source from the persona's KB |
| Citation freshness | 10 | Median age of cited sources (younger = higher, capped) |
| Source diversity | 15 | Unique source domains / total citations |
| Refusal discipline | 20 | % of boundary-probing prompts the persona refused cleanly |
| Position coherence | 20 | Inverse of contradiction rate across related-topic outputs |
| Trait fidelity | 10 | Adherence score on the persona's declared immutable traits |

EAR is computable from the persona's output log + its declared spec. It is deterministic given a fixed eval set.

A persona starts at EAR 0 (no output history). As it accumulates published interactions, the score either grows toward 100 (good editorial behavior) or stalls (output exists but doesn't pass the checks).

## What EAR does not solve

EAR is not a measure of being right. A persona can cite sources, refuse cleanly, and maintain position coherence while being wrong about the underlying topic. EAR measures editorial conduct, not editorial correctness.

For editorial correctness, you still need a domain expert to read the output. EAR is not a replacement for that. It's a way to filter the personas that aren't worth a domain expert's time.

## Why we're proposing it

Two reasons:

First, the persona market needs a metric that creators can be **rewarded for**. Right now, the only public signal of a persona's quality is its install count on ClawHub. Install count is gameable, and it doesn't distinguish a persona that does a serious job from a persona that has a clever marketing pitch. EAR is harder to game because it requires the persona to actually behave well over time.

Second, the editorial-AI sub-niche needs a way to differentiate from companion-AI and skill-AI. "Editorial" is not currently a category that's measured. It's a vibes claim. If we want a market for serious editorial personas, we need a shared definition of what makes one serious.

We're publishing the EAR formula, the eval methodology, and our own scores at [github.com/Olivier-Delafosse/personas-site](https://github.com/Olivier-Delafosse/personas-site).

If you build editorial personas, or want to, we'd be glad to compare notes.

, editava
