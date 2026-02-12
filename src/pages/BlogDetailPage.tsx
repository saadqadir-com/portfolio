import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { blogPosts } from "@/data/blogs";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Handle headers
      if (trimmedLine.startsWith("## ")) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-2 mb-6 ml-4">
              {currentList.map((item, i) => (
                <li
                  key={i}
                  className="text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-accent">→</span>
                  {item}
                </li>
              ))}
            </ul>,
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <h2
            key={index}
            className="text-2xl font-bold tracking-wide mt-12 mb-4"
          >
            {trimmedLine.replace("## ", "")}
          </h2>,
        );
      } else if (trimmedLine.startsWith("### ")) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-2 mb-6 ml-4">
              {currentList.map((item, i) => (
                <li
                  key={i}
                  className="text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-accent">→</span>
                  {item}
                </li>
              ))}
            </ul>,
          );
          currentList = [];
          inList = false;
        }
        elements.push(
          <h3 key={index} className="text-xl font-bold tracking-wide mt-8 mb-3">
            {trimmedLine.replace("### ", "")}
          </h3>,
        );
      } else if (trimmedLine.startsWith("- ") || trimmedLine.match(/^\d+\./)) {
        inList = true;
        currentList.push(trimmedLine.replace(/^[-\d.]+\s*/, ""));
      } else if (trimmedLine.length > 0) {
        if (inList && currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="space-y-2 mb-6 ml-4">
              {currentList.map((item, i) => (
                <li
                  key={i}
                  className="text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-accent">→</span>
                  {item}
                </li>
              ))}
            </ul>,
          );
          currentList = [];
          inList = false;
        }
        // Bold text handling
        const formattedLine = trimmedLine.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-foreground font-semibold">$1</strong>',
        );
        elements.push(
          <p
            key={index}
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formattedLine }}
          />,
        );
      }
    });

    // Handle remaining list items
    if (currentList.length > 0) {
      elements.push(
        <ul key="list-final" className="space-y-2 mb-6 ml-4">
          {currentList.map((item, i) => (
            <li
              key={i}
              className="text-muted-foreground flex items-start gap-2"
            >
              <span className="text-accent">→</span>
              {item}
            </li>
          ))}
        </ul>,
      );
    }

    return elements;
  };

  return (
    <PageLayout>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={post.tags}
        ogType="article"
        article={{
          publishedTime: post.publishedAt,
          author: post.author.name,
          tags: post.tags,
        }}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            ALL ARTICLES
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-brutal text-accent">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.readTime}
            </span>
            <span className="text-xs text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 border-b border-border">
            <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center">
              <span className="text-accent font-bold">
                {post.author.name.charAt(0)}
              </span>
            </div>
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">
                {post.author.role}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <span className="text-xs tracking-brutal text-muted-foreground block mb-4">
              TAGS
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-wider px-3 py-1.5 border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors max-w-[45%]"
              >
                <ArrowLeft className="w-5 h-5 flex-shrink-0 transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-xs tracking-brutal">PREVIOUS</div>
                  <div className="font-semibold text-foreground line-clamp-1">
                    {prevPost.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right max-w-[45%]"
              >
                <div>
                  <div className="text-xs tracking-brutal">NEXT</div>
                  <div className="font-semibold text-foreground line-clamp-1">
                    {nextPost.title}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-secondary grain">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            WANT TO DISCUSS THIS<span className="text-accent">?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's talk about how these principles can apply to your project.
          </p>
          <Button variant="signal" size="lg" asChild className="group">
            <Link to="/contact">
              GET IN TOUCH
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogDetailPage;
