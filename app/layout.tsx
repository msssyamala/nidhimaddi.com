import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nidhi Maddi — Speaker, Founder & Advocate",
  description: "Nidhi Maddi is the founder of VoiceToLead, helping young people build confidence, communication, and leadership through the power of voice.",
  metadataBase: new URL("https://nidhimaddi.com"),
  openGraph: {
    title: "Nidhi Maddi — Find your voice. Use it with purpose.",
    description: "Speaker, founder of VoiceToLead, and advocate for young voices.",
    url: "https://nidhimaddi.com",
    siteName: "Nidhi Maddi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Maddi — Speaker, Founder & Advocate",
    description: "I found my voice. Now I help others find theirs.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
