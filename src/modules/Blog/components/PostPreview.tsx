import { Post } from ".contentlayer/generated";
import Tags from "@/common/Tags";
import moment from "moment";
import Link from "next/link";

const PostPreview = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-row items-center justify-between">
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
          <a className="text-2xl font-bold hover:underline">{post.title}</a>
        </Link>
        <time dateTime={post.date}>{moment(post.date).format("LL")}</time>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
            {post.tags?.map((tag) => (
              <Tags key={tag} content={tag} />
            ))}
          </div>
      <p>{post.summary}</p>
    </div>
  );
};

export default PostPreview;
