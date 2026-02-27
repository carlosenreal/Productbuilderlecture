# Blueprint: Dinner Menu Recommendation Site (Multi-language)

## Project Overview
A modern web application that helps users decide what to eat for dinner. It provides random menu suggestions from various cuisines and keeps track of recently recommended dishes. Now supports both Korean and English, includes a partnership inquiry form, and features a Disqus comment section.

## Features
- **Menu Recommendation:** Randomly selects a delicious dinner menu from a curated list.
- **Recommendation History:** Displays the last few recommended menus.
- **Modern UI:** Responsive design with food-themed aesthetics and smooth transitions.
- **Theme Support:** Switch between Light (White) and Dark modes (persisted in localStorage).
- **Multi-language:** Supports Korean (`index.html`) and English (`en.html`).
- **Partnership Inquiry:** A simple contact form powered by Formspree for business inquiries.
- **Community Interaction:** Integrated Disqus comment section for user feedback and discussion.
- **Monetization:** Google AdSense integration for ad revenue.

## Technical Details
- **Frontend:** Vanilla HTML5, CSS3, and ES6+ JavaScript.
- **Styling:** CSS variables for theming, Flexbox for layout.
- **Logic:** Array-based random selection for menus, language detection via `lang` attribute.
- **Storage:** `localStorage` for theme preference.
- **Integration:** 
    - Formspree (`https://formspree.io/f/mdalyjaq`) for form handling.
    - Disqus (`productbuilderlecture.disqus.com`) for comments.
    - Google AdSense (`ca-pub-2082859513043918`) for monetization.

## Current Plan: Add Google AdSense
1.  **HTML Update:**
    *   Add AdSense meta tag and script tag to `en.html` (already present in `index.html`).
2.  **Verification:**
    *   Ensure `ads.txt` is correctly configured.

## Steps
- [x] Add Disqus section to `index.html`.
- [x] Add Disqus section to `en.html`.
- [x] Add AdSense tags to `en.html`.
- [x] Verify `ads.txt` content.
- [x] Commit and push to GitHub.
