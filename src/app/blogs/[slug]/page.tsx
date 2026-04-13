import { Metadata } from "next";
import BlogDetailPage from "@/views/BlogDetailPage";
import { blogPosts } from "@/data/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default function Page() {
  return <BlogDetailPage />;
}
