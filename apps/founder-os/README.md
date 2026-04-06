# SOWL TECH — Founder/Builder Operating System

An interactive React command interface for the Founder/Builder Operating System.

## What it is

A fully client-side, local-first tool that helps founders and builders:
- Diagnose their current stuck state with a 6-question diagnostic engine
- Receive a precise operating mode and full protocol
- Score all 8 system layers on a weekly scorecard
- Navigate the 5 most common founder dysfunction patterns
- Run a 30-day staged reset protocol
- Reference all 8 founder operating modes

## Architecture

```
src/
  data/
    layers.js        — 8 operating system layers
    modes.js         — 8 founder modes with full protocols
    diagnostic.js    — 6 questions, layer weights, mode inference engine
    patterns.js      — 5 dysfunction patterns
    reset.js         — 30-day staged reset phases
  components/
    NavBar.jsx       — sticky navigation
    LayerBadge.jsx   — layer chip component
  views/
    WelcomeView.jsx      — landing hub with navigation tiles
    DiagnosticView.jsx   — 6-step question flow
    ModeResultView.jsx   — inferred mode with full protocol
    DriftResetView.jsx   — 6-step quick realignment
    ScorecardView.jsx    — 8-layer 1–10 scoring with live read
    ResetView.jsx        — 30-day 4-phase reset protocol
    PatternLibraryView.jsx — 5 patterns with signs and corrections
    ModesView.jsx        — all 8 modes reference
  App.jsx            — view routing and state
  index.css          — SOWL OS design system
```

## Storage

No server, no database, no account required.  
All state is in-memory (React state).  
Nothing leaves the device.

## Setup

```bash
npm install
npm run dev       # development
npm run build     # production build
```

## Design system

- Dark mode by default (`#0d0e12` background)
- Blue accent (`#4f8ef7`)
- Semantic status colours: green (healthy), amber (low), red (critical)
- System-UI font stack
- Mobile-first responsive layout

## Governed by

`OMNI-CORE` rules, constitutions, and CLAUDE.md.
