# Anthropic Brand Guidelines Reference

## Quick Reference Card

### Must-Have Elements
- Warm, human-centered color palette
- Clean typography with proper hierarchy
- Generous whitespace
- Consistent use of brand colors
- Accessible contrast ratios

### Never Use
- Cold blues or corporate navy
- Heavy gradients or shadows
- Decorative or script fonts
- Cluttered layouts
- Off-brand colors

## Color Codes Reference

### Primary Colors (Hex/RGB)
| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Anthropic Tan | #D4A574 | 212, 165, 116 | Primary brand, highlights |
| Deep Charcoal | #1a1a1a | 26, 26, 26 | Text, headers |
| Warm White | #FAF7F2 | 250, 247, 242 | Backgrounds |

### Secondary Colors
| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Terracotta | #CC785C | 204, 120, 92 | CTAs, accents, primary charts |
| Soft Sand | #E8DFD5 | 232, 223, 213 | Card backgrounds, borders |
| Muted Sage | #A8B5A0 | 168, 181, 160 | Success states, tertiary |
| Dusty Rose | #C4A4A4 | 196, 164, 164 | Subtle highlights |

### Functional Colors
| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Success | #4A7C59 | 74, 124, 89 | Positive values, gains |
| Error | #B85450 | 184, 84, 80 | Negative values, losses |
| Neutral | #6B6B6B | 107, 107, 107 | Secondary text |

## CSS Variables

```css
:root {
  /* Primary */
  --color-primary: #D4A574;
  --color-text: #1a1a1a;
  --color-background: #FAF7F2;

  /* Secondary */
  --color-accent: #CC785C;
  --color-surface: #E8DFD5;
  --color-success-subtle: #A8B5A0;
  --color-highlight: #C4A4A4;

  /* Functional */
  --color-success: #4A7C59;
  --color-error: #B85450;
  --color-muted: #6B6B6B;

  /* Typography */
  --font-primary: 'Styrene A', 'Inter', system-ui, -apple-system, sans-serif;

  /* Spacing */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

## Chart Color Palette

For data visualizations, use these colors in order:
1. Terracotta: #CC785C
2. Anthropic Tan: #D4A574
3. Muted Sage: #A8B5A0
4. Dusty Rose: #C4A4A4
5. Deep Charcoal: #1a1a1a (for contrast)

For financial data:
- Positive/Gains: #4A7C59 (Success)
- Negative/Losses: #B85450 (Error)
- Neutral: #6B6B6B

## Typography Scale

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| H1 | 32px | 500 | #1a1a1a |
| H2 | 24px | 500 | #1a1a1a |
| H3 | 18px | 500 | #1a1a1a |
| Body | 14px | 400 | #1a1a1a |
| Caption | 12px | 400 | #6B6B6B |
| Small | 11px | 400 | #6B6B6B |

## Common Patterns

### Card Style
```css
.card {
  background: #FFFFFF;
  border: 1px solid #E8DFD5;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(26, 26, 26, 0.06);
}
```

### Button Styles
```css
.btn-primary {
  background: #CC785C;
  color: #FFFFFF;
  border-radius: 6px;
}

.btn-secondary {
  background: transparent;
  color: #1a1a1a;
  border: 1px solid #1a1a1a;
  border-radius: 6px;
}
```

### Navigation
```css
.nav {
  background: #1a1a1a; /* or #FAF7F2 for light */
  color: #FFFFFF; /* or #1a1a1a for light */
}

.nav-item:hover {
  background: rgba(212, 165, 116, 0.2);
}

.nav-item.active {
  border-left: 3px solid #D4A574;
}
```

## Accessibility Notes

### Minimum Contrast Ratios
- Body text on Warm White: 12.5:1 (exceeds WCAG AAA)
- Caption text on Warm White: 5.2:1 (meets WCAG AA)
- White text on Terracotta: 4.6:1 (meets WCAG AA)
- White text on Deep Charcoal: 16.1:1 (exceeds WCAG AAA)

### Font Sizes
- Minimum body text: 14px
- Minimum caption text: 12px
- Touch targets: minimum 44x44px
