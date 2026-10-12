# TASK DECOMPOSITION — HW1: Production Portfolio

## 1. Project Overview

**Project:** HW1 — Production Portfolio

**Technology Stack:**
- HTML5 semantic elements
- Modern CSS3
- Vanilla JavaScript (ES6+)

**Development Constraints:**
- No jQuery, Bootstrap, Tailwind CSS, or external CDNs.
- Use semantic HTML landmarks and maintain zero `<div>` elements for layout.
- Follow a mobile-first responsive design approach, starting at 375px viewport width.
- Use `const` by default; use `let` only when reassignment is necessary.
- Never use `innerHTML` to render untrusted or user-provided input.
- Implement changes incrementally through atomic commits.
- Each task must be implemented, verified, and committed separately.
- One-shot AI-generated implementation is prohibited. Every task must be reviewed and verified before proceeding to the next task.

## 2. Work Breakdown Structure (WBS)

### T-01 — Semantic DOM Landmarks

**Objective:**

Establish an accessible and semantic HTML document structure that provides clear navigation landmarks and supports keyboard users and assistive technologies.

**Files involved:**
- `index.html`

**Scope:**
- Define the document language as English using `lang="en"`.
- Include UTF-8 character encoding and a responsive viewport declaration.
- Implement semantic `header`, `nav`, `main`, and `footer` landmarks.
- Assign appropriate landmark roles where required by the project specification.
- Add a skip link as the first focusable element in the document body, targeting `#main-content`.
- Ensure exactly one `<h1>` is present.
- Maintain a logical heading hierarchy without skipping levels.
- Use zero `<div>` elements for layout.

**Verification criteria:**
- [ ] The document passes HTML validation.
- [ ] The required semantic landmarks are present.
- [ ] The skip link is the first focusable element and works with keyboard navigation.
- [ ] The skip link target exists and receives focus appropriately.
- [ ] Exactly one `<h1>` exists.
- [ ] No layout `<div>` elements are used.
- [ ] The page can be navigated using a keyboard without requiring a mouse.

**Expected commit:**

`feat(html): semantic landmark tree`

---

### T-02 — Design Tokens and CSS Reset

**Objective:**

Establish consistent design tokens and reset rules to ensure predictable styling, maintainable CSS, and compatibility with light and dark color preferences.

**Files involved:**
- `css/reset.css`
- `css/theme.css`
- `index.html`

**Scope:**
- Apply `box-sizing: border-box` consistently.
- Remove unwanted default margins where appropriate.
- Define reusable CSS custom properties in `:root`.
- Establish color, typography, spacing, and other necessary design tokens.
- Implement system color preference handling using `prefers-color-scheme`.
- Maintain sufficient foreground/background contrast.
- Organize styles into separate files rather than embedding large inline styles.

**Verification criteria:**
- [ ] All elements use predictable box sizing.
- [ ] Design tokens are defined and reused consistently.
- [ ] The interface responds appropriately to the system light/dark preference.
- [ ] Text and interactive controls remain readable in both color schemes.
- [ ] No external CSS frameworks or CDNs are used.
- [ ] Stylesheets load successfully without console errors.

**Expected commit:**

`feat(css): design tokens and reset`

---

### T-03 — Responsive Grid Layout

**Objective:**

Build a mobile-first, responsive layout that adapts to available screen space without horizontal overflow.

**Files involved:**
- `css/grid.css`
- `css/skeleton.css`
- `index.html`

**Scope:**
- Establish the main content layout and spacing.
- Implement a responsive grid using `repeat(auto-fit, minmax(280px, 1fr))` where appropriate.
- Ensure project cards and other repeated content adapt to different viewport widths.
- Use CSS Grid and Flexbox where appropriate.
- Avoid fixed widths that break smaller screens.
- Preserve readable content widths and consistent spacing.
- Use semantic elements instead of layout `<div>` elements.

**Verification criteria:**
- [ ] The layout works at a viewport width of 375px.
- [ ] The layout adapts to tablet and desktop widths.
- [ ] Grid items wrap naturally based on available space.
- [ ] No unintended horizontal scrolling occurs.
- [ ] Text and controls remain visible and usable at narrow widths.
- [ ] Browser resizing does not break the page layout.
- [ ] No external CSS frameworks are used.

**Expected commit:**

`feat(css): responsive grid layout`

---

### T-04 — Theme Toggle JavaScript

**Objective:**

Implement an accessible theme toggle that allows users to switch themes and preserves their explicit preference across page reloads.

**Files involved:**
- `js/theme-toggle.js`
- `css/theme.css`
- `index.html`

**Scope:**
- Use modern JavaScript with `const` by default and `let` only when reassignment is required.
- Toggle the `dark-theme` class using `classList`.
- Store the selected theme using the `localStorage` key `theme`.
- Restore the saved preference when the page loads.
- Update the toggle's `aria-pressed` attribute to reflect the active state.
- Ensure the control is keyboard accessible and has an accessible name.
- Keep JavaScript separate from HTML.
- Avoid inline event handlers such as `onclick`.

**Verification criteria:**
- [ ] The theme toggle switches between light and dark themes.
- [ ] The correct `dark-theme` class is applied to the document body.
- [ ] The selected theme is saved under `localStorage` key `theme`.
- [ ] The saved preference is restored after refreshing the page.
- [ ] The `aria-pressed` value accurately reflects the toggle state.
- [ ] The control works with keyboard interaction.
- [ ] No inline event handlers are present.
- [ ] No JavaScript errors occur during initialization or theme switching.

**Expected commit:**

`feat(js): accessible persistent theme toggle`

---

## 3. Mandatory Milestones

### M1 — WCAG 2.2 AA Accessibility Audit

**Objective:**

Audit the portfolio against applicable WCAG 2.2 Level AA requirements, with particular attention to semantic landmarks, color contrast, keyboard accessibility, and visible focus indicators.

**Files involved:**
- `index.html`
- `css/reset.css`
- `css/theme.css`
- `css/grid.css`
- Relevant JavaScript files

**Verification criteria:**
- [ ] Validate semantic landmarks and heading hierarchy.
- [ ] Check text contrast against WCAG 2.2 AA requirements.
- [ ] Verify keyboard navigation and visible focus indicators.
- [ ] Check that interactive controls have accessible names and states.
- [ ] Test the skip link and theme toggle.
- [ ] Record and resolve identified accessibility issues.
- [ ] Re-run the accessibility audit after fixes.

**Expected commit:**

`fix(a11y): contrast & landmarks`

**Completion condition:**

The applicable accessibility checks pass, and identified contrast and landmark issues are resolved.

---

### M2 — Keyboard Navigation and Focus Trap Audit

**Objective:**

Verify that keyboard focus remains predictable and that users can enter and leave interactive components without becoming unintentionally trapped.

**Files involved:**
- `index.html`
- `css/theme.css`
- Relevant JavaScript files, including `js/theme-toggle.js` if applicable
- Any navigation or overlay component files, if introduced

**Verification criteria:**
- [ ] Navigate the entire page using Tab and Shift+Tab.
- [ ] Verify that focus indicators remain visible.
- [ ] Confirm that the skip link works correctly.
- [ ] Check menus, dialogs, and overlays for unintended focus traps, if present.
- [ ] If a modal intentionally traps focus, verify that focus is contained while open and restored appropriately when closed.
- [ ] Ensure users can exit every interactive component using its documented keyboard behavior.
- [ ] Resolve identified keyboard navigation issues.

**Expected commit:**

`fix(nav): keyboard trap prevention`

**Completion condition:**

Keyboard navigation behaves predictably, with no unintended focus traps.

---

### M3 — Strict Content Security Policy and Zero Inline Handlers

**Objective:**

Reduce script injection risk by removing inline event handlers and establishing an appropriate Content Security Policy (CSP).

**Files involved:**
- `index.html`
- `js/theme-toggle.js`
- Any other JavaScript files
- Hosting configuration or HTTP header configuration, if applicable

**Verification criteria:**
- [ ] No inline event handler attributes such as `onclick` or `onload` remain.
- [ ] Interactive behavior is registered through external JavaScript files.
- [ ] No `eval()` or other unnecessary dynamic code execution is used.
- [ ] A restrictive CSP is configured using an appropriate HTTP response header where the hosting environment permits it.
- [ ] The CSP does not unnecessarily allow `unsafe-inline` or `unsafe-eval`.
- [ ] Required scripts and styles continue to work under the configured policy.
- [ ] Browser developer tools show no unexpected CSP violations.
- [ ] Any exceptions required by the implementation are documented and minimized.

**Expected commit:**

`fix(security): strict CSP`

**Completion condition:**

The project has zero inline event handlers, and the configured CSP is verified without breaking required functionality.

---

### M4 — Lighthouse Performance Audit

**Objective:**

Optimize the production portfolio and target a Lighthouse score of 100, with particular attention to performance, accessibility, best practices, and SEO.

**Files involved:**
- `index.html`
- All CSS files
- All JavaScript files
- Image and other static assets
- Hosting configuration, if applicable

**Verification criteria:**
- [ ] Run Lighthouse against the intended production build or deployment.
- [ ] Record the scores for Performance, Accessibility, Best Practices, and SEO.
- [ ] Optimize images and other assets where necessary.
- [ ] Remove unused CSS and JavaScript where practical.
- [ ] Avoid unnecessary network requests and render-blocking resources.
- [ ] Verify responsive behavior and accessibility after optimization.
- [ ] Re-run Lighthouse and record the final results.
- [ ] Confirm a score of 100 in the intended Lighthouse categories and document the tested environment.

**Expected commit:**

`perf: optimize assets`

**Completion condition:**

The final Lighthouse report documents the target score of 100 and the results for the tested categories and environment.

---

## 4. Recommended Implementation Order

| Order | Task | Main deliverable |
|---|---|---|
| 1 | T-01 | Semantic HTML structure |
| 2 | T-02 | CSS reset and design tokens |
| 3 | T-03 | Responsive grid layout |
| 4 | T-04 | Persistent accessible theme toggle |
| 5 | M1 | WCAG 2.2 AA audit and fixes |
| 6 | M2 | Keyboard and focus audit |
| 7 | M3 | CSP and inline-handler audit |
| 8 | M4 | Lighthouse optimization |

Milestones may reveal issues requiring changes to earlier tasks. Such fixes should be implemented and verified before committing the corresponding milestone.

## 5. Atomic Commit Policy

Every task must produce a small, focused commit.

Rules:
1. Implement only the scope of the current task.
2. Review the changes before committing.
3. Run the relevant verification checks.
4. Commit only the files related to the completed task.
5. Do not combine multiple tasks into a single implementation commit.
6. Use the expected commit message specified for each task or milestone.
7. If verification fails, fix the issue before marking the task complete.
8. Do not mark a milestone complete without evidence from the relevant audit or test.

## 6. Definition of Done

A task is considered complete only when:

- [ ] Its implementation matches the stated scope.
- [ ] All applicable verification criteria pass.
- [ ] No unrelated changes are included.
- [ ] The implementation respects the project's technology and security constraints.
- [ ] The changes have been committed using the expected commit message.
- [ ] Any known limitation or failed check is documented.

The project is complete when T-01 through T-04 are verified, all four mandatory milestones have been addressed, and the final production build has been audited.