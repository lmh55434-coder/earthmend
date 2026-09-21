import { Link } from "react-router-dom";
import CategoryIcon from "./CategoryIcon";
import SectionLabel from "../ui/SectionLabel";
import { formatPostDate, type BlogPost } from "../../data/blog";

type FeaturedPostProps = {
  post: BlogPost;
};

/**
 * The magazine "cover story" treatment for the newest post — distinct from
 * the grid below rather than just a bigger version of the same card.
 */
export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group grid grid-cols-1 border border-line-strong lg:grid-cols-12"
    >
      <div className="flex items-center justify-center bg-charcoal p-12 lg:col-span-5 lg:p-16">
        <CategoryIcon
          category={post.category}
          size="lg"
          className="transition-transform duration-200 ease-editorial group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-14">
        <SectionLabel>Latest</SectionLabel>
        <h2 className="text-h1 mt-4">{post.title}</h2>
        <p className="text-body-lg mt-4 max-w-xl text-ink-muted">{post.excerpt}</p>
        <div className="text-small mt-6 flex items-center gap-2">
          <span>{post.category}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{formatPostDate(post.date)}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </Link>
  );
}
