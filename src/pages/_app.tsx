import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={router.asPath}
          initial={{
            opacity: 0,
            y: 50,
          }}
          layout
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Layout>
            <DefaultSeo
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
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
