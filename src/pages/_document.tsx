import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-white dark:bg-black">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="antialiased text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
