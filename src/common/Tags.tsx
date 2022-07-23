const Tags = ({ content }: { content: string }) => {
  return (
    <div className="px-2 py-1 transition-all duration-300 border bg-base hover:bg-iris">
      <span className="cursor-pointer">{content}</span>
    </div>
  );
};

export default Tags;
