# Lesson Challenge Visual Generation

The `lessons/*/practice_challenges` folders now contain:

- `README.md`: the build brief
- `visual_prompt.txt`: the prompt for the lesson visual aid
- `visuals/`: the folder where the generated `challenge-guide.webp` should live

## Current blocker

An attempted OpenAI image-generation run failed because the account returned:

- `billing_hard_limit_reached`

That means the repo is prepared for visual generation, but the actual WebP files still need a working OpenAI billing state before they can be created.

## PowerShell command to generate one lesson visual

```powershell
$env:OPENAI_API_KEY = ((Get-Content .env | Where-Object { $_ -match '^OPENAI_API_KEY=' }) -replace '^OPENAI_API_KEY=', '').Trim()
python C:\Users\USER\.codex\skills\.system\imagegen\scripts\image_gen.py generate `
  --prompt-file lessons\lesson_01_html_structure_and_semantics\practice_challenges\visual_prompt.txt `
  --size 1024x1024 `
  --quality low `
  --output-format webp `
  --out lessons\lesson_01_html_structure_and_semantics\practice_challenges\visuals\challenge-guide.webp `
  --force
```

## Important note about motion

The current image-generation workflow produces still images, not true animated WebP files.

For action-heavy lessons such as DOM, forms, and async fetch, the prompts were written as storyboard-style UI scenes so a single still image can still communicate the interaction flow clearly.
