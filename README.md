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

## Website Blocks and Components Reference

### Available Page Types

#### 1. **Homepage (_index.md)**
The homepage uses a custom layout with multiple configurable blocks:

**Frontmatter Configuration:**
```yaml
---
title: "Your Lab Name"
date: 2022-10-24
type: home
layout: home

# Hero Section Block
hero:
  text: "Your lab description"
  image: "/media/lab-hero.png"
  buttons:
    - text: "Button Text"
      link: "/target-page"

# Navigation Block
navigation:
  - text: "Menu Item"
    link: "/page-url"

# Featured Content Blocks
featured_projects:
  - path: "projects/agxrp"
  - path: "projects/grapesam"
featured_publications:
  - path: "publications/publication-file"
featured_news:
  - path: "news/news-article"
featured_team:
  - path: "people/person-name"

# Carousel Block
carousel_slides:
  - title: "Slide Title"
    description: "Slide description"
    image: "/media/slide-image.jpg"
    link: "/target-page"
    button_text: "Button Text"
---
```

**Available Homepage Blocks:**
- **Hero Section**: Large banner with title, description, image, and action buttons
- **Quick Stats**: Numerical statistics display (projects, publications, team size, funding)
- **Featured Projects**: Showcase of selected projects with images and descriptions
- **Recent Publications**: List of latest research publications
- **Latest News**: Recent lab announcements and updates
- **Team Preview**: Grid of team member photos and basic info
- **Navigation Carousel**: Image-based navigation to major site sections

#### 2. **Project Pages**
Located in `content/projects/`, each project supports:

**Frontmatter Configuration:**
```yaml
---
title: "Project Title"
date: "2024-08-01"
draft: false
featured: true  # Include in featured projects

# Image Block
image:
  filename: "project-image.png"
  focal_point: "Smart"  # Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  preview_only: false

# Taxonomy Blocks
tags:
  - "Computer Vision"
  - "Robotics"
categories:
  - "Research Projects"
  - "Outreach Projects"

# Metadata Block
summary: "Brief project description"
github: "https://github.com/user/repo"  # Optional
website: "https://project-site.com"     # Optional
documentation: "https://docs.site.com"  # Optional
demo: "https://youtube.com/watch?v=xyz" # Optional

# Team Block
team_members:
  - name: "Dr. Name"
    role: "Role Description"
---
```

**Content Blocks Available:**
- Project overview sections with markdown formatting
- Image galleries and figures
- Code snippets with syntax highlighting
- External links (GitHub, documentation, demos)
- Team member assignments
- Related publications references

#### 3. **Publication Pages**
Located in `content/publications/`, supports academic formatting:

**Frontmatter Configuration:**
```yaml
---
title: "Publication Title"
authors:
- "Author Name"
- "Second Author"
date: "2024-03-01T00:00:00Z"
doi: "https://doi.org/10.xxxx/xxxxx"
publishDate: "2024-03-01T00:00:00Z"

# Publication Type Block
publication_types: ["2"]  # 0=Uncategorized, 1=Conference, 2=Journal, 3=Preprint, 4=Report, 5=Book, 6=Book section, 7=Thesis, 8=Patent

# Publication Details Block
publication: "Journal Name"
publication_short: "J. Abbrev."  # Optional
abstract: "Full abstract text"
summary: "Brief summary"

# Links Block
url_pdf: "https://link-to-pdf.com"
url_code: "https://github.com/repo"
url_dataset: "https://data-link.com"
url_poster: "https://poster-link.com"
url_project: "/projects/related-project"
url_slides: "https://slides-link.com"
url_video: "https://video-link.com"

# Image Block
image:
  filename: "publication-figure.png"
  caption: "Figure caption"
  focal_point: ""
  preview_only: false

# Related Content Block
projects:
- project-folder-name

# Tags and Categories
tags:
- "Research Area"
categories:
- "Publications"
featured: true  # Include in featured publications
---
```

#### 4. **News Articles**
Located in `content/news/`, supports:

**Frontmatter Configuration:**
```yaml
---
title: "News Article Title"
date: 2025-06-10
draft: false
summary: "Brief article summary for listings"
featured: true  # Optional: include in featured news
image: "/media/news/article-image.jpg"  # Optional
tags:
  - "Grants"
  - "Awards"
categories:
  - "Lab News"
---
```

**Content Blocks:**
- Rich text content with markdown formatting
- Image embedding and galleries
- Quote blocks and callouts
- Links to related projects/publications

#### 5. **People/Team Pages**
Located in `content/people/` or `content/authors/`, supports:

**Frontmatter Configuration:**
```yaml
---
title: "Dr. Full Name"
image: "/media/team/photo.jpg"
role: "advisor"  # advisor, graduate, undergraduate, postdoc, alumni
position: "Job Title"
bio: "Brief bio for listings"
email: "email@cornell.edu"
website: "https://personal-site.com"  # Optional
twitter: "username"  # Optional
github: "username"   # Optional
linkedin: "profile"  # Optional
orcid: "0000-0000-0000-0000"  # Optional

# Research Areas Block
research_interests:
  - "Research Area 1"
  - "Research Area 2"

# Education Block
education:
  - degree: "Ph.D."
    institution: "University"
    year: 2010
    field: "Field of Study"
---
```

**Content Blocks:**
- Personal biography sections
- Education history
- Research interests
- Current projects
- Publication lists
- Teaching responsibilities
- Contact information

#### 6. **Course Pages**
Located in `content/courses/`, supports:

**Frontmatter Configuration:**
```yaml
---
title: "Course Code: Course Title"
semester: "Fall 2024"
instructor: "Dr. Name"
credits: 3
level: "undergraduate"  # or "graduate"
description: "Course description"
prerequisites: "Required background"

# Schedule Block
schedule:
  - day: "Monday"
    time: "10:00-11:15 AM"
    location: "Room 123"

# Materials Block
textbook: "Required textbook"
software: ["Software 1", "Software 2"]
---
```

### Content Organization Blocks

#### Navigation Menus
Configure in `config.yaml`:
```yaml
languages:
  en:
    menu:
      main:
        - name: "Menu Item"
          url: "/page-url/"
          weight: 1  # Order in menu
```

#### Site-wide Configuration Blocks
In `config.yaml`:

**Header Block:**
```yaml
params:
  header:
    navbar:
      enable: true
      align: l  # l, c, r
      show_logo: true
      show_search: true
      show_day_night: true
```

**Footer Block:**
```yaml
params:
  footer:
    copyright:
      notice: "© {year} Lab Name. Licensed under {license}"
      license:
        enable: true
        allow_derivatives: false
        share_alike: true
        allow_commercial: false
```

**Features Block:**
```yaml
params:
  features:
    syntax_highlighter:
      enable: true
      extra_languages: ["r", "latex"]
    math:
      enable: true
    privacy_pack:
      enable: false
```

### Styling and Layout Blocks

#### Custom CSS Variables
Available in layouts for theming:
```css
:root {
  --primary-color: #2E7D32;
  --secondary-color: #4CAF50;
  --accent-color: #81C784;
  --surface-dark: #1E1E1E;
  --text-primary: #FFFFFF;
  --text-secondary: #B0B0B0;
  --border-color: #333333;
}
```

#### Animation Classes
Available CSS classes:
- `animate-fade-in-up`: Fade in with upward motion
- `animate-fade-in`: Simple fade in
- Various hover effects on cards and buttons

### Content Management

#### Adding New Projects
1. Create new markdown file in `content/projects/`
2. Configure frontmatter with project metadata
3. Add project image to `static/media/projects/`
4. Use tags and categories for organization
5. Add team_members block if applicable
6. Link to related publications in content

#### Adding Publications
1. Create markdown file in `content/publications/`
2. Use proper publication_types classification
3. Include all relevant URLs (PDF, code, data)
4. Link to related projects
5. Add featured: true for homepage showcase

#### Adding Team Members
1. Create profile in `content/people/` or `content/authors/`
2. Add profile photo to `static/media/team/`
3. Set appropriate role for organization
4. Include research interests and education
5. Add to featured_team on homepage if desired

#### Adding News Articles
1. Create article in `content/news/`
2. Include publication date and summary
3. Add relevant tags and categories
4. Set featured: true for homepage inclusion
5. Include related project/publication links

#### Adding Course Information
1. Create course page in `content/courses/`
2. Include semester and scheduling information
3. Add prerequisites and materials
4. Link to related research projects if applicable

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

