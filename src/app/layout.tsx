// src/app/layout.tsx
import Header from "@/app/components/Header";
import "./globals.css";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Elegance Clinic",
  description: "Holistic beauty and wellness solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-secondary text-primary overflow-visible">
      <Header />
        {/* Main page content */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
