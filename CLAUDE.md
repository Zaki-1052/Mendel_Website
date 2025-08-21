# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Betsy Mendel, a lifestyle coach and author of "Hello Awesomeness". The site is a static HTML/CSS/JavaScript website showcasing her book, background, and contact information. It's designed to be hosted on GitHub Pages and served at https://betsymendel.com.

## Architecture & Structure

### Site Architecture
- **Static Website**: Pure HTML, CSS, and vanilla JavaScript - no build tools or package managers
- **Multi-page Structure**: Each section is a separate directory with its own `index.html`
  - Root: Main landing page (Meet Betsy)
  - `/about/`: Book information and description  
  - `/contact/`: Contact form and information
  - `/media/`: Media appearances, TV interviews, and press coverage showcase
  - `/demo/`: Dynamic blog/social media demo (separate functionality)
- **Asset Organization**: 
  - `/public/`: CSS and JavaScript files
  - `/photos/`: Images, media assets, and TV network logos
  - `/media/`: Video files for TV interviews (.mp4 format)
  - `/fonts/`: Custom font files (Helvetica, Futura, Gothic, Impact, Anton)

### File Structure

```
/
├── index.html              # Main landing page
├── public/
│   ├── styles.css         # Main stylesheet
│   ├── demo.css          # Demo page specific styles  
│   └── script.js         # Demo page JavaScript
├── about/index.html       # Book information page
├── contact/index.html     # Contact page with form
├── media/index.html       # Media appearances and press page
├── media/                # TV interview videos
│   ├── 11alive.mp4       # 11Alive NBC interview
│   ├── csb17.mp4         # CBS17 interview
│   └── wsfl.mp4          # WSFL TV interview
├── demo/index.html        # Blog/social media demo
├── photos/               # All images and logos
│   ├── TV network logos  # 11Alive, CBS17, WSFL, etc.
│   └── media graphics    # Simply Buckhead, Atlanta Best Media
├── fonts/               # Custom font files
├── sitemap.xml          # SEO sitemap
└── CNAME               # GitHub Pages domain config
```

## Development Workflow

### No Build Process Required
This is a static site with no build tools, package managers, or dependencies. All development is done directly on the HTML/CSS/JavaScript files.

### Local Development
- Simply open `index.html` in a browser to view the main site
- Use a local web server (like `python -m http.server` or VS Code Live Server) for proper relative path resolution
- Test all pages: root, `/about/`, `/contact/`, `/media/`, and `/demo/`

### Deployment
The site is automatically deployed via GitHub Pages from the main branch. Changes pushed to main are live immediately at https://betsymendel.com.

## Code Patterns & Conventions

### CSS Architecture
- **Mobile-first responsive design** with breakpoints at 768px and 1024px
- **Custom fonts** loaded via @font-face declarations
- **Consistent color scheme**: Light blue background (#d4ecfa), orange accent (#FFAA00), black text
- **Modular CSS classes** for different page sections (`.home`, `.about-page`, `.contact-form`, `.media-showcase-section`, etc.)
- **Media-specific styling**: Video containers, media logos, press coverage layouts
- **Hamburger menu** for mobile navigation

### HTML Structure
- **Consistent header navigation** across all pages with responsive hamburger menu
- **Google Analytics and Ads tracking** implemented on all pages (gtag.js)
- **SEO optimized** with meta descriptions, keywords, and structured markup
- **Social media integration** with links to Facebook, Instagram, LinkedIn

### JavaScript Functionality
- **Minimal vanilla JavaScript** for hamburger menu toggle
- **Demo page features**: File upload simulation, blog post creation, social media feed toggle
- **No external dependencies** except Google Analytics and FontAwesome (demo page only)

## Content & Styling Notes

### Brand Identity
- **Primary colors**: Orange (#FFAA00) for headings, light blue (#d4ecfa) background
- **Typography**: Custom fonts (Helvetica, Futura, Gothic) for brand consistency
- **Visual style**: Modern, clean layout with subtle shadows and borders on images

### Page-Specific Functionality
- **Main page**: Biography and profile photo with social links
- **About page**: Book description and purchase information  
- **Contact page**: Multi-column layout with contact form and images
- **Media page**: TV interviews, press coverage, and media appearances with embedded videos
- **Demo page**: Interactive blog and social media feed simulator (separate from main site functionality)

## Media Page Features

### TV Interview Integration
- **Embedded video players** with responsive 16:9 aspect ratio containers
- **Network logos** as clickable links to external interview pages
- **Three featured TV interviews**:
  - 11Alive NBC Atlanta: "Uplevel Your Life in 2025"
  - CBS17 North Carolina: "Say Hello to Awesomeness" 
  - WSFL TV South Florida: Inside South Florida Book Club feature

### Press Coverage Section  
- **Simply Buckhead magazine** feature with clickable logo
- **Atlanta Best Media** coverage with promotional graphic
- **Responsive grid layouts** for optimal viewing on all devices

### Media-Specific CSS Classes
- `.media-showcase-section`: Main container for media content
- `.video-container`: Responsive video player wrapper (16:9 aspect ratio)
- `.media-logo`: Styled TV network logos with hover effects
- `.featured-media-logo`: Press coverage logos and graphics
- `.video-media-grid`: Responsive grid for video content (3-column desktop, 2-column tablet, 1-column mobile)
- `.media-description`: Styled text descriptions for each media appearance

## SEO & Analytics Configuration

### Tracking Setup
- Google Analytics (G-SJX8T9ZE4T) and Google Ads (AW-16699306192) on all pages
- Sitemap.xml configured for main pages with priority settings
- Meta tags optimized for "Betsy Mendel", "lifestyle coach", "Hello Awesomeness", "TV interviews", "media appearances" keywords
- Media page SEO includes specific TV networks: 11Alive NBC, CBS17, WSFL TV, Simply Buckhead, Atlanta Best Media

### Domain Configuration
- Primary domain: betsymendel.com (configured via CNAME)
- Hosted on GitHub Pages from main branch
- SSL enabled automatically through GitHub Pages