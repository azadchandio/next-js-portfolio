import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800",],
  variable: '--font-jetbrainsMono'
 });

export const metadata = {
  title: "Azad Chandio | Full Stack Developer Portfolio",
  description: "Azad Chandio - Full Stack Developer specializing in React, Django, and MySQL. Expert in web development with 2+ years of experience building scalable applications.",
  keywords: "Azad Chandio, Full Stack Developer, React Developer, Django Developer, Web Developer Pakistan, Software Engineer Karachi",
  openGraph: {
    title: "Azad Chandio | Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Django, and MySQL. Expert in web development with 2+ years of experience.",
    type: "website",
    url: "https://azadchandio.com",
    images: [
      {
        url: "/assets/work/profile.jpg", // Add your actual profile image path
        width: 1200,
        height: 630,
        alt: "Azad Chandio - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Azad Chandio | Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in React, Django, and MySQL",
    images: ["/assets/work/profile.jpg"], // Add your actual profile image path
  },
  robots: "index, follow",
  canonical: "https://azadchandio.com"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Azad Chandio",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Developer specializing in React, Django, and MySQL",
            "url": "https://azadchandio.com",
            "sameAs": [
              // Add your actual social media URLs
              "https://github.com/azadchandio",
              "https://www.linkedin.com/in/azad-ali-995582239/"
            ],
            "skills": ["React", "Django", "MySQL", "Next.js", "Tailwind CSS"]
          })}
        </script>
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        
        </body>
    </html>
  );
}
