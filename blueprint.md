# Blueprint: Dinner Menu Recommendation Site (Multi-language)

## Project Overview
A modern web application that helps users decide what to eat for dinner. It provides random menu suggestions from various cuisines and keeps track of recently recommended dishes. Now supports both Korean and English, includes a partnership inquiry form, features a Disqus comment section, and is optimized for Google AdSense approval.

## Features
- **Enhanced Menu Recommendation:** Provides not just a name, but descriptions, nutritional tips, and "why it's good" for each dish.
- **Recommendation History:** Displays the last few recommended menus.
- **Modern UI:** Responsive design with food-themed aesthetics and smooth transitions.
- **Theme Support:** Switch between Light (White) and Dark modes (persisted in localStorage).
- **Multi-language:** Supports Korean (`index.html`) and English (`en.html`).
- **Partnership Inquiry:** A simple contact form powered by Formspree for business inquiries.
- **Community Interaction:** Integrated Disqus comment section for user feedback and discussion.
- **Monetization:** Google AdSense integration for ad revenue.
- **AdSense Optimization:** Includes mandatory pages (Privacy Policy) and rich textual content.

## Technical Details
- **Frontend:** Vanilla HTML5, CSS3, and ES6+ JavaScript.
- **Styling:** CSS variables for theming, Flexbox for layout.
- **Logic:** Object-based random selection for menus with metadata.
- **Storage:** `localStorage` for theme preference.
- **Integration:** 
    - Formspree (`https://formspree.io/f/mdalyjaq`) for form handling.
    - Disqus (`productbuilderlecture.disqus.com`) for comments.
    - Google AdSense (`ca-pub-2082859513043918`) for monetization.

## Current Plan: AdSense Optimization & High Quality Content
1.  **Content Expansion:**
    *   Update `main.js` with rich menu metadata (descriptions, tips).
    *   Modify UI to display this metadata.
2.  **Mandatory Pages:**
    *   Create `privacy.html` and `privacy_en.html`.
3.  **UI/UX Improvement:**
    *   Add footer with navigation links.
    *   Enhance SEO with meta descriptions.

## Steps
- [x] Add Disqus section to `index.html`.
- [x] Add Disqus section to `en.html`.
- [x] Add AdSense tags to `en.html`.
- [x] Verify `ads.txt` content.
- [ ] Expand menu content with metadata (descriptions/tips).
- [ ] Create Privacy Policy pages.
- [ ] Add footer and navigation links.
- [ ] Final verification and commit.
