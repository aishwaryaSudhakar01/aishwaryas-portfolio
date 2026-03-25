

## Plan: Photo blur edges, hero stat, and tagline

### 1. Blur photo edges into background
Currently only the bottom has a gradient fade. Add gradient overlays on all four sides so the photo seamlessly blends into the dark background.

**File:** `src/pages/Index.tsx` (lines 153-173)
- Remove the hard `border border-border` div
- Add four gradient overlays: top (`bg-gradient-to-b`), left (`bg-gradient-to-r`), right (`bg-gradient-to-l`), and keep the existing bottom one
- Each overlay fades from `background` to transparent over ~40px

### 2. Replace stats row with hero "2.5+ Years" and tagline
Remove the 3-stat row. Replace with:
- A single large "2.5+" stat with "YEARS OF EXPERIENCE" label, styled big and editorial
- Below it, the tagline *"I vibe code what I wish existed"* in italic display font

**File:** `src/pages/Index.tsx` (lines 175-185)
- Remove `StatsCounter` for Products and Certifications
- Replace the stats row with a centered block containing:
  - Large `2.5+` number (text-5xl or larger, primary color)
  - "YEARS OF EXPERIENCE" mono label
  - Divider
  - Tagline in italic display font

### 3. Cleanup
- `StatsCounter` import can remain (still used for the single stat, or we inline it)

