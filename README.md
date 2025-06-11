# Perception Enabled Digital Agriculture Lab Website

## Overview

This Hugo-based website has been created for the Perception Enabled Digital Agriculture Lab at Cornell University. The website features a modern dark theme with professional styling and comprehensive content management capabilities.

## Features

### Design & Styling
- **Dark Theme**: Professional dark color scheme with green accents reflecting agricultural focus
- **Responsive Design**: Mobile-friendly layout using Bootstrap 5
- **Modern UI**: Clean, professional interface with smooth animations and hover effects
- **Visual Elements**: High-quality generated images for projects and team members

### Pages & Content

#### 1. Home Page (`/`)
- Hero section with lab introduction and call-to-action buttons
- Quick statistics (projects, publications, team members, funding)
- Featured projects showcase with image cards
- Recent publications section
- Latest news highlights
- Team preview with member photos

#### 2. Projects Page (`/projects`)
- Interactive project filtering by category (Computer Vision, Robotics, Machine Learning, IoT)
- Project cards with images, descriptions, and metadata
- Detailed project pages with comprehensive information
- Links to GitHub repositories and related publications

#### 3. Publications Page (`/publications`)
- Academic publication listings with proper formatting
- Links to PDFs and GitHub repositories
- Publication metadata (authors, journals, dates)
- Featured publications section

#### 4. News Page (`/news`)
- Lab announcements and updates
- News article pages with detailed content
- Date-based organization

#### 5. People Page (`/people`)
- Team member profiles with photos
- Organized by categories: Advisor, Graduate Students, Undergraduate Students, Alumni
- Individual profile pages with research interests and contact information

## Technical Implementation

### Hugo Configuration
- **Version**: Compatible with Hugo v0.92.2+
- **Theme**: Custom implementation with Bootstrap 5
- **Configuration**: YAML-based configuration for easy maintenance

### File Structure
```
perception-enabled-digital-agriculture-lab/
├── config.yaml                 # Main configuration
├── content/                    # Content files
│   ├── _index.md              # Homepage content
│   ├── projects/              # Project pages
│   ├── publications/          # Publication pages
│   ├── news/                  # News articles
│   ├── people/                # Team member profiles
│   └── authors/               # Author profiles
├── layouts/                   # Template files
│   ├── _default/
│   │   ├── baseof.html        # Base template
│   │   └── home.html          # Homepage layout
│   └── projects/
│       └── list.html          # Projects page layout
├── static/                    # Static assets
│   └── media/                 # Images and media files
│       ├── lab-hero.jpg       # Hero section image
│       ├── projects/          # Project images
│       └── team/              # Team member photos
└── assets/                    # Processed assets
    └── scss/
        └── custom.scss        # Custom styling
```

### Key Technologies
- **Hugo**: Static site generator
- **Bootstrap 5**: CSS framework for responsive design
- **Font Awesome**: Icon library
- **Custom SCSS**: Additional styling for dark theme
- **JavaScript**: Interactive filtering and animations

## Content Management

### Adding New Projects
1. Create a new markdown file in `content/projects/`
2. Add project metadata in frontmatter
3. Include project image in `static/media/projects/`
4. Update project listing if needed

### Adding Publications
1. Create markdown file in `content/publications/`
2. Include proper academic formatting
3. Add links to PDFs and repositories
4. Update featured publications section

### Adding Team Members
1. Create profile in `content/authors/`
2. Add profile photo to `static/media/team/`
3. Update people page categories

### Adding News
1. Create news article in `content/news/`
2. Include publication date and summary
3. Add to homepage news section if featured

## Deployment Options

### Local Development
```bash
hugo server --bind 0.0.0.0 --port 1313
```

### Static Hosting
The site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

### Build for Production
```bash
hugo --minify
```

## Customization

### Colors & Branding
Edit CSS variables in `layouts/_default/baseof.html`:
```css
:root {
    --primary-color: #2E7D32;
    --secondary-color: #4CAF50;
    --accent-color: #81C784;
    /* ... */
}
```

### Navigation
Update navigation links in `layouts/_default/baseof.html` navbar section.

### Content Sections
Modify homepage sections in `layouts/_default/home.html`.

## Sample Content Included

### Projects
- AI-Powered Crop Monitoring
- Yield Prediction System
- Agricultural Robotics
- Smart Irrigation System
- Drone-Based Field Mapping
- Climate Impact Modeling

### Publications
- "Deep Learning Approaches for Crop Disease Detection in Precision Agriculture"
- Sample academic formatting and metadata

### Team Members
- Lab Director profile with photo
- Graduate student profiles
- Proper academic titles and affiliations

### News Articles
- Grant announcements
- Award notifications
- Research updates

## Maintenance

### Regular Updates
- Update team member information
- Add new publications as they're published
- Post news about lab activities
- Update project status and descriptions

### Image Management
- Optimize images for web use
- Maintain consistent aspect ratios
- Use descriptive filenames
- Include alt text for accessibility

### SEO Optimization
- Update meta descriptions
- Use proper heading structure
- Include relevant keywords
- Maintain clean URL structure

## Support & Documentation

For Hugo-specific documentation, visit: https://gohugo.io/documentation/
For Bootstrap components, visit: https://getbootstrap.com/docs/5.3/

## Contact

For technical support or questions about the website, contact the lab administrator or the web development team.

---

*This website was created using Hugo static site generator with a custom dark theme optimized for academic research presentation.*

