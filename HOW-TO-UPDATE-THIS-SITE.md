# Anna's website — how it works and how to change it

You do not need to know how to code to maintain this site. Everything below assumes zero
web experience.

---

## 1. What these files are

Your website is just this folder. Nothing else, no software, no database, no fee.

```
index.html          ← Home page
research.html       ← Research page
publications.html   ← Publications & Awards page
beyond.html         ← Beyond the Lab page
contact.html        ← Contact page
assets/
  style.css         ← All the colours, fonts and spacing for every page
  site.js           ← Makes figures and posters enlarge when clicked
  img/              ← Your photos
  figures/          ← Your research figures
  posters/          ← Poster PDFs + the images used to preview them
  docs/             ← Your CV PDF
```

`.html` files hold the words. `style.css` holds the look. That is the whole system.

---

## 2. To see the site on your own computer

Double-click `index.html`. It opens in your browser and works exactly as it will online.
Nothing you do here is public until you upload it to GitHub.

---

## 3. To put it online (first time)

1. Go to **github.com** and sign in as `AnnaChen04`.
2. Click the **+** in the top-right corner → **New repository**.
3. Repository name: **`AnnaChen04.github.io`** — spelled exactly like that, all one word.
   The name is what gives you the address, so a typo here breaks it.
4. Select **Public**. Do not tick "Add a README file".
5. Click **Create repository**.
6. On the page that appears, click the link **"uploading an existing file"**.
7. Open this folder in Finder, select **everything inside it** (the five `.html` files, the
   `assets` folder, and this guide) — not the folder itself — and drag it all onto the
   GitHub page. Wait for the upload to finish.
8. Scroll down and click **Commit changes**.
9. Click **Settings** (top of the repository) → **Pages** in the left sidebar.
10. Under "Build and deployment", set Source to **Deploy from a branch**, branch to
    **main**, folder to **/ (root)**, and click **Save**.
11. Wait one to two minutes, then open **https://annachen04.github.io**

That address is now yours permanently and is free forever.

---

## 4. To change a word or a sentence

1. Open the `.html` file you want to change in **TextEdit** (right-click → Open With →
   TextEdit) or any plain-text editor.
2. Find the sentence. It will be sitting between tags that look like `<p>` and `</p>`.
   Change only the words — leave the tags alone.
3. Save the file.
4. Double-click `index.html` to check it still looks right.
5. Upload the changed file to GitHub: open your repository, click the file, click the
   **pencil icon**, paste the new content, and click **Commit changes**. The live site
   updates in about a minute.

Anything wrapped in angle brackets — `<p>`, `<h2>`, `<span class="tag">` — is machinery.
Anything between them is your text.

---

## 5. To add a new publication

Open `publications.html`, find an existing entry, and copy the whole block from
`<div class="entry">` down to its matching `</div>` — then edit the copy. The pattern is:

```html
<div class="entry">
  <div class="entry-date">2027 · First author</div>
  <div>
    <p class="citation">
      <b>Chen, A.</b>, Coauthor, B. (2027). <em>Title of the paper.</em>
      <span class="status">In review</span>
    </p>
  </div>
</div>
```

---

## 6. To swap or add a photo

1. Put the new image file into `assets/img/`.
2. In the `.html` file, find the line with the old file name and change it to the new one.
   For example `src="assets/img/life-baking.jpg"` becomes `src="assets/img/new-photo.jpg"`.
3. Update the `alt="..."` text to describe the photo — this is what screen readers announce
   and what shows if the image fails to load.

Keep photos under about 2 MB so pages stay fast.

---

## 7. To update your CV

Replace `assets/docs/Anna_Chen_CV.pdf` with the new file, keeping **exactly the same file
name**. Every "Download CV" button on the site points at that name, so nothing else needs
to change.

---

## 8. The colours

The site uses the **Lamont** scheme: deep slate blue as the primary colour and a dark forest
green as the secondary. Slate blue does the structural work — section labels, buttons, project
numbers, the diagram, the "My role" rule. Green marks anything you can click or that needs to
stand apart: links, entry headings, funding and fellowship tags, and the location/type line
under each presentation.

Both are defined at the top of `assets/style.css`:

```css
:root[data-palette="lamont"] { --accent:#37596F; ... }
:root { --sec:#2E5D46; --sec2:#20452F; }
```

On the Publications and Beyond the Lab pages the green appears as a faint pale-green highlight
behind each entry title (the `.entry h3` rule in `style.css`), with the title text left dark.

Change `--sec` to change every green element at once; change `--accent` for the slate blue.
Four other palettes (oxide, umber, bordeaux, graphite) are still defined in the file — to try
one, change `data-palette="lamont"` at the top of all five `.html` files.

---

## 9. Things worth checking before you send the link to anyone

- Open the site on your phone as well as your laptop.
- Click every poster and figure to confirm they enlarge.
- Click the "Download CV" button and confirm the right version downloads.
- Open the LDEO data-products link in a **private/incognito window while off the Columbia
  network**. If it asks for a login or fails, a professor clicking it will hit the same
  wall — tell me and I will relabel or remove it.
