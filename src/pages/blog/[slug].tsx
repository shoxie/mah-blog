import { allPosts, Post } from ".contentlayer/generated";
// import siteMetadata from "data/siteMetadata";
import { useMDXComponent } from "next-contentlayer/hooks";
import moment from "moment";
import { NewsArticleJsonLd, NextSeo } from "next-seo";
import { pick } from "contentlayer/utils";
// import PostLayout from "src/layouts/PostLayout";
import components from "src/common/MDXComponents";
import PagesLayout from "@/layouts/Pages";
import Tags from "@/common/Tags";

export default function BlogDetailPage({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <PagesLayout>
      <article>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <span title={moment(post.date).format("LL")}>
          {moment(post.date).fromNow(true)} ago - {post.readingTime.text}
        </span>
        <p className="mt-3">{post.summary}</p>
        <div>
          <div className="flex flex-wrap gap-3 mt-4">
            {post.tags?.map((tag) => (
              <Tags key={tag} content={tag} />
            ))}
          </div>
        </div>
        <div className="mt-5 prose">
          <Component
            components={{
              ...components,
            }}
          />
        </div>
      </article>
    </PagesLayout>
  );
}

// function SEO({ post }: { post: Post }) {
//   const image_url = `${siteMetadata.siteUrl}/${post.image}`;
//   return (
//     <>
//       <NextSeo
//         title={post.title}
//         description={post.summary}
//         openGraph={{
//           type: "article",
//           images: post.image
//             ? [
//                 {
//                   url: image_url,
//                 },
//               ]
//             : [],
//           article: {
//             publishedTime: post.date,
//             tags: post.tags,
//             section: post.tags[0],
//           },
//         }}
//       />
//       <NewsArticleJsonLd
//         url={`${siteMetadata.siteUrl}/blog/${post.slug}`}
//         title={post.title}
//         images={post.image ? [image_url] : []}
//         section={post.tags[0]}
//         keywords={post.tags.join(",")}
//         authorName={siteMetadata.author}
//         description={post.summary}
//         body={post.body.raw.slice(0, 200)}
//         datePublished={post.date}
//         dateCreated={post.date}
//         publisherName={siteMetadata.author}
//         publisherLogo={siteMetadata.siteUrl + siteMetadata.siteLogo}
//       />
//     </>
//   );
// }

export async function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
}
