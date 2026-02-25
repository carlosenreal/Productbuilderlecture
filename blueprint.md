# Blueprint: Dinner Menu Recommendation Site (Multi-language)

## Project Overview
A modern web application that helps users decide what to eat for dinner. It provides random menu suggestions from various cuisines and keeps track of recently recommended dishes. Now supports both Korean and English, and includes a partnership inquiry form.

## Features
- **Menu Recommendation:** Randomly selects a delicious dinner menu from a curated list.
- **Recommendation History:** Displays the last few recommended menus.
- **Modern UI:** Responsive design with food-themed aesthetics and smooth transitions.
- **Theme Support:** Switch between Light (White) and Dark modes (persisted in localStorage).
- **Multi-language:** Supports Korean (`index.html`) and English (`en.html`).
- **Partnership Inquiry:** A simple contact form powered by Formspree for business inquiries.

## Technical Details
- **Frontend:** Vanilla HTML5, CSS3, and ES6+ JavaScript.
- **Styling:** CSS variables for theming, Flexbox for layout.
- **Logic:** Array-based random selection for menus, language detection via `lang` attribute.
- **Storage:** `localStorage` for theme preference.
- **Integration:** Formspree (`https://formspree.io/f/mdalyjaq`) for form handling.

## Current Plan: Add Partnership Inquiry Form
1.  **HTML Update:**
    *   Add a partnership inquiry form to `index.html` (Korean labels).
    *   Add a partnership inquiry form to `en.html` (English labels).
2.  **Styling Update:**
    *   Style the form to match the modern, clean aesthetic of the site.
    *   Ensure responsiveness.
3.  **Deployment:**
    *   Commit and push changes to GitHub.

## Steps
- [x] Add partnership form to `index.html`.
- [x] Add partnership form to `en.html`.
- [x] Style the form in `style.css`.
- [x] Verify form submission endpoint.
- [x] Commit and push to GitHub.
