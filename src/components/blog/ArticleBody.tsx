import type { BlogBodyBlock, InlineContent } from "../../data/blog";

type ArticleBodyProps = {
  blocks: BlogBodyBlock[];
};

/** Renders a run of inline text, resolving any external links within it. */
function Inline({ content }: { content: InlineContent }) {
  if (typeof content === "string") return <>{content}</>;
  return (
    <>
      {content.map((segment, i) =>
        segment.href ? (
          <a
            key={i}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ink-muted/50 underline-offset-2 transition-colors duration-200 ease-editorial hover:text-ink hover:decoration-ink"
          >
            {segment.text}
          </a>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
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
