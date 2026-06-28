# Portfolio Design System

## 1\. Purpose

This document defines the visual rules for the portfolio.

Every page and component should use the colors, typography, spacing, shadows, borders, and responsive rules documented here.

The goal is to maintain a consistent design instead of choosing new values while building each component.

## 2\. Design Philosophy

The portfolio should feel:

- Modern
- Clean
- Spacious
- Professional
- Approachable
- Easy to navigate
- Easy to read
- Fast and responsive

The visual style should use:

- Strong, readable typography
- Generous whitespace
- Rounded cards
- Soft drop shadows
- Clear visual hierarchy
- Subtle hover effects
- Consistent spacing
- Accessible color contrast

The design should avoid:

- Excessive animation
- Cluttered layouts
- Overly bright colors
- Heavy shadows
- Inconsistent spacing
- Unnecessary decorative elements
- Large blocks of difficult-to-read text

## 3\. Color Palette

### Primary Background

Used for the main page background.

- Name: Slate White
- Value: #f8fafc
- CSS variable: --color-background

### Secondary Background

Used to visually separate sections from the main page background.

- Name: Light Slate
- Value: #f1f5f9
- CSS variable: --color-background-secondary

### Surface

Used for cards, navigation containers, article containers, and other elevated elements.

- Name: White
- Value: #ffffff
- CSS variable: --color-surface

### Surface Hover

Used when a clickable surface is hovered.

- Value: #f8fafc
- CSS variable: --color-surface-hover

### Primary Text

Used for headings and important body text.

- Name: Dark Slate
- Value: #0f172a
- CSS variable: --color-text-primary

### Secondary Text

Used for descriptions and supporting text.

- Value: #475569
- CSS variable: --color-text-secondary

### Muted Text

Used for dates, metadata, captions, and less important information.

- Value: #64748b
- CSS variable: --color-text-muted

### Primary Brand Color

Used for primary buttons, links, focus indicators, and important interactive elements.

- Name: Blue
- Value: #2563eb
- CSS variable: --color-primary

### Primary Hover Color

Used when primary interactive elements are hovered.

- Value: #1d4ed8
- CSS variable: --color-primary-hover

### Primary Active Color

Used when primary interactive elements are pressed or active.

- Value: #1e40af
- CSS variable: --color-primary-active

### Accent Color

Used sparingly for badges, decorative elements, and visual highlights.

- Name: Teal
- Value: #14b8a6
- CSS variable: --color-accent

### Accent Hover Color

- Value: #0d9488
- CSS variable: --color-accent-hover

### Border Color

Used for card borders, dividers, form fields, and navigation boundaries.

- Value: #e2e8f0
- CSS variable: --color-border

### Strong Border Color

Used for more visible boundaries and active form controls.

- Value: #cbd5e1
- CSS variable: --color-border-strong

### Success Color

Used for successful actions and positive status messages.

- Value: #16a34a
- CSS variable: --color-success

### Warning Color

Used for warnings and attention states.

- Value: #d97706
- CSS variable: --color-warning

### Danger Color

Used for destructive actions and error messages.

- Value: #dc2626
- CSS variable: --color-danger

## 4\. CSS Custom Properties

These values will later be added to the main global CSS file.

:root {

/\* Colors \*/

\--color-background: #f8fafc;

\--color-background-secondary: #f1f5f9;

\--color-surface: #ffffff;

\--color-surface-hover: #f8fafc;

\--color-text-primary: #0f172a;

\--color-text-secondary: #475569;

\--color-text-muted: #64748b;

\--color-primary: #2563eb;

\--color-primary-hover: #1d4ed8;

\--color-primary-active: #1e40af;

\--color-accent: #14b8a6;

\--color-accent-hover: #0d9488;

\--color-border: #e2e8f0;

\--color-border-strong: #cbd5e1;

\--color-success: #16a34a;

\--color-warning: #d97706;

\--color-danger: #dc2626;

/\* Typography \*/

\--font-family-primary:

Inter,

system-ui,

\-apple-system,

BlinkMacSystemFont,

"Segoe UI",

sans-serif;

\--font-size-xs: 0.75rem;

\--font-size-sm: 0.875rem;

\--font-size-base: 1rem;

\--font-size-lg: 1.125rem;

\--font-size-xl: 1.25rem;

\--font-size-2xl: 1.5rem;

\--font-size-3xl: 1.875rem;

\--font-size-4xl: 2.25rem;

\--font-size-5xl: 3rem;

\--font-size-6xl: 3.75rem;

\--font-weight-regular: 400;

\--font-weight-medium: 500;

\--font-weight-semibold: 600;

\--font-weight-bold: 700;

\--line-height-tight: 1.2;

\--line-height-heading: 1.3;

\--line-height-body: 1.7;

/\* Spacing \*/

\--space-1: 0.25rem;

\--space-2: 0.5rem;

\--space-3: 0.75rem;

\--space-4: 1rem;

\--space-5: 1.25rem;

\--space-6: 1.5rem;

\--space-8: 2rem;

\--space-10: 2.5rem;

\--space-12: 3rem;

\--space-16: 4rem;

\--space-20: 5rem;

\--space-24: 6rem;

/\* Border Radius \*/

\--radius-sm: 0.5rem;

\--radius-md: 0.75rem;

\--radius-lg: 1.25rem;

\--radius-xl: 1.75rem;

\--radius-pill: 999px;

/\* Shadows \*/

\--shadow-sm: 0 4px 12px rgba(15, 23, 42, 0.06);

\--shadow-md: 0 10px 30px rgba(15, 23, 42, 0.08);

\--shadow-lg: 0 20px 50px rgba(15, 23, 42, 0.12);

\--shadow-hover: 0 24px 60px rgba(15, 23, 42, 0.14);

/\* Layout \*/

\--container-width: 1200px;

\--content-width: 760px;

\--header-height: 72px;

/\* Transitions \*/

\--transition-fast: 150ms ease;

\--transition-base: 250ms ease;

\--transition-slow: 350ms ease;

}

## 5\. Typography

### Primary Font

The primary font should be:

Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Inter may be added later through a font provider or installed locally through the project.

Until then, the system font fallback will keep the website readable and fast.

### Font Weights

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Heading Rules

Headings should:

- Use the primary text color
- Use semibold or bold font weight
- Use tight line height
- Maintain a clear hierarchy
- Avoid excessively long line lengths

### Body Text Rules

Body text should:

- Use the secondary text color
- Use a comfortable line height
- Remain readable on mobile devices
- Avoid paragraphs that are too wide

### Typography Scale

| Element      | Desktop Size | Suggested Weight |
| ------------ | ------------ | ---------------- |
| Hero heading | 3.75rem      | 700              |
| Heading 1    | 3rem         | 700              |
| Heading 2    | 2.25rem      | 700              |
| Heading 3    | 1.5rem       | 600              |
| Heading 4    | 1.25rem      | 600              |
| Large body   | 1.125rem     | 400              |
| Body         | 1rem         | 400              |
| Small text   | 0.875rem     | 400              |
| Caption      | 0.75rem      | 500              |

Hero and page headings should become smaller on mobile screens.

## 6\. Spacing Scale

The design will use a consistent spacing scale based primarily on multiples of four pixels.

| Token       | Value |
| ----------- | ----- |
| \--space-1  | 4px   |
| \--space-2  | 8px   |
| \--space-3  | 12px  |
| \--space-4  | 16px  |
| \--space-5  | 20px  |
| \--space-6  | 24px  |
| \--space-8  | 32px  |
| \--space-10 | 40px  |
| \--space-12 | 48px  |
| \--space-16 | 64px  |
| \--space-20 | 80px  |
| \--space-24 | 96px  |

### Spacing Rules

- Small gaps between icons and labels should use 8px.
- Gaps between related elements should use 12px or 16px.
- Card padding should usually use 24px or 32px.
- Major page sections should use between 64px and 96px of vertical spacing.
- Mobile section spacing may be reduced to between 48px and 64px.
- Avoid arbitrary spacing values unless a specific layout requires one.

## 7\. Border Radius

### Small Radius

- Value: 8px
- Used for small controls, tags, and compact elements

### Medium Radius

- Value: 12px
- Used for buttons, inputs, and smaller cards

### Large Radius

- Value: 20px
- Used for project cards, blog cards, and large containers

### Extra-Large Radius

- Value: 28px
- Used sparingly for hero panels and major visual sections

### Pill Radius

- Value: 999px
- Used for tags, badges, and pill-shaped buttons

## 8\. Shadows

Shadows should create depth without making the interface appear heavy.

### Small Shadow

Used for subtle elevation.

0 4px 12px rgba(15, 23, 42, 0.06)

### Medium Shadow

Used for project cards, blog cards, and primary containers.

0 10px 30px rgba(15, 23, 42, 0.08)

### Large Shadow

Used for important visual sections and featured content.

0 20px 50px rgba(15, 23, 42, 0.12)

### Hover Shadow

Used when an interactive card is hovered.

0 24px 60px rgba(15, 23, 42, 0.14)

### Shadow Rules

- Shadows should remain soft.
- Avoid pure black shadows.
- Do not add shadows to every element.
- Interactive cards may increase their shadow on hover.
- Text should never use a drop shadow.
- Buttons should use little or no shadow.

## 9\. Layout

### Main Container

The main page container should have:

- Maximum width: 1200px
- Automatic left and right margins
- Responsive horizontal padding

Suggested behavior:

- Mobile padding: 16px
- Tablet padding: 24px
- Desktop padding: 32px

### Article Container

Long-form blog content should use a narrower maximum width.

- Maximum width: 760px
- Centered within the page
- Comfortable line length for reading

### Section Layout

Each major section should:

- Have a clear heading
- Use consistent vertical spacing
- Align with the main container
- Avoid unnecessary nested containers

## 10\. Buttons

### Primary Button

Used for the main action on a page or within a section.

Examples:

- View Projects
- Read Blog
- View Live Demo
- Contact Me

Style:

- Primary blue background
- White text
- Medium border radius
- Semibold text
- Clear hover and focus states

### Secondary Button

Used for supporting actions.

Examples:

- View GitHub
- Learn More
- Back to Projects

Style:

- White or transparent background
- Primary-colored text
- Visible border
- Medium border radius

### Ghost Button

Used for low-priority actions and navigation controls.

Style:

- Transparent background
- Primary or secondary text
- Subtle background on hover

### Danger Button

Reserved for destructive actions in future application projects.

Style:

- Danger-colored background
- White text
- Clear warning appearance

### Button Rules

- Buttons should have a minimum comfortable click area.
- Buttons should use descriptive labels.
- Buttons should not rely only on color to communicate state.
- Icons may support button text but should not replace text unnecessarily.
- Disabled buttons should have clear visual treatment.
- Focus states must remain visible.

## 11\. Cards

### Project Card

A project card should contain:

- Project image or visual preview
- Project title
- Short description
- Technology tags
- Link to the project case study
- Optional live demo link

Style:

- White surface
- Large border radius
- Subtle border
- Medium shadow
- Hover lift
- Increased hover shadow

### Blog Card

A blog card should contain:

- Article title
- Publication date
- Short description
- Tags
- Link to the full article

Style:

- White surface
- Large border radius
- Subtle border
- Soft shadow
- Clear title hierarchy

### Feature Card

A feature card may be used to explain skills, services, or portfolio features.

Style:

- Simple layout
- Icon or small visual
- Heading
- Short paragraph
- Minimal interaction unless clickable

### Card Hover Behavior

Clickable cards may:

- Move upward by approximately 4px
- Increase shadow slightly
- Strengthen border color
- Transition over 250ms

Non-clickable cards should not use hover movement that implies interaction.

## 12\. Navigation

### Desktop Navigation

The desktop header should contain:

- Name or logo on the left
- Navigation links on the right
- Clear active-page state
- Optional contact button

### Mobile Navigation

The mobile header should contain:

- Name or logo
- Menu button
- Expandable navigation menu

### Header Behavior

The header may become sticky after the base layout is complete.

If sticky behavior is used:

- The header should remain readable over page content.
- The header should use a subtle background.
- A light border or shadow may separate it from the page.
- Mobile navigation must remain keyboard accessible.

## 13\. Links

Links should:

- Use the primary brand color where appropriate
- Have a visible hover state
- Have a visible focus state
- Never rely only on color when context is unclear
- Use meaningful text instead of labels such as "click here"

Navigation links may use the primary text color and change to the primary brand color when active or hovered.

## 14\. Tags and Badges

Tags will be used for:

- Technologies
- Blog topics
- Project categories
- Project status

Style:

- Pill shape
- Small text
- Muted or lightly tinted background
- Adequate contrast
- Consistent spacing

Tags should support the content rather than overwhelm the card.

## 15\. Forms

The contact page may initially use direct contact links rather than a form.

If a form is added later, form controls should use:

- Clear labels
- Visible borders
- Medium border radius
- Sufficient internal padding
- Visible focus states
- Helpful validation messages
- Accessible error descriptions

Placeholder text must not replace visible labels.

## 16\. Images

Images should:

- Be responsive
- Preserve their aspect ratio
- Include descriptive alternative text
- Use rounded corners where appropriate
- Use optimized file formats
- Avoid unnecessary large file sizes

Project screenshots may use:

- Large border radius
- Subtle border
- Soft shadow
- Consistent aspect ratios within card grids

Decorative images should use empty alternative text.

## 17\. Icons

Icons should:

- Use a consistent visual style
- Use consistent stroke weight
- Use consistent sizing
- Support text rather than replace it
- Include accessible labels when used without visible text

Preferred icon style:

- Simple outline icons
- Minimal detail
- Neutral or primary color

An icon library will not be selected until icons are actually needed.

## 18\. Animation and Interaction

Animations should remain subtle and functional.

Allowed effects include:

- Fade-in
- Small upward movement
- Card hover lift
- Button color transitions
- Navigation menu transitions

### Timing

- Fast interaction: 150ms
- Standard interaction: 250ms
- Larger transition: 350ms

### Animation Rules

- Avoid long or distracting animation.
- Avoid animating every page element.
- Animation should never block interaction.
- Respect the user's reduced-motion preference.
- Hover effects should not cause major layout shifts.

## 19\. Responsive Breakpoints

The design will be mobile-first.

### Mobile

- Width: 0px to 639px
- Single-column layouts
- Reduced heading sizes
- Reduced section padding
- Mobile navigation
- Full-width cards and buttons where appropriate

### Tablet

- Width: 640px to 1023px
- One or two-column layouts
- Increased horizontal padding
- Larger typography where appropriate

### Desktop

- Width: 1024px to 1279px
- Multi-column project grids
- Full desktop navigation
- Larger section spacing

### Wide Desktop

- Width: 1280px and above
- Content remains constrained by the main container
- Whitespace increases rather than allowing unlimited content width

### Breakpoint Reference

/\* Mobile-first base styles \*/

/\* Tablet \*/

@media (min-width: 640px) {

}

/\* Desktop \*/

@media (min-width: 1024px) {

}

/\* Wide Desktop \*/

@media (min-width: 1280px) {

}

## 20\. Accessibility

Accessibility is a core requirement rather than a final enhancement.

The portfolio should include:

- Semantic HTML
- Logical heading order
- Keyboard-accessible navigation
- Visible focus indicators
- Sufficient color contrast
- Descriptive link text
- Alternative text for meaningful images
- Labels for form fields
- Reduced-motion support
- Clear error messages
- Appropriate ARIA attributes only when semantic HTML is insufficient

### Focus Style

Interactive elements should use a visible focus outline.

Suggested focus style:

:focus-visible {

outline: 3px solid rgba(37, 99, 235, 0.35);

outline-offset: 3px;

}

### Reduced Motion

@media (prefers-reduced-motion: reduce) {

\*,

\*::before,

\*::after {

scroll-behavior: auto;

transition-duration: 0.01ms !important;

animation-duration: 0.01ms !important;

animation-iteration-count: 1 !important;

}

}

## 21\. Component Consistency Rules

Every component should:

- Use design tokens instead of random values
- Use consistent spacing
- Use the established color palette
- Include hover and focus states when interactive
- Work on mobile screens
- Use semantic HTML
- Avoid unnecessary wrappers
- Avoid duplicated CSS when a shared style is appropriate

Before adding a new token, determine whether an existing token already solves the problem.

## 22\. Initial Theme Decision

The first production version will use a light theme.

A dark theme may be considered after version 1.0.0, but it is not part of the initial portfolio scope.

This keeps the first version focused and prevents the design system from doubling in complexity before the core portfolio is finished.

## 23\. Definition of Done

The design system is complete when:

- The core color palette has exact values.
- Typography rules are documented.
- Spacing tokens are documented.
- Border-radius tokens are documented.
- Shadow tokens are documented.
- Layout widths are documented.
- Button rules are documented.
- Card rules are documented.
- Responsive breakpoints are documented.
- Accessibility requirements are documented.
- The CSS custom properties are ready to be transferred into the project's global stylesheet.

## 24\. Current Scope

This document defines the initial light-theme design system for the portfolio.

The following items are intentionally postponed:

- Dark mode
- Theme switching
- Advanced animation
- Custom illustration systems
- Multiple color themes
- Complex component variants
- Third-party component libraries
- CSS frameworks

These features should not be added until the initial portfolio has reached version 1.0.0.
