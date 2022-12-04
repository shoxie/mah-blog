import { allSnippets, Snippet } from ".contentlayer/generated";
import siteMetadata from "data/siteMeta";
import { useMDXComponent } from "next-contentlayer/hooks";
import { ArticleJsonLd, NextSeo } from "next-seo";
import SnippetLayout from "@/layouts/Snippet";
import components from "@/common/MDXComponents";

export default function BlogDetailPage({ snippet }: { snippet: Snippet }) {
  const Component = useMDXComponent(snippet.body.code);
  return (
    <SnippetLayout snippet={snippet}>
      <article>
      <div className="mt-5 prose prose-xl">
          <Component
            components={{
              ...components,
            }}
          />
        </div>
        </article>
    </SnippetLayout>
  );
}

export async function getStaticPaths() {
    return {
      paths: allSnippets.map((p) => ({ params: { slug: p.slug } })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }: { params: { slug: string } }) {
    const snippet = allSnippets.find((snippet) => snippet.slug === params.slug);
    return { props: { snippet } };
  }