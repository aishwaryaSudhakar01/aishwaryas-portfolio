

## Plan: Top-align header columns

**Change:** In `src/pages/Index.tsx` line 57, change the grid's `items-end` class to `items-start` so the photo aligns with the top of the name/bio column.

**File:** `src/pages/Index.tsx`, line 57
- `items-end` → `items-start`

This will make the photo start at the same vertical position as "AISHWARYA", with the stats sitting naturally below the photo regardless of how long the bio text is.

