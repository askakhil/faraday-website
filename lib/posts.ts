import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  html: string;
};

const postsDir = path.join(process.cwd(), "content", "posts");

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inlineMd(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2">$1</a>');
  return out;
}

// Minimal markdown: headings, paragraphs, bullet lists, bold, links.
// Keeps the site dependency-free (no CMS, no cost).
export function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const blocks: string[] = [];
  let list: string[] = [];
  const flushList = () => {
    if (list.length) {
      blocks.push(`<ul>${list.map((li) => `<li>${inlineMd(li)}</li>`).join("")}</ul>`);
      list = [];
    }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push(`<h2>${inlineMd(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      flushList();
      blocks.push(`<h2>${inlineMd(line.slice(2))}</h2>`);
    } else if (line === "") {
      flushList();
    } else {
      flushList();
      blocks.push(`<p>${inlineMd(line)}</p>`);
    }
  }
  flushList();
  return blocks.join("\n");
}

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md")).sort();
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    const front = match ? match[1] : "";
    const body = match ? match[2] : raw;
    const get = (key: string) => {
      const m = front.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
      return m ? m[1].trim().replace(/^"(.*)"$/, "$1") : "";
    };
    return {
      slug: file.replace(/\.md$/, ""),
      title: get("title") || file,
      date: get("date") || "",
      excerpt: get("excerpt") || "",
      html: markdownToHtml(body.trim()),
    };
  }).sort((a, b) => (b.date < a.date ? -1 : 1));
}

export function getPost(slug: string): Post | null {
  return getPosts().find((p) => p.slug === slug) ?? null;
}
