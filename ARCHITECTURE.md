# OMNI-CORE — IAKE Architecture
## Sovereign Epistemic Operating System — 4-Layer Pyramid

---

## Overview

OMNI-CORE is structured as a **sovereign epistemic operating system** built on four layered tiers. Each layer depends on the one below it. No upper layer overrides the layer beneath it.

The system is not just a product. It is governed infrastructure for handling claims, knowledge, disputes, and institutional trust at scale.

---

## Layer 1 — Core Engine (IAKE-1)
### The Institutional Spine

This layer must be **boring, stable, and deterministic**.

Boring is strength. Boring is trustworthy.

### Components

| Component | Description |
|---|---|
| Schema validation | All records conform to declared JSON schemas |
| Ledger logging | All meaningful actions emit audit events |
| Arbitration logic | Formal resolution pathways for conflicting claims |
| Governance gates | Approval requirements enforced per risk class |
| Derived truth view | Computed outputs from validated inputs only |
| Deterministic compute | Same inputs always produce same governed outputs |

### Rules

- No mutation without schema validation
- No action without audit event emission
- No governance bypass under any operational mode
- Freeze rule: a frozen artifact may not be mutated without explicit thaw

### Relevant artifacts

- `schemas/audit_event.schema.json`
- `schemas/approval_gate.schema.json`
- `schemas/tool_definition.schema.json`
- `schemas/freeze_event.schema.json`
- `schemas/claim.schema.json`
- `tool_registry.yaml`
- `rules/GOVERNANCE_CONSTITUTION.md`

---

## Layer 2 — Research & Sovereign Knowledge Mode
### The Intellectual Authority Layer

This layer stores, structures, and preserves knowledge — including contested, uncertain, or culturally specific knowledge — without flattening it into fake certainty.

### Principles

- Claims are stored with explicit confidence levels
- Contestations are preserved, not silenced
- Indigenous and non-Western knowledge systems are structured respectfully
- No myth is collapsed into authoritative fact without clear provenance
- Uncertainty is a first-class property

### Components

| Component | Description |
|---|---|
| Knowledge entries | Structured records with source, confidence, and provenance |
| Claim records | Assertions with attributed source and confidence weight |
| Contestation records | Formal records of dispute or counter-claim |
| Evidence weighting | Explicit notation of evidence strength |

### Relevant artifacts

- `schemas/knowledge_entry.schema.json`
- `schemas/claim.schema.json`
- `schemas/contestation.schema.json`
- `rules/KNOWLEDGE_CONSTITUTION.md`
- `prompts/sowl_research_prompt.md`

---

## Layer 3 — Monetisable Institutional Product
### The Commercial Product Layer

This is the layer that translates governed infrastructure into a product enterprises pay for.

The product is not sold as a cultural tool. It is sold as:

> **"Governed Knowledge Infrastructure"**

### Target markets

- Research institutions
- AI governance firms
- Policy labs
- Corporate R&D teams
- Legal compliance teams
- High-trust organisations

### Product capabilities

| Capability | Description |
|---|---|
| Claim governance engine | Tracks assertions and their current status |
| Dispute resolution tracking | Formal workflow for internal knowledge conflicts |
| Evidence-weight arbitration | Structured comparison of competing evidence |
| Audit-ready knowledge logs | Compliance-grade history of all knowledge mutations |
| Change tracking | Full provenance chain for any governed record |

### Relevant artifacts

- `rules/PRODUCT_CONSTITUTION.md`
- `prompts/sowl_arbiter_prompt.md`
- `schemas/audit_event.schema.json`
- `schemas/contestation.schema.json`

---

## Layer 4 — Myth-Tech / Symbolic System
### The Cultural Capital Layer (Optional — Sits on Top)

This layer is the expressive, educational, and symbolic surface of the system. It draws power from the governed infrastructure beneath it.

It is not required for institutional use.
It is the reason the system has cultural depth.

### Forms

- Educational modules
- Symbolic decision frameworks (e.g., Ifá binary structures)
- Creative research engines
- AI ethics frameworks and workshops
- Courses, books, seminars
- Cultural heritage documentation tools

### Rule

Layer 4 must always rest on Layer 1. It derives legitimacy from the governed core, not from aesthetic appeal alone.

---

## Stability Guarantee

| Layer | Status |
|---|---|
| Layer 1 — Core Engine | Freeze candidate after IAKE-1 completion |
| Layer 2 — Knowledge Mode | Active development |
| Layer 3 — Product Layer | Packaging phase |
| Layer 4 — Myth-Tech | Planned expansion |

---

## See Also

- `ROADMAP.md` — execution plan and phase targets
- `CLAUDE.md` — master runtime doctrine
- `rules/` — constitutions governing each layer
- `schemas/` — machine-readable contracts
