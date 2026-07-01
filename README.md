# 🎁 GiftMatch - Find the Perfect Gift in Seconds

A modern, minimalist landing page for GiftMatch, an AI-powered gift recommendation platform designed to solve the gift-giving challenge.

## 📋 Project Overview

**GiftMatch** is like Google for gifts. It helps users find the perfect present by:
- Telling us who it's for (friend, family, colleague, or yourself)
- Setting a budget
- Adding personal details (interests, preferences, occasion)
- Getting curated, thoughtful gift recommendations in seconds

### The Problem We Solve
- 🔍 Endless scrolling through countless options
- ⏰ Hours spent searching without clear direction
- 😰 Uncertainty about whether gifts will resonate with recipients

### Our Solution
Intelligent matching algorithm that finds the perfect gift based on recipient, budget, and personal preferences.

---

## 🎨 Design & Branding

### Color Palette
- **Primary Purple**: `#9B7FD9` - Main brand color
- **Dark Purple**: `#7B5FC0` - Accents and depth
- **Light Purple**: `#E8DFF5` - Backgrounds
- **Beige**: `#F5F1E8` - Secondary backgrounds
- **White**: `#FFFFFF` - Primary background
- **Dark Gray**: `#333333` - Text
- **Medium Gray**: `#666666` - Secondary text

### Typography
- **Primary Font**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Sizes**:
  - H1: 3rem
  - H2: 2.2rem
  - H3: 1.3rem
  - Body: 1rem

### Logo
Include your GiftMatch logo as `logo.svg` in the root directory.

---

## 📁 Project Structure

```
GiftMatch/
├── index.html       # Main HTML landing page
├── style.css        # Styling with purple theme
├── script.js        # Interactivity and animations
├── logo.svg         # Your brand logo
└── README.md        # This file
```

---

## 🚀 Features

### ✅ Implemented
- **Navigation Bar** - Sticky header with logo and smooth links
- **Hero Section** - Eye-catching headline with CTA button
- **Problem & Solution** - Visualizes the challenge and our approach
- **How It Works** - 4-step process clearly explained
- **Video Pitch Section** - Embedded video (ready for your pitch)
- **Benefits Section** - 6 key advantages with icons
- **Call-to-Action** - Prominent booking section
- **Footer** - Links and copyright information
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Scroll effects and hover transitions

### 🎯 Interactive Elements
- Smooth scrolling between sections
- Hover animations on cards
- Floating hero logo
- Scroll-triggered fade-in animations
- CTA button functionality

---

## 🔧 Customization Guide

### 1. **Update Your Logo**
Replace `logo.svg` with your actual GiftMatch logo file.

### 2. **Add Your Pitch Video**
In `index.html`, find the video section and replace:
```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" ...>
```

Change the `src` to your YouTube video URL:
```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...>
```

### 3. **Add Your Booking Link**
In `script.js`, find the CTA button click handler and update:
```javascript
const bookingUrl = 'https://calendly.com/your-booking-link';
```

Replace with your actual booking/contact link (Calendly, Typeform, etc.)

### 4. **Update Social Media Links**
In the footer, update the social media URLs to your profiles.

### 5. **Add Analytics (Optional)**
Add your Google Analytics or other tracking:
```html
<!-- Add to the <head> section of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted spacing)
- **Mobile**: Below 768px (single column, optimized)
- **Small Mobile**: Below 480px (compact)

---

## 🎬 How to Deploy

### Option 1: GitHub Pages (Free)
1. Go to your repository settings
2. Scroll to "GitHub Pages"
3. Select "main" branch as source
4. Your site will be live at `https://aline0805.github.io/GiftMatch`

### Option 2: Other Hosting
- **Vercel**: Connect your GitHub repo, auto-deploys
- **Netlify**: Drag and drop your files
- **Traditional Hosting**: Upload files via FTP

---

## 🎯 Key Sections Breakdown

### Hero Section
- **Purpose**: Grab attention with main tagline
- **CTA**: "Start Matching" button
- **Visual**: Your logo with floating animation

### Problem & Solution
- Shows 3 common gift-giving frustrations
- Presents GiftMatch as the solution
- Background gradient for visual interest

### How It Works
- **4-Step Process**: Recipient → Budget → Details → Match
- **Video Embed**: Show your pitch in action
- **Visual Numbers**: Easy progression tracking

### Benefits
- **6 Key Advantages**: Speed, Matching, Budget, Thoughtfulness, Integration, Stress-free
- **Hover Effects**: Cards lift up on interaction
- **Icons**: Easy visual scanning

### Call-to-Action
- **Purpose**: Drive conversions
- **Message**: "Ready to find the perfect gift?"
- **Button**: Links to your booking system


---

## 📊 Performance Optimization

- Minimal dependencies (no external libraries)
- Optimized CSS with variables for easy theming
- Smooth CSS animations (hardware-accelerated)
- Lazy-loading ready for images
- Mobile-first responsive design


---

## 📚 Resources

- **Color Palette**: https://www.figma.com/resources/assets/color-tools/
- **Font Pairing**: https://www.typewolf.com/
- **Responsive Design**: https://www.smashingmagazine.com/responsive-web-design/
- **CSS Animations**: https://animate.style/
- **Deployment**: https://pages.github.com/

---

## 📄 License

This project is created for educational purposes as a school project. 

---

**Made with 💜 for GiftMatch**  
*Find the perfect gift in seconds!*
