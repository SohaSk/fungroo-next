import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funngro | Hire Teens & Earn with Real Projects",
  description:
    "Funngro connects companies with skilled teens and helps teens earn through real-world projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="p-6 bg-indigo-600 text-white text-center">
          <h1 className="text-3xl font-bold">Funngro</h1>
          <nav className="mt-2 space-x-4">
            <a href="/" className="hover:underline">
              Company
            </a>
            <a href="/teen" className="hover:underline">
              Teen
            </a>
          </nav>
        </header>

        {children}

        <footer className="bg-gray-900 text-white text-center p-4 mt-10">
          © 2025 Funngro. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
