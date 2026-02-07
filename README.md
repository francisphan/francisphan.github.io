# Francis Phan Photography

Professional online photo gallery showcasing photography through elegant masonry layouts and immersive lightbox viewing.

## 🎉 Latest Updates

**February 2026**: Complete transformation from portfolio to professional photo gallery
- ✅ Masonry layout (Pinterest-style waterfall)
- ✅ PhotoSwipe lightbox integration
- ✅ Responsive design with mobile navigation
- ✅ Three sample albums (Landscape, Portrait, Urban)

## 🚀 Quick Start

```bash
# Start development server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## 📁 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get up and running in 5 minutes
- **[IMPLEMENTATION_COMPLETE.md](IMPLEMENTATION_COMPLETE.md)** - Complete feature documentation
- **[TRANSFORMATION_SUMMARY.md](TRANSFORMATION_SUMMARY.md)** - What changed and why
- **[SITE_STRUCTURE.txt](SITE_STRUCTURE.txt)** - Visual site architecture
- **[images/README.md](images/README.md)** - Image organization guide

## 🎨 Features

### Gallery Features
- Pinterest-style masonry waterfall layout
- Professional PhotoSwipe lightbox with touch gestures
- Lazy loading for optimal performance
- Photo captions with camera settings
- Album organization by theme

### Responsive Design
- **Desktop (>1024px)**: Fixed sidebar + 3-4 column masonry
- **Tablet (768-1024px)**: Hamburger menu + 2-3 column masonry
- **Mobile (<768px)**: Touch-friendly + 1-2 column masonry

### Navigation
- Animated banner with photography themes
- Sidebar navigation (desktop)
- Hamburger menu (mobile/tablet)
- Social media integration

## 📸 Current Albums

1. **Landscape Photography** - Wide vistas and natural beauty
2. **Portrait Photography** - People and expressions
3. **Urban Photography** - City life and architecture

## 🛠️ Tech Stack

- **Static Site Generator**: Jekyll 3.3.1
- **Layout**: Masonry.js v4
- **Lightbox**: PhotoSwipe v5.4.4
- **Styling**: SASS with responsive breakpoints
- **Optimization**: jekyll-minifier
- **Deployment**: GitHub Pages

## 📦 Adding Photos

### 1. Prepare Images

```bash
# Create thumbnail (600px)
convert photo.jpg -resize 600x600\> -quality 85 images/album/thumb/photo.jpg

# Create full size (2400px)
convert photo.jpg -resize 2400x2400\> -quality 90 images/album/full/photo.jpg
```

### 2. Add to Album

Edit `_photos/album/index.md`:

```markdown
{% include photo.html
   thumb="/images/album/thumb/photo.jpg"
   full="/images/album/full/photo.jpg"
   width="2400"
   height="1600"
   alt="Photo description"
   caption="Camera settings: f/8, 1/250s, ISO 100" %}
```

## 🌐 Deployment

```bash
git add .
git commit -m "Update photo gallery"
git push origin master
```

Site deploys automatically to: **https://francisphan.info**

## 📱 Browser Support

- Chrome (desktop & mobile)
- Firefox
- Safari (desktop & mobile)
- Edge

## 📊 Project Structure

```
francisphan.github.io/
├── _config.yml              # Jekyll configuration
├── _data/
│   └── galleries.yml        # Album definitions
├── _layouts/
│   ├── gallery.html         # Album overview
│   └── photo-album.html     # Individual albums
├── _photos/
│   ├── landscape/           # Landscape album
│   ├── portrait/            # Portrait album
│   └── urban/               # Urban album
├── images/
│   ├── landscape/
│   ├── portrait/
│   └── urban/
├── assets/
│   ├── js/
│   │   ├── photoswipe/      # Lightbox library
│   │   ├── masonry.pkgd.min.js
│   │   └── imagesloaded.pkgd.min.js
│   └── css/
├── _sass/
│   ├── gallery.sass         # Gallery styles
│   └── hamburger.sass       # Mobile navigation
├── index.html               # Homepage
├── gallery.html             # Gallery overview
└── about.md                 # About page
```

## 🎯 Next Steps

1. ⏳ Replace placeholder images with actual photos
2. ⏳ Update about.md with bio and camera gear
3. ⏳ Customize colors in `_sass/global_variables.sass`
4. ⏳ Add more albums as needed
5. ⏳ Deploy to GitHub Pages

## 📝 License

This is a personal portfolio website. All photos © Francis Phan.

## 🤝 Support

For issues or questions about:
- **Jekyll**: https://jekyllrb.com/docs/
- **PhotoSwipe**: https://photoswipe.com/
- **Masonry**: https://masonry.desandro.com/

## 📧 Contact

- **Website**: https://francisphan.info
- **Instagram**: [@phancis](https://www.instagram.com/phancis/)
- **GitHub**: [@francisphan](https://github.com/francisphan/)

---

Built with ❤️ using Jekyll, Masonry, and PhotoSwipe
