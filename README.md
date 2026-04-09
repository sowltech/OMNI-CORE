# OMNI-CORE

Sowl Tech sovereign, local-first governance starter pack.

This repository seeds the core constitutions, prompts, schemas, and tool registry for a governed AI operating system.

> **Architecture status:** OMNI-CORE defines the doctrine-level stack positioning for the wider system. The final positioning is: **Open WebUI** = front-end, **Ollama** = local runtime, **SurfSense** = read-only memory, **Obsidian** = ledger, and the **governance layer** = control spine.

## Start here

- `docs/FINAL-STACK-POSITIONING.md` — final architecture positioning for the broader stack
- `CLAUDE.md` — master runtime doctrine
- `rules/` — constitutions for governance, operator behavior, and product building
- `schemas/` — machine-readable contracts for audit and approval events
- `tool_registry.yaml` — declared tools, risk classes, and approval requirements

## Related repos

- **Implementation repo:** `sowltech/phoenix-mind-spine`
- Use **OMNI-CORE** for doctrine, governance posture, constitutional rules, and architecture intent.
- Use **phoenix-mind-spine** for implementation services, runtime boundaries, and governed execution flow.

## Core role of OMNI-CORE

OMNI-CORE is the **doctrine and governance repository**.

It defines:
- the constitutional rules
- the governance posture
- the tool and risk model
- the role separation logic
- the architecture intent that implementation repos must follow

It is **not** the runtime itself.
It is **not** the front-end.
It is **not** the memory substrate.
It is the **control doctrine** that keeps the broader system coherent.

## Final stack positioning

### Keep
- **Open WebUI** = front-end
- **Ollama** = local runtime
- **SurfSense** = read-only memory
- **Obsidian** = ledger
- **Governance layer** = control spine

## Design intent

OMNI-CORE is built around:

- local-first defaults
- explicit write gating
- auditability
- reversible change management
- role separation between builder, operator, and governance layers

## System rule

Do not confuse:
- interface with governance
- runtime with policy
- memory with authority
- convenience with system truth

## Structure

- `CLAUDE.md` — master runtime doctrine
- `rules/` — constitutions for governance, operator behavior, and product building
- `prompts/` — system-prompt-ready files derived from the constitutions
- `schemas/` — machine-readable contracts for audit and approval events
- `tool_registry.yaml` — declared tools, risk classes, and approval requirements
- `docs/FINAL-STACK-POSITIONING.md` — final architecture positioning note

## Initial next steps

1. Add project-specific tools to `tool_registry.yaml`
2. Add role-specific prompts for your named agents
3. Extend `schemas/` with workflow, refusal, and freeze event schemas
4. Wire these rules into your actual runtime and repo workflows
