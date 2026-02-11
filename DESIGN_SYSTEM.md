# NeuralEdge AI - Enterprise Website

A premium, modern company profile website for an AI and Data Science technology company built with React, TypeScript, Tailwind CSS, and Motion.

## 🎨 Design System

### Color Palette

**Primary Colors:**
- Deep Blue: `#2563eb` (blue-600)
- Indigo: `#4f46e5` (indigo-600)

**Secondary Colors:**
- Electric Blue/Cyan: `#06b6d4` (cyan-500)
- Purple: `#8b5cf6` (purple-500)

**Accent Colors:**
- Soft Green (Success): `#10b981` (green-500)
- Neon Blue: `#3b82f6` (blue-500)

### Typography

**Headings:**
- Font: System Sans Serif (Bold/Semi-Bold)
- Sizes: 4xl-6xl for heroes, 3xl-4xl for sections, xl-2xl for subsections

**Body:**
- Font: System Sans Serif
- Size: base (16px) with leading-relaxed (1.75)

**Numbers/Data:**
- Font: font-mono for metrics and KPIs
- Weight: font-bold

## 📦 Component Library

### Core Components

#### 1. **SolutionCard**
Card component for displaying AI solutions with icon, title, description, and features list.

```tsx
<SolutionCard
  icon={Brain}
  title="AI Solutions"
  description="Advanced machine learning..."
  features={["Feature 1", "Feature 2"]}
  gradient="from-blue-500 to-indigo-600"
/>
```

#### 2. **KPICard**
Display key performance indicators with optional trend indicators.

```tsx
<KPICard
  icon={Users}
  label="Enterprise Clients"
  value="500+"
  trend={24}
  trendLabel="This quarter"
  iconColor="text-blue-600"
/>
```

#### 3. **FeatureCard**
Simple feature display with icon, title, and description.

```tsx
<FeatureCard
  icon={Shield}
  title="Security"
  description="Enterprise-grade security"
/>
```

#### 4. **IndustryCard**
Industry-specific cards with icon, description, and optional stats.

```tsx
<IndustryCard
  title="Retail"
  description="AI-powered inventory..."
  icon={<Store className="w-8 h-8 text-blue-600" />}
  stats={[
    { label: "Revenue Growth", value: "+32%" },
    { label: "Efficiency Gain", value: "+45%" }
  ]}
/>
```

#### 5. **DataPanel**
Dashboard-style panel with header and content area.

```tsx
<DataPanel
  title="Analytics Dashboard"
  subtitle="Real-time insights"
  action={<Button>View All</Button>}
>
  {/* Content */}
</DataPanel>
```

#### 6. **DataVisualization**
Line chart component using Recharts.

```tsx
<DataVisualization
  data={chartData}
  dataKey="revenue"
  xAxisKey="month"
  color="#3b82f6"
/>
```

#### 7. **BarChartComponent**
Bar chart component using Recharts.

```tsx
<BarChartComponent
  data={chartData}
  dataKey="value"
  xAxisKey="metric"
  color="#6366f1"
  height={300}
/>
```

#### 8. **AIShowcase**
Animated AI network visualization with nodes and connections.

```tsx
<AIShowcase />
```

#### 9. **Testimonial**
Customer testimonial card with rating, quote, and author info.

```tsx
<Testimonial
  quote="Amazing AI platform..."
  author="John Doe"
  role="CTO"
  company="Tech Corp"
  rating={5}
/>
```

#### 10. **ScrollToTop**
Floating button that appears on scroll to return to top of page.

```tsx
<ScrollToTop />
```

### Layout Components

#### **Navbar**
Sticky navigation with logo, menu items, and CTA button. Includes mobile menu.

#### **Footer**
Comprehensive footer with company info, links, and social media.

#### **Layout**
Main layout wrapper with navbar, footer, and scroll-to-top button.

## 📄 Pages

1. **Home** (`/`) - Hero, solutions, technology stack, industries, stats, CTA
2. **About** (`/about`) - Company story, mission/vision, values, timeline
3. **Solutions** (`/solutions`) - AI, Data, and Software solutions with details
4. **Products** (`/products`) - Enterprise product showcase with specifications
5. **Contact** (`/contact`) - Enterprise inquiry form with validation
6. **Privacy** (`/privacy`) - Privacy policy documentation
7. **Terms** (`/terms`) - Terms of service documentation
8. **404** - Custom not found page

## 🎭 Animations

Using `motion/react` for smooth animations:

- Page transitions: fade and slide up
- Card hover effects: lift and shadow
- Button interactions: scale and color transitions
- Scroll-triggered animations: viewport-based reveals
- Loading states: skeleton and pulse effects

## 🎨 Design Patterns

### Background Patterns

```tsx
// Subtle grid pattern
<div className="absolute inset-0 opacity-[0.03]">
  <div className="absolute inset-0" style={{
    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
    backgroundSize: '40px 40px'
  }} />
</div>
```

### Gradient Backgrounds

- Hero sections: `bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50`
- CTA sections: `bg-gradient-to-br from-blue-600 to-indigo-700`
- Cards: `bg-gradient-to-br from-blue-500 to-indigo-600`

### Glassmorphism (Subtle)

```tsx
className="bg-white/80 backdrop-blur-xl"
```

## 🚀 Best Practices

1. **Responsive First**: All components are mobile-responsive
2. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
3. **Performance**: Lazy loading, optimized images, code splitting
4. **SEO**: Proper heading hierarchy, meta tags, semantic structure
5. **Type Safety**: Full TypeScript coverage

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router 7** - Routing
- **Tailwind CSS 4** - Styling
- **Motion (Framer Motion)** - Animations
- **Recharts** - Data visualizations
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## 🎯 Key Features

- ✅ Multi-page application with routing
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern gradient-based UI
- ✅ Data visualization components
- ✅ Form validation and handling
- ✅ Smooth page transitions
- ✅ Accessibility compliant
- ✅ Enterprise-grade design
- ✅ Reusable component system
- ✅ Professional documentation pages

## 📧 Contact

For support or inquiries:
- Email: contact@neuraledge.ai
- Website: neuraledge.ai
