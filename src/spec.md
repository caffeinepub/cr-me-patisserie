# Specification

## Summary
**Goal:** Restructure the single-page website into a multi-page layout with 3-5 separate pages and proper navigation.

**Planned changes:**
- Split the current 7 sections (Hero, Why, Testimonials, MenuHighlights, Celebration, Location, FinalCTA) from HomePage.tsx into 3-5 logical page groupings with distinct routes
- Update Header component to include navigation menu items for all new pages while preserving the admin button and Order Now CTA
- Configure React Router in App.tsx to support the new multi-page structure with routes for each page
- Update internal links, CTAs, and scroll-to-section functionality to work correctly across the new page structure

**User-visible outcome:** Users can navigate between 3-5 distinct pages (e.g., Home, About, Menu, Contact) using a navigation menu, while all existing content and functionality remains accessible.
