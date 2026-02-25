# Blueprint: Dinner Menu Recommendation Site (Multi-language)

## Project Overview
A modern web application that helps users decide what to eat for dinner. It provides random menu suggestions from various cuisines and keeps track of recently recommended dishes. Now supports both Korean and English.

## Features
- **Menu Recommendation:** Randomly selects a delicious dinner menu from a curated list.
- **Recommendation History:** Displays the last few recommended menus.
- **Modern UI:** Responsive design with food-themed aesthetics and smooth transitions.
- **Theme Support:** Switch between Light (White) and Dark modes (persisted in localStorage).
- **Multi-language:** Supports Korean (`index.html`) and English (`en.html`).

## Technical Details
- **Frontend:** Vanilla HTML5, CSS3, and ES6+ JavaScript.
- **Styling:** CSS variables for theming, Flexbox for layout.
- **Logic:** Array-based random selection for menus, language detection via `lang` attribute.
- **Storage:** `localStorage` for theme preference.

## Current Plan: Add Global English Page
1.  **Create English Page:**
    *   Create `en.html` with English translated content.
2.  **Add Navigation:**
    *   Add language switcher (KO/EN) to both `index.html` and `en.html`.
3.  **Update Logic:**
    *   Modify `main.js` to use English menus when on the English page.
4.  **Deployment:**
    *   Commit and push changes to GitHub.

## Steps
- [x] Create `en.html` with English content.
- [x] Add language switcher UI to `index.html` and `en.html`.
- [x] Update `main.js` with English menu data and logic.
- [x] Verify functionality on both language versions.
- [x] Commit and push to GitHub.
