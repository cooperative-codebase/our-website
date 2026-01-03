# Cooperative Codebase Website

A modern, glassmorphism-styled website for Cooperative Codebase - a New Orleans-based cooperative dedicated to building software solutions and growing the cooperative ecosystem.

## 🌟 Features

- **Glassmorphism Design**: Modern glass-like UI elements with backdrop blur effects
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Smooth hover animations and transitions
- **Contact Form**: Integrated contact form for project inquiries
- **Performance Optimized**: Built with Next.js 15 and optimized for speed

## 🎨 Design Elements

- **Color Palette**: Vibrant blues (#3B82F6, #60A5FA) with dark navy backgrounds
- **Typography**: Gradient text effects and clean, readable fonts
- **Glass Effects**: Translucent cards with backdrop blur and subtle borders
- **Animations**: Floating orbs, hover effects, and smooth transitions

## 🏗️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **TypeScript**: Full type safety throughout

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── theme-provider.tsx  # Theme context provider
├── public/
│   └── images/
│       └── logo.png        # Cooperative Codebase logo
├── lib/
│   └── utils.ts           # Utility functions
└── tailwind.config.ts     # Tailwind configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/cooperative-codebase/our_website.git
cd our_website
```

2. Install pnpm

```bash
npm install -g pnpm
```

3. Install dependencies:

```bash
pnpm install
```

4. Build the project:

```bash
pnpm build
```

5. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Page Sections

### Hero Section

- Logo display with glassmorphism container
- Main heading with gradient text
- Descriptive tagline
- Location and service badges

### About Section

- Organization story and mission
- Community focus highlight
- Connected community visualization

### Mission & Values

- Four core pillars:
  - Grow Coop Ecosystem
  - Advance Coop Economy
  - Fair Distribution
  - Software Solutions

### Services Section

- Cooperative Management Systems
- Political Organization Tools
- Consulting & Strategy

### Contact Section

- Interactive contact form
- Email, phone, and project description fields
- Glassmorphism styling with color-coded focus states

### Footer

- Logo display
- Copyright information
- Consistent glassmorphism design

## 🎯 Mission

Cooperative Codebase is dedicated to:

- **Growing the cooperative ecosystem**
- **Advancing cooperative economy** principles
- **Ensuring fair distribution** of products and services
- **Building software solutions** for cooperatives and political organizations

## 🛠️ Customization

### Colors

The color palette can be customized in `tailwind.config.ts`:

- Primary blue: #3B82F6
- Accent blue: #60A5FA
- Background: Dark navy gradients

### Glassmorphism Effects

Glass effects are achieved through:

- `backdrop-blur-xl` for blur effects
- `bg-black/30` for translucent backgrounds
- `border-white/10` for subtle borders

### Content Updates

- Update text content directly in `app/page.tsx`
- Replace logo in `public/images/logo.png`
- Modify contact form fields as needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with each push

## 📞 Contact

For questions about this website or Cooperative Codebase services:

- **Email**: hello@cooperativecodebase.org
- **Phone**: TBD
- **Location**: New Orleans, LA

## 📄 License

© 2026 Cooperative Codebase. All rights reserved.

---

Built with ❤️ for the cooperative movement
