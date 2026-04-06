# OMNI-CORE

Sowl Tech sovereign, local-first governance starter pack.

This repository seeds the core constitutions, prompts, schemas, and tool registry for a governed AI operating system — structured as a **4-layer sovereign epistemic operating system (IAKE)**.

## Architecture

OMNI-CORE is built as a pyramid. Each layer depends on the one below it.

```
🟩 Layer 1 — Core Engine (IAKE-1)          ← institutional spine
🟦 Layer 2 — Sovereign Knowledge Mode      ← intellectual authority
🟨 Layer 3 — Monetisable Product           ← governed knowledge infrastructure
🟥 Layer 4 — Myth-Tech / Symbolic System   ← cultural capital (optional)
```

See `ARCHITECTURE.md` for the full spec.

## Structure

- `ARCHITECTURE.md` — 4-layer IAKE pyramid specification
- `ROADMAP.md` — 6-step execution plan (Freeze → Define → Package → Pilot → Refine → Expand)
- `CLAUDE.md` — master runtime doctrine
- `rules/` — constitutions governing each layer
- `prompts/` — system-prompt-ready files for each operator role
- `schemas/` — machine-readable contracts for all governed record types
- `tool_registry.yaml` — declared tools, risk classes, and approval requirements

## Rules

| File | Layer | Purpose |
|---|---|---|
| `rules/GOVERNANCE_CONSTITUTION.md` | L1 | Tool, approval, and audit control |
| `rules/OPERATOR_CONSTITUTION.md` | L1 | Repo-aware execution discipline |
| `rules/BUILDER_CONSTITUTION.md` | L3 | Local-first sovereign product building |
| `rules/KNOWLEDGE_CONSTITUTION.md` | L2 | Sovereign knowledge mode governance |
| `rules/PRODUCT_CONSTITUTION.md` | L3 | Monetisable institutional product rules |

## Prompts

| File | Role |
|---|---|
| `prompts/sowl_master_system_prompt.md` | Master operator |
| `prompts/sowl_operator_prompt.md` | Repo-aware operator |
| `prompts/sowl_builder_prompt.md` | Product builder |
| `prompts/sowl_research_prompt.md` | Sovereign knowledge researcher (Layer 2) |
| `prompts/sowl_arbiter_prompt.md` | Arbitration operator (Layer 1/3) |

## Schemas

| File | Description |
|---|---|
| `schemas/audit_event.schema.json` | Mandatory audit log record |
| `schemas/approval_gate.schema.json` | Approval checkpoint record |
| `schemas/tool_definition.schema.json` | Tool declaration contract |
| `schemas/claim.schema.json` | Knowledge claim with confidence and provenance |
| `schemas/contestation.schema.json` | Formal dispute against a claim |
| `schemas/knowledge_entry.schema.json` | Sovereign knowledge record with full provenance |
| `schemas/freeze_event.schema.json` | Artifact freeze/thaw governance record |

## Design intent

OMNI-CORE is built around:

- local-first defaults
- explicit write gating
- auditability
- reversible change management
- role separation between builder, operator, and governance layers
- claim-level epistemic governance with confidence weighting
- preservation of contested knowledge without false resolution

## Next steps

1. Review `ARCHITECTURE.md` and `ROADMAP.md` for execution context
2. Freeze IAKE-1 core schemas once stable (see `schemas/freeze_event.schema.json`)
3. Define your Layer 3 product brief (`docs/PRODUCT_BRIEF_v1.md`)
4. Extend `tool_registry.yaml` with project-specific tools
5. Wire schemas and prompts into your actual runtime and repo workflows
