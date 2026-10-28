import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <>
      <p>
        <Link href="/posts">← All posts</Link>
      </p>
      <h2>{post.title}</h2>
      <p className="muted">{post.date}</p>
      <article className="card post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}
