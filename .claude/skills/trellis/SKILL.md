---
name: trellis
description: Trellis AI coding engineering framework - persists specs, tasks, and memory into your repo so every AI session starts with real context. Use when the user mentions Trellis, /trellis:continue, /trellis:finish-work, project memory, or wants structured AI-assisted development with auto-injected specs and task-centered workflow.
---

# Trellis - AI Coding Engineering Framework

You are the **Trellis Skill** - a skill that enables structured, memory-aware AI coding workflows.

## Core Mission

Trellis solves the problem of AI sessions starting from scratch each time. It persists specifications, tasks, and memories into the project, so any coding agent works to your engineering standards.

## When to Use This Skill

- User says "Trellis", "trellis", "使用 Trellis"
- User mentions project memory, specs persistence, or task tracking
- User wants structured AI-assisted development with context preservation
- User says /trellis:continue or /trellis:finish-work

## How It Works

Trellis runs a **4-phase loop**:

### Phase 1: Plan
- 	rellis-brainstorm walks through requirements one question at a time
- Writes prd.md in .trellis/tasks/
- Research-heavy items go to a 	rellis-research sub-agent
- Result: curated specs + research files referenced from implement.jsonl / check.jsonl

### Phase 2: Implement
- A 	rellis-implement sub-agent writes code from the PRD
- Curated context is auto-injected
- No git commit during implementation

### Phase 3: Verify
- A 	rellis-check sub-agent reviews the diff against specs
- Runs lint, type-check, and tests
- Self-fixes where possible

### Phase 4: Finish
- Final check runs
- 	rellis-update-spec promotes new learnings back into .trellis/spec/
- Next session starts smarter

## Directory Structure

`
.trellis/
  |-- spec/          # Project specification library (auto-injected into AI context)
  |-- tasks/         # Task directory (active + archive)
  |-- workspace/     # Developer workspace (cross-session memory)
  |-- workflow.md    # Development workflow guide
  |-- scripts/       # Automation scripts
`

## Commands

| Command | Description |
|---------|-------------|
| /trellis:continue | Continue current workflow |
| /trellis:finish-work | Archive task and update work log |

## Installation

`ash
# Install Trellis CLI
npm install -g @mindfoldhq/trellis@latest

# Initialize in your repo
trellis init -u your-name

# Or initialize with specific platforms
trellis init --cursor --opencode --codex -u your-name
`

## Supported Platforms

- **Trae** - auto-compatible via .agents/skills/ standard layer
- **OpenCode** - native support via .opencode/
- **Codex** - native support via .codex/
- **Claude Code** - via .agents/skills/
- **Cursor** - via .cursor/
- **Kiro, Gemini, Qoder, CodeBuddy, Copilot, Droid, Pi Agent, Kilo, Antigravity, Windsurf**

## Workflow

1. **Describe** what you want in natural language
2. **Brainstorm** with the AI one question at a time until the PRD is clear
3. **Let it run** - the AI calls Trellis Implement and auto-checks the result
4. **Type /trellis:finish-work** when done - Trellis archives the task and updates journals

## Key Benefits

| Capability | What it changes |
|------------|-----------------|
| **Auto-injected specs** | Write conventions once in .trellis/spec/, then let Trellis inject relevant context into each session |
| **Task-centered workflow** | Keep PRDs, implementation context, review context, and task status in .trellis/tasks/ |
| **Project memory** | Journals in .trellis/workspace/ preserve what happened last time |
| **Team-shared standards** | Specs live in the repo, so one person's hard-won workflow benefits the whole team |
| **Multi-platform setup** | Same Trellis structure across 14 AI coding platforms |

## Resources

- **Official Docs**: https://docs.trytrellis.app/
- **GitHub**: https://github.com/mindfold-ai/Trellis
- **Discord**: https://discord.com/invite/tWcCZ3aRHc
- **Quick Start**: https://docs.trytrellis.app/start/install-and-first-task
- **Multi-Platform Setup**: https://docs.trytrellis.app/advanced/multi-platform