import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionLabel } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";
import { allBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Tipps & Wissen rund um Fleisch, Handwerk und Catering",
  description:
    "Notizen aus der Müller Metzgerei in Brüttisellen: Wurstherstellung, regionale Lieferanten, Partyservice-Planung. Geschrieben vom Team.",
};

export default function BlogPage() {
  const posts = allBlogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Section className="!pt-24 sm:!pt-32 lg:!pt-40 !pb-16 sm:!pb-20 bg-paper">
        <Container>
          <Reveal className="max-w-3xl">
            <SectionLabel>Blog</SectionLabel>
            <h1 className="mt-6 font-serif text-4xl sm:text-6xl lg:text-[88px] tracking-tight leading-[0.95] text-balance">
              Aus der{" "}
              <em className="italic-display text-brand-red">Metzgerei.</em>
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-ink-soft leading-relaxed text-pretty">
              Notizen vom Team. Was wir an der Theke gefragt werden, wie wir
              arbeiten, gelegentlich ein Rezept.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={Math.min(i, 2)}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group h-full flex flex-col rounded-xl border border-line bg-cream-light p-8 hover:bg-white transition-colors"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-mute">
                    {new Date(post.date).toLocaleDateString("de-CH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="mt-4 font-serif text-xl tracking-tight text-ink group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-ink-soft leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 font-medium text-sm text-brand-red">
                    Artikel lesen
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
