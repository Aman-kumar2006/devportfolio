import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0b09",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amankumar2006.vercel.app/"),
  title: {
    default: "Aman Kumar — Full-Stack Developer, Ranchi",
    template: "%s | Aman Kumar",
  },
  description:
    "Aman Kumar is a third-year Computer Science student building full-stack projects, one commit at a time.",
  keywords: [
    "Aman Kumar",
    "Full-stack developer",
    "Ranchi developer",
    "React",
    "Python",
    "portfolio",
  ],
  authors: [{ name: "Aman Kumar" }],
  creator: "Aman Kumar",
  publisher: "Aman Kumar",
  category: "technology",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aman Kumar — Full-Stack Developer",
    description: "A build log from Ranchi, Jharkhand.",
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Aman Kumar",
    images: [
      {
        url: "/preview.webp",
        width: 1200,
        height: 630,
        alt: "Aman Kumar — Full-Stack Developer portfolio",
      },
      {
        url: "/preview.avif",
        width: 1200,
        height: 630,
        alt: "Aman Kumar — Full-Stack Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar — Full-Stack Developer",
    description: "A build log from Ranchi, Jharkhand.",
    images: ["/preview.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://amankumar2006.vercel.app/#person",
                  name: "Aman Kumar",
                  url: "https://amankumar2006.vercel.app/",
                  image: "https://amankumar2006.vercel.app/assets/img/portrait.avif",
                  jobTitle: "Aspiring Full-Stack Developer",
                  description:
                    "Third-year B.Tech Computer Science student building full-stack projects.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Ranchi",
                    addressRegion: "Jharkhand",
                    addressCountry: "IN",
                  },
                  sameAs: [
                    "https://github.com/Aman-kumar2006",
                    "https://www.linkedin.com/in/aman-kumar-8b988b28b",
                    "https://youtube.com/@iqamanopgaming",
                  ],
                  knowsAbout: ["HTML", "CSS", "JavaScript", "React", "Python", "SQL", "Node.js"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://amankumar2006.vercel.app/#website",
                  url: "https://amankumar2006.vercel.app/",
                  name: "Aman Kumar",
                  description: "A build log from Ranchi, Jharkhand.",
                  publisher: { "@id": "https://amankumar2006.vercel.app/#person" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
