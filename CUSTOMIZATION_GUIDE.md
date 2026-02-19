# 🚀 Quick Start Customization Guide

## 5-Minute Setup for Your Wedding

This guide helps you quickly customize the invitation for your wedding.

---

## 1️⃣ Change Couple Names

### Files to Edit:
**File 1**: `src/App.jsx`
```javascript
// Already imports all components correctly
```

**File 2**: `src/components/HeroSection.jsx` (Line ~45-50)
```jsx
<h1 className="text-6xl md:text-8xl font-serif font-bold text-gold mb-2">
  Jatin & Khushi  // ← CHANGE THIS
</h1>
```

Change to your names:
```jsx
<h1 className="text-6xl md:text-8xl font-serif font-bold text-gold mb-2">
  Your Name & Partner Name
</h1>
```

**File 3**: `src/components/Footer.jsx` (Line ~21-22)
```jsx
<p className="text-cream text-sm">
  Jatin & Khushi  // ← CHANGE THIS
```

**File 4**: `src/data/eventData.js` (Line ~11 in weddingStory)
```javascript
const weddingStory = {
  title: 'Our Love Story',
  sections: [
    {
      id: 1,
      title: 'The Meeting',
      description: 'Your story...',  // ← CUSTOMIZE THIS
```

---

## 2️⃣ Update Wedding Date & Times

### File: `src/data/eventData.js`

```javascript
export const events = [
  {
    id: 1,
    name: 'Haldi',
    date: 'March 15, 2026',        // ← CHANGE
    time: '4:00 PM - 7:00 PM',     // ← CHANGE
    location: 'Your Location',     // ← CHANGE
    address: 'Full Address',       // ← CHANGE
    description: 'Your description here',
  },
  // ... repeat for other events
];
```

**Important**: Also update `CountdownTimer.jsx` line ~16:
```javascript
const weddingDate = new Date('March 18, 2026').getTime(); // ← MATCH YOUR DATE
```

---

## 3️⃣ Change Color Theme

### File: `tailwind.config.js`

```javascript
colors: {
  'royal-red': '#7B0000',      // Main red
  'gold': '#D4AF37',            // Gold accent
  'cream': '#F8EAD8',           // Text color
  'deep-burgundy': '#5C0000',   // Dark red
  'dark-red': '#4A0000',        // Darker red
}
```

**Alternative Color Schemes**:

**Modern Blue & Silver**:
```javascript
'royal-red': '#0B3D91',        // Dark blue
'gold': '#C0C0C0',             // Silver
'deep-burgundy': '#051A4D',    // Navy
```

**Traditional Pink & Silver**:
```javascript
'royal-red': '#C91F16',        // Pink
'gold': '#E6E6FA',             // Lavender
'cream': '#FFF5F7',            // Light pink
```

**emerald Green & Gold**:
```javascript
'royal-red': '#1B4D3E',        // Emerald
'gold': '#D4AF37',             // Keep gold
'cream': '#F5F5DC',            // Off-white
```

---

## 4️⃣ Update Venue Information

### File: `src/data/eventData.js`

Change venues array:
```javascript
export const venues = [
  {
    id: 1,
    name: 'Your Venue Name',
    event: 'Wedding Ceremony',
    address: '123 Your Address, City',
    phone: '+91 YOUR_PHONE',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=YOUR_MAP_CODE',
  },
];
```

### How to get Google Maps embed URL:
1. Go to Google Maps
2. Search your venue
3. Click "Share" → "Embed a map"
4. Copy the `src` URL
5. Paste in `mapEmbedUrl`

---

## 5️⃣ Add Real Images

### File: `src/components/Gallery.jsx`

Current emoji placeholders:
```jsx
<div className="text-8xl transform group-hover:scale-110">
  {item.emoji}  // ← REPLACE THIS
</div>
```

Change to real images:
```jsx
<img 
  src="/path/to/image.jpg" 
  alt="Wedding Photo"
  className="w-full h-full object-cover"
/>
```

**Steps**:
1. Place images in `src/assets/images/`
2. Update Gallery.jsx items with image paths
3. Update the galleryItems array (lines 40-48)

Example:
```javascript
const galleryItems = [
  { id: 1, emoji: '📸', title: 'Engagement' }, // ← Change to img
  { id: 2, emoji: '💑', title: 'Happy Times' }, // ← Change to img
  // ...
];
```

---

## 6️⃣ Update Event Details

### File: `src/data/eventData.js`

Each event object:
```javascript
{
  id: 1,
  name: 'Haldi',                          // ← Event name
  date: 'March 15, 2026',                 // ← Date
  time: '4:00 PM - 7:00 PM',              // ← Time
  location: 'Jatin\'s Residence',         // ← Venue name
  address: '123 Royal Palace Road, Delhi', // ← Full address
  description: 'Your description here',    // ← Event description
  color: 'amber',                         // ← Color theme
}
```

---

## 7️⃣ Customize Story Timeline

### File: `src/data/eventData.js`

Update weddingStory sections:
```javascript
sections: [
  {
    id: 1,
    title: 'How We Met',          // ← Your story title
    description: 'Your story...',  // ← Your story
    year: '2020',                  // ← When it happened
  },
  // ... add more sections or modify existing
]
```

---

## 8️⃣ Update Footer Contact Info

### File: `src/components/Footer.jsx` (Lines 26-33)

```jsx
<p className="text-cream text-sm">
  Jatin & Khushi<br />          {/* ← names */}
  March 18, 2026<br />           {/* ← date */}
  Majestic Palace, Delhi         {/* ← venue */}
</p>
```

And contact section (Lines 41-46):
```jsx
<p className="text-cream text-sm">
  📧 jatin.khushi@wedding.com    {/* ← email */}
  📱 +91 98765 43210              {/* ← phone */}
  🔗 Share the joy!
</p>
```

---

## 🎨 Advanced Customizations

### Change Hero Background
**File**: `src/components/HeroSection.jsx` (Line ~20)

Replace the SVG gradient:
```jsx
backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <radialGradient id="grad" cx="50%25" cy="50%25" r="50%25">
      <stop offset="0%25" style="stop-color:#YOUR_COLOR;stop-opacity:0.9" />
      <stop offset="100%25" style="stop-color:#000000;stop-opacity:1" />
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(%23grad)"/>
</svg>')`,
```

### Adjust Animation Speeds
**File**: `src/utils/gsapAnimations.js`

Change duration values:
```javascript
// Curtain: change 2 to desired seconds
gsap.to(leftCurtain, {
  x: -100,
  duration: 2,  // ← Change this
  ease: 'power2.inOut',
});
```

### Modify Button Text
**Files**:
- HeroSection.jsx: "Open Invitation"
- Footer.jsx: Navigation links
- RSVPForm.jsx: "Submit RSVP"

---

## 🔄 Full Customization Workflow

### Step 1: Basic Info
- [ ] Update couple names (HeroSection, Footer)
- [ ] Change wedding date (eventData, CountdownTimer)
- [ ] Update main venue

### Step 2: Event Details
- [ ] Edit all 4 event details (eventData.js)
- [ ] Update times and locations
- [ ] Add descriptions

### Step 3: Styling
- [ ] Choose color scheme (tailwind.config.js)
- [ ] Update fonts if desired (index.css)
- [ ] Adjust spacing if needed

### Step 4: Content
- [ ] Personalize story timeline
- [ ] Update contact info
- [ ] Add real images to gallery

### Step 5: Testing
- [ ] Run `npm run dev`
- [ ] Check on mobile device
- [ ] Test all buttons and forms
- [ ] Verify countdown timer

### Step 6: Deployment
- [ ] Run `npm run build`
- [ ] Deploy dist/ folder
- [ ] Test live version

---

## 📋 File Change Summary

| Section | File | Key Lines |
|---------|------|-----------|
| Names | HeroSection.jsx | 45-50 |
| Names | Footer.jsx | 21-22 |
| Dates | eventData.js | All |
| Countdown | CountdownTimer.jsx | 16 |
| Colors | tailwind.config.js | 5-11 |
| Story | eventData.js | 10-35 |
| Venues | eventData.js | 38-55 |
| Gallery | Gallery.jsx | 40-48 |
| Contact | Footer.jsx | 26-46 |

---

## 🆘 Quick Troubleshooting

**"Server won't start"**
```bash
npm run dev -- --port 3000
```

**"Styles not applied"**
```bash
npm run lint
npm run build
```

**"Images not showing"**
- Check file path is correct
- Image files are in `src/assets/images/`
- Use relative paths: `/images/photo.jpg`

**"Date not updating countdown"**
- Update in CountdownTimer.jsx line 16
- Match format: `'Month DD, YYYY'`

**"Colors not changing"**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (Ctrl+C, then npm run dev)

---

## 💡 Pro Tips

1. **Keep backup**: Copy original files before major edits
2. **Test mobile**: Always check responsive design
3. **Proofread**: Double-check all names, dates, numbers
4. **Images**: Use high-quality images (1920x1080+)
5. **Preview**: Use `npm run preview` before deploying

---

## 🎯 Success Checklist

Before deploying:
- [ ] All names correct
- [ ] Wedding date matches countdown
- [ ] All event info updated
- [ ] Colors match your theme
- [ ] Images loaded correctly
- [ ] Links work (maps, RSVP)
- [ ] Mobile view looks good
- [ ] No console errors
- [ ] All text is readable
- [ ] Ready to send to guests!

---

**Questions?** Check the main README.md or SETUP_SUMMARY.md

**Ready to celebrate?** Run `npm run dev` and start customizing! 🎉
