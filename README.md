# OMNI-CORE

Sowl Tech sovereign, local-first governance starter pack.

This repository seeds the core constitutions, prompts, schemas, and tool registry for a governed AI operating system.

## Structure

- `CLAUDE.md` — master runtime doctrine
- `rules/` — constitutions for governance, operator behavior, and product building
- `prompts/` — system-prompt-ready files derived from the constitutions
- `schemas/` — machine-readable contracts for audit and approval events
- `tool_registry.yaml` — declared tools, risk classes, and approval requirements
- `apps/founder-os/` — Founder/Builder Operating System interactive React interface

## Apps

### Founder/Builder OS (`apps/founder-os`)

An interactive React command interface implementing the SOWL TECH Founder/Builder Operating System.

**Features:**
- 6-step diagnostic engine → infers your current founder mode from 8 possible modes
- 8 operating layers with a weekly scorecard (1–10 live scoring)
- Full mode protocols: directive, steps, avoidance rules, success condition
- Drift reset protocol (6-step quick realignment)
- 30-day staged reset protocol (4 phases)
- Pattern library: 5 founder dysfunction patterns with signs and corrections
- Mode reference: all 8 modes browsable

**Run locally:**
```bash
cd apps/founder-os
npm install
npm run dev
```

## Design intent

OMNI-CORE is built around:

- local-first defaults
- explicit write gating
- auditability
- reversible change management
- role separation between builder, operator, and governance layers

## Initial next steps

1. Add project-specific tools to `tool_registry.yaml`
2. Add role-specific prompts for your named agents
3. Extend `schemas/` with workflow, refusal, and freeze event schemas
4. Wire these rules into your actual runtime and repo workflows
