import { Post } from ".contentlayer/generated";
import { AiOutlineSearch } from "react-icons/ai";
import PostPreview from "./PostPreview";

const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <div className="flex flex-col items-start w-full pb-5 space-y-4">
        <span>
          Total of {posts.length} post(s) written. Use search bar below to
          search for title.
        </span>
        <div className="relative w-3/4">
          <input
            type="text"
            className="w-full pl-4 border border-highlightHigh rounded-md bg-base focus:outline-none py-1.5"
            placeholder="Search by title"
          />
          <div className="absolute right-3 top-2">
            <AiOutlineSearch className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-5 space-y-5">
        {posts.map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
