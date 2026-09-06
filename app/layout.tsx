import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nidhi Maddi — Voice, Institutions & Impact",
  description: "Nidhi Maddi is a civic communicator, founder, researcher, and student exploring the intersection of business, law, ethics, and public voice.",
  metadataBase: new URL("https://nidhimaddi.com"),
  openGraph: {
    title: "Nidhi Maddi — Voice, Institutions & Impact",
    description: "Civic communicator, founder, and researcher exploring business, law, ethics, and public voice.",
    url: "https://nidhimaddi.com",
    siteName: "Nidhi Maddi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nidhi Maddi — Voice, Institutions & Impact",
    description: "Who gets heard when institutions decide?",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
