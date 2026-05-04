# MaS — Massage Administration System

A web-based administration system for Thai massage parlors, developed using a **Modular Monolith** architecture to ensure clear code boundaries and easy scalability.

---

## Tech Stack

| Layer     | Technology                     |
| --------- | ------------------------------ |
| Framework | Next.js 16 (App Router)        |
| Language  | TypeScript (strict)            |
| UI        | React 19 + Tailwind CSS 4      |
| Database  | MariaDB via XAMPP (On-Premise) |
| ORM       | Drizzle ORM                    |
| Icons     | Lucide React                   |

---

## System Setup

### Prerequisites

- Node.js (LTS recommended)
- XAMPP (with MySQL/MariaDB enabled)

### Database Configuration

1. Open XAMPP → Start **Apache** and **MySQL**.
2. Access phpMyAdmin → Create the following databases:
   - `mas_prod_db` (Production)
   - `mas_dev_db` (Development)

### Environment Variables

```bash
# .env
DATABASE_URL="mysql://<db_user>:<db_pass>@127.0.0.1:3306/mas_dev_db"
PORT=3000
NODE_ENV=development
```

### Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server
```

### Deployment (Production — Mini PC)

```bash
npm ci
npm run build
npm run start
```

---

## Scripts

| Command                    | Action                                                |
| :------------------------- | :---------------------------------------------------- |
| `npm run dev`              | Dev server                                            |
| `npm run build`            | Production build                                      |
| `npm run lint`             | ESLint check                                          |
| `npm run type-check`       | TypeScript check (`tsc --noEmit`)                     |
| `npm run verify`           | Combined check: architecture violations + type-check  |
| `npm run graph`            | Generate Obsidian dependency graph + `.VIOLATIONS.md` |
| `npm run verify:contracts` | Verify module contracts only                          |

---

## Project Structure

```
src/
├── app/           # Next.js App Router — routes & layouts only
├── modules/       # Feature modules (Modular Monolith)
│   ├── core/      # Shared: Layout, SidebarNav, utils
│   ├── auth/      # PIN login + role-based access
│   ├── dashboard/ # Today's overview: stat cards, room grid
│   ├── appointments/ # Bookings/assignments/status tracking
│   ├── services/  # Service management, price, duration
│   ├── staff/     # Staff management, skill tags
│   └── report/    # Monthly reports (planned)
├── lib/
│   └── db/        # Drizzle connection + schema aggregator
└── proxy.ts       # Auth middleware / route protection
```

Each module follows the pattern: `client.ts` | `server.ts` | `schema.ts`.

---

## Claude Code — AI Assistant

This project uses **Claude Code** as the primary AI assistant.

### Getting Started

Claude automatically reads `CLAUDE.md` at the root — there is no need to re-introduce the project in every new conversation.

### Navigation

| File / Folder                | Purpose                                      |
| :--------------------------- | :------------------------------------------- |
| `CLAUDE.md`                  | Main project guide                           |
| `.claude/MAP.md`             | Central index — find anything in the project |
| `.claude/module-registry.md` | Public API contracts for all modules         |
| `.claude/decisions/`         | Architectural Decision Records (ADR)         |
| `.claude/requirements/`      | Feature requirement documents                |

### Slash Commands

Type `/command` to activate specific roles or workflows:

**Role Commands** — Loads role definitions and rules in one click.

| Command      | Use Case                                           |
| :----------- | :------------------------------------------------- |
| `/architect` | Design DB schema, module boundaries, architecture  |
| `/frontend`  | Create UI components, Tailwind, Layout             |
| `/backend`   | Server actions, service layer, Drizzle ORM         |
| `/analyst`   | Analyze requirements, user stories, flow diagrams  |
| `/pm`        | Task breakdown, release workflow, deploy checklist |
| `/qa`        | Testing, violation checks, pre-deploy checklist    |
| `/docs`      | Update documentation, module-registry, ADR         |

**Workflow Templates** — Fill out the template for Claude to process.

| Command        | Use Case                                |
| :------------- | :-------------------------------------- |
| `/new-feature` | Start creating a new feature end-to-end |
| `/fix-bug`     | Report a bug with full context          |
| `/new-schema`  | Design new DB tables + checklist        |
