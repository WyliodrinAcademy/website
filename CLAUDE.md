## Project

**WyliodrinAcademy** is a B2B training platform offering Qualiopi-certified courses in Rust, WebAssembly, Embedded Systems, and IoT. Bilingual (EN/FR).

### Tech stack
- **Framework**: Nuxt 4 + Vue 3 (TypeScript strict)
- **Styling**: Tailwind CSS v4 via `@nuxt/ui`
- **Icons**: Lucide via `@nuxt/icon`
- **i18n**: `@nuxtjs/i18n` — EN default, FR with `/fr` prefix
- **Fonts**: Outfit (body) · Space Grotesk (headings, `font-family` inline)

### Folder structure
```
components/sections/   # Page sections (HeroSection, TrainingCatalogSection, …)
components/cards/      # TrainingCard, ExpertCard, ResourceCard, …
components/ui/         # UiButton, UiBadge, UiFilterChip, …
pages/                 # File-based routing (index.vue)
assets/css/main.css    # @theme tokens — source of truth for colors/fonts
i18n/locales/          # en.json, fr.json
types/                 # ITraining, ITrainingType, …
```

### Dev server
```bash
npm run dev   # http://localhost:3000 (falls back to :3001 if port taken)
```

### Design tokens (from `assets/css/main.css`)
| Token | Value | Use |
|---|---|---|
| `--color-burgundy` | `#560D08` | Brand dark, nav, badges |
| `--color-orange` | `#F0441A` | Primary CTAs |
| `--color-red` | `#F92D04` | Section headings |
| `--color-teal` | `#66F2E3` | Accents, success badges |
| `--color-cream` | `#F9F9F6` | Off-white backgrounds |

### Static assets (`public/`)

Images and expert photos are already present. The following files still need to be created before going live:

**`public/legal/`**
| File | Linked from |
|------|------------|
| `mentions.pdf` | Footer → Legal Mentions |
| `privacy.pdf` | Footer → Privacy Policy |

**`public/quality/`**
| File | Linked from |
|------|------------|
| `qualiopi-certification.pdf` | Resources → Compliance tab |
| `regulations.pdf` | Resources → Compliance tab |
| `qa-process.pdf` | Resources → Compliance tab |

**`public/pdfs/`** — one PDF per training program
| File | Training |
|------|---------|
| `rust-fundamentals-short.pdf` | Rust Fundamentals (Short Format) |
| `rust-fundamentals-project.pdf` | Rust Fundamentals (With Final Project) |
| `rust-fundamentals-extended.pdf` | Rust Fundamentals (Extended Format) |
| `embedded-rust.pdf` | Embedded Development in Rust |
| `async-rust.pdf` | Asynchronous Rust |
| `web-rust.pdf` | Web Development in Rust |
| `tauri-desktop.pdf` | Desktop Applications with Tauri |
| `rust-interop-c.pdf` | Rust Interoperability with C/C++ |
| `rust-interop-python.pdf` | Rust Interoperability with Python |
| `tdd-rust.pdf` | Test-Driven Development in Rust |
| `debugging-rust.pdf` | Debugging in Rust |
| `wasm-rust.pdf` | WebAssembly with Rust |
| `performance-rust.pdf` | Performance Evaluation in Rust |

---

### Animation conventions
- **On-load (hero)**: scoped `@keyframes` with `animation-fill-mode: both` and staggered `animation-delay` utility classes (`.hero-delay-100` … `.hero-delay-600`). No JS, no IntersectionObserver.
- **On-scroll (cards/sections)**: IntersectionObserver toggles `opacity-0 translate-y-*` → `opacity-100 translate-y-0` Tailwind classes; stagger via index × 150 ms.
- **Easing**: always `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Design reference**: https://author-wreath-53160628.figma.site/

---

## gstack

Use the `/browse` skill from gstack for all web browsing.
**Never use `mcp__Claude_in_Chrome__*` tools directly.**

### Available skills

| Skill | Purpose |
|---|---|
| `/browse` | Web browsing (always use this) |
| `/plan-ceo-review` | CEO-level plan review |
| `/plan-eng-review` | Engineering plan review |
| `/plan-design-review` | Design plan review |
| `/design-consultation` | Design consultation |
| `/review` | General review |
| `/ship` | Ship / deploy workflow |
| `/qa` | Full QA pass |
| `/qa-only` | QA without other steps |
| `/qa-design-review` | QA with design review |
| `/setup-browser-cookies` | Set up browser auth cookies |
| `/retro` | Retrospective |
| `/document-release` | Document a release |
