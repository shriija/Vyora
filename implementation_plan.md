# Implementation Plan: Pretty Little Marketer (PLM) Theme Redesign

We are shifting the entire aesthetic of the **Vyora** portfolio website to match the **Pretty Little Marketer (PLM)** theme **exactly** as referenced in the uploaded image. 

---

## Design System & Theme Mapping

### 1. Color System (PLM Palette)
*   **Global Page Background**: Soft pastel olive green (`#B5C899`).
*   **Central Content Canvas**: Pure white (`#FFFFFF`) with a thin black boundary and a left/right dashed grid border.
*   **Grid Backgrounds**: Light graph paper gridlines (`linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)` with `background-size: 20px 20px`).
*   **Accent Colors**:
    *   *PLM Pink*: `#FFC5D3` (Primary highlight / pen strip)
    *   *PLM Blue*: `#A9D3E6` (Secondary card / tag)
    *   *PLM Green*: `#B5C899` (Third card / detail)
    *   *PLM Yellow*: `#FDE047` (Ticker strip)
    *   *Dark Slate Ink*: `#1C2333` (Used for text and crisp 2px solid outlines).

### 2. Typography & Stylistic Features
*   **Headers**: Elegant Serif font (**DM Serif Display** or **Playfair Display**) loaded via Google Fonts.
*   **Body & Mono**: **Plus Jakarta Sans** and sharp monospace for secondary tags.
*   **Highlighter Strips**: Soft pink background strips behind primary headers.
*   **Handwritten / Emoji details**: Cherries (🍒), speech bubbles (💬), disco balls (🪩), and lightning bolts (⚡) placed next to headings.
*   **Ticker Bar**: A yellow banner running horizontally: `MADE SIMPLE | WE REDESIGN BEFORE WE PITCH • THE COMMUNITY WEBSITE AGENCY FOR LOCAL FAVORITES • NO TEMPLATES • FAST LOADS • `

---

## Proposed Component Adjustments

### 1. Global Container Wrap
*   The entire site sits inside a centered `max-width: 1000px` white canvas card, surrounded by a global olive green page background.

### 2. Global Header
*   A clean, white navbar with a black border, containing the serif logo and navigation items with a pink hover effect.

### 3. Hero Section
*   Graph paper background.
*   A massive serif H1:
    ```text
    we redesign
    before
    we pitch.
    ```
*   Pink highlight pen stripes behind "we redesign" and "we pitch."
*   Cherry (🍒) and speech bubble (💬) floating details.
*   A blue marker tag rotated slightly.
*   Pink pill CTA buttons.

### 4. Ticker Banner
*   Yellow horizontal ticker bar dividing the Hero from the Before/After section.

### 5. Concept Builds Grid
*   We will style the folders as clean flat-designed vectors with a 2px black outline, using the PLM colors (Pink, Blue, Green, Yellow), maintaining the hover-to-file preview mechanics.

### 6. Before / After Section
*   Presented as structured pastel pink (`#FFC5D3`) and pastel blue (`#A9D3E6`) cards with black outlines.

### 7. Process & Team
*   Process steps and team polaroids mapped to the PLM pastel card structure.

---

## Verification Plan
*   Check that Google Fonts renders DM Serif Display correctly.
*   Verify that the central content page wrapper scales nicely on mobile.
