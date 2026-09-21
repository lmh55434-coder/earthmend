import { useState } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import CategoryFilter, { type CategoryFilterValue } from "../blog/CategoryFilter";
import FeaturedPost from "../blog/FeaturedPost";
import PostCard from "../blog/PostCard";
import { BLOG_POSTS } from "../../data/blog";

export default function BlogListing() {
  const [filter, setFilter] = useState<CategoryFilterValue>("All");

  const showFeatured = filter === "All";
  const featuredPost = BLOG_POSTS[0];
  const gridPosts = showFeatured
    ? BLOG_POSTS.slice(1)
    : BLOG_POSTS.filter((post) => post.category === filter);

  return (
    <Section tone="cream" spacing="lg">
      <Container size="narrow">
        <Reveal>
          <CategoryFilter value={filter} onChange={setFilter} />
        </Reveal>

        {showFeatured && (
          <Reveal delay={80} className="mt-10">
            <FeaturedPost post={featuredPost} />
          </Reveal>
        )}

        {gridPosts.length > 0 ? (
          <Reveal delay={140} className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </Reveal>
        ) : (
          <p className="text-body mt-10 text-ink-muted">No posts in this category yet.</p>
        )}
      </Container>
    </Section>
  );
}
