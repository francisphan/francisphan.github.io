# francisphan.github.io

Personal site for Francis Phan: résumé first, projects second, photography as
the personality splash. Jekyll on GitHub Pages, served at https://francisphan.github.io.

```bash
bundle exec jekyll serve   # http://localhost:4000
```

## Where things live

| What | File |
| --- | --- |
| Résumé (headline, stats, experience, skills, education) | `_data/resume.yml` |
| Project cards, in display order (homepage shows the first six) | `_data/projects.yml` |
| Homepage layout | `index.html` |
| All projects | `projects.html` |
| Photo gallery (masonry + PhotoSwipe lightbox) | `photos.html`, `_layouts/photo-album.html` |
| Photos | `images/{portfolio,city,india}/{full,thumb}/` — full ≤2048px, thumb 800px |
| Styles | `_sass/` (`site` shell, `resume`, `projects`, `gallery`), compiled by `css/main.scss` |

## Adding a photo

Put a resized full image and thumbnail under `images/…/full/` and `images/…/thumb/`,
then add an entry to `photos.html`:

```liquid
{% include photo.html
   thumb="/images/portfolio/thumb/200.jpg"
   full="/images/portfolio/full/200.jpg"
   width="2048"
   height="1365"
   alt="Photograph" %}
```
