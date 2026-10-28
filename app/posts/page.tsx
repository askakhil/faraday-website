import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function Posts() {
  const posts = getPosts();
  return (
    <>
      <h2>Posts</h2>
      <p className="muted">Notes on Faraday and the apps being built. New posts are just new files — no CMS, no cost.</p>
      <div className="grid">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <span className="tag">{post.date}</span>
            <h3>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="muted">{post.excerpt}</p>
          </article>
        ))}
        {posts.length === 0 && <p className="muted">No posts yet.</p>}
      </div>
    </>
  );
}
