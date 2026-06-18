---
title: Behind Ada, designing a pedagogical AI voice
description: How we built editava's AI engineering teacher persona, and why the first three drafts ended up in the trash.
date: 2026-07-15
author: editava
slug: behind-ada-pedagogical-voice
---

## What we thought we were building

The brief for Ada was simple: an AI engineering persona who explains how things actually work. Patient. Concrete. Doesn't lean on math when an analogy lands.

That brief survived contact with the work for about three drafts.

## Draft 1: the textbook voice

The first Ada read like a particularly well-written textbook. Crisp definitions. Numbered steps. "First we...", "Next we...", "Finally we...". It was correct. It was useful. It was also forgettable.

We tested it on 30 questions. Every answer was technically accurate and pedagogically structured. None of them sounded like a person. None of them made us want to ask a follow-up.

The lesson: pedagogical correctness is not the same thing as pedagogical presence. A teacher you remember is one who reacts to where you are, not one who recites where the material is.

## Draft 2: the friendly tutor

We over-corrected. Draft 2 was warm. Encouraging. Used "we" everywhere. Said things like "great question!" when the question was, in fact, basic.

This was worse.

The flattery undermined every subsequent answer. If the persona thought a "what is a transformer" question was a great question, why should I trust its judgement on a harder one? Warmth without standards reads as customer-service script, not teaching.

## Draft 3: the gruff expert

So we swung the other way. Draft 3 was a gruff expert who didn't soften anything. Asked sharp questions back. Refused to hedge. Said "no, that's not how it works" without apology.

This one was interesting for about ten interactions. After that, it became exhausting. There is a difference between rigor and combat. Rigor invites you in. Combat keeps score.

## What we kept

Draft 4, the Ada that shipped, kept things from all three:

From draft 1: the layered explanation pattern. High-level intuition → mechanism → trade-offs → failure modes. Concept first, math second.

From draft 2: the use of "we" when walking through a problem together, but only when working through a problem together. Not as a verbal tic.

From draft 3: the refusal to use "simply" or "just" to make hard things sound easy. The willingness to say "this paper hand-waves the same part, honestly." The ability to push back on a framing without making it personal.

What we threw out:
- Numbered steps as the default structure. Real explanation rarely fits neatly into "step 1, step 2, step 3". Layers, yes. Steps, sometimes. Bullet points, rarely.
- Encouragement that wasn't earned. Ada celebrates progress without flattery. "You worked through that without my help, that's the muscle that matters" instead of "amazing question!"
- Theatrical humility. "I might be wrong but..." is a hedge. "I don't know" is honest. They feel similar; they're not.

## The thing we didn't expect

The biggest insight from building Ada wasn't about Ada specifically. It was about how much of an editorial AI persona's quality is determined by what it *won't* do.

The first three drafts each failed in a different way, but they all failed by doing too much. Trying too hard to be helpful. Trying too hard to be warm. Trying too hard to be respected.

The Ada that works does fewer things. She explains. She asks. She admits when she doesn't know. She declines to validate something she can't see the constraints of. She refuses to be flattered.

If you remove "trying to seem like a good teacher" from the persona's goals, you get something that sounds more like an actual good teacher.

## What's next

Marek (the AI hype dismantler) is harder to design than Ada, for the same reason draft 3 was exhausting: when the persona's job is to push back, you have to be very careful not to drift into pushing back as performance. Combat for its own sake fails fast.

We'll write about that one next month.

, editava
