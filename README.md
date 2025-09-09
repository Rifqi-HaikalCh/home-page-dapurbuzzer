# 🚀 Dapur Buzzer - Influencer Marketing Platform

A stunning, modern homepage for Dapur Buzzer, an influencer marketing platform that connects brands with Indonesia's top influencers. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Dapur Buzzer Homepage](https://via.placeholder.com/1200x600/7124a8/ffffff?text=Dapur+Buzzer+Homepage)

## ✨ Features

- **Modern Design**: Dark theme with purple gradient accents (#7124a8 primary color)
- **Responsive**: Fully responsive design optimized for all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Type-Safe**: Built with TypeScript for enhanced developer experience
- **Component Architecture**: Clean, scalable component structure
- **Performance**: Optimized for speed with Next.js 14 App Router

## 🎨 Design Philosophy

The homepage follows a **metaphorical Atomic Design** structure for maximum maintainability:

```
/components
├── /elements     # Atoms - Smallest, indivisible UI parts
├── /composites   # Molecules - Combinations of elements
└── /sections     # Organisms - Major page sections
```

### Color Palette
- **Primary**: `#7124a8` (Deep Purple)
- **Secondary**: `#9c4ed4` (Light Purple) 
- **Background**: `#1a0a2e` (Dark Purple)
- **Text**: `#ffffff` (White)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 🏗️ Component Structure

### Elements (Atoms)
- **Button**: Versatile button component with variants (primary, secondary, outline)
- **Input**: Search input with icon support and glassmorphism effect
- **Avatar**: Profile image component with hover animations
- **Logo**: Brand logo with gradient text effect

### Composites (Molecules)
- **SearchBar**: Input + Button combination for influencer search
- **InfluencerCard**: Avatar + Info + CTA button for featured influencers
- **TestimonialCard**: Quote + Avatar + Author info for client testimonials

### Sections (Organisms)
- **Header**: Sticky navigation with glassmorphism effect
- **HeroSection**: Full-viewport hero with animated gradient background
- **ClientShowcase**: Trusted brand logos with hover effects
- **CategoryGrid**: Interactive influencer category cards
- **RecommendedInfluencers**: Horizontal carousel of featured influencers
- **Testimonials**: Auto-playing testimonial slider
- **CTASection**: Final call-to-action with dual paths (Influencer/Brand)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dapur-buzzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## 📁 Project Structure

```
dapur-buzzer/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Inter font
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage composition
│   └── components/
│       ├── elements/        # Atomic components
│       │   ├── Button.tsx
│       │   ├── Input.tsx
│       │   ├── Avatar.tsx
│       │   └── Logo.tsx
│       ├── composites/      # Molecular components
│       │   ├── SearchBar.tsx
│       │   ├── InfluencerCard.tsx
│       │   └── TestimonialCard.tsx
│       └── sections/        # Organism components
│           ├── Header.tsx
│           ├── HeroSection.tsx
│           ├── ClientShowcase.tsx
│           ├── CategoryGrid.tsx
│           ├── RecommendedInfluencers.tsx
│           ├── Testimonials.tsx
│           └── CTASection.tsx
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Key Features Breakdown

### 🔍 Search Functionality
- Real-time search bar in header
- Icon integration with Lucide React
- Keyboard support (Enter key)

### 🎨 Visual Effects
- Glassmorphism backgrounds (`backdrop-blur-md`)
- Gradient hover states
- Smooth scale animations on hover
- Custom scrollbar styling

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Optimized for all screen sizes

### ⚡ Performance
- Next.js 14 optimizations
- Image optimization with `next/image`
- Lazy loading for animations
- Minimal bundle size

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🎨 Customization

### Changing Colors
Update the CSS custom properties in `globals.css`:

```css
:root {
  --primary-purple: #7124a8;    /* Your primary brand color */
  --secondary-purple: #9c4ed4;  /* Your secondary brand color */
  --background-dark: #1a0a2e;   /* Your background color */
}
```

### Adding New Components
Follow the established pattern:

1. **Elements**: Place in `/components/elements/`
2. **Composites**: Place in `/components/composites/`
3. **Sections**: Place in `/components/sections/`

### Modifying Animations
All animations use Framer Motion. Key patterns:

```tsx
// Fade in from bottom
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Scale on hover
whileHover={{ scale: 1.05 }}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Animation patterns from Framer Motion documentation
- Color palette inspired by modern dark themes
- Typography following contemporary design trends

---

**Built with ❤️ for the Indonesian influencer community**

For questions or support, please open an issue or contact the development team.
