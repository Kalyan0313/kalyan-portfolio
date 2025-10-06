import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kalyan Mahato | Full Stack Developer & MERN Specialist",
  description: "Experienced Full Stack Developer specializing in MERN stack, React, Node.js, and modern web technologies. Building scalable applications with 1+ years of professional experience.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "MongoDB", "TypeScript", "Next.js", "Backend Developer", "Frontend Developer", "Web Developer", "Portfolio", "Kolkata", "India"],
  authors: [{ name: "Kalyan Mahato" }],
  creator: "Kalyan Mahato",
  publisher: "Kalyan Mahato",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-km.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon-km.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: "Kalyan Mahato | Full Stack Developer & MERN Specialist",
    description: "Experienced Full Stack Developer specializing in MERN stack and modern web technologies",
    type: "website",
    locale: "en_US",
    siteName: "Kalyan Mahato Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalyan Mahato | Full Stack Developer & MERN Specialist",
    description: "Experienced Full Stack Developer specializing in MERN stack and modern web technologies",
  },
  alternates: {
    canonical: "https://your-domain.com", // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-km.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-km.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force dark theme immediately
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
              document.documentElement.setAttribute('data-theme', 'dark');
              document.body.classList.add('dark');
              document.body.classList.remove('light');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
