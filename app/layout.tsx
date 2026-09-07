import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nidhi Maddi | Business, Technology & Public Impact",
  description: "Nidhi Maddi is a student, speaker, builder, and civic leader exploring business, technology, public policy, economics, and public impact.",
  metadataBase: new URL("https://nidhimaddi.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nidhi Maddi | Business, Technology & Public Impact",
    description: "Student, speaker, builder, and civic leader exploring how ideas become organizations and create meaningful impact.",
    url: "https://nidhimaddi.com",
    siteName: "Nidhi Maddi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Maddi | Business, Technology & Public Impact",
    description: "Student, speaker, builder, and civic leader exploring business, technology, and public impact.",
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nidhi Maddi",
  url: "https://nidhimaddi.com/",
  image: "https://nidhimaddi.com/nidhi-portrait.jpg",
  description: "Student, speaker, builder, and civic leader exploring business, technology, public policy, economics, and public impact.",
  knowsAbout: [
    "Business",
    "Technology",
    "Public policy",
    "Economics",
    "Civic engagement",
    "Speech and debate",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
