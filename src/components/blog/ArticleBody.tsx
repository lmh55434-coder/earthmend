import type { BlogBodyBlock } from "../../data/blog";

type ArticleBodyProps = {
  blocks: BlogBodyBlock[];
};

export default function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="text-h3 tracking-normal pt-4 first:pt-0">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5 text-body text-ink-muted">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-body text-ink-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
