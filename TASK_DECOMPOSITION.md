# HW1 – Production Portfolio
## TASK DECOMPOSITION & WORK BREAKDOWN STRUCTURE (WBS)

### 1. Project Overview

**Objective:** Build a responsive, accessible, and maintainable personal portfolio using Vanilla HTML5, modern CSS, and ES6+ JavaScript.

**Technology constraints:**
- HTML5, CSS3, and Vanilla JavaScript only.
- No jQuery, Bootstrap, Tailwind CSS, or external CDNs.
- Use semantic HTML and maintain accessibility standards.
- Use `const` by default and `let` only when reassignment is required.
- Avoid unsafe `innerHTML` usage and inline event handlers.
- Implement and verify each task independently.
- Use atomic commits, with one clearly defined task per commit.

### 2. Work Breakdown Structure (WBS)

| WBS ID | Task | Scope and Deliverables | Acceptance / Verification Criteria | Expected Commit |
|---|---|---|---|---|
| **T-01** | Semantic DOM Landmarks & Accessibility Contract | Establish the HTML document structure, semantic landmarks, heading hierarchy, and skip link. | `lang="en"`; UTF-8 charset; viewport metadata; exactly one `<h1>`; no skipped heading levels; required semantic landmarks; no `<div>` elements in the initial HTML exercise; skip link is the first focusable element and targets `#main-content`. Verify in DevTools and inspect the DOM. | `feat(html): semantic landmark tree` |
| **T-02** | CSS Reset & Design Tokens | Add a consistent CSS reset, design tokens, base typography, and system-preference theme variables. | Universal box-sizing reset; define the required color tokens and spacing variables; maintain readable contrast; support `prefers-color-scheme: dark`; verify computed styles in DevTools. | `feat(css): add reset and design tokens` |
| **T-03** | Responsive Layout & Project Grid | Implement the base page layout, flexible navigation, and responsive project-card grid. | Use mobile-first CSS; project grid uses `repeat(auto-fit, minmax(280px, 1fr))` or an equivalent approved responsive implementation; prevent horizontal overflow at 375px; ensure project cards and navigation adapt to narrow screens. Verify with responsive device emulation. | `feat(css): implement responsive portfolio layout` |
| **T-04** | Theme Toggle & Persistence | Implement JavaScript theme switching, persistence, and accessible toggle state. | Use `classList` to toggle the theme; persist the selected value in `localStorage` under the key `theme`; restore valid saved preferences on page load; synchronize `aria-pressed` with the current state; handle a missing theme button safely. Verify light/dark switching, page reload, and keyboard activation. | `feat(js): add persistent accessible theme toggle` |
| **T-05** | Accessibility & Quality Audit | Review the completed portfolio for contrast, landmarks, keyboard navigation, and responsive behavior. | Verify text contrast against WCAG AA requirements; confirm semantic landmarks and heading order; ensure keyboard focus is visible; confirm the skip link works; test navigation without creating an unintended keyboard focus trap. Record and fix identified issues. | `fix(a11y): contrast & landmarks` |
| **T-06** | Security & Content Security Policy | Review script and style loading, inline execution, and Content Security Policy configuration. | No inline event handlers; external JavaScript and CSS load from permitted sources; do not weaken `script-src` with `'unsafe-inline'` just to suppress errors; resolve CSP violations; configure `frame-ancestors` through an HTTP response header when required. Verify the served page in DevTools Console and Issues. | `fix(security): strict CSP` |
| **T-07** | Performance, SEO & Final Validation | Validate Lighthouse results and make evidence-based final improvements. | Confirm page title, meta description, document language, and viewport metadata; inspect Performance, Accessibility, Best Practices, and SEO audits; address reported failures; verify there are no avoidable console errors. Record the final Lighthouse results. | `perf: optimize assets` |

### 3. Milestones and Exit Criteria

| Milestone | Related WBS | Definition of Done | Expected Commit / Evidence |
|---|---|---|---|
| **M1 – Accessibility Baseline** | T-01, T-02, T-05 | Semantic landmarks, heading structure, skip link, and WCAG AA contrast checks are complete. | `fix(a11y): contrast & landmarks`; DevTools and accessibility audit evidence. |
| **M2 – Keyboard Navigation Audit** | T-03, T-05 | Navigation and interactive controls work using the keyboard, with visible focus and no unintended focus trap. | `fix(nav): keyboard trap prevention`; keyboard testing evidence. |
| **M3 – Strict CSP** | T-06 | CSP violations are resolved without unnecessarily allowing inline scripts. | `fix(security): strict CSP`; Console and Issues verification. |
| **M4 – Lighthouse Validation** | T-07 | Final Lighthouse audits have been run and remaining failures have been investigated or resolved. | `perf: optimize assets`; final Lighthouse report. |

### 4. Dependency Order

The recommended execution order is:

1. **T-01:** Establish the HTML structure and accessibility contract.
2. **T-02:** Define the CSS reset, design tokens, and theme variables.
3. **T-03:** Build the responsive layout and project grid.
4. **T-04:** Implement the theme toggle and persistence.
5. **T-05:** Audit accessibility and keyboard behavior.
6. **T-06:** Validate and correct the security configuration.
7. **T-07:** Perform final Lighthouse, SEO, and performance validation.

Tasks should be completed and verified in dependency order. If an audit discovers a defect in an earlier task, fix and verify that defect before declaring the affected milestone complete.

### 5. Git Workflow and Verification Rules

Each task must follow this workflow:

1. Review the task scope and acceptance criteria.
2. Make only the changes required for that task.
3. Test the affected functionality independently.
4. Inspect the Git diff to ensure unrelated files or changes are not included.
5. Create one atomic commit for the task.
6. Verify the commit and working-tree status before proceeding.

**Definition of Done for each task:**
- All acceptance criteria for the task pass.
- No unrelated changes are included.
- The relevant verification steps have been completed.
- The expected commit has been created.
- Any discovered defects are documented and addressed within the appropriate task or follow-up commit.

### 6. Out of Scope

Unless explicitly required by the assignment, the following are excluded:
- CSS or JavaScript frameworks and external CDNs.
- Backend services, databases, and authentication systems.
- Unrequested animations or additional UI features.
- Performance optimizations that are not supported by audit evidence.
- Changes that weaken security controls merely to eliminate browser warnings.

### 7. Final Project Completion Criteria

The HW1 portfolio is considered complete when:

- All WBS tasks have been implemented and verified.
- The portfolio is responsive and usable at a viewport width of 375px.
- Semantic HTML and keyboard accessibility requirements are satisfied.
- Theme switching and persistence work correctly.
- CSP and browser Console issues have been investigated and resolved as applicable.
- Lighthouse audits have been rerun, and the results have been recorded.
- All changes are committed atomically and the working tree is clean.
