# PromptRater Design Guidelines

## Design Approach
**ChatGPT-Inspired Utility Application** - Clean, focused single-page interface optimized for prompt analysis workflow. Prioritizes clarity and ease of use over visual flourishes.

---

## Color System

**Primary Palette:**
- Primary Action: `#10A37F` (teal-green for buttons, accents)
- Background Dark: `#0B1220` (deep navy for dark mode)
- Background Light: `#FFFFFF` (clean white for light mode)
- Accent/Error: `#FF4D4F` (red for alerts or low scores)
- Muted Text: `#6B7280` (secondary information)
- Text Dark: `#1F2937` (primary text in light mode)
- Text Light: `#F9FAFB` (primary text in dark mode)

**Usage:**
- Buttons and interactive elements use primary teal
- Background switches based on theme toggle
- Feedback text uses muted gray with accent red for warnings

---

## Typography

**Font Family:**
- Primary: Inter or Poppins (Google Fonts via CDN)
- Fallback: system-ui, sans-serif

**Hierarchy:**
- **App Title (Logo):** 2xl (24px), font-bold
- **Section Headings:** xl (20px), font-semibold
- **Body Text:** base (16px), font-normal
- **Button Text:** base (16px), font-medium
- **Metrics Labels:** sm (14px), font-medium
- **Footer Text:** sm (14px), font-normal

---

## Layout System

**Spacing Units:**
Use Tailwind units: 2, 3, 4, 6, 8, 12, 16, 20

**Container Structure:**
- Overall max-width: 800px (centered)
- Card padding: p-6 to p-8
- Section spacing: gap-6 to gap-8
- Button padding: px-6 py-3

**Responsive Breakpoints:**
- Mobile (default): Single column, full width with px-4
- Tablet (md: 768px): Maintain single column with increased padding
- Desktop (lg: 1024px): Center container with max-width constraint

---

## Component Library

### Header
- **Structure:** Full-width bar with flex justify-between
- **Left:** "PromptRater" logo text (primary color)
- **Right:** Dark/Light mode toggle switch
- **Height:** h-16
- **Styling:** Subtle border-bottom in light mode, no border in dark mode

### Main Card (Analysis Interface)
- **Container:** Centered card with rounded-xl corners and subtle shadow
- **Background:** White (light) / Dark slate (dark mode)
- **Elements:**
  - Textarea: Large multi-line input, rounded borders, placeholder "Type your prompt here…"
  - Submit Button: Full-width or centered, primary color with hover glow
  - Loading State: Centered pulse circle animation
  - Results Display (conditional):
    - Circular score visualization (0-100) - large, centered
    - Three horizontal progress bars with labels (Clarity, Creativity, Specificity)
    - Feedback text box with AI-style suggestions

### Progress Bars
- **Design:** Horizontal bars with rounded ends
- **Height:** h-3 to h-4
- **Colors:** 
  - Background: Light gray
  - Fill: Gradient or solid based on score (green for high, yellow for medium, red for low)
- **Animation:** Smooth width transition when scores appear

### Circular Score Display
- **Size:** 120-150px diameter
- **Design:** Ring/donut chart style showing percentage
- **Colors:** Primary teal for good scores, gradient to accent red for poor scores
- **Center:** Large numeric score value

### Footer
- **Structure:** Fixed or static bottom section
- **Content:** "Made with ❤️ by [Your Name]" + GitHub icon link
- **Styling:** Small text, muted color, centered alignment
- **Height:** py-6

---

## Animations & Interactions

**Framer Motion Transitions:**
- **Card Entry:** Fade in + slide up (initial: y: 20, opacity: 0)
- **Results Display:** Staggered fade-in for score, bars, and feedback
- **Theme Switch:** Smooth background color transition (duration: 0.3s)
- **Button Hover:** Scale: 1.02 + glow effect (box-shadow expansion)

**Loading Animation:**
- Pulsing circle or spinner in primary color
- Centered in results area
- Smooth opacity pulse (0.4 to 1.0)

**Interactive States:**
- Button: Hover glow, active scale down (0.98)
- Textarea: Focus ring in primary color
- Toggle: Smooth slide transition

---

## Accessibility
- All interactive elements have focus states with visible outlines
- Color contrast meets WCAG AA standards
- Theme toggle accessible via keyboard
- Form elements have associated labels (aria-label for textarea)

---

## Images
**No hero images required.** This is a utility application focused on functionality. The interface is text and data visualization-driven with no need for decorative imagery beyond the optional logo mark.

---

## Key Design Principles
1. **Clarity Over Complexity:** Single-purpose interface, no distractions
2. **Instant Feedback:** Visual rating appears immediately with smooth animations
3. **Theme Consistency:** Dark/light modes maintain readability and aesthetic
4. **Mobile-First:** Touch-friendly sizing, responsive from 320px up
5. **ChatGPT Aesthetic:** Modern, clean, professional AI tool appearance