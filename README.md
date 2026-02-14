# Interactive rating component

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Screenshot

![Project Screenshot](./interactive_rating_component.png)

### Links

- Solution URL: [Solution URL](https://github.com/kisu-seo/interactive_rating_component)
- Live Site URL: [Live URL](https://kisu-seo.github.io/interactive_rating_component/)

## My process

### Built with

- **Semantic HTML5 Markup** - `<main>`, `<article>`, `<form>` for proper document structure
- **Tailwind CSS CLI** - Build system with `npm run build:css` for optimized output
- **Custom Design System** - Text presets, color palette, and spacing tokens in `tailwind.config.js`
- **Component-Based CSS** - Reusable classes with `@layer components` and `@apply`
- **Pixel-Perfect Design** - Precise values like `w-[327px]`, `h-[356px]` matching design specs
- **Mobile-First Responsive** - Breakpoint-based design (`md:`, `lg:`) for 375px → 768px → 1024px+
- **Flexbox Layout** - Centering and alignment with flex containers
- **Tailwind Peer Pattern** - Radio button + label styling with `.peer` and `peer:checked`
- **Gradient Backgrounds** - Subtle depth with `bg-gradient-to-b from-grey-800 to-grey-850`
- **Vanilla JavaScript** - No frameworks, pure DOM manipulation
- **Form Validation** - Rating selection check before submission
- **State Management** - Simple show/hide toggle with `.hidden` class
- **Smooth Transitions** - `transition-colors duration-200` for interactive elements
- **Accessibility (a11y)** - `aria-hidden`, `sr-only`, focus outlines, keyboard support

## Author

- Website - [Kisu Seo](https://github.com/kisu-seo)
- Frontend Mentor - [@kisu-seo](https://www.frontendmentor.io/profile/kisu-seo)
