# machinitis.com

## Writing an entry

1. In GitHub, open the `entries` folder and choose **Add file → Create new file**.
2. Name it with the date first, then a few words: `2026-10-19-frost-again.md`
   The words after the date become the address: machinitis.com/frost-again/
3. Start the file like this, then write:

```
---
title: Frost again
kind: poetry
---

Your first paragraph. Leave a blank line between paragraphs.

> A quotation or a poem goes after a > mark.
> Each line of the poem stays on its own line.

*Italics* with single stars, **bold** with double.
A link looks like [this](https://example.com).
```

4. Click **Commit changes**. The site updates in about a minute.

`kind` can be any one word: note, poetry, books, art, ai.

To fix a typo, open the file in GitHub, click the pencil, edit, and commit.
To take an entry down, delete its file.

## Other things you may want to change

- **About page:** `about.md`
- **Name, tagline, email address:** `_data/site.json`
- **Colors and type:** `css/style.css` (the accent color is `--accent`)

## Cloudflare Pages settings (set once)

- Build command: `npm run build`
- Build output directory: `_site`
