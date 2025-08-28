# Next.js SCSS Setup Guide

This project is configured with Next.js and SCSS for modern, maintainable styling.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Main layout with SCSS import
│   └── page.tsx            # Homepage with SCSS classes
└── styles/
    ├── main.scss           # Main SCSS file that imports all others
    ├── globals.scss        # Global styles, variables, and mixins
    └── components.scss     # Component-specific styles
```

## SCSS Features

### Variables
- **Colors**: Primary (#00A897), backgrounds (#121212, #0A0A0A), accent (#05A197)
- **Typography**: Consistent heading sizes and text colors
- **Spacing**: Standardized margins and padding

### Mixins
- **Glass Effect**: `@include glass-effect` for frosted glass appearance
- **Card Style**: `@include card-style` for consistent card layouts

### Component Classes
- **Buttons**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`
- **Cards**: `.card`, `.card-glass` (with glass effect)
- **Forms**: `.form-group` with styled inputs and labels
- **Navigation**: `.nav`, `.nav-link` for navigation menus
- **Grid**: `.grid`, `.grid-2`, `.grid-3`, `.grid-4` for responsive layouts

## Usage Examples

### Basic Button
```jsx
<button className="btn btn-primary">Click Me</button>
```

### Glass Effect Card
```jsx
<div className="card card-glass">
  <h3>Glass Card</h3>
  <p>Content with beautiful glass effect</p>
</div>
```

### Form Input
```jsx
<div className="form-group">
  <label htmlFor="email">Email</label>
  <input type="email" id="email" placeholder="Enter email" />
</div>
```

### Responsive Grid
```jsx
<div className="grid grid-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Adding New Styles

1. **Global Styles**: Add to `src/styles/globals.scss`
2. **Component Styles**: Add to `src/styles/components.scss`
3. **Custom Styles**: Add to `src/styles/main.scss` or create new files

### Import New SCSS Files
```scss
// In main.scss
@import 'globals';
@import 'components';
@import 'new-styles'; // Add your new file here
```

## Responsive Design

The project includes mobile-first responsive design:
- Grid layouts automatically stack on mobile
- Typography scales appropriately
- Spacing adjusts for smaller screens

## Color Scheme

- **Primary**: #00A897 (Teal)
- **Background**: #121212 (Dark Gray)
- **Cards**: #1B1B1B (Lighter Dark Gray)
- **Text**: #FFFFFF (White), #CCCCCC (Light Gray)
- **Accent**: #05A197 (Darker Teal)

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Customization

To customize the theme:
1. Modify color variables in `src/styles/globals.scss`
2. Adjust spacing and typography as needed
3. Add new mixins for reusable styles
4. Create additional component classes

## Best Practices

- Use semantic class names
- Leverage SCSS variables for consistency
- Use mixins for repeated patterns
- Keep component styles modular
- Test responsive behavior on multiple devices
