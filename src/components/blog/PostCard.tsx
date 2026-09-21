import { Link } from "react-router-dom";
import CategoryIcon from "./CategoryIcon";
import { formatPostDate, type BlogPost } from "../../data/blog";

type PostCardProps = {
  post: BlogPost;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col border border-line p-6 transition-colors duration-200 ease-editorial hover:border-charcoal"
    >
      <div className="flex items-center gap-4">
        <CategoryIcon
          category={post.category}
          className="transition-transform duration-200 ease-editorial group-hover:scale-105"
        />
        <p className="text-eyebrow">{post.category}</p>
      </div>

      <h3 className="text-h3 mt-5 tracking-normal">{post.title}</h3>
      <p className="text-body mt-2 text-ink-muted">{post.excerpt}</p>

      <div className="text-small mt-6 flex items-center gap-2">
        <span>{formatPostDate(post.date)}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}
