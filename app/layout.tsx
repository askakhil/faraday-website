import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faraday — Far a day",
  description: "Free apps for your car's browser, to help you go farther every day.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link className="brand" href="/">
            <span>Faraday</span> — Far a day
          </Link>
          <div className="navlinks">
            <Link href="/">Home</Link>
            <Link href="/work">Work</Link>
            <Link href="/posts">Posts</Link>
          </div>
        </nav>
        <main className="wrap">{children}</main>
        <footer className="footer">
          Faraday — Far a day. Free, open-source browser apps for cars.
          <br />
          <a href="https://github.com/akhilsaikoppanatham">GitHub</a>
        </footer>
      </body>
    </html>
  );
}
