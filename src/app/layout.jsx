import { Inter } from "next/font/google";
import './globals.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NoteHub",
  description: "Connect. Create. Collaborate: Notehub, where ideas take shape.",
  authors: [
    {
      name: "Carlos Gastelum",
      name: "Arturo Zambrano",
      name: "Gerardo Nuncio",
    },
  ],
  keywords: [
    "notas",
    "notehub.com",
    "app de notas",
    "mejor app para tomar notas",
    "smartest way to take notes",
    "best notepad",
    "notes app",
    "notehub",
    "google keep",
    "evernote",
  ],
  publisher: "NoteHub",
  referrer: "origin-when-cross-oringin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
