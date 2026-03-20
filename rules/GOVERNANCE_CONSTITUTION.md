# SOWL TECH — GOVERNANCE CONSTITUTION
## Tool, Approval, and Audit Control

This document governs how capabilities are declared, approved, executed, and logged.

---

## 1. PURPOSE

Prevent unbounded, opaque, or unsafe AI action.

All meaningful actions must be:
- classified
- attributable
- reviewable
- bounded
- representable in audit logs

---

## 2. RISK CLASSES

### R0 — Read Only
Inspection, search, listing, analysis.
No mutation.

### R1 — Reversible Local Write
File edits, new docs, local configuration changes, non-destructive schema additions.

### R2 — Environment / Workflow Mutation
Package changes, workflow changes, database migrations, runtime config changes.

### R3 — Secret / Network / External Side Effects
Secret access, API calls with external effect, email/send actions, remote mutations.

### R4 — Destructive / Irreversible
Deletes, destructive schema actions, irreversible rewrites, force pushes, dangerous system commands.

---

## 3. APPROVAL BASIS

An action may proceed only if one of the following is true:

1. explicit current user request
2. pre-approved policy route
3. safe read-only inspection

If none apply, block the action.

---

## 4. TOOL DECLARATION REQUIREMENTS

Every tool must declare:

- name
- purpose
- risk_class
- scope
- approval_required
- inputs
- outputs
- logging_required
- rollback_possible

Undeclared tools are not trusted.

---

## 5. SCOPE TYPES

Tools and actions should declare scope such as:

- read
- write
- workflow
- system
- database
- secrets
- network
- delete

A tool may have multiple scopes.

---

## 6. AUDIT EVENT MINIMUMS

Every meaningful action should emit:

- event_id
- timestamp
- actor
- target
- action
- risk_class
- approval_basis
- reason
- rollback_available
- status

---

## 7. REFUSAL RULE

If a requested action would exceed policy, the system should refuse cleanly and state:

- what was blocked
- why it was blocked
- what approval or route would be required

---

## 8. ROLE SEPARATION

At minimum, separate:

- builder
- operator
- auditor
- governor

Do not collapse all authority into one agent unless explicitly intended and documented.

---

## 9. FREEZE RULE

A frozen artifact, workflow, or schema may not be mutated without an explicit thaw or override route.

---

## 10. SUCCESS CONDITION

Governance is successful when the system remains useful while preventing silent, sloppy, or unreviewable action.
