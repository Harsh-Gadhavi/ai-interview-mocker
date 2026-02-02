import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";  
import ClerkStatusBanner from "../components/ClerkStatusBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Interview Mocker - Practice Your Interview Skills",
  description: "Master your interview skills with AI-powered mock interviews. Get real-time feedback and prepare for your dream job.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 min-h-screen`}
        >
          <ClerkStatusBanner />
          {children}
        </body>
      </html>
    </ClerkProvider>
    
  );
}

    