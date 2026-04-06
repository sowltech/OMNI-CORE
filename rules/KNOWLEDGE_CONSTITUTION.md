# SOWL TECH — KNOWLEDGE CONSTITUTION
## Sovereign Knowledge Mode — Layer 2 Governance Rules

This document governs how knowledge claims, contestations, and uncertain or culturally specific information are handled within OMNI-CORE.

---

## 1. PURPOSE

Provide a structured, respectful, and intellectually honest layer for managing knowledge that may be:

- contested or disputed
- culturally specific or indigenous in origin
- probabilistic rather than certain
- multi-sourced with varying reliability
- evolving over time

Prevent the flattening of nuanced knowledge into false authoritative certainty.

---

## 2. CORE PRINCIPLE — NO FAKE CERTAINTY

A claim is not true simply because it has been stored.

Every knowledge entry must carry:

- a source or provenance reference
- a confidence level
- an explicit status (accepted, contested, provisional, archived)

The system must never present a provisional claim as established fact.

---

## 3. CONFIDENCE LEVELS

All claims must carry one of the following confidence levels:

| Level | Meaning |
|---|---|
| `established` | Well-evidenced, widely accepted, traceable provenance |
| `probable` | Strong evidence but not definitive |
| `provisional` | Working hypothesis, limited evidence |
| `contested` | Actively disputed, competing claims exist |
| `speculative` | Minimal evidence, exploratory |
| `symbolic` | Cultural, mythic, or traditional — not empirical |

Changing a confidence level is a governed action and must emit an audit event.

---

## 4. INDIGENOUS AND CULTURAL KNOWLEDGE RULES

When working with indigenous, oral, or non-Western knowledge systems:

- Do not impose Western epistemic categories without acknowledgment
- Preserve original framing where possible
- Attribute the knowledge system explicitly (e.g., "Ifá tradition", "Nsibidi script system")
- Do not merge or conflate distinct knowledge traditions
- Flag symbolic or mythic knowledge explicitly as `confidence: symbolic`
- Obtain or note consent/attribution where applicable

This is not tokenism. This is structural integrity.

---

## 5. CONTESTATION RULES

When a claim is contested:

- the contestation must be recorded as a formal `contestation` record
- the original claim is not deleted — it is marked as `contested`
- both the original claim and the contestation remain visible
- resolution (if any) is recorded as a separate arbitration event
- unresolved contestations remain open until formally closed

Silencing a contestation is a governance violation.

---

## 6. PROVENANCE REQUIREMENTS

Every knowledge entry must declare:

- `source_type`: primary / secondary / oral / derived / institutional / cultural
- `source_ref`: a reference or citation
- `entered_by`: the actor who created the entry
- `entry_date`: ISO 8601 timestamp
- `confidence`: one of the declared confidence levels

---

## 7. MUTATION RULES

Updating a knowledge entry is governed:

- edits to `confidence` require an approval event
- edits to `content` require an audit event with reason
- no knowledge entry may be silently overwritten
- all previous versions must remain recoverable

---

## 8. KNOWLEDGE FREEZE

A knowledge entry may be frozen if it reaches `established` confidence with verified provenance.

A frozen knowledge entry:
- may not be mutated without explicit thaw
- requires documented reason for any change
- retains full mutation history

---

## 9. LAYER SEPARATION

Knowledge mode (Layer 2) depends on the Core Engine (Layer 1) for:
- schema validation
- audit event emission
- governance gate enforcement

Layer 2 must not bypass Layer 1 for any write operation.

---

## 10. SUCCESS CONDITION

Knowledge governance is successful when:

- the system contains no silent fake certainty
- every claim has a traceable source
- every contestation has a formal record
- confidence levels are consistently applied
- culturally specific knowledge is structurally preserved, not absorbed and distorted
