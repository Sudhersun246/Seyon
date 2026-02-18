# Seyon Construction - Figma Design Specifications
## Pixel-Level Design Reference

> Figma File: `TSxrzjvzJBnfHdueFta9hf`
> Generated from Figma API node data with geometry paths

---

## Global Design Tokens

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Primary Orange | `#DF440E` | CTA buttons, accents, active nav, icons |
| Secondary Orange | `#FF6B35` | Section labels, badge text |
| Light Orange | `#F9773B` | Card backgrounds, borders, icon circles |
| Orange Hover | `#FF5A21` | Social media buttons |
| Orange Shadow | `#B94817` | Social button drop shadow (16% opacity) |
| Orange Gradient Start | `#DF440E` | Gradient start |
| Orange Gradient End | `#FF7342` | Gradient end |
| Dark Navy | `#160F72` | Header clip shape fill, "Project Showcase" title, CTA "Contact Us" button |
| Dark Background | `#101828` | Footer background |
| Near Black | `#0C1220` | Services overlay (90% opacity) |
| Hero Overlay | `#061033` | Hero image overlay (80% opacity) |
| Black | `#000000` | Nav text, section titles |
| Dark Gray | `#2D2D2D` | Why Choose card titles |
| Medium Dark Gray | `#3A3A3A` | Why Choose card descriptions |
| Card Dark | `#242424` | Project card background |
| Text Dark | `#161616` | Team member names/titles |
| Gray | `#696969` | Project card descriptions, form labels |
| Light Gray Text | `#99A1AF` | Footer text, footer links |
| Light Background | `#FFF8F5` | Why Choose section bg, Projects container bg |
| Off White | `#F8F8F8` | Form input backgrounds |
| Light Gray BG | `#F6F6F6` | Team cards right panel |
| White | `#FFFFFF` | Text on dark, card fills, nav bar bg |
| Footer Gradient Start | `#F54900` | Footer scroll-to-top button |
| Footer Gradient End | `#FF6900` | Footer scroll-to-top button |
| Social Dot Gradient Start | `#FF6900` | Footer social dots |
| Social Dot Gradient End | `#FB2C36` | Footer social dots |

### Typography
| Element | Font | Weight | Size | Line Height | Letter Spacing | Case |
|---------|------|--------|------|-------------|----------------|------|
| Nav Links | Space Grotesk | 400 (Regular) | 16px | 16px | 0 | UPPER |
| Nav Active Link | Space Grotesk | 700 (Bold) | 16px | 16px | 0 | UPPER + UNDERLINE |
| Nav CTA Button | Space Grotesk | 700 (Bold) | 16px | 16px | 0 | UPPER |
| Hero Title | Space Grotesk | 700 (Bold) | 80px | 79.2px | -1.44px | ORIGINAL |
| Hero Subtitle | Space Grotesk | 400 (Regular) | 24px | 30.62px | 0 | ORIGINAL |
| Stats Number | Space Grotesk | 500 (Medium) | 62px | 79.11px | -0.32px | ORIGINAL |
| Stats Label | Space Grotesk | 400 (Regular) | 16px | 24px | 0 | ORIGINAL |
| Section Badge | Space Grotesk | 500 (Medium) | 16px | 20px | 3-4.2px | UPPER |
| Section Title | Space Grotesk | 500 (Medium) | 40px | 51.04px | -0.32px | ORIGINAL |
| CTA Button Text | Space Grotesk | 500 (Medium) | 18px | 18px | 0 | ORIGINAL |
| Service Card Title | Space Grotesk | 500 (Medium) | 24px | 30.62px | -0.32px | ORIGINAL |
| Service Card Desc | Geist | 500 (Medium) | 16px | 24px | -0.32px | ORIGINAL |
| Why Choose Card Title | Space Grotesk | 700 (Bold) | 20px | 31.2px | 0 | ORIGINAL |
| Why Choose Card Desc | Space Grotesk | 400 (Regular) | 18px | 22.97px | 0 | ORIGINAL |
| Project Card Title | Space Grotesk | 700 (Bold) | 28px | 35.73px | -0.32px | ORIGINAL |
| Project Card Desc | Space Grotesk | 500 (Medium) | 16px | 24px | -0.32px | ORIGINAL |
| Project Card Link | Space Grotesk | 500 (Medium) | 16px | 20px | -0.32px | UNDERLINE |
| Team Member Name | Space Grotesk | 500 (Medium) | 24px | 30.62px | -0.26px | ORIGINAL |
| Team Member Role | Space Grotesk | 400 (Regular) | 16px | 20.42px | -0.26px | ORIGINAL |
| CTA Heading | Space Grotesk | 700 (Bold) | 48px | 61.25px | -0.32px | ORIGINAL |
| CTA Subtext | Space Grotesk | 500 (Medium) | 16px | 24px | -0.32px | ORIGINAL |
| Team Left Title | Space Grotesk | 700 (Bold) | 40px | 57.6px | -0.48px | ORIGINAL |
| Team Left Desc | Space Grotesk | 400 (Regular) | 20px | 30.6px | 0 | ORIGINAL |
| Footer Heading | Space Grotesk | 700 (Bold) | 24px | 37.33px | 0 | ORIGINAL |
| Footer Body | Space Grotesk | 400 (Regular) | 21.33px | 34.67px | 0 | ORIGINAL |
| Footer Quick Links | Space Grotesk | 400 (Regular) | 21.33px | 32px | 0 | ORIGINAL |
| Footer Services Links | Space Grotesk | 400 (Regular) | 18.67px | 26.67px | 0 | ORIGINAL |
| Footer Copyright | Space Grotesk | 400 (Regular) | 18.67px | 26.67px | 0 | ORIGINAL |
| Contact Form Label | Space Grotesk | 500 (Medium) | 16px | 24px | -0.32px | ORIGINAL |
| Contact Form Input | Space Grotesk | 700 (Bold) | 14px | 21px | -0.32px | ORIGINAL |
| Submit Button | Space Grotesk | 500 (Medium) | 20px | 20px | 0 | ORIGINAL |
| 100% Badge | Space Grotesk | 700 (Bold) | 22px | 28.07px | 0 | ORIGINAL |

---

## Section 1: Header (node 236:410)

### Frame Dimensions
- **Overall**: 1920 x 101px
- **Position**: (0, 0)

### Clip-Path Shape (Boolean SUBTRACT)
The header has a distinctive curved/notched shape created via a Boolean SUBTRACT operation:

**SVG Path (fill geometry)**:
```
M1920 2.5C1920 3.88071 1918.88 5 1917.5 5L1731 5C1714.43 5 1701 18.4315 1701 35L1701 71C1701 87.5685 1687.57 101 1671 101L243 101C226.431 101 213 87.5685 213 71L213 35C213 18.4315 199.569 5 183 5L2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0L1917.5 0C1918.88 0 1920 1.11929 1920 2.5Z
```
- Fill: `#FFFFFF`
- The shape has a thin 5px bar at the top spanning full width, with two 30px-radius curved notches dropping down on the left (x=183-213) and right (x=1701-1731) sides, creating a tab-like navbar area between x=213 and x=1701 that extends 101px down.
- Background rectangle behind it: `#160F72` at 50% opacity (1920x101)
- Two cutout rectangles (225x110) at left (-12, 5) and right (1701, 5) filled `#D9D9D9` create the ear shapes

### Navigation Bar (Frame 81)
- **Dimensions**: 1502 x 96px
- **Position**: (205, 6)
- **Border Radius**: 10px
- **Background**: Transparent (visible=false white)
- **Shadow**: `DROP_SHADOW` color=`#000000` alpha=0.05, offset=(0, 1), blur=8px, spread=0
- **Layout**: HORIZONTAL, gap=32px, align=CENTER, justify=SPACE_BETWEEN
- **Padding**: L=50, R=50, T=20, B=20

### Logo
- **Dimensions**: 108 x 50px
- **Position**: (255, 29) - 50px from left edge of nav frame
- **Type**: Image fill (ref: `e8fe28c4cc9381ed8bd128b9400f985d1f975381`)

### Navigation Links (Frame 82)
- **Layout**: HORIZONTAL, gap=32px, align=CENTER
- **Links**: Home | About | Services | Projects | Blogs
  - All: Space Grotesk, 400, 16px, uppercase
  - Active (Home): weight=700, color=`#DF440E`, text-decoration=UNDERLINE
  - Inactive: weight=400, color=`#000000`

### Contact Us Button (Frame 83)
- **Dimensions**: 192 x 56px
- **Background**: `#DF440E`
- **Border Radius**: 10px
- **Padding**: L=30, R=30, T=14, B=14
- **Layout**: HORIZONTAL, gap=10, align=CENTER
- **Text**: "CONTACT US" - Space Grotesk Bold 700, 16px, `#FFFFFF`, uppercase
- **Arrow Circle** (Frame 86): 28x28px, `#FFFFFF`, border-radius=14px (full circle)
  - Contains rotated arrow vector with `#DF440E` stroke

---

## Section 2: Hero (node 236:331)

### Frame Dimensions
- **Overall**: 1920 x 1492px
- **Layout**: VERTICAL, gap=-150px (negative gap creates overlap), align=CENTER

### Hero Image Area (Frame 2147229581)
- **Dimensions**: 1920 x 1008px
- **Background**: Boolean SUBTRACT with:
  - Background Image (ref: `759c9535144842f80d75ae2de118d83ed7423434`), scaleMode=FILL
  - Overlay: `#061033` at 80% opacity

### Hero Content (Frame 94)
- **Dimensions**: 990 x 501px
- **Position**: (464, 227) - centered
- **Layout**: VERTICAL, gap=50px, align=CENTER

### Hero Title
- **Text**: "Foundation for the Future."
- **Font**: Space Grotesk Bold 700, 80px
- **Line Height**: 79.2px
- **Letter Spacing**: -1.44px
- **Color**: `#FFFFFF`
- **Alignment**: CENTER

### Hero Subtitle
- **Text**: "Elite Builders, delivers top tier commercial construction services across Miami, turning blueprints into reality with precision and expertise."
- **Font**: Space Grotesk Regular 400, 24px
- **Line Height**: 30.62px
- **Color**: `#FFFFFF`
- **Alignment**: CENTER

### Stats Cards (Frame 95)
- **Layout**: HORIZONTAL, gap=32px
- **Card Template** (each):
  - **Background**: `#FFFFFF` at 1% opacity (glass effect)
  - **Effect**: BACKGROUND_BLUR, blur=12px
  - **Border Radius**: 24px
  - **Padding**: L=20, R=20, T=12, B=12
  - **Border**: 1px solid `#FFFFFF`
  - **Layout**: VERTICAL, gap=4px

| Card | Number | Label | Width |
|------|--------|-------|-------|
| 1 | 500+ | Project completed | 195px |
| 2 | 100+ | Professionals | 185px |
| 3 | 2M+ | Sq Ft built | 170px |

- **Number Style**: Space Grotesk 500, 62px, lh=79.11px, ls=-0.32px, `#FFFFFF`
- **Label Style**: Space Grotesk 400, 16px, lh=24px, `#FFFFFF`

### CTA Button (Explore Our Work)
- **Dimensions**: 247 x 56px
- **Background**: `#DF440E`
- **Border Radius**: 10px
- **Padding**: L=30, R=30, T=14, B=14
- **Text**: "Explore Our Work" - Space Grotesk 500, 18px, `#FFFFFF`
- **Arrow Circle**: 28x28, `#FFFFFF`, border-radius=14px, arrow stroke=`#DF440E`

### Why Choose Section (Frame 2147229586)
- **Dimensions**: 1316 x 591px
- **Position**: (302, 858) - overlaps hero by 150px due to negative gap
- **Background**: `#FFF8F5`
- **Border Radius**: 30px
- **Border**: 1px solid `#F9773B`
- **Shadow**: DROP_SHADOW color=`#160F72` alpha=0.20, offset=(0, 4), blur=50px
- **Effect**: BACKGROUND_BLUR, blur=10px
- **Padding**: L=30, R=30, T=30, B=30
- **Layout**: VERTICAL, gap=50px, align=CENTER
- **Clips Content**: true

### Section Badge (Why Choose)
- **Layout**: HORIZONTAL, gap=8px, align=CENTER
- **Dot**: 9x9 ellipse, `#DF440E`
- **Text**: "WHY CHOOSE SEYON"
  - Font: Space Grotesk 500, 16px, lh=20px, ls=3px, `#FF6B35`, UPPER

### Section Title (Why Choose)
- **Text**: "Built on Trust, Delivered with Excellence"
- **Font**: Space Grotesk 500, 40px, lh=51.04px, ls=-0.32px
- **Color**: `#000000`
- **Alignment**: CENTER

### Why Choose Cards
- **Container Layout**: 2 columns x 2 rows
  - Row gap: 20px, Column gap: 16px
  - Each row: HORIZONTAL, gap=16px
- **Card Dimensions**: 620 x 136px
- **Card Style**:
  - Background: `#FFFFFF`
  - Border Radius: 24px
  - Padding: L=24, R=24, T=24, B=24
  - Border: 0.5px solid `#FF6900`
  - Layout: VERTICAL, gap=16px
- **Card Inner Layout** (HORIZONTAL, gap=16px):
  - **Icon Circle**: 50x50px, `#F9773B`, border-radius=50px (full circle)
    - Inner icon: 24x24px, white stroke vectors, weight=1.5px
  - **Text Container** (VERTICAL, gap=10px):
    - **Title**: Space Grotesk 700, 20px, lh=31.2px, `#2D2D2D`
    - **Description**: Space Grotesk 400, 18px, lh=22.97px, `#3A3A3A`

| Card | Title | Description |
|------|-------|-------------|
| 1 | Expert Engineering Teams | Highly skilled professionals with deep technical expertise and industry experience. |
| 2 | Assured Quality & Safety | Rigorous quality control and safety-first culture across all project phases. |
| 3 | Transparent Collaboration | Open communication and partnership approach with clients and stakeholders. |
| 4 | On-Time Delivery | Disciplined project management ensuring timely completion without compromise. |

### Learn More Button (Why Choose)
- **Dimensions**: 284 x 56px
- **Background**: `#DF440E`
- **Border Radius**: 10px
- **Padding**: L=30, R=30, T=14, B=14
- **Text**: "Learn More About Us" - Space Grotesk 500, 18px, `#FFFFFF`

---

## Section 3: Services + Projects (node 236:434)

### Frame Dimensions
- **Overall**: 1920 x 1602px
- **Position**: (0, 1592)
- **Layout**: VERTICAL, gap=-160px (negative overlap)

### Services Area (Frame 2147229593)
- **Dimensions**: 1920 x 803px
- **Background**: Image overlay
  - Image ref: `22c98730548bccd611afb29ecae4c1a549c94774`
  - Overlay: `#0C1220` at 90% opacity
- **Clips Content**: true

### Services Header (Frame 116)
- **Section Badge**: "CORE SERVICES"
  - Dot: 9x9, `#DF440E`
  - Text: Space Grotesk 500, 16px, lh=20px, ls=4.2px, `#FF6B35`, UPPER
- **Title**: "Our expertise in commercial construction"
  - Font: Space Grotesk 500, 40px, lh=51.04px, ls=-0.32px, `#FFFFFF`

### Service Cards (Frame 2147229599)
- **Layout**: HORIZONTAL, gap=24px
- **Card Dimensions**: 380 x 400px each (4 cards)

### Service Card Structure
Each card uses a **Boolean SUBTRACT** operation creating a notched shape:

**Card Clip Path SVG**:
```
M348 0C365.673 0 380 14.3269 380 32L380 325C380 331.627 374.627 337 368 337L331.232 337C324.605 337 319.232 342.373 319.232 349L319.232 388C319.232 394.627 313.86 400 307.232 400L32 400C14.3269 400 0 385.673 0 368L0 32C0 14.3269 14.3269 0 32 0L348 0Z
```
- Main fill: `#FFFFFF`
- Background rectangle: `#DF440E`, border-radius=32px
- Corner notch: 65x65 `#D9D9D9` rectangle at bottom-right creates the cutout
- The shape creates a rounded rectangle (32px radius) with a stepped notch in the bottom-right corner

### Service Card Content (Frame 2147229574)
- **Dimensions**: 280 x 196px (inner content)
- **Icon**: 87x87px component with `#DF440E` vector fills
- **Title**: Space Grotesk 500, 24px, lh=30.62px, ls=-0.32px, `#DF440E`, CENTER
- **Description**: Geist 500, 16px, lh=24px, ls=-0.32px, `#DF440E`, CENTER

### Arrow Button (Frame 122)
- **Dimensions**: 58 x 58px
- **Background**: `#FFFFFF`
- **Border Radius**: 8.66px
- **Padding**: 13.26px all sides
- **Arrow**: `#DF440E` stroke, weight=0.83px

| Card # | Title | Description |
|--------|-------|-------------|
| 1 | Mechanical (HVAC) Installations | Our integrated design & build approach streamlines construction... |
| 2 | Civil & Infrastructure Works | Comprehensive civil engineering solutions for residential, commercial... |
| 3 | Structural & Industrial Works | Robust structural engineering for industrial facilities... |
| 4 | MEP & Building Services | Advanced HVAC systems ensuring optimal climate control... |

### Carousel Navigation Buttons
- **Dimensions**: 80 x 38px each
- **Border Radius**: 19px
- **Border**: 1px solid `#FFFFFF`
- **Shadow**: DROP_SHADOW color=`#000000` alpha=0.25, offset=(0, 5.43), blur=5.43px
- **Inner Arrow**: 32.57x32.57px frame with `#FFFFFF` stroke, weight=1.36px
- **Right button**: Full opacity
- **Left button**: opacity=0.5

### Decorative Ellipses
- **Dimensions**: 623 x 623px each (2 ellipses)
- **Positions**: (1729, 1660) right side, (-464, 1660) left side
- **Fill**: `#DF440E` at 20% opacity
- **Effect**: LAYER_BLUR, blur=300px (creates soft glow)

---

### Projects Area (Frame 2147229597)
- **Dimensions**: 1710 x 959px
- **Position**: (105, 2235)
- **Layout**: VERTICAL, gap=-75px

### Circular "100%" Badge (Frame 2147229576)
- **Outer Container**: 136 x 136px, padding=28px all
- **Inner Circle** (Frame 133): 80 x 80px
  - Background: `#DF440E`
  - Border Radius: 50px (full circle)
  - Shadow: DROP_SHADOW color=`#000000` alpha=0.12, offset=(0, 2), blur=10.6px
  - Padding: L=27, R=27, T=20, B=20
  - Text: "100%" - Space Grotesk 700, 22px, `#FFFFFF`
- **Circular Text**: "Quality * Comfort * Quality * Comfort * Quality" (TEXT_PATH around circle), `#DF440E`

### Projects Container (Frame 138)
- **Dimensions**: 1710 x 898px
- **Background**: `#FFF8F5`
- **Border Radius**: 32px
- **Border**: 5px solid `#DF440E`
- **Padding**: L=32, R=32, T=110, B=50
- **Layout**: VERTICAL, gap=40px, align=CENTER

### Projects Title
- **Text**: "Project Showcase"
- **Font**: Space Grotesk 500, 40px, lh=51.04px, ls=-0.32px
- **Color**: `#160F72`

### Project Cards Carousel (Component 2)
- **Container**: 1646 x 551px, clips content=true (horizontal scroll)
- **Card Layout**: Each card is 404 x 551px with HORIZONTAL layout, padding=22px

### Project Card Structure
Each card uses the same Boolean SUBTRACT pattern as service cards:

**Card Clip Path SVG**:
```
M366 0C383.673 0 398 14.3269 398 32L398 477C398 483.627 392.627 489 386 489L348 489C341.373 489 336 494.373 336 501L336 539C336 545.627 330.627 551 324 551L32 551C14.3269 551 0 536.673 0 519L0 32C0 14.3269 14.3269 0 32 0L366 0Z
```
- Main fill: `#242424`
- Background rectangle: `#F9773B`, border-radius=32px
- Corner notch: 62x62px

### Project Card Content (Frame 135)
- **Layout**: VERTICAL, gap=20px
- **Image**: 354 x 354px, border-radius=10px, IMAGE fill
- **Title**: Space Grotesk 700, 28px, lh=35.73px, ls=-0.32px, `#FFFFFF`
- **Description**: Space Grotesk 500, 16px, lh=24px, ls=-0.32px, `#696969`
- **Link**: "Learn more" - Space Grotesk 500, 16px, `#FFFFFF`, UNDERLINE

### Project Card Arrow Button (Frame 137)
- **Dimensions**: 46 x 46px
- **Background**: `#DF440E`
- **Border Radius**: 10.45px
- **Padding**: 4px all sides
- **Arrow**: 30x30 frame with `#FFFFFF` stroke, weight=1.5px

| Project | Title |
|---------|-------|
| 1 | Skyline Tower |
| 2 | Oceanview Plaza |
| 3 | Vertex Center |
| 4 | Summit Plaza |
| 5 | Harbor Point |
| 6 | Apex Tower |

All projects share description: "A 35-story business hub with modern workspaces and a rooftop garden."

### View All Projects Button
- **Dimensions**: 240 x 56px
- **Background**: `#DF440E`
- **Border Radius**: 10px
- **Padding**: L=30, R=30, T=14, B=14
- **Text**: "View All Projects" - Space Grotesk 500, 18px, `#FFFFFF`

---

## Section 4: Team / Meet Experts (node 236:472)

### Frame Dimensions
- **Overall**: 1920 x 571px
- **Position**: (0, 3294)
- **Layout**: VERTICAL, gap=40px, align=CENTER
- **Padding**: L=100, R=100

### Section Header (Frame 116)
- **Section Badge**: "MEET OUR EXPERTS"
  - Dot: 9x9, `#DF440E`
  - Text: Space Grotesk 500, 16px, lh=20px, ls=4.2px, `#FF6B35`, UPPER
- **Title**: "Personalized Guidance, Proven Expertise"
  - Font: Space Grotesk 500, 40px, lh=51.04px, ls=-0.32px, `#000000`

### Two-Panel Layout (Frame 2147229598)
- **Layout**: HORIZONTAL, gap=0, justify=SPACE_BETWEEN
- **Full Width**: 1920px

### Left Panel - CTA (Frame 154)
- **Dimensions**: 909 x 444px
- **Background Gradient**: Linear
  - Stop 0: `#DF440E`
  - Stop 1: `#FF7342`
  - Handles: `[{x:0.014, y:0.874}, {x:0.953, y:-0.344}, {x:0.040, y:1.343}]`
  - (Approximately top-right to bottom-left direction)
- **Padding**: L=105, R=105, T=89, B=89
- **Clips Content**: true

#### Grid Lines (Decorative)
- **Vertical Lines**: 12 lines, evenly spaced ~41.55px apart
  - Stroke: `#FFFFFF`, weight=1.48px
- **Horizontal Lines**: 12 lines, evenly spaced ~41.55px apart
  - Stroke: `#FFFFFF`, weight=1.48px

#### Person Image
- **Dimensions**: 328 x 328px
- **Position**: (1713, 3408.5) - right side, overlapping
- **Image**: ref=`57a83d6b48f2106bd0a5665a3db851b8905bda4e`

#### Left Panel Title
- **Text**: "Let's Build Strong, Reliable, and Lasting Structures Together."
- **Font**: Space Grotesk 700, 40px, lh=57.6px, ls=-0.48px, `#FFFFFF`
- **Width**: 699px

#### Left Panel Description
- **Text**: "Ready to start your next construction or engineering project? Our team is here to deliver excellence from concept to completion."
- **Font**: Space Grotesk 400, 20px, lh=30.6px, `#FFFFFF`
- **Width**: 699px

#### Contact Us Button (Left Panel)
- **Dimensions**: 195 x 56px
- **Background**: `#160F72` (Navy)
- **Border Radius**: 10px
- **Padding**: L=30, R=30, T=14, B=14
- **Text**: "Contact Us" - Space Grotesk 500, 18px, `#FFFFFF`
- **Arrow Circle**: 28x28, `#FFFFFF`, border-radius=14px

### Right Panel - Team Grid (Frame 119)
- **Dimensions**: 1011 x 429px
- **Background**: `#F6F6F6`
- **Padding**: L=20, R=20, T=20, B=20

#### Team Section Header (inside right panel)
- Same badge pattern: "MEET OUR EXPERTS" with dot
- Same title: "Personalized Guidance, Proven Expertise"

#### Team Member Cards (Component 4)
- **Container**: 971 x 389px, clips content=true (horizontal scroll)
- **Card Dimensions**: 319.06 x 389.21px each
- **Layout**: VERTICAL, gap=12.76px, align bottom

#### Team Card Structure
- **Photo**: 319.06 x 319.06px, border-radius=19.14px, IMAGE fill
- **Name**: Space Grotesk 500, 24px, lh=30.62px, ls=-0.26px, `#161616`
- **Role**: Space Grotesk 400, 16px, lh=20.42px, ls=-0.26px, `#161616`

| Member | Name | Role |
|--------|------|------|
| 1 | Wade | Trust Administrator |
| 2 | Darrell | Accountant |
| 3 | Dustin | Regional Manager |
| 4 | Mitchell | Vice President |
| 5 | Ronald | Branch Manager |

---

## Section 5: CTA / Contact Form (node 236:522)

### Frame Dimensions
- **Overall**: 1920 x 622px
- **Position**: (0, 3965)
- **Layout**: HORIZONTAL, gap=43px, align=CENTER, justify=CENTER
- **Padding**: L=200, R=200

### Main Container (Frame 152)
- **Dimensions**: 1520 x 622px
- **Background Gradient**: Linear
  - Stop 0: `#DF440E`
  - Stop 1: `#FF7342`
  - Handles: same as team section gradient
- **Border Radius**: 24px
- **Layout**: HORIZONTAL, gap=10px, align=CENTER, justify=SPACE_BETWEEN
- **Padding**: L=50, R=24, T=25, B=25
- **Clips Content**: true

### Background Image
- **Dimensions**: 1037 x 1036px
- **Position**: (116, 3758) - extends beyond container (clipped)
- **Image**: ref=`d2efa55d414de81f93d37c2997aa7cfa846ccc72`
- **Overlay Gradient**: `#F05E2A` to `#F05E2A` (tint)

### Left Content (Frame 2147229563)
- **Dimensions**: 624 x 286px
- **Layout**: VERTICAL, gap=50px

#### CTA Title
- **Text**: "Let's build something great together!"
- **Font**: Space Grotesk 700, 48px, lh=61.25px, ls=-0.32px, `#FFFFFF`

#### CTA Subtitle
- **Text**: "Get in touch with us for a consultation or quote on your next commercial project."
- **Font**: Space Grotesk 500, 16px, lh=24px, ls=-0.32px, `#FFFFFF`

### Social Media Icons (Frame 2147229568)
- **Layout**: HORIZONTAL, gap=10px
- **Each Icon Button**: 50 x 50px
  - Background: `#FF5A21`
  - Border Radius: 25px (full circle)
  - Shadow: DROP_SHADOW color=`#B94817` alpha=0.16, offset=(0, 1), blur=5.5px
  - Padding: 13px all
  - Icon: 24x24px, `#FFFFFF` stroke, weight=1.5px

| Icon | Platform |
|------|----------|
| 1 | Instagram |
| 2 | YouTube |
| 3 | WhatsApp |

### Contact Form (Frame 23)
- **Dimensions**: 600 x 566px
- **Background**: `#FFFFFF`
- **Border Radius**: 20px
- **Padding**: L=30, R=30, T=30, B=30
- **Layout**: VERTICAL, gap=29px

### Form Fields

#### Name Field (Frame 19)
- **Label**: "Home" (likely "Name" in implementation)
  - Font: Space Grotesk 500, 16px, lh=24px, ls=-0.32px, `#696969`
- **Input** (Frame 18): 540 x 44px
  - Background: `#FFFFFF`
  - Border: 1px solid `#F9773B` (CENTER aligned)
  - Border Radius: 10px
  - Padding: L=21, R=21, T=11, B=11
  - Placeholder: "Michael Carter" - Space Grotesk 700, 14px, `#000000`

#### Email Field (Frame 20)
- **Label**: "Email"
- **Input**: 540 x 44px
  - Background: `#F8F8F8`
  - Border Radius: 10px
  - Padding: L=21, R=21, T=11, B=11
  - Value: "michaelcarter@gmail.com"

#### Phone Field (Frame 21)
- **Label**: "Phone number"
- **Input**: 540 x 44px
  - Background: `#F8F8F8`
  - Border Radius: 10px
  - Padding: same as above
  - Value: "+1 650 213 7379"

#### Message Field (Frame 22)
- **Label**: "Message"
- **Input**: 540 x 90px (taller)
  - Background: `#F8F8F8`
  - Border Radius: 10px
  - Padding: L=21, R=21, T=11, B=11
  - Placeholder: "Tell us about your project needs..."

### Submit Button (Frame 10)
- **Dimensions**: 540 x 56px (full width)
- **Background**: `#DF440E`
- **Border Radius**: 10px
- **Padding**: L=30, R=30, T=14, B=14
- **Layout**: HORIZONTAL, gap=10px, align=CENTER, justify=CENTER
- **Text**: "Submit" - Space Grotesk 500, 20px, `#FFFFFF`
- **Arrow Circle**: 28x28, `#FFFFFF`, border-radius=14px

---

## Section 6: Footer (node 236:577)

### Frame Dimensions
- **Overall**: 1920 x 467px
- **Position**: (0, 4687)
- **Background**: `#101828`
- **Padding**: L=133.33, R=133.33, T=53.33, B=53.33
- **Layout**: VERTICAL, gap=66.67px, align=CENTER
- **Clips Content**: true

### Main Content Container
- **Dimensions**: 1653.33 x 266.67px
- **Three-column layout** (no explicit gap - positioned absolutely)

### Column 1: Brand Info
- **Width**: 778.67px

#### Logo
- **Dimensions**: 147.89 x 53.33px
- **Image**: ref=`b2662137210109b16813952eda0da425c260042a`

#### Description
- **Text**: "A multidisciplinary engineering and contracting company delivering civil, MEP, mechanical, and infrastructure solutions with excellence."
- **Font**: Space Grotesk 400, 21.33px, lh=34.67px, `#99A1AF`
- **Width**: 570.67px

#### Social Dots
- **3 dots**, 10.67px diameter each, gap=10.67px
- **Gradient**: Linear from `#FF6900` to `#FB2C36`
- **Border Radius**: fully round (44739200)

### Column 2: Quick Links
- **Header**: "Quick Links"
  - Font: Space Grotesk 700, 24px, lh=37.33px, `#FFFFFF`
- **Links** (VERTICAL, gap=16px):
  - About Us, Services, Our Approach, Quality & Safety
  - Font: Space Grotesk 400, 21.33px, lh=32px, `#99A1AF`

### Column 3: Services
- **Header**: "Services"
  - Font: Space Grotesk 700, 24px, lh=37.33px, `#FFFFFF`
- **Links** (VERTICAL, gap=16px):
  - Civil & Infrastructure, MEP & Building Services, HVAC Installations, Structural & Industrial, Interior & Fit-out
  - Font: Space Grotesk 400, 18.67px, lh=26.67px, `#99A1AF`

### Footer Bottom Bar (Container)
- **Layout**: HORIZONTAL, justify=SPACE_BETWEEN, align=CENTER
- **Copyright**: "© 2026 Seyon Constrotech Private Limited. All rights reserved."
  - Font: Space Grotesk 400, 18.67px, lh=26.67px, `#99A1AF`
- **Legal Links** (gap=32px):
  - "Privacy Policy" | "Terms of Service"
  - Font: Space Grotesk 400, 18.67px, lh=26.67px, `#99A1AF`

### Scroll-to-Top Button (Footer)
- **Dimensions**: 64 x 64px
- **Position**: (1722.67, 4741.67) - top-right of footer
- **Background Gradient**: Linear from `#F54900` to `#FF6900` (diagonal)
  - Handles: `[{x:0, y:0}, {x:1, y:1}, {x:-1, y:1}]`
- **Border Radius**: fully round (44739200)
- **Has blur glow behind it**: LAYER_BLUR blur=21.33px, opacity=0.5
- **Shadows**:
  - DROP_SHADOW color=`#000000` alpha=0.10, offset=(0, 10.67), blur=13.33, spread=-8
  - DROP_SHADOW color=`#000000` alpha=0.10, offset=(0, 26.67), blur=33.33, spread=-6.67
- **Arrow Icon**: 26.67x26.67px frame
  - Chevron up + vertical line, stroke=`#FFFFFF`, weight=2.22px

---

## Shared Component Patterns

### CTA Button Pattern
Used in: Header, Hero (x2), Why Choose, Projects, Team Left, Contact Submit
- **Background**: `#DF440E` (or `#160F72` for team variant)
- **Border Radius**: 10px
- **Padding**: L=30, R=30, T=14, B=14
- **Layout**: HORIZONTAL, gap=10px, align=CENTER, justify=CENTER
- **Text**: Space Grotesk 500, 18px, `#FFFFFF` (header uses 700/16px)
- **Arrow Circle**: 28 x 28px, `#FFFFFF`, border-radius=14px (fully round)
  - Contains diagonal arrow vector, stroke=`#DF440E`, weight=1px

### Section Badge Pattern
Used in: Why Choose, Services, Meet Experts
- **Layout**: HORIZONTAL, gap=8px, align=CENTER
- **Dot**: 9x9px ellipse, `#DF440E`
- **Text**: Space Grotesk 500, 16px, UPPER
  - Color: `#FF6B35`
  - Letter Spacing: 3-4.2px (varies by section)

### Card Notch Shape (Boolean SUBTRACT)
Used in: Service Cards, Project Cards
- Creates a rounded rectangle with a stepped cutout in the bottom-right corner
- The cutout is formed by subtracting corner rectangles from a rounded rect
- Main rounded rectangle has border-radius of 32px
- The notch creates a step effect at approximately 60-65px from the corner

### Gradient Definition (Primary)
Used in: Team Left Panel, CTA Container
```
Linear Gradient
Direction: ~diagonal (top-right to bottom-left area)
Stop 0 (0%): #DF440E
Stop 1 (100%): #FF7342
Handle positions: [{x:0.014, y:0.874}, {x:0.953, y:-0.344}]
```

---

## Layout Summary

| Section | Y Position | Height | Notes |
|---------|-----------|--------|-------|
| Header | 0 | 101px | Absolute positioned, clips shape |
| Hero + Why Choose | 0 | 1492px | -150px overlap between hero image and why-choose |
| Services + Projects | 1592 | 1602px | -160px overlap between services and projects |
| Team / Experts | 3294 | 571px | Split left CTA / right team cards |
| CTA / Contact | 3965 | 622px | Split left info / right form |
| Footer | 4687 | 467px | Three-column footer |
| **Total Page Height** | - | **~5154px** | |

---

## Key Implementation Notes

1. **Header clip-path**: The complex boolean subtract shape should be implemented as an SVG clip-path or inline SVG. The path creates a navbar that floats between two curved notches.

2. **Negative gaps**: The hero section uses gap=-150px and services uses gap=-160px to create overlapping sections. In CSS, use negative margins (margin-top: -150px / -160px).

3. **Glass effect stats cards**: background rgba(255,255,255,0.01) + backdrop-filter: blur(12px) + border: 1px solid white.

4. **Card notch shapes**: Both service cards and project cards use identical boolean subtract patterns. Implement as SVG clip-path or use CSS clip-path with the polygon/path data.

5. **The "100%" circular badge**: Uses a TEXT_PATH element for curved text. Implement with SVG textPath.

6. **Horizontal scroll carousels**: Both projects and team sections use clipped containers with horizontally laid out cards that extend beyond the viewport.

7. **Two fonts used**: Space Grotesk (primary, everything) and Geist (service card descriptions only).

8. **Footer uses scaled units**: Footer values appear to be at ~1.33x scale (e.g., 21.33px font = 16px * 1.333). The design may be at a different base scale for this section.
