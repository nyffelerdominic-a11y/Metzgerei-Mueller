import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { getBlogPost, getAllBlogSlugs, allBlogPosts } from "@/lib/blog";
import { site } from "@/lib/site";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const description =
    post.excerpt.length > 160
      ? post.excerpt.substring(0, 157) + "..."
      : post.excerpt;

  return {
    title: `${post.title} — Blog | Müller Metzgerei`,
    description,
    keywords: [...post.keywords, "metzgerei blog", "fleisch tipps"],
    authors: post.author ? [{ name: post.author }] : [],
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : [],
    },
  };
}

export function generateStaticParams(): { slug: string }[] {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const postDate = new Date(post.date);
  const relatedPosts = allBlogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}/og-image.jpg`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author || site.fullName,
    },
    publisher: {
      "@type": "Organization",
      name: site.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo.png`,
      },
    },
  };

  return (
    <>
      <Section className="pt-32 sm:pt-40 pb-16 bg-cream-light">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-ink-mute hover:text-ink transition-colors mb-6"
              >
                <ArrowLeft className="size-4" />
                Zurück zum Blog
              </Link>
            </Reveal>

            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute mb-4">
                {postDate.toLocaleDateString("de-CH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {post.author && ` • ${post.author}`}
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.05] text-balance">
                {post.title}
              </h1>
              <p className="mt-6 text-lg text-ink-soft max-w-2xl">
                {post.excerpt}
              </p>
            </Reveal>

            <Reveal delay={1} className="mt-8 flex flex-wrap gap-2">
              {post.keywords.slice(0, 4).map((keyword) => (
                <span
                  key={keyword}
                  className="inline-block px-3 py-1 text-sm bg-cream rounded border border-line/50"
                >
                  #{keyword}
                </span>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="max-w-3xl prose prose-sm">
            <article className="prose prose-base max-w-none">
              <div className="prose-headings:font-serif prose-headings:text-ink prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-ink-soft prose-p:leading-relaxed prose-strong:text-ink prose-strong:font-semibold prose-a:text-brand-red hover:prose-a:text-brand-red-dark prose-code:bg-cream-light prose-code:text-ink prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-li:text-ink-soft prose-li:marker:text-ink-mute">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.startsWith("# ")) {
                    return (
                      <h1 key={index} className="mt-8 mb-4">
                        {paragraph.slice(2)}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="mt-6 mb-3">
                        {paragraph.slice(3)}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="mt-5 mb-3">
                        {paragraph.slice(4)}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={index} className="list-disc list-inside">
                        <li>{paragraph.slice(2)}</li>
                      </ul>
                    );
                  }
                  if (paragraph.startsWith("---")) {
                    return <hr key={index} className="my-6" />;
                  }
                  if (paragraph.trim() === "") {
                    return null;
                  }
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>
          </div>

          <div className="mt-16 max-w-3xl pt-8 border-t border-line">
            <Reveal>
              <div className="bg-cream-light rounded-xl p-8">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    {post.author && (
                      <>
                        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute mb-2">
                          Autor
                        </p>
                        <p className="font-serif text-lg text-ink">
                          {post.author}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {relatedPosts.length > 0 && (
        <Section className="bg-cream-light">
          <Container>
            <Reveal className="mb-12">
              <h2 className="font-serif text-3xl tracking-tight">
                Ähnliche Artikel
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, i) => (
                <Reveal key={relatedPost.slug} delay={i}>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="group h-full flex flex-col rounded-xl border border-line bg-white p-6 hover:bg-cream transition-colors"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute">
                      {new Date(relatedPost.date).toLocaleDateString("de-CH", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="mt-3 font-serif text-lg tracking-tight text-ink group-hover:text-brand-red transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-ink-soft leading-relaxed flex-1">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="bg-cream pt-24 sm:pt-32">
        <Container size="narrow">
          <Reveal className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-4">
              Weitere Beiträge
            </h2>
            <p className="text-ink-soft mb-8">
              Notizen aus der Wursterei, dem Partyservice und der Theke.
            </p>
            <ButtonLink href="/blog" variant="primary">
              Zum Blog
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
    </>
  );
}
