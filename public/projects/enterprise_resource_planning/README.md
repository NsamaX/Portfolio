# Enterprise Resource Planning (ERP)

## Context & Goals

This project is a custom ERP system designed for factory operations. It follows a **Modular Monolith** architecture to ensure scalability while maintaining a unified codebase.

## Tech Stack & Tools

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Infrastructure**: Docker, Portainer (On-Premise)

## Project Structure

The project adopts a **Modular Monolith** approach. Feature modules are located in `src/modules/`.

- `src/app/`: Next.js App Router (Routes & Layouts).
- `src/lib/`: Shared libraries (Database connection, global types).
- `src/modules/`: Business Logic & Components.
  - `auth/`: Authentication, User Management, Roles, and Permissions.
  - `bill-of-materials/`: Bill of Materials (BOM) and Product management.
  - `configuration/`: System settings and global configuration.
  - `core/`: Shared components, utilities, and global styles.
  - `dashboard/`: Main dashboard and analytics.
  - `forecast/`: Forecast import & processing (CSV-driven), auto-matching to Products by `intCode`, status tracking (`matched` / `pending_bom`), and time-series storage for MRP.
  - `materials/`: Material management, categories, and inventory.
  - `purchase-orders/`: Purchase order planning, tracking, and management.
- `src/proxy.ts`: Authentication and route protection logic.

## Role: Suwisa (Dynamic ERP AI Assistant)

This project is assisted by an AI agent named **Suwisa (สุวิสา)**, operating within the Trae IDE. Suwisa acts as a primary assistant and pair programmer, strictly following the standards defined in `.trae/TRAE.md`.

Suwisa dynamically switches roles based on the task:

- **Project Manager**: `.trae/roles/project_manager.md`
- **Business Analyst**: `.trae/roles/business_analyst.md`
- **System Architect**: `.trae/roles/system_architect.md`
- **Frontend Developer**: `.trae/roles/frontend_developer.md`
- **Backend Developer**: `.trae/roles/backend_developer.md`
- **QA Engineer**: `.trae/roles/qa_engineer.md`
- **Documentation Specialist**: `.trae/roles/documentation_specialist.md`

### AI Assistant Workflow

For every user message, Suwisa follows this loop:

1. **Analyze Intent**: Determine what is being asked (e.g., bug fix, new feature, documentation update).
2. **Select Role**: Choose the most suitable role for the task.
3. **Consult Context**: Review `.trae/TRAE.md` and relevant role/rule documents.
4. **Execute**: Use tools to perform the task and proactively verify results.
5. **Respond**: Provide clear, actionable feedback in Thai.

### Core Constraints

- **Single Source of Truth**: `.trae/TRAE.md` defines all infrastructure, tech stack, and workflow standards.
- **Modular Monolith Architecture**: Feature modules must be strictly decoupled and reside in `src/modules/`.
- **Database Rules**: Drizzle ORM is the single source of truth for the database schema.
- **Security**: Strict adherence to factory ERP security policies is mandatory.

## Workflow & Guides

For detailed development rules and standards, please refer to the following documents in `.trae/rules/`:

- [Business Requirement Analysis](.trae/rules/business_requirement_analysis.md)
- [Tech Stack & Architecture](.trae/rules/tech_stack_and_architecture.md)
- [Database Design & ORM](.trae/rules/database_design_and_orm.md)
- [UI/UX Design System](.trae/rules/ui_ux_design_system.md)
- [Deployment Infrastructure](.trae/rules/deployment_infrastructure.md)
- [QA Testing Procedures](.trae/rules/qa_testing_procedures.md)
- [Documentation Writing Guide](.trae/rules/documentation_writing_guide.md)

## Getting Started

### Prerequisites

- Node.js (Latest LTS)
- PostgreSQL Database

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (`.env`).
4. Run database migrations:
   ```bash
   npm run db:migrate
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run lint`: Run Linter for code style.
- `npm run db:generate`: Generate SQL migrations from schema.
- `npm run db:migrate`: Apply migrations to the database.
- `npm run db:push`: Push changes directly to the database (Dev only).
- `npm run db:studio`: Open Drizzle Studio to manage data.
- `npm run db:reset`: Reset database (drops and recreates).
- `npm run db:seed`: Seed the database with initial data.
- `npm run graph`: Generate project dependency graph for Obsidian.
- `npm run graph:focus`: Generate focused dependency graph for Obsidian.
- `npm run verify`: Verify project integrity and compliance.

---

_Maintained by the ERP Development Team with assistance from Suwisa._
