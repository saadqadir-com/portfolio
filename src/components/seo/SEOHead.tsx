import { Helmet } from "react-helmet-async";
import { seo, profile } from "@/data/profile";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  article?: {
    publishedTime?: string;
    author?: string;
    tags?: string[];
  };
}

const SEOHead = ({
  title,
  description = seo.defaultDescription,
  keywords = seo.keywords,
  canonical,
  ogType = "website",
  ogImage = seo.ogImage,
  article,
}: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${seo.siteName}` : seo.defaultTitle;
  const canonicalUrl = canonical ? `${seo.url}${canonical}` : seo.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: seo.url,
    jobTitle: profile.role,
    description: seo.defaultDescription,
    knowsAbout: profile.expertise,
    worksFor: {
      "@type": "Organization",
      name: profile.company.name,
      url: profile.company.url,
    },
    sameAs: [profile.links.linkedin],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={seo.siteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {seo.twitterHandle && (
        <meta name="twitter:creator" content={seo.twitterHandle} />
      )}
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Article-specific meta */}
      {article?.publishedTime && (
        <meta
          property="article:published_time"
          content={article.publishedTime}
        />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEOHead;
