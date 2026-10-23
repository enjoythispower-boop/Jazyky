---
name: Jazyky
description: A personal Spanish and Russian study room built like a quiet native iOS tool.
colors:
  grouped-bg: "#f2f2f7"
  surface: "#ffffff"
  surface-raised: "#f7f7fa"
  fill: "rgb(118 118 128 / .12)"
  fill-strong: "rgb(118 118 128 / .2)"
  ink: "#1c1c1e"
  ink-secondary: "#3a3a3c"
  muted: "#6c6c72"
  faint: "#aeaeb2"
  hairline: "#e3e3e8"
  hairline-strong: "#d1d1d6"
  spanish-ember: "#c93d0f"
  spanish-ember-soft: "#fcebe4"
  russian-cobalt: "#0b5fd3"
  russian-cobalt-soft: "#e6eefc"
  graphite-accent: "#3a3a3c"
  graphite-accent-soft: "#ececf0"
  on-accent: "#ffffff"
  correct: "#177a35"
  correct-soft: "#e4f4e8"
  wrong: "#c8202c"
  wrong-soft: "#fdeaeb"
  almost: "#935600"
  almost-soft: "#fff1da"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "2.125rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.026em"
  display-target:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "2.125rem"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  prompt:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.9rem, 7.4vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.022em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: "-0.011em"
    fontFeature: "'cv11'"
  target:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 450
    letterSpacing: "0"
  reading:
    fontFamily: "Source Serif 4, ui-serif, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 450
    lineHeight: 1.7
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  key: "6px"
  segment: "9px"
  icon-tile: "10px"
  sm: "12px"
  control: "14px"
  md: "16px"
  lg: "22px"
  pill: "99px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.spanish-ember}"
    textColor: "{colors.on-accent}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  button-tinted:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.spanish-ember}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "50px"
  button-tinted-hover:
    backgroundColor: "{colors.fill-strong}"
  button-correct:
    backgroundColor: "{colors.correct-soft}"
    textColor: "{colors.correct}"
    rounded: "{rounded.control}"
    height: "56px"
  button-wrong:
    backgroundColor: "{colors.wrong-soft}"
    textColor: "{colors.wrong}"
    rounded: "{rounded.control}"
    height: "56px"
  chip:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "34px"
  chip-selected:
    backgroundColor: "{colors.spanish-ember-soft}"
    textColor: "{colors.spanish-ember}"
  mode-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 14px 16px"
    height: "132px"
  review-card:
    backgroundColor: "{colors.spanish-ember}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.lg}"
    padding: "16px 14px 16px 16px"
  list-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "11px 14px 11px 16px"
    height: "56px"
  option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
    height: "56px"
  input-answer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  segmented:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.segment}"
    height: "32px"
  segmented-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
---

# Design System: Jazyky

## Overview

**Creative North Star: "The Native Study Room"**

Jazyky looks like an expensive first-party app, not a website and not a game. The models are Apple Notes, Apple Fitness and Things 3. It uses the iOS grouped background with borderless white cards that sit on it, set apart by a whisper of shadow. Type follows the platform: SF on Apple devices, Inter everywhere else, with a 34px bold large title on every top-level screen. The one deliberate departure from the platform is the language itself. Every word of Spanish or Russian is set in Source Serif 4, so the language being studied always looks different from the Czech interface around it.

Colour is calm and comes from one place. Each language owns a single accent: a warm ember orange for Spanish and a deep cobalt for Russian. The `data-lang` attribute on `<html>` swaps that accent across the whole app, and the home screen stays graphite until a language is chosen. Green, red and amber appear only as answer feedback. Density is comfortable for a phone: 44 to 56px touch targets, a 696px reading column on desktop, and 12px gaps between cards.

The user rejected two looks outright. One is the cream-paper, serif-headline, terracotta look that reads as generic AI output. The other is the loud, rewarding palette of gamified learning apps.

**Key Characteristics:**
- iOS grouped background with borderless cards; tone and soft shadow carry the depth.
- A two-voice type system: sans for the interface, serif for the target language.
- One accent per language, swapped globally; semantic colours only for feedback.
- Hairline dividers inset from the leading edge, as in iOS lists.
- Forward and back navigation as an iOS push transition (View Transitions).
- Light and dark modes are both first-class. Dark mode uses true black and replaces shadows with hairline rings.

## Colors

The palette is neutral iOS greys with one saturated language accent and a small set of semantic tints.

### Primary
- **Spanish Ember** (spanish-ember): the Spanish accent. It is the fill for the review card, primary buttons, the progress bar and selected tense chips. It also colours icons, links, the text caret, focus rings and nav icons whenever `data-lang="es"`. Dark mode lifts it to #ff7a4a.
- **Russian Cobalt** (russian-cobalt): the Russian accent, used in exactly the same roles under `data-lang="ru"`. Dark mode lifts it to #5c9dff.
- **Accent Soft tints** (spanish-ember-soft, russian-cobalt-soft): backgrounds for mode icon tiles, the second exercise button, selected chips, tags, glossed words and the model-translation panel. Dark: #3a1c10 and #12233f.
- **Graphite Accent** (graphite-accent, graphite-accent-soft): the accent before a language is chosen, on the home screen and in settings opened from it. Dark: #d1d1d6 and #2c2c2e.
- **On Accent** (on-accent): text and icons on a solid accent fill. In dark mode it becomes near-black #0b0b0c because the lifted accents are too light for white text.

### Tertiary
- **Correct / Wrong / Almost** (correct, wrong, almost and their -soft tints): answer feedback only. They colour answer options, the sentence-build tray, feedback panels, the "Bylo to dobře / špatně" self-grading buttons, diff strike-throughs (`del`) and near-miss highlights (`mark`). Dark: #4cd964 / #10281a, #ff6961 / #3a1414, #ffb547 / #33240c.

### Neutral
- **Grouped Background** (grouped-bg): the page canvas, matching iOS systemGroupedBackground. Dark: pure #000000.
- **Surface** (surface): every card, list, prompt and option. Dark: #1c1c1e. **Surface Raised** (surface-raised) is used for row hover and read-only fields. Dark: #232325.
- **Fills** (fill, fill-strong): translucent grey for tinted buttons, chips, segmented-control tracks, the progress track and the build tray. Dark: alpha .24 and .36.
- **Ink / Ink Secondary / Muted** (ink, ink-secondary, muted): primary text, secondary text (unselected segments, rule bodies) and supporting text (subtitles, descriptions, counts). Dark: #f5f5f7, #d1d1d6, #98989f.
- **Faint** (faint): disclosure chevrons and disabled labels only, never body text. Dark: #636366.
- **Hairlines** (hairline, hairline-strong): 0.5px row dividers, input strokes and the scrolled nav-bar edge. Dark: #2c2c2e and #3a3a3c.

### Named Rules
**The One Accent Rule.** Every screen is coloured by the current language's accent through `--accent`, and by nothing else. Spanish ember and Russian cobalt appear together only on the home screen's language cards, where each card carries its own.

**The Feedback-Only Semantics Rule.** Green, red and amber mean correct, wrong and almost. They never decorate, never mark progress and never celebrate.

**The On-Accent Rule.** Text on a solid accent fill always uses `--on-accent`, never a literal white, because the dark-mode accents need dark text.

## Typography

**Display Font:** system UI (SF Pro on Apple) with Inter loaded as the cross-platform face
**Body Font:** the same system / Inter stack, with Inter's `cv11` feature enabled
**Target-language Font:** Source Serif 4 (with ui-serif, Georgia), optical sizing on, weights 400 to 600 plus 400 italic

**Character:** The interface uses the platform's own type, tracked slightly tight like iOS. Spanish and Russian get a warm book serif, so the language being studied always stands out from the Czech interface.

### Hierarchy
- **Display** (700, 2.125rem / 34px, 1.12, -0.026em): the large title on home, language and section screens, balanced with `text-wrap: balance`. A secondary size of 1.75rem is used for topic, verb and text titles. When the title is itself in the target language (a verb, a reading text), it switches to **Display Target** (serif 600, -0.012em).
- **Prompt** (600, clamp(1.9rem, 7.4vw, 2.6rem), 1.15): the word or sentence the user must answer. The serif variant drops to 500. A smaller prompt size, clamp(1.3rem, 4.8vw, 1.6rem), is used for whole sentences.
- **Headline** (700, 1.375rem, 1.2, -0.022em): sheet titles, sub-section headings and reading questions.
- **Title** (600, 1.0625rem / 17px, -0.02em): the collapsed nav-bar title, button labels, the review-card title and mode names (1rem).
- **Body** (400, 17px, 1.42, -0.011em): default text. Rows use weight 500. Secondary lines are 0.875 to 0.94rem in muted.
- **Target** (serif 450, 1.0625 to 1.25rem, letter-spacing 0): all Spanish and Russian words in rows, options, tiles, answers and source texts. Translations below a target word are serif italic at 0.9375rem.
- **Reading** (serif 450, 1.25rem, 1.7, max 36em): long-form reading texts.
- **Label** (600, 0.8125rem): counts (tabular numerals), the language switch, due counts and field labels.
- **Caption** (600, 0.75rem, 0.04em, uppercase): labels on comparison panels only ("Tvoje odpověď", "Správně", "Vzorový překlad"). The settings group headers use the iOS form: 400, 0.8125rem, uppercase, 0.02em, muted.

### Named Rules
**The Two Voices Rule.** Text in the target language always carries the `.tl` serif; Czech interface text never does. If you can't tell at a glance which language a string is in, the rule has been broken.

**The Large Title Rule.** Top-level screens open with a 34px bold large title. When it scrolls away, the nav-bar title fades in (`.collapse` / `.past`), as in iOS.

## Layout

Layout is a single centred column with a maximum width of 696px and 16px side padding. The nav bar's horizontal padding is calculated to line up with that column. Content sits 4px in from the column edge in headers (`padding: 20px 4px`) so titles align with the card text. Everything respects the safe-area insets.

- **Rhythm:** 4px base. Gaps of 12px between cards and grid cells, 10px between buttons and options, 14px inside exercise stages, and 24px before a new block. Card padding is 14 to 18px.
- **Grids:** mode cards use `repeat(auto-fill, minmax(156px, 1fr))`, which gives 2 columns on a phone and 4 at desktop width. The language cards, verb list and conjugation tables become two columns at 560px or wider. The translation comparison becomes two columns at 640px or wider.
- **Responsive:** the settings dialog is a bottom sheet below 600px and a centred 520px modal above it. The vocab list moves the Czech meaning under the word at 420px or narrower. Keyboard hints (`kbd`, `.kbd-only`) appear only under `(hover: hover) and (pointer: fine)`.
- **Touch targets:** at least 40px for icon buttons, 44px for keys and tiles, and 50 to 56px for buttons, rows and options.

## Elevation & Depth

Depth is a hybrid of tone and very soft shadow. Cards are lifted from the grouped background by tone first and an almost invisible ambient shadow second. In dark mode, shadows mean nothing on black, so they become 4 to 6% white hairline rings.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 2px rgb(0 0 0 / .04), 0 6px 16px -8px rgb(0 0 0 / .1)`; dark `0 0 0 1px rgb(255 255 255 / .04)`): every card, list, option and panel at rest.
- **Lift** (`box-shadow: 0 2px 4px rgb(0 0 0 / .04), 0 16px 32px -12px rgb(0 0 0 / .16)`): hover on navigable cards, and the flip card's faces.
- **Accent glow** (`box-shadow: 0 6px 16px -10px var(--accent)`, and 0 10px 24px -14px on the review card): a coloured under-glow beneath solid accent fills only.
- **Selected segment** (`0 1px 3px rgb(0 0 0 / .12), 0 0 0 .5px rgb(0 0 0 / .04)`): the active pill in segmented controls.
- **Floating material** (`backdrop-filter: saturate(180%) blur(20px)`): the translucent nav bar (80% grouped-bg; 72% black in dark mode) and the reading gloss bar.

### Named Rules
**The Borderless Card Rule.** Cards never get a border. Separation comes from tone and the Rest shadow. Inputs are the only exception: they get a 1px inset ring, which becomes a 2px accent ring on focus.

**The Press Rule.** Pressables respond by shrinking (`scale(.97)` to `.985`, or `.93` on the play button) with the spring ease. Hover only deepens the fill or lifts the shadow.

## Shapes

Corners are continuous-feeling and grow with the size of the element. Hero-scale cards (review, language, prompt, flip card) are 22px. Standard cards, lists and panels are 16px. Buttons, options and inputs are 14px. Notes are 12px, icon tiles 10px, segmented tracks 9 to 10px, and keyboard keys 6px. Chips, tags, toggles and the progress bar are full pills. Round icon buttons and the 96px play button are circles. Row dividers are 0.5px hairlines inset 16px from the leading edge and never full-bleed. Icons are 24-unit line SVGs with a 1.8px stroke and round caps and joins, drawn at 20px (22px in the nav bar, 21px in mode tiles).

## Components

### Buttons
Buttons are solid or tinted, never outlined, following iOS.
- **Shape:** gently rounded (14px), 50px tall, with 0 20px padding and Title type.
- **Primary:** a solid accent fill with on-accent text and the accent glow. Hover brightens it (`filter: brightness(1.08)`).
- **Tinted (default):** a translucent fill with accent text. Hover moves to the stronger fill. This is the secondary action everywhere, including backup buttons in settings.
- **Self-grading:** the correct and wrong soft tints with semantic text, 56px tall, in a two-column grid.
- **Disabled:** fill background with faint text and no shadow.
- **Icon button:** a 40px circle (34px small), transparent, accent icon; hover shows the fill.
- **Link:** accent text at 600 weight, underlined on hover with a 3px offset.

### Chips
- **Style:** pill, 34px, fill background, ink-secondary 600 text at 0.875rem.
- **State:** selected chips switch to accent-soft with accent text. Tense chips are 14px-radius surface cards that turn solid accent when selected. Character keys (special-letter chips) are surface tiles set in the serif.

### Cards / Containers
- **Corner Style:** 16px standard, 22px hero.
- **Background:** surface on grouped-bg.
- **Shadow Strategy:** Rest at idle, Lift on hover (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** 14 to 18px.
- **Mode card:** a 36px accent-soft icon tile with the accent icon, an 18px gap, then the name (600, 1rem) and a muted 0.8125rem description. Minimum height 132px.

### Inputs / Fields
- **Style:** surface fill, 14px radius, 1px hairline inset ring plus the Rest shadow, 17px text (20px when it is serif target-language input). The caret is the accent colour.
- **Focus:** the ring becomes a 2px accent inset ring and no outline is drawn. Read-only fields drop to surface-raised.
- **Global focus:** `:focus-visible` draws a 2.5px accent outline with a 2px offset.

### Navigation
- **Nav bar:** sticky and translucent with a blur. The left slot holds a back chevron or the serif "J" logo tile, then the title, then the ES/RU segmented switch and the settings icon. A 0.5px hairline appears only after the page has scrolled.
- **Segmented control:** a fill track with 2px padding. The selected segment is a white pill (#636366 in dark mode) with the selected shadow. It is used for the language switch and for exercise direction.
- **Screen transitions:** going forward pushes the new screen in from the right (28%) while the old one recedes 10% to the left; going back reverses this. Both take 0.42s on `cubic-bezier(.32, .72, 0, 1)`. The nav bar morphs separately in 0.3s.

### Grouped list (settings and lists)
An iOS inset grouped list. Rows have a minimum height of 56px and sit on a surface card, with 0.5px hairlines inset 16px and a muted chevron at the trailing edge. Settings group headers are uppercase muted captions above each group, and explanatory notes sit below. Toggles are 51 × 31 iOS switches in system green, and radios are trailing accent checkmarks.

### Review card (signature)
The single loudest element in the app. It is a full-width 22px card filled with the accent and lit by the accent glow. It holds a translucent white icon circle, the title "Opakování", the number of words due (the only number the product allows), and a chevron. It appears only when words are due.

### Answer feedback (signature)
Options, the build tray and feedback panels change to the semantic soft tint with a 1.5px semantic inset ring. A correct answer settles (a scale pulse to 1.025) and a wrong one shakes (±6px), both over about 0.4s. The comparison view shows the user's answer struck through in red and the correct answer with the differing words highlighted in amber.

### Flip card
A 280px card with 1600px perspective that rotates 180° in 0.6s on the spring ease. Both faces use the Lift shadow.

## Do's and Don'ts

### Do:
- **Do** put every surface on the grouped background as a borderless card with the Rest shadow (`0 1px 2px rgb(0 0 0 / .04), 0 6px 16px -8px rgb(0 0 0 / .1)`).
- **Do** route all accent colour through `--accent` / `--accent-soft` so `data-lang` recolours the screen.
- **Do** set every Spanish or Russian string in `.tl` (Source Serif 4, 450) and keep Czech UI in the sans.
- **Do** use the 34px bold large title on top-level screens, with the collapsing nav-bar title.
- **Do** use `--on-accent` for text and icons on solid accent fills.
- **Do** inset hairline dividers 16px from the leading edge, at 0.5px.
- **Do** animate with `cubic-bezier(.32, .72, 0, 1)` and press with a scale between 0.97 and 0.985, and honour `prefers-reduced-motion` by turning motion off entirely.

### Don't:
- **Don't** use cream paper, serif interface headlines or a terracotta accent as the overall look; the user rejected this generic AI aesthetic.
- **Don't** use the bright multi-colour, rewarding palette of gamified learning apps, and don't show badges, streak flames, XP bars or time counters.
- **Don't** put a border on a card or use a full-bleed divider.
- **Don't** use green, red or amber for anything except answer feedback.
- **Don't** show both language accents on one screen, except on the home screen's language cards.
- **Don't** hard-code `#fff` on an accent fill; the dark-mode accents fail contrast with white text.
