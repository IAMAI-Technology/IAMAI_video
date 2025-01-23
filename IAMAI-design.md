# IAMAI Design System

## Colors

### Light Mode
- Background: `hsl(0 0% 100%)` - Pure white
- Foreground: `hsl(0 0% 3.9%)` - Near black text
- Primary: `hsl(0 0% 9%)` - Dark gray
- Secondary: `hsl(0 0% 96.1%)` - Light gray
- Muted: `hsl(0 0% 96.1%)` - Light gray
- Accent: `hsl(0 0% 96.1%)` - Light gray
- Border: `hsl(0 0% 89.8%)` - Medium light gray

Chart Colors:
- Chart 1: `hsl(12 76% 61%)` - Coral
- Chart 2: `hsl(173 58% 39%)` - Teal
- Chart 3: `hsl(197 37% 24%)` - Dark blue
- Chart 4: `hsl(43 74% 66%)` - Yellow
- Chart 5: `hsl(27 87% 67%)` - Orange

### Dark Mode
- Background: `hsl(0 0% 3.9%)` - Near black
- Foreground: `hsl(0 0% 98%)` - Near white text
- Primary: `hsl(0 0% 98%)` - Near white
- Secondary: `hsl(0 0% 14.9%)` - Very dark gray
- Muted: `hsl(0 0% 14.9%)` - Very dark gray
- Accent: `hsl(0 0% 14.9%)` - Very dark gray
- Border: `hsl(0 0% 14.9%)` - Very dark gray

Chart Colors:
- Chart 1: `hsl(220 70% 50%)` - Blue
- Chart 2: `hsl(160 60% 45%)` - Green
- Chart 3: `hsl(30 80% 55%)` - Orange
- Chart 4: `hsl(280 65% 60%)` - Purple
- Chart 5: `hsl(340 75% 55%)` - Pink

## Typography

### Font Families
- Primary Sans: Geist Sans (`--font-geist-sans`)
- Serif: Instrument Serif (`--font-serif`)
- Monospace: Geist Mono (`--font-geist-mono`)

### Text Styles

Headings:
```css
h1 {
  font-family: var(--font-serif);
  font-size: 3.5rem; /* 56px */
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}

h2 {
  font-family: var(--font-serif);
  font-size: 2.25rem; /* 36px */
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
}

h3 {
  font-family: var(--font-geist-sans);
  font-size: 1.875rem; /* 30px */
  line-height: 1.3;
  font-weight: 600;
}

h4 {
  font-family: var(--font-geist-sans);
  font-size: 1.5rem; /* 24px */
  line-height: 1.4;
  font-weight: 600;
}
```

Body Text:
```css
p {
  font-family: var(--font-geist-sans);
  font-size: 1rem; /* 16px */
  line-height: 1.6;
  font-weight: 400;
}

.large {
  font-size: 1.125rem; /* 18px */
  line-height: 1.5;
}

.small {
  font-size: 0.875rem; /* 14px */
  line-height: 1.5;
}

.tiny {
  font-size: 0.75rem; /* 12px */
  line-height: 1.5;
}
```

## Spacing

### Grid
- Base unit: 4px
- Spacing scale:
  - xs: 4px (`space-1`)
  - sm: 8px (`space-2`)
  - md: 16px (`space-4`)
  - lg: 24px (`space-6`)
  - xl: 32px (`space-8`)
  - 2xl: 48px (`space-12`)
  - 3xl: 64px (`space-16`)

### Layout
- Container max-width: 1280px
- Gutter: 16px (mobile), 24px (tablet), 32px (desktop)
- Column gap: 24px

## Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

```css
/* Breakpoint variables */
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-2xl: 1536px;
```

## Components

### Buttons

Primary Button:
```css
.btn-primary {
  background-color: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  opacity: 0.9;
}
```

Secondary Button:
```css
.btn-secondary {
  background-color: var(--secondary);
  color: var(--primary);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: var(--muted);
}
```

### Cards

Default Card:
```css
.card {
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

### Inputs

Text Input:
```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans);
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--primary);
}
```

## Animations

### Transitions
- Default: `transition: all 0.2s ease`
- Slow: `transition: all 0.3s ease`
- Fast: `transition: all 0.1s ease`

### Hover States
```css
.hover-opacity {
  transition: opacity 0.2s ease;
}

.hover-opacity:hover {
  opacity: 0.8;
}

.hover-scale {
  transition: transform 0.2s ease;
}

.hover-scale:hover {
  transform: scale(1.02);
}
```

## Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

## Z-index Scale
```css
--z-negative: -1;
--z-elevate: 1;
--z-sticky: 100;
--z-drawer: 200;
--z-modal: 300;
--z-popover: 400;
--z-toast: 500;
```