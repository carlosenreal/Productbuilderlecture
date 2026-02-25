# Blueprint: Lotto Number Generator with Theme Support

## Project Overview
A simple, modern Lotto Number Generator web application built with HTML, CSS, and JavaScript. It allows users to generate 6 random numbers between 1 and 45 and keeps track of recent draw history.

## Features
- **Lotto Number Generation:** Generates 6 unique random numbers.
- **Draw History:** Displays the last 5 sets of generated numbers.
- **Modern UI:** Responsive design with vibrant colors and smooth transitions.
- **Theme Support:** Switch between Light (White) and Dark modes.

## Technical Details
- **Frontend:** Vanilla HTML5, CSS3 (Modern Baseline features), and ES6+ JavaScript.
- **Styling:** CSS variables for easy theming, Container Queries, and Flexbox for layout.
- **Storage:** `localStorage` to persist the user's theme preference.

## Current Plan: Adding Dark/White Mode
1.  **CSS Refactoring:**
    - Introduce CSS variables for colors (background, container, text, button).
    - Define a `.dark-mode` class with overridden variable values.
2.  **HTML Update:**
    - Add a theme toggle button to `index.html`.
3.  **JavaScript Implementation:**
    - Logic to toggle `.dark-mode` on the `body`.
    - Logic to save/load theme preference from `localStorage`.
4.  **Deployment:**
    - Stage and commit changes to the Git repository.

## Steps
- [x] Update `style.css` with CSS variables and dark mode styles.
- [x] Update `index.html` with the theme toggle button.
- [x] Update `main.js` with theme switching logic.
- [x] Verify functionality and styling.
- [x] Commit changes to Git.
