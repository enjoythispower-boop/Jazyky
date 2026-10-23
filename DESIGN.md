---
name: Jazyky
description: A personal Spanish and Russian study room with an editorial look – big serif type and full language-colour surfaces on a quiet neutral ground.
colors:
  ground: "#f2f2f5"
  surface: "#ffffff"
  surface-raised: "#f8f8fa"
  fill: "rgb(118 118 128 / .12)"
  fill-strong: "rgb(118 118 128 / .2)"
  ink: "#1c1c1e"
  ink-secondary: "#3a3a3c"
  muted: "#6c6c72"
  faint: "#aeaeb2"
  hairline: "#e5e5ea"
  hairline-strong: "#d1d1d6"
  spanish-ember: "#c13a0e"
  spanish-ember-deep: "#a3300b"
  spanish-ember-soft: "#fbe9e0"
  russian-cobalt: "#0b5bc9"
  russian-cobalt-deep: "#0a47a0"
  russian-cobalt-soft: "#e4edfb"
  graphite-accent: "#2c2c2e"
  on-accent: "#ffffff"
  correct: "#177a35"
  correct-soft: "#e3f3e6"
  wrong: "#c3202b"
  wrong-soft: "#fce9ea"
  almost: "#8f5300"
  almost-soft: "#fdf0d9"
typography:
  display:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  hero:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "clamp(3rem, 13vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  kicker:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 650
    letterSpacing: "0.07em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.011em"
  target:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 450
  reading:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "1.3125rem"
    fontWeight: 450
    lineHeight: 1.72
rounded:
  key: "6px"
  sm: "12px"
  control: "15px"
  md: "18px"
  lg: "24px"
  xl: "30px"
  pill: "99px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
---

# Design System: Jazyky

## Overview

**Creative North Star: "The Daily Edition"**

Jazyky opens like the front page of a well-made magazine about today's lesson. The home screen, „Dnes“, is two large panels, one per language, each a solid field of that language's colour with the language name set huge in Source Serif 4 and the day's real content inside: the new words, the verbs, the first sentence of today's text. The page never decorates itself with illustrations. Character comes from type, colour and the content itself.

Around those panels the app stays quiet and native: a neutral grey ground, white borderless cards, hairline dividers, system sans for the Czech interface. Serif is used for two things only: display headlines and every word in the target language.

The user rejected two looks earlier and both rejections still stand. One is cream paper with a terracotta accent, the generic "AI editorial" look. That is why the ground stays neutral grey and never warm paper. The other is the loud, rewarding palette of gamified learning apps. Serif display headlines were approved in October 2026 as part of the editorial direction.

**Key characteristics:**
- Full-bleed language panels: Spanish ember-deep, Russian cobalt-deep, white text and a single oversized letter (ñ / Ж) as a 7 % white watermark.
- Serif for display and target language, sans for interface. Kickers are small uppercase sans in the accent colour.
- Each exercise type has its own form derived from what it does (see Components).
- Light and dark modes are both first-class.

## Colors

- **Language accents** (`--accent`, `--accent-deep`, `--accent-soft`): `data-lang` on `<html>` switches them. *Ember* `#c13a0e` / deep `#a3300b` for Spanish, *Cobalt* `#0b5bc9` / deep `#0a47a0` for Russian. The deep variants carry white text: panels, block intro, plan card, primary buttons in dark mode and "my" chat bubbles. In dark mode the plain accent lifts (`#ff7b4d`, `#64a2ff`) for text and icons, and the deep stays dark enough for white text.
- **Neutral ground**: `#f2f2f5` light, `#0e0e0f` dark. Surfaces are white or `#1a1a1c`.
- **Semantic**: correct / wrong / almost, used only for answer feedback.

**The One Accent Rule.** Inside a language every accent comes from `--accent*`. Both languages' colours appear together only on the Dnes screen.

**The Feedback-Only Semantics Rule.** Green, red and amber mean correct, wrong and almost. They never celebrate.

## Typography

- **Hero** (serif 600, up to 4.5rem): "Dnes", the language names in panels and on the language screen, and the block numeral.
- **Display** (serif 600, 2–2.5rem): section titles, the flow step name, reading titles and dialog titles.
- **Kicker** (sans 650, 0.78rem, uppercase, 0.07em, accent colour): block labels, plan card, reading header and translation direction.
- **Body** (sans 17px) for all Czech UI.
- **Target** (serif 450) for every Spanish or Russian string (`.tl`), with an italic variant for the quote line on panels and the target-language word on mode tiles.
- **Reading** (serif 1.3125rem / 1.72, 34em measure, accent drop cap on the first paragraph).

**The Two Voices Rule.** A target-language string always carries `.tl`. Czech UI text never uses the serif except in display roles.

## Layout

- A single 720px column with 16px gutters. The Dnes screen widens to 1120px (`.main.wide`, `html.page-wide` aligns the bar) and puts the two panels side by side from 880px up.
- Language screen: hero name in the accent colour, the plan card (deep accent, three progress segments) and a grid of mode tiles. It has 2 columns on a phone and 3 on desktop. The first two modes follow the language's focus (Spanish: translation and dialogs; Russian: grammar and conjugation), sit on accent-soft and have a solid accent icon tile. The first one spans 2 columns on desktop.
- Lists of topics, texts, grammar sets, dialogs and verbs are grouped by level under a serif level heading. The current level is marked „tvoje úroveň“.

## Components

- **Dnes panel**: the hero native name, „Španělština · úroveň B1“, then three block rows. Each row has a 34px numeral circle (filled white when it is the current block, a check when done), an uppercase block name, a serif preview of real content and a meta line. Below them sits a white 56px "Začít / Pokračovat · blok N" button and an „Všechna cvičení“ link. When the day is done the button turns translucent („Na dnešek hotovo“). It also holds the level-up offer when the level's new words run out.
- **Block intro**: a full-width deep-accent card with a giant translucent block numeral, a kicker „Blok 2 ze 3 · Ruština“, the serif block title, the list of the block's steps with counts and a white button (Enter starts the block).
- **Flow header**: kicker block label, a „Přeskočit krok“ link, the serif step name and segment bars for the block's steps.
- **Exercise forms**:
  - *Card*: a 320px flip card. The front has an accent hairline at the top; the back is accent-soft.
  - *Conjugation grid*: one table per tense. The person is in italic serif, inputs sit inline, rows tint green, amber or red after checking and the correct form appears beside a wrong one.
  - *Grammar gap*: the sentence in large serif with the input sitting in the gap as an underline.
  - *Listening*: a 132px play button with a ripple when speaking.
  - *Reading*: article layout with kicker, serif title, drop cap, tap-to-gloss bar and a collapsible glossary.
  - *Dialog*: chat bubbles. The partner is on a white surface with an accent name label, "me" is on the deep accent. Replies are option cards or a write field with the Czech meaning shown; tapping a bubble reveals its translation.
  - *Sentence building*: an outlined tray with a placeholder and serif tiles. Chosen tiles are accent-soft.
  - *Translation*: a left-aligned prompt with a direction kicker.
- **Answer feedback**: semantic soft tints, settle and shake animations, a word-level diff.
- **Settings sheet**: an iOS grouped list with level selects per language, the sync group (token field, then status, „Synchronizovat teď“ and „Odpojit“), pronunciation, conjugation and backup.

## Motion

Navigation uses View Transitions: push forward, slide back, cross-fade between languages. Steps inside the daily flow also push forward (`swap()`). Easing is `cubic-bezier(.32, .72, 0, 1)` throughout. `prefers-reduced-motion` turns all motion off.

## Do's and Don'ts

- **Do** show real content (words, verbs, a sentence) instead of decoration when a screen feels empty.
- **Do** give each exercise its own form; never fall back to the same generic card for everything.
- **Do** route colour through `--accent*` and set target-language text in `.tl`.
- **Don't** use warm cream paper or a terracotta-on-cream palette.
- **Don't** add streaks, XP, badges, time statistics or celebratory confetti. „Hotovo“ is the strongest word allowed.
- **Don't** put borders on cards. Hairlines and tone do the separating.
