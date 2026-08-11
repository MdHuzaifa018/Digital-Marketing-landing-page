# Premium Digital Marketing Institute Website — Implementation Plan

## Overview

Build a premium, multi-page React + Vite + Tailwind CSS v4 website for an **offline Digital Marketing Training Institute in Lucknow, India**. The website serves as a brand establishment platform, course discovery experience, and lead generation system via WhatsApp.

**Reference analyzed:** adymize.com — Extracted philosophy: bold editorial typography, marquee text strips, strong section rhythm, comparison tables, video testimonials, WhatsApp-first lead flow, purposeful animation.

---

## Design Philosophy (Adapted for Education)

| adymize.com (Agency) | Our Site (Education) |
|---|---|
| Bold typographic hero | Editorial hero with course-specific eyebrow |
| Marquee: ADS • DESIGN • SOCIAL | Marquee: SEO • GOOGLE ADS • META ADS |
| Case studies | Student results & outcomes |
| Service storytelling | Course storytelling |
| Agency v/s Others comparison | Institute v/s Generic Coaching comparison |
| "Book a Strategy Call" | "Reserve Your Seat" |
| WhatsApp CTA | WhatsApp lead flow |

---

## Open Questions

> [!IMPORTANT]
> The following information is needed from the client. We will use clean placeholders until confirmed:
> - **Institute Name**: Using `[INSTITUTE NAME]` → Placeholder: `SkillEdge Digital`
> - **Trainer Name**: `[TRAINER NAME]` → Placeholder: `[Trainer Name]`
> - **WhatsApp Number**: `[WHATSAPP NUMBER]`
> - **Phone Number**: `[PHONE NUMBER]`
> - **Email**: `[EMAIL]`
> - **Full Address**: `[ADDRESS]`, Lucknow, UP
> - **Course Prices**: `[COURSE PRICE]`
> - **Course Duration**: `[COURSE DURATION]`
> - **Next Batch Date**: `[NEXT BATCH DATE]`
> - **Actual Student Testimonials**: Clean placeholders only
> - **Gallery Images**: Generated/placeholder images

> [!WARNING]
> No fake statistics, testimonials, placements, salary claims, or awards will be created.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18+ | UI framework |
| Vite | 6+ | Build tool |
| Tailwind CSS | v4 | Styling (CSS-first config) |
| React Router | v6 | Multi-page routing |
| Framer Motion | latest | Component animations |
| GSAP | latest | Hero + scroll animations |
| Lenis | latest | Smooth scrolling |
| Swiper | latest | Gallery + testimonials |
| Lucide React | latest | Icons |
| React Icons | latest | Social icons |
| React Hook Form | latest | Enrollment form |

---

## Proposed File Structure

```
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MobileCTA.jsx
│   │   └── PageTransition.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── TrustStats.jsx
│   │   ├── CoursePreview.jsx
│   │   ├── WhyUsPreview.jsx
│   │   ├── TrainerPreview.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ResultsPreview.jsx
│   │   ├── FAQPreview.jsx
│   │   ├── MarqueeStrip.jsx
│   │   └── FinalCTA.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Badge.jsx
│   │   └── Accordion.jsx
│   └── forms/
│       └── EnrollmentForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── CourseDetails.jsx
│   ├── Curriculum.jsx
│   ├── WhyUs.jsx
│   ├── StudentResults.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── Enroll.jsx
│   ├── FAQ.jsx
│   ├── PrivacyPolicy.jsx
│   ├── Terms.jsx
│   └── NotFound.jsx
├── layouts/
│   └── MainLayout.jsx
├── data/
│   ├── courses.js
│   ├── curriculum.js
│   ├── testimonials.js
│   ├── faq.js
│   └── navigation.js
├── services/
│   └── leadService.js
├── config/
│   └── contact.js
├── hooks/
│   └── useScrollAnimation.js
├── utils/
│   └── formatWhatsApp.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Proposed Changes (Phased Execution)

### Phase 1 — Project Setup

#### [NEW] Project initialization
- `npx create vite@latest` with React + JS template
- Install: `@tailwindcss/vite`, `react-router-dom`, `framer-motion`, `gsap`, `lenis`, `swiper`, `lucide-react`, `react-icons`, `react-hook-form`
- Configure `vite.config.js` with Tailwind CSS v4 plugin

---

### Phase 2 — Design System

#### [NEW] src/index.css
- CSS-first Tailwind v4 theme variables
- Poppins font (weights: 400, 500, 600, 700, 800) from Google Fonts
- Color tokens: background `#FFFFFF`, text `#111827`, accent `#4F46E5`, secondary `#7C3AED`, amber `#F59E0B`
- Fluid typography with `clamp()`
- Global reset and base styles
- Scrollbar, selection, focus styles

#### [NEW] src/config/contact.js
- Centralized WhatsApp number, phone, email, address

#### [NEW] src/data/courses.js, curriculum.js, testimonials.js, faq.js, navigation.js
- All content decoupled from components

---

### Phase 3 — Global Layout

#### [NEW] src/layouts/MainLayout.jsx
- Wraps Navbar + Footer + MobileCTA + Lenis scroll

#### [NEW] src/components/layout/Navbar.jsx
- Logo | Nav links | CTA "Enroll Now" | WhatsApp
- Scroll-aware: adds white bg + shadow
- Mobile: fullscreen slide-down with stagger animation
- Close on navigate

#### [NEW] src/components/layout/Footer.jsx
- Brand + description
- Nav columns: Pages, Courses, Contact
- Social icons (Instagram, Facebook, YouTube, LinkedIn, WhatsApp)
- Legal links

#### [NEW] src/components/layout/MobileCTA.jsx
- Sticky bottom bar on mobile with "Enroll Now" CTA
- Respects safe-area insets

#### [NEW] src/components/layout/PageTransition.jsx
- Framer Motion AnimatePresence wrapper (opacity + translateY, 300ms)
- Respects `prefers-reduced-motion`

---

### Phase 4 — Homepage

#### [NEW] src/pages/Home.jsx
Sections:
1. **AnnouncementBar** — batch dates / offers
2. **Hero** — editorial hero, eyebrow, headline `clamp()`, two CTAs, floating UI badges (SEO, Google Ads, Meta Ads), GSAP stagger reveal
3. **TrustStats** — 4 animated stat cards (placeholders)
4. **MarqueeStrip** — SEO • GOOGLE ADS • META ADS • SOCIAL MEDIA • AI TOOLS (CSS animation)
5. **WhyDigitalMarketing** — editorial section explaining the opportunity
6. **CoursePreview** — 3 highlighted courses → /courses
7. **LearningMethodology** — 4-step process with numbering
8. **WhyUsPreview** — condensed version → /why-us
9. **TrainerPreview** → /about
10. **Testimonials** — Swiper carousel (placeholders)
11. **ResultsPreview** — student outcomes → /student-results
12. **FAQPreview** — 4 questions accordion
13. **FinalCTA** — full-width conversion section

---

### Phase 5 — About, Why Us, Curriculum Pages

#### [NEW] src/pages/About.jsx
- Story, mission, vision, trainer, classroom, values, CTA

#### [NEW] src/pages/WhyUs.jsx
- Visual storytelling: practical learning, mentorship, real projects, live doubt-solving, tools, career support
- Comparison table: Institute vs Generic Coaching

#### [NEW] src/pages/Curriculum.jsx
- Interactive animated accordion with 12 modules
- Module numbering, tool icons, descriptions

---

### Phase 6 — Courses & Course Detail

#### [NEW] src/pages/Courses.jsx
- Premium course discovery grid
- Filter by level/duration
- CourseCard components → /courses/:slug

#### [NEW] src/components/ui/CourseCard.jsx
- Name, description, duration, mode, level, price, CTA

#### [NEW] src/pages/CourseDetails.jsx
- Dynamic route `/courses/:slug`
- Data from `courses.js`
- Full detail: overview, who for, curriculum, tools, projects, trainer, certificate, testimonials, FAQ, pricing, CTA
- "Not found" state for invalid slugs

---

### Phase 7 — Results, Testimonials, Gallery

#### [NEW] src/pages/StudentResults.jsx
- Student story cards (placeholders only, no fake stats)
- Testimonial grid
- Career outcome section

#### [NEW] src/pages/Gallery.jsx
- Desktop: editorial masonry grid
- Mobile: Swiper slider
- Lazy loaded images with explicit dimensions

---

### Phase 8 — Contact, FAQ, Enrollment

#### [NEW] src/pages/Contact.jsx
- Address, phone, WhatsApp, email, social links
- Google Maps embed (placeholder iframe)
- Office timings

#### [NEW] src/pages/FAQ.jsx
- Full FAQ with accessible animated accordion
- Data from `faq.js`

#### [NEW] src/pages/Enroll.jsx
- Dedicated conversion page, minimal distraction
- "Reserve Your Seat" hero
- Enrollment form (React Hook Form)
- Pre-selected course from URL param
- Fields: Name, Phone, WhatsApp, Email, Course, Batch, Qualification, Message

#### [NEW] src/components/forms/EnrollmentForm.jsx
- Validation: required, phone regex, email
- States: idle, loading, success, error
- Success → WhatsApp redirect with prefilled message

---

### Phase 9 — Legal Pages & 404

#### [NEW] src/pages/PrivacyPolicy.jsx
#### [NEW] src/pages/Terms.jsx
#### [NEW] src/pages/NotFound.jsx
- "Looks like this page took a wrong turn." — Back Home + Explore Courses

---

### Phase 10 — Lead Service

#### [NEW] src/services/leadService.js
- Encapsulates lead submission logic
- Builds WhatsApp URL with form data
- Extensible for future API integration

#### [NEW] src/utils/formatWhatsApp.js
- WhatsApp URL builder utility

---

### Phase 11 — Animations

- GSAP: Hero text reveal, scroll-triggered section entrances
- Framer Motion: Page transitions, accordion, navbar, card hovers, modal
- Lenis: Smooth scrolling (respects prefers-reduced-motion)
- CSS: Marquee animation, button hover effects
- Swiper: Testimonials, gallery mobile

---

### Phase 12 — SEO

#### [NEW] Each page has unique `<title>` and `<meta>` tags
- React Helmet or inline meta management
- Structured data: EducationalOrganization + LocalBusiness (JSON-LD)
- Semantic HTML: proper H1→H2→H3 hierarchy
- Open Graph metadata per page

---

## Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home.jsx | Hero + overview + conversion |
| `/about` | About.jsx | Brand trust |
| `/courses` | Courses.jsx | Course discovery |
| `/courses/:slug` | CourseDetails.jsx | Course detail + enrollment CTA |
| `/curriculum` | Curriculum.jsx | Interactive curriculum |
| `/why-us` | WhyUs.jsx | Differentiation |
| `/student-results` | StudentResults.jsx | Social proof |
| `/gallery` | Gallery.jsx | Visual trust |
| `/contact` | Contact.jsx | Contact + maps |
| `/enroll` | Enroll.jsx | Lead capture |
| `/faq` | FAQ.jsx | Objection handling |
| `/privacy-policy` | PrivacyPolicy.jsx | Legal |
| `/terms-and-conditions` | Terms.jsx | Legal |
| `*` | NotFound.jsx | 404 |

---

## Conversion Flow

```
HOME → COURSES → COURSE DETAIL → ENROLL → FORM → WHATSAPP
         ↑                                    ↑
    (every CTA)                          (success state)
```

---

## Verification Plan

### Automated
- `npm run build` — no errors
- Check console for warnings/errors on each page

### Manual Verification
- Test all 14 routes in browser
- Test enrollment form submission → WhatsApp redirect with prefilled message
- Test mobile responsive on 375px, 768px, 1280px, 1440px
- Test keyboard navigation (Tab, Enter, Escape)
- Check reduced motion preference
- Verify Lighthouse scores (target: Performance 90+, Accessibility 90+, SEO 90+)
- Check console on all pages for zero errors

---

## Placeholder Brand Name

Until client confirms, using: **SkillEdge Digital**
(This is easy to replace via `contact.js` and `courses.js`)
