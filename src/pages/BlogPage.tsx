import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/seo/SEOHead";
import { blogPosts, blogCategories } from "@/data/blogs";
import { cn } from "@/lib/utils";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <PageLayout>
      <SEOHead
        title="Blog"
        description="Insights on software architecture, system design, scaling strategies, and engineering best practices from Saad Qadir."
        canonical="/blog"
        keywords={[
          "Software Architecture Blog",
          "Engineering Insights",
          "System Design",
          "Tech Blog",
        ]}
      />

      {/* Hero */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border max-w-24" />
            <span className="text-xs tracking-ultrawide text-muted-foreground">
              BLOG
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            INSIGHTS<span className="text-accent">.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Thoughts on architecture, scaling, and building systems that last.
            Practical wisdom from real-world engineering.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-6 md:px-12 lg:px-24 bg-secondary grain">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs tracking-brutal text-muted-foreground mb-6 block">
              FEATURED ARTICLE
            </span>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block border border-border bg-background p-8 md:p-12 hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs tracking-brutal text-accent">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {featuredPost.readTime}
                </span>
                <span className="text-xs text-muted-foreground">
                  {new Date(featuredPost.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    },
                  )}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-2 text-accent">
                READ ARTICLE
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-6 md:px-12 lg:px-24 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-xs tracking-brutal px-4 py-2 border transition-colors",
                  activeCategory === category
                    ? "border-accent bg-accent text-background"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground",
                )}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 grain">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block border border-border bg-background p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs tracking-brutal text-accent">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-wide mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPage;
