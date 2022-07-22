import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

function MyApp({
  Component,
  pageProps,
  router,
}: AppProps & { Component: { Layout?: any } }) {
  function DefaultLayout({ children }: { children: React.ReactNode }) {
    return children;
  }

  const Layout = Component.Layout || DefaultLayout;
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="moon"
      themes={["moon", "dawn"]}
    >
      <Layout>
        <DefaultSeo
          title="WhiteRose Space"
          defaultTitle="WhiteRose Space"
          titleTemplate={`%s - WhiteRose Space`}
          description="A frontend developer who likes to build beautiful and functional things."
          robotsProps={{
            nosnippet: true,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: "none",
            maxVideoPreview: -1,
          }}
        />
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
