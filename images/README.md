# Image Organization

This directory contains photos organized by category/album.

## Structure

```
images/
├── landscape/
│   ├── full/        (2400px max for lightbox viewing)
│   ├── thumb/       (600px for masonry grid thumbnails)
│   └── featured.jpg (album cover image)
├── portrait/
│   ├── full/
│   ├── thumb/
│   └── featured.jpg
└── urban/
    ├── full/
    ├── thumb/
    └── featured.jpg
```

## Image Processing

For each photo, you need:
1. **Thumbnail version** (600px on longest side) - saved in `thumb/` directory
2. **Full-size version** (2400px on longest side) - saved in `full/` directory
3. **Featured image** - saved as `featured.jpg` in album root (used for album card)

### Using ImageMagick

```bash
# Create thumbnail
convert input.jpg -resize 600x600\> -quality 85 thumb/photo-name.jpg

# Create full size
convert input.jpg -resize 2400x2400\> -quality 90 full/photo-name.jpg

# Create featured image
convert input.jpg -resize 800x800^ -gravity center -extent 800x800 -quality 90 featured.jpg
```

## Naming Convention

- Use descriptive names: `mountain-sunset.jpg`, `urban-street-scene.jpg`
- Keep names lowercase with hyphens
- Maintain consistent naming between thumb and full versions
