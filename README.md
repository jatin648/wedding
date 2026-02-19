# 💍 Premium Animated Wedding Invitation Website
## Jatin & Khushi's Wedding

A luxurious, fully animated wedding invitation website built with React (Vite), GSAP, and Tailwind CSS.

---

## ✨ Features

### 🎬 Animations
- **GSAP-powered animations** for smooth, cinematic effects
- **Red velvet curtain opening** animation on page load
- **Golden sparkles floating** across the screen
- **Flower petals falling** animation
- **Scroll-triggered animations** using GSAP ScrollTrigger
- **Button hover glow effects** with smooth transitions
- **Background zoom cinematic effect**
- **Image frame entry animations**

### 🏛️ Sections

1. **Hero Section**
   - Full-screen cinematic intro with red gradient background
   - Animated red velvet curtain opening
   - Bride and groom circular framed images with golden borders
   - Couple names with animated text
   - "Open Invitation" button with glow effects

2. **Wedding Story**
   - Timeline of relationship milestones
   - Glassmorphism card design with hover effects
   - Interactive vertical timeline with animated connecting line

3. **Event Timeline**
   - All 4 wedding events (Haldi, Mehendi, Wedding, Reception)
   - Date, time, and location information
   - Detailed descriptions and beautiful card layouts
   - Hover animations and transitions

4. **Countdown Timer**
   - Live countdown to wedding date (March 18, 2026)
   - Days, hours, minutes, seconds display
   - Animated counter boxes with hover effects

5. **Venue Information**
   - Google Maps integration for each venue
   - Complete address and contact information
   - "Get Directions" functionality
   - Beautiful glass-morphic card layouts

6. **Photo Gallery**
   - Image hover animations with scale effects
   - Emoji-based placeholder images (replaceable with real photos)
   - Smooth brightness transitions on hover
   - Golden border glow effects

7. **RSVP Form**
   - Full-featured contact form with validation
   - Attendance selection (Yes/No/Maybe)
   - Guest count input
   - Dietary restrictions field
   - Personal message to couple
   - Success notification

8. **Footer**
   - Wedding information summary
   - Quick navigation links
   - Contact details
   - Social sharing message

### 🎨 Design Features

- **Color Palette**
  - Deep Red: #7B0000
  - Gold: #D4AF37
  - Cream: #F8EAD8
  - Supporting dark burgundy and black

- **Typography**
  - Playfair Display for main content (serif)
  - Cinzel for elegant headings (serif)
  - Imported from Google Fonts

- **Effects**
  - Glassmorphism on all cards and containers
  - Golden glow shadows
  - Smooth scroll behavior
  - Particle background animation
  - Custom scrollbar styling

- **Responsive Design**
  - Desktop optimized layout
  - Mobile-friendly responsive grids
  - Touch-friendly interaction areas
  - Proper spacing and typography scaling

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 8.0.0-beta.13
- **Animation Library**: GSAP (GreenSock)
- **Styling**: Tailwind CSS 4.0
- **Form Management**: React Hook Form
- **HTTP Client**: Axios

---

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx          # Main hero with curtains & couple images
│   ├── WeddingStory.jsx         # Love story timeline
│   ├── Timeline.jsx             # 4 wedding events
│   ├── CountdownTimer.jsx       # Live countdown to wedding
│   ├── Venue.jsx                # Map & venue information
│   ├── Gallery.jsx              # Photo gallery with animation
│   ├── RSVPForm.jsx             # RSVP contact form
│   ├── Footer.jsx               # Footer with contact info
│   ├── ParticleBackground.jsx   # Drifting particles
│   ├── FloatingSparkles.jsx     # Floating gold sparkles
│   └── FlowerPetals.jsx         # Falling flower animation
│
├── sections/
│   └── (organized component sections)
│
├── utils/
│   └── gsapAnimations.js        # All GSAP animation functions
│
├── data/
│   └── eventData.js             # Wedding events & venue data
│
├── assets/
│   └── images/                  # Image directory
│
├── App.jsx                       # Main app component
├── App.css                       # App-specific styles
├── index.css                     # Global styles with Tailwind
└── main.jsx                      # React entry point

tailwind.config.js               # Tailwind configuration
postcss.config.js                # PostCSS configuration
vite.config.js                   # Vite configuration
index.html                       # HTML entry point
package.json                     # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory**
   ```bash
   cd e:\Wedding\my-react-app
   ```

2. **Install dependencies** (already done)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5174
   ```

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🎯 Key Components Explained

### GSAP Animations (`src/utils/gsapAnimations.js`)

- **animateCurtainOpening()**: Opens red velvet curtains on page load
- **animateHeroText()**: Fades in and slides up hero section text
- **animateFloatingSparkles()**: Continuous floating animation for sparkles
- **animateFlowerPetals()**: Falling flower petal animation
- **animateScrollSections()**: Triggers animations when elements come into view
- **animateGalleryImages()**: Hover animations for gallery
- **animateButtonHover()**: Button glow effects on hover

### Hero Section (`src/components/HeroSection.jsx`)

- Full viewport height with radial gradient background
- Left and right curtain divs with transform animations
- Circular framed images with gold borders and glow
- Smooth button with fill animation on hover

### Timeline Component (`src/components/Timeline.jsx`)

- Grid layout with event cards
- Glassmorphic design with hover effects
- Event details including date, time, location, description
- Decorative elements and borders

### RSVP Form (`src/components/RSVPForm.jsx`)

- React Hook Form for validation
- Multiple input types (text, email, tel, radio, textarea)
- Success notification on submission
- Beautiful gradient background and glass effect

---

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'royal-red': '#7B0000',      // Change this
  'gold': '#D4AF37',           // Or this
  'cream': '#F8EAD8',          // Or this
}
```

### Changing Couple Names

1. **Hero Section**: `src/components/HeroSection.jsx`
2. **Footer**: `src/components/Footer.jsx`
3. **Data**: `src/data/eventData.js`

### Updating Event Details

Edit `src/data/eventData.js`:
```javascript
export const events = [
  {
    id: 1,
    name: 'Your Event Name',
    date: 'Your Date',
    time: 'Your Time',
    location: 'Your Location',
    // ... other fields
  }
];
```

### Adding Real Images

Replace emoji placeholders in Gallery with real images:
```javascript
// In Gallery.jsx
<img src="/path/to/image.jpg" alt="Gallery Image" />
```

### Customizing Fonts

Google Fonts are imported in `src/index.css`. Change the font names in the tailwind config:
```javascript
fontFamily: {
  'serif': ['Your Font Name', 'serif'],
}
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections automatically adjust layout and typography for mobile devices.

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 💡 Performance Optimization

- **GSAP ScrollTrigger**: Efficient scroll-based animations
- **CSS Animations**: Leverages GPU acceleration
- **Lazy Loading**: Images load on demand
- **Code Splitting**: Vite automatically optimizes chunks
- **Custom Scrollbar**: Lightweight shadow scrollbar

---

## 🌐 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Form Data Handling

Currently, the RSVP form logs to console. To integrate with a backend:

1. Replace the `onSubmit` function in `RSVPForm.jsx`
2. Add API endpoint
3. Example:
```javascript
const response = await axios.post('/api/rsvp', data);
```

---

## 🎓 Learning Resources

- **GSAP Documentation**: https://gsap.com/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/

---

## 📄 License

Created for Jatin & Khushi's Wedding - 2026

---

## 🙏 Credits

- Design inspired by luxury wedding themes
- Animations built with GSAP
- Styled with Tailwind CSS
- Built with React and Vite

---

**Happy Wedding Celebrations! 💍✨**

For questions or customizations, refer to the component documentation inline or modify the configuration files accordingly.
