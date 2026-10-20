import { Link } from "react-router-dom";
import type { BlogBodyBlock, InlineContent } from "../../data/blog";

type ArticleBodyProps = {
  blocks: BlogBodyBlock[];
};

const LINK_CLASS =
  "underline decoration-ink-muted/50 underline-offset-2 transition-colors duration-200 ease-editorial hover:text-ink hover:decoration-ink";

/**
 * Renders a run of inline text, resolving any links within it. An internal
 * link (href starting with "/") uses react-router's <Link> so it's a
 * client-side navigation in the same tab; anything else is treated as an
 * external citation and opens in a new tab.
 */
function Inline({ content }: { content: InlineContent }) {
  if (typeof content === "string") return <>{content}</>;
  return (
    <>
      {content.map((segment, i) => {
        if (!segment.href) return <span key={i}>{segment.text}</span>;
        if (segment.href.startsWith("/")) {
          return (
            <Link key={i} to={segment.href} className={LINK_CLASS}>
              {segment.text}
            </Link>
          );
        }
        return (
          <a
            key={i}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASS}
          >
            {segment.text}
          </a>
        );
      })}
    </>
  );
}

export default function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="text-h3 tracking-normal pt-4 first:pt-0">
              <Inline content={block.text} />
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5 text-body text-ink-muted">
              {block.items.map((item, j) => (
                <li key={j}>
                  <Inline content={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-body text-ink-muted">
            <Inline content={block.text} />
          </p>
        );
      })}
    </div>
  );
}
