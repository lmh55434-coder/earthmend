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
 * A lean, honest article shell rather than 12 fabricated full posts — the
 * excerpt stands as the lead paragraph, and the page says plainly that the
 * full article is still coming rather than pretending it's complete.
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

            <div className="mx-auto mt-10 max-w-content-text border-t border-line pt-8">
              <p className="text-body italic text-ink-muted">
                Full article coming soon &mdash; check back shortly.
              </p>
            </div>
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
