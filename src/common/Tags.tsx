import Link from "next/link";

const Tags = ({ content, count }: { content: string, count?: number }) => {
  return (
    <div>
      <Link href={`/tag/${content}`}>
        <a className="transition-all duration-300 border divide-x-2 cursor-pointer bg-base hover:bg-iris">
          <span className="px-2 py-1">{content}</span>
          {count && <span className="px-2">{count}</span>}
        </a>
      </Link>
    </div>
  );
};

export default Tags;
