import { Navigate, useParams } from "react-router-dom";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import TextLink from "../components/ui/TextLink";
import SectionLabel from "../components/ui/SectionLabel";
import Reveal from "../components/ui/Reveal";
import CategoryIcon from "../components/blog/CategoryIcon";
import CTASection from "../components/sections/CTASection";
import { BLOG_POSTS, formatPostDate } from "../data/blog";

/**
 * Renders the real article body when a post has one. Posts without a
 * `body` yet fall back to an honest "coming soon" placeholder instead of
 * pretending they're complete.
 */
export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Section tone="ivory" spacing="lg">
        <Container size="text">
          <Reveal>
            <TextLink href="/blog">&larr; Back to Blog</TextLink>

            <div className="mt-8 flex justify-center">
              <CategoryIcon category={post.category} size="lg" />
            </div>

            <div className="mt-8 text-center">
              <div className="flex justify-center">
                <SectionLabel>{post.category}</SectionLabel>
              </div>
              <h1 className="text-display mt-4">{post.title}</h1>
              <div className="text-small mt-5 flex items-center justify-center gap-2">
                <span>{formatPostDate(post.date)}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime}</span>
              </div>
            </div>

            <p className="text-body-lg mx-auto mt-10 max-w-content-text text-ink-muted">
              {post.excerpt}
            </p>

            {post.body ? (
              <div className="mx-auto mt-10 max-w-content-text space-y-5 border-t border-line pt-10">
                {post.body.map((paragraph, i) => (
                  <p key={i} className="text-body text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="mx-auto mt-10 max-w-content-text border-t border-line pt-8">
                <p className="text-body italic text-ink-muted">
                  Full article coming soon &mdash; check back shortly.
                </p>
              </div>
            )}
          </Reveal>
        </Container>
      </Section>

      <CTASection
        heading="Curious about the pen itself?"
        supporting="See what it's made from, and what happens after it's used."
        quoteHref="/the-pen"
        sampleHref="/for-business"
        quoteLabel="Explore the Pen"
        sampleLabel="For Business"
      />
    </>
  );
}
