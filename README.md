# 🚀 Kalyan Mahato - Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Dark Theme** - Professional design
- 📱 **Fully Responsive** - Mobile-first approach
- ⚡ **High Performance** - Optimized with Next.js
- 📧 **Contact Form** - EmailJS integration
- 🎭 **Smooth Animations** - Framer Motion powered
- 🔒 **Production Ready** - Error boundaries & validation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion, GSAP
- **Email**: EmailJS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0+
- npm 9.0+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kalyan0313/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # React components
├── constants/          # Portfolio data
├── lib/               # Utilities
├── types/             # TypeScript types
└── config/            # Configuration
```

## 🔧 Configuration

Edit `src/constants/portfolio-data.ts` to customize:
- Personal information
- Projects and skills
- Contact details
- Resume link

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
- **Netlify**: Upload build folder
- **GitHub Pages**: Use GitHub Actions

## 📞 Contact

**Kalyan Mahato** - Full Stack Developer

- 📧 **Email**: [mahatokalyan2@gmail.com](mailto:mahatokalyan2@gmail.com)
- 💼 **LinkedIn**: [Kalyan Mahato](https://www.linkedin.com/in/kalyan-mahato-366444244)
- 🐙 **GitHub**: [@Kalyan0313](https://github.com/Kalyan0313)
- 📍 **Location**: Kolkata, India

---

**⭐ Star this repository if you found it helpful!**

Built with ❤️ by [Kalyan Mahato](https://github.com/Kalyan0313)