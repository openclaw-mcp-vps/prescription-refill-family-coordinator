import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FamilyRx – Coordinate Prescription Refills for Your Entire Family",
  description: "Track all family member prescriptions, get refill reminders, and optimize pharmacy trips. Save time and never miss a refill again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dd694ea5-e6a3-42b0-82a2-609a2aaf962e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
