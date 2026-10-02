# The Wandering Wandwright

Static, dependency-free quiz for GitHub Pages. Open index.html locally or serve this folder. Fifteen questions score six wand personalities; ties use the fixed order in TYPES. Every wand has a matching generated image, +2 to spell attacks and spell save DC, and one at-will spell and one powerful 6th-level spell usable once per day, recharging at dawn. Requires attunement by a spellcaster. This is campaign homebrew, not an official D&D rules item.

## GitHub Pages

Upload the contents of this folder to the repository root, including the six referenced PNG images and .nojekyll. In repository Settings → Pages, choose Deploy from a branch, main, / (root), then Save. No build or secrets are needed. Relative asset URLs work under a repository subpath.

## Editing

data.js contains questions, answer weights, materials, dialogue, and properties. app.js controls the interview and reveal. style.css contains the responsive atelier theme. English is the initial visitor language.

## Illustrations

Generated with the built-in ImageGen tool. Six separate prompts share: painterly magical antique catalog, one full slender wand diagonally across near-black teal velvet, soft dramatic glow, no text or characters. Subjects: cedar/phoenix/obsidian; ash/djinn/silver; ebony/moonlight/mother-of-pearl; willow/elemental seed/moss agate; ironwood/earth gem/tarrasque scales; birch/starlight/meteorite silver.


Legendary revision: all six wands have rare ingredient provenance and distinct lengths (11–18 inches). Velvet Paradox keeps mirror-v2.png; the other five use *-v3.png. Spell casting uses D&D 5e 2014 rules, without components or slots, with normal timings and concentration. Gallery is available through See every wand. Full generation prompts are stored locally in assets/prompts-v3.json.

